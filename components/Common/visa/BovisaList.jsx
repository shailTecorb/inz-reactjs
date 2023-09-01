import InputFiled from "../../Auth/Common/input_filed";
import { Fragment, useEffect, useState, useRef } from "react";
import styles from "../../../styles/query.module.scss";
import { useRouter } from "next/router";
import AddVisaType from "../Modals/visaType";
import {
  business_allvisalist_service,
  business_add_visa_type,
} from "../../helpers/business_owner_service";
import { lia_agent_add_visa_type } from "../../helpers/lia_services";
import AdminApprovedBW from "../Modals/admin_approved_BW";
import { uniq as _uniq } from "lodash";

const BOVisaList = () => {
  const route = useRouter();
  const [isSearching, setSearching] = useState("");
  const [error, setError] = useState("");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [visaList, setVisaList] = useState([]);
  const [noData, setNodata] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [isLiaAgent, setIsLiaAgent] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [checkedVisa, setCheckedVisa] = useState({});
  const [reRender, setReRender] = useState(false);

  const isCheckRender = useRef(true);

  useEffect(() => {
    if (isCheckRender?.current) {
      getAllVisaList();
      if (localStorage.role == "liaAgent") {
        setIsLiaAgent(true);
      } else {
        setIsLiaAgent(false);
        // visa_type_perticular_lia()
      }
      isCheckRender.current = false;
    }
  }, [reRender]);

  const getAllVisaList = async () => {
    setIsLoading(true);
    if (localStorage.role == "businessOwner") {
      const response = await business_allvisalist_service();
      if (response.code == 200) {
        setIsLoading(false);
        setTotalCount(response.total);
        let isVisaList = response?.result?.map((item, i) => {
          return { ...item, isChecked: item.select };
        });
        // let isVisaList = response?.result?.visaTypes?.map((item, i) => {
        //     return ({ ...item, isChecked: _ID?.includes(item._id) ? true : false })
        // }
        // )
        // setVisaList((prev) => {
        //     return ([...prev, ...response?.result])
        // })
        setVisaList(isVisaList);
        isVisaList.filter((data) => data.select).length == isVisaList.length
          ? setIsAllChecked(true)
          : setIsAllChecked(false);
      } else if (response.code == 400) {
        setNodata(response.message);
        setIsLoading(false);
      } else {
      }
    }
  };

  const addVisaType = async () => {
    let checkVisaArr = Object.entries(checkedVisa);

    let allCountryIds = _uniq(checkVisaArr.map((val) => val[1]));

    let checkingVisa = [];
    const countDogsCheckedInForUser = (forCountryId) => {
      let count = 0;
      let dogIdArr = [];
      for (let [_id, coutryId] of checkVisaArr) {
        if (forCountryId == coutryId) dogIdArr.push(_id);
      }
      return dogIdArr;
    };
    for (const countryId of allCountryIds) {
      const visaTypeId = countDogsCheckedInForUser(countryId);
      checkingVisa.push({ countryId, visaTypeId });
    }
    let isNewData = visaList
      .filter((data) => data.isChecked)
      .map((itm) => {
        return {
          countryId: itm.countryId._id,
          visaTypeId: itm._id,
          select: itm.isChecked,
        };
      })
      .filter((data) => {
        if (data.visaTypeId.length > 0) {
          return data;
        }
      });

    let CountId =
      visaList.length > 0 &&
      visaList?.reduce(function (acc, current) {
        if (current.isChecked) {
          acc.push(current);
        }
        return acc;
      }, []);

    if (CountId.length > 0) {
      setIsResponse(true);
      let countryId = CountId.map((li) => li.countryId._id);
      let visaID = CountId.map((li) => li._id);
      if (localStorage.role == "businessOwner") {
        const response = await business_add_visa_type(isNewData);
        if (response.code == 200 && localStorage.approved == "false") {
          localStorage.setItem("visaType", JSON.stringify(visaID));
          setIsResponse(false);
          setOpen(true);
        } else if (response.code == 200) {
          setIsResponse(false);
          route.push("/busines/owner/dashboard");
        } else {
          setError(response.message);
          setIsResponse(false);
        }
      } else if (localStorage.role == "liaAgent") {
        const response = await lia_agent_add_visa_type(
          countryId,
          "",
          "",
          visaID
        );
        if (response.code == 200) {
          localStorage.setItem("visaType", JSON.stringify(visaID));
          setIsResponse(false);
        } else {
          setIsResponse(false);
          setError(response.message);
        }
      }
    } else {
      setError("Please select visa type");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearching(e.target.value);
  };
  const OpenModal = (e) => {
    setIsOpen(true);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  const CheckedBox = (id, status) => {
    let { _id, countryId } = status;
    if (_id in checkedVisa) {
      delete checkedVisa[_id];
    } else {
      checkedVisa[_id] = countryId._id;
    }

    let tempParent = visaList;
    for (let j = 0; j < visaList.length; j++) {
      if (visaList[j]._id === id) {
        visaList[j].isChecked = !visaList[j].isChecked;
        visaList[j].select = !visaList[j].isChecked;
      } else {
        visaList[j].isChecked = visaList[j].isChecked;
        visaList[j].select = !visaList[j].isChecked;

        setError("");
      }
    }

    setVisaList([...tempParent]);
    tempParent.filter((data) => data.isChecked).length == visaList.length
      ? setIsAllChecked(true)
      : setIsAllChecked(false);
    setCheckedVisa(checkedVisa);
    setReRender(!reRender);
  };
  let VisaList = visaList
    ?.filter((flterData) => {
      if (isSearching == "") {
        return flterData;
      } else if (
        flterData?.visaType?.toLowerCase().includes(isSearching.toLowerCase())
      ) {
        return flterData;
      }
    })
    .map((item, index) => {
      return (
        <div key={item._id} className={`form-group ${styles.fromGroup}`}>
          <div className={styles.selectinputBox}>
            <input
              id={item._id}
              name="checkbox"
              type="checkbox"
              checked={item.isChecked === true ? item._id : ""}
              onChange={(e) => {
                CheckedBox(item._id, item);
              }}
            />

            <label
              for={item._id}
              className={styles.checkboxLabel}
            >{`${item.visaType} ( ${item.countryId?.countryName})`}</label>
          </div>
        </div>
      );
    });

  const selectAllCheckeBox = (e, i) => {
    const { name, checked } = e.target;
    if (name == "allselect") {
      setVisaList((prev) => {
        return [
          ...prev.map((user) => {
            return { ...user, isChecked: isAllChecked ? false : true };
          }),
        ];
      });
      setIsAllChecked(!isAllChecked);
    }

    visaList.map((data, index) => {
      let { _id, countryId } = data;

      if (_id in checkedVisa && isAllChecked) {
        delete checkedVisa[_id];
      } else {
        checkedVisa[_id] = countryId?._id;
      }
      setCheckedVisa(checkedVisa);
    });
  };
  return (
    <Fragment>
      <div className={styles.contentWrapper}>
        <AdminApprovedBW open={open} />
        <div className="container-fuild">
          <div className="row">
            <div className="col-md-9 m-auto">
              <h3 className="">VISA Types I’m Working for </h3>
              <div className={styles.visaStatus}>
                <div className="row">
                  <span style={{ color: "red" }}>{error}</span>
                  {isLiaAgent ? (
                    ""
                  ) : (
                    <div
                      className={`col-md-7 pr-0 mt-0 mb-3 mx-auto ${styles.buttonGroup}`}
                    >
                      <AddVisaType
                        styles={styles}
                        closeModal={CloseModal}
                        open={isOpen}
                        openModal={OpenModal}
                        setIsResponse={setIsResponse}
                        all_visa_list={getAllVisaList}
                        visaList={visaList}
                      />
                    </div>
                  )}
                </div>
                <div className="row mt-3">
                  <div className="col-md-7 m-auto">
                    <div className={styles.searchSection}>
                      <form>
                        <div className="input-group">
                          <InputFiled
                            type_name=""
                            placeholder_name="Search by Visa Type"
                            inputId=""
                            input_name=""
                            value={isSearching}
                            onChange={handleChange}
                            class_name="form-control"
                          />
                        </div>
                        <span className="mt-4 d-block">
                          <span style={{ color: "red" }}> </span>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className={`col-md-7 m-auto`}>
                    <div className={styles.visaStatusDiv}>
                      {VisaList.length > 0 && isSearching.length == 0 ? (
                        <div className={`form-group ${styles.fromGroup}`}>
                          <div className={styles.selectinputBox}>
                            <input
                              id="checkbox"
                              checked={isAllChecked}
                              name="allselect"
                              type="checkbox"
                              onChange={(e) => selectAllCheckeBox(e, null)}
                            />
                            <label
                              for="checkbox"
                              className={styles.checkboxLabel}
                            >
                              Select All Visa Type
                            </label>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {isLoading ? (
                        <p>Loading...</p>
                      ) : VisaList.length > 0 ? (
                        VisaList
                      ) : (
                        <p className={styles.Nodata}> No data found</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12 mt-5">
                    {VisaList.length > 0 ? (
                      <div className="row">
                        <div
                          className={`col-md-7 m-auto text-right ${styles.buttonGroup}`}
                        >
                          {isResponse ? (
                            <button disabled> Loading... </button>
                          ) : (
                            <button onClick={addVisaType}> Update </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BOVisaList;
