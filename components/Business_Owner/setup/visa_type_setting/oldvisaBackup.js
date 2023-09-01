import InputFiled from "../../../Auth/Common/input_filed";
import React, { useEffect, useState } from "react";
import {
  businesOwnerVisaList,
  businesOwnerUpdateVisaType,
  businesOwnerCountryList
} from "../../../helpers/business_owner_service";
import AddVisaType from "../../../Common/Modals/visaType";
import SuccessModal from "../../../Common/Modals/success_modal";
import ErrorModal from "../../../Common/Modals/ErrorModal";
import { useRouter } from "next/router";
const VisaTypeSetting = ({ styles, visa_type_tab, activeTab, active }) => {
  const [allCountryList, setAllCountryList] = useState([])
  const [allVisaType, setAllVisaType] = useState([]);
  const [isSearching, setSearching] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(0);
  const [totalVisaCount, setTotalVisaCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  let router = useRouter();
  useEffect(() =>{
    visaListing();
  },[]);
  const closeModal = () => {
    setIsOpen(false);
    router.push("/busines/owner/dashboard");
  };
  const closeErrorModal = () => {
    setIsErrorOpen(false);
  };
  //*************************************************ALL COUNTRY **************************************************************************** */
  
 
  // ************************************************ FILTER COUNTRY IF SEARCH **************************************************************
  let FilterValue = allVisaType?.filter((flterData) => {
    if (isSearching == "") {
      return flterData;
    } else if (
      flterData.visaType?.toLowerCase().includes(isSearching.toLowerCase())
    ) {
      return flterData;
    }
  });
  let VisaList;
  if (FilterValue.length > 0) {
    VisaList = FilterValue?.map((item, index) => {
      return (
        <div className={`form-group ${styles.fromGroup}`}>
          <div className={styles.CheckBox}>
            <input
              id={index}
              name="checkbox"
              type="checkbox"
              checked={item.select}
              value={item._id}
              onChange={(e) => {
                onSelectedVisaType(item);
              }}
            />
            <label
              for={index}
              className={styles.checkboxLabel}
            >{`${item?.visaType}  (${item?.countryId?.countryName})`}</label>
          </div>
        </div>
      );
    });
  } else {
    VisaList = [];
  }
  // ******************************** GET ALL VISA LIST ***********************************************************
 
  const visaListing = async () => {
    const resList = await businesOwnerVisaList();
    if (resList.code == 200 && resList.result.length !== 0) {
      setAllVisaType(resList.result);
      setTotalVisaCount(resList.result?.length);
      let checkselectAll = resList.result?.filter((item) => item.select);
      if (checkselectAll.length == resList.result?.length) {
        setIsChecked(true);
      } else if (checkselectAll.length == resList.result?.length) {
        setIsChecked(false);
      }
      setCount(checkselectAll.length);
    } else {
    }
  };
  // *********************** ON CHANGE FUNCTION FOR SELECT VISA TYPE****************************************************************
  const onSelectedVisaType = async (item) => {
    let newArr = allVisaType?.reduce((acc, curr) => {
      if (curr._id == item._id) {
        curr.select = !curr.select;
      }
      acc.push(curr);
      return acc;
    }, []);
    setAllVisaType(newArr);
    let selectCheck = newArr.reduce((acc, curr) =>{
      if (curr.select){
        acc.push(curr);
      }
      return acc;
    }, []);
    setCount(selectCheck.length);
    if (selectCheck.length !== allVisaType.length) {
      setIsChecked(false);
    } else if (selectCheck.length == allVisaType.length) {
      setIsChecked(true);
    }
    setErrorMsg("");
  };
  // ************************************ON SUBMIT FUNCTION *******************************************************
  const addSelectedVisaType = async () => {
    let tempData = [];
    let selectedVisaType = allVisaType?.map((li) => {
      if (li.select) {
        tempData.push({
          countryId: li.countryId?._id,
          visaTypeId: li._id,
          select: li.select,
        });
      }
    });
    let keyData = {
      visaTypes: tempData,
    };
    // *************************** HERE PREVENT FROM EMPTY VISATYPE WHEN SUBMIT*********************************************
    if (tempData.length !== 0) {
      setIsLoading(true);
      const response = await businesOwnerUpdateVisaType(keyData);
      if (response.code == 200) {
        setIsOpen(true);
      setIsLoading(false);

      } else {
        setIsErrorOpen(true);
        setErrorMsg(response?.message);
      setIsLoading(false);

      }
    } else {
      setErrorMsg("Please select at least one VISA type");
    }
  };
  //*********************************************SELECT ALL FUNCTION ********************************************************** */
  const onSelectAll = (e) => {
    setIsSelectAll(!isSelectAll);
    let allData = allVisaType.map((item) => {
      return { ...item, select: isSelectAll };
    });
    setAllVisaType(allData);
    setIsChecked(isSelectAll);
    if (isSelectAll) {
      setCount(allVisaType.length);
    } else {
      setCount(0);
    }
  };

  // ***************************************************** FILTER FUNCTION**************************************************************

  const handleSearch = (e) => {
    setSearching(e.target.value);
  };
  return (
    <div
      className={`tab-pane fade shadow rounded ${
        active ? "show active " : ""
      } `}
      id={activeTab}
      role="tabpanel"
      aria-labelledby="v-pills-about-tab"
    >
      <div className={styles.rightPageDetail}>
        <div className={styles.rightBox}>
          <div className="col-md-12 m-auto">
            {/* <h3 className=""> Select Countries  </h3> */}
            <div className={styles.visaStatus}>
              <div className="row">
                <div className={`col-8 ${styles.clientStatus}`}>
                  <ul>
                    <li>
                      Total Selected VISA Type <span>{count}</span>
                    </li>
                    <li>
                      Not Selected VISA Type{" "}
                      <span>{totalVisaCount - count}</span>
                    </li>
                  </ul>
                </div>
                <div className={`col-4 ${styles.buttonGroup}`}>
                  {/* <button onClick={()=>{setIsModalOpen(true)}} className={`${styles.SandBtn} mt-0 mb-0`}>Add Visa Type</button> */}

                  {/* ************** add Visa type Modal*************************** */}
                  <AddVisaType
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    style={styles}
                  />
                </div>

                {/* ************************************************************** */}
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className={styles.searchSection}>
                    <div className="input-group">
                      <InputFiled
                        type_name=""
                        placeholder_name="Search by name, id, or internal"
                        inputId="Email"
                        input_name=""
                        class_name="form-control"
                        value={isSearching}
                        onChange={handleSearch}
                      />
                      <div className="input-group-append">
                        <a className="btn btn-secondary">
                          <button disabled={true}>
                            <i className="fa fa-search"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h6 style={{ color: "red" }}>{errorMsg} </h6>
              <div className="row">
                <div className={`col-12`}>
                  {VisaList.length > 0 ? (
                    <div className={styles.visaStatusDiv}>
                      {isSearching.length == 0 ? (
                        <div className={`form-group ${styles.fromGroup}`}>
                          <div className={styles.CheckBox}>
                            <input
                              id="allselect"
                              name="allselect"
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => {
                                onSelectAll(e);
                              }}
                            />
                            <label
                              for="allselect"
                              className={styles.checkboxLabel}
                            >
                              Select All
                            </label>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {VisaList}
                    </div>
                  ) : allVisaType.length !== 0 ? (
                    <h6 style={{ color: "red" }}>No Data Found.. </h6>
                  ) : (
                    ""
                  )}
                </div>
                <div className={`col-md-12 text-right ${styles.buttonGroup}`}>
                  <button
                    disabled={isLoading}
                    onClick={addSelectedVisaType}
                    className={styles.SandBtn}
                  >
                    {isLoading && (
                          <i
                            className="fa fa-spinner fa-spin"
                            style={{ marginRight: "5px" }}
                          />
                        )}
                        {isLoading && <span>Wait</span>}
                        {!isLoading && <span>Update</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <SuccessModal
          open={isOpen}
          closeModal={closeModal}
          message="Visa type settings updated Successfully"
        />
      )}
      {isErrorOpen && (
        <ErrorModal
          open={isErrorOpen}
          closeModal={closeErrorModal}
          message={errorMsg}
        />
      )}
    </div>
  );
};
export default VisaTypeSetting;
