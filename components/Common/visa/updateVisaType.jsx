import InputFiled from "../../Auth/Common/input_filed";
import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import { country_update_for_lia, update_lia_agent_list_of_visa_type ,updated_lia_add_visa_request} from "../../helpers/lia_services";
const UpdateVisaList = ({ type }) => {
    const route = useRouter()
    const [isSearching, setSearching] = useState("")
    const [isVisaSearch, setIsVisaSearch] = useState("")// for filter visa type
    const [countryList, setCountryList] = useState([])
    const [allVisaList, setAllVisaList] = useState([])
    const [isCountryList, setIsCountryList] = useState(false) // this is for showing country or visa type 
    const [count, setCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [visaCount, setVisaCount] = useState(0);
    const [totalVisaCount, setTotalVisaCount] = useState(0);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [isResponse, setIsResponse] = useState(false)
    const [isSelectAll, setIsSelectAll] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("")


    useEffect(() => {
        get_all_country_list()
    }, [])
    //************************************************ ON LIST CLICK *************************************************************88 */
    const handleList = async (id) => {
        setIsCountryList(true)
        setSelectedCountry(id)
        const response = await update_lia_agent_list_of_visa_type(id)
        if (response.code == 200) {
            setAllVisaList(response.result)
            setTotalVisaCount(response.result.length)
            let checkselectAll = response.result?.filter((item) => item.select);
            if (checkselectAll.length == response.result?.length) {
              setIsChecked(true);
            } else if (checkselectAll.length == response.result?.length) {
              setIsChecked(false);
            }
            setVisaCount(checkselectAll.length);
          } else {
          }
        }
    //******************************************** get all country list ************************************************************************ */
    const get_all_country_list = async () => {
        const response = await country_update_for_lia()
        if (response.code == 200) {
            let newArr = response.result?.filter((item) => item.select)
            setCountryList(newArr)
            setTotalCount(response.totalCountry)
            setCount(newArr.length)
        }
    }
    //********************************************************* Visa Type *********************************************************** */
    let FilterVisaType = allVisaList?.filter((flterData) => {
      console.log(flterData,"flterData")
        if (isVisaSearch == "") {
            return flterData;
        } else if (
            flterData?.visaTypeId?.visaType?.toLowerCase().includes(isVisaSearch.toLowerCase())
        ){
            return flterData;
        }
    });
    let VisaList;
    if (FilterVisaType.length > 0) {
        VisaList = FilterVisaType?.map((item, index) => {
            return (
                <div className={`form-group ${styles.fromGroup}`}>
                    <div className={styles.selectinputBox}>
                        <input
                            id={index}
                            name="checkbox"
                            type="checkbox"
                            checked={item.selected}
                            value={item.visaTypeId?._id}
                            onChange={(e) => {
                                onSelectedVisaType(item);
                            }}
                        />
                        <label
                            for={index}
                            className={styles.checkboxLabel}
                        >{item?.visaTypeId?.visaType}</label>
                    </div>
                </div>
            );
        });
    }else{
        VisaList = [];
    }
      //*********************************************SELECT ALL FUNCTION ********************************************************** */
  const onSelectAll = (e) => {
    setIsSelectAll(!isSelectAll);
    let allData = allVisaList.map((item) => {
      return { ...item, selected: isSelectAll };
    });
    setAllVisaList(allData);
    setIsChecked(isSelectAll);
    if (isSelectAll) {
      setVisaCount(allVisaList.length);
    } else {
      setVisaCount(0);
    }
  };
   // *********************** ON CHANGE FUNCTION FOR SELECT VISA TYPE****************************************************************
   const onSelectedVisaType = async (item) => {
    let newArr = allVisaList?.reduce((acc, curr) => {
      console.log(curr,"curr")
      if (curr.visaTypeId?._id == item?.visaTypeId?._id) {
        curr.selected = !curr.selected;
      }
      acc.push(curr);

      return acc;
    }, []);
    setAllVisaList(newArr);
    let selectCheck = newArr.reduce((acc, curr) => {
      if (curr.selected) {
        acc.push(curr);
      }
      return acc;
    }, []);
    setVisaCount(selectCheck.length);
    if (selectCheck.length !== allVisaList.length) {
      setIsChecked(false);
    } else if (selectCheck.length == allVisaList.length) {
      setIsChecked(true);
    }
    // setErrorMsg("");
  };
     // ************************************ON SUBMIT FUNCTION *******************************************************
  const addSelectedVisaType = async () => {


    let tempData = [];
     allVisaList?.map((li) => {
      if (li.selected) {
        tempData.push(li.visaTypeId)
      }
    });
    let keyData = {
      visaTypes: [{"countryId":selectedCountry,"visaTypeId":tempData}],
    };
    // // *************************** HERE PREVENT FROM EMPTY VISATYPE WHEN SUBMIT*********************************************
    if (tempData.length !== 0) {
      setIsLoading(true);
      const response = await updated_lia_add_visa_request(keyData);
      setIsLoading(false)
      if (response.code == 200) {
      (false);
      setIsCountryList(false) // this is for open country list again 
      } else {
        setErrorMsg(response?.message);
      }
    } else {
      setErrorMsg("Please select at least one VISA type");
    }
  };
    //************************************************ country list ************************************************************************* */
    let FilterValue = countryList?.filter((flterData) => {
        if (isSearching == "") {
            return flterData
        } else if (flterData.countryName.toLowerCase().includes(isSearching.toLowerCase())) {
            return flterData
        }
    })
    let CountryList
    if (FilterValue?.length > 0) {
        CountryList = FilterValue?.map((item, index) => {
            return (
                <div className={`form-group ${styles.fromGroup}`}>
                    <div className={styles.selectinputBox}>
                        <ul style={{ listStyle: "none" }}>
                            <li style={{ cursor: "pointer" }} onClick={() => {handleList(item._id)}}>{item?.countryName + " " + ">"} </li>
                        </ul>
                    </div>
                </div>
            )
        })
    }
    else {
        CountryList = []
    }
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className=""> Countries </h3>
                            <div className={styles.visaStatus}>

                                {CountryList.length > 0 ?
                                    <div className="row">
                                        <div className={`col-md-8 m-auto  ${styles.clientStatus}`}>
                                            <ul>
                                                <li>
                                                    {!isCountryList ? <span> Total Selected Countries {count}</span> : <span>Total Selected Visa Type {visaCount} </span>} 
                                                </li>
                                                <li>
                                                {!isCountryList ? <span> Not Selected Countries {totalCount - count} </span> :<span> Total Not Selected Visa Type {totalVisaCount - visaCount} </span>}   
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                : ""}
                                {/* <span style={{ color: "red", marginLeft: "178px" }}> {error}</span> */}
                      {!isCountryList ? <>
                                <div className="row mt-3">
                                    <div className="col-md-8 m-auto">
                                        <div className={styles.searchSection}>
                                            <div className="input-group">
                                                <InputFiled type_name="" placeholder_name="Search by name, id, or internal" inputId=""
                                                    input_name="" class_name="form-control" value={isSearching} onChange={(e) => { setSearching(e.target.value) }} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                 
                                <div className="row">
                                    <div className={`col-md-8 m-auto`}>
                                        <div className={styles.visaStatusDiv}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                {(CountryList.length > 0 ? CountryList : <p className={styles.Nodata}> No data found</p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                         </>   : <>
                            <div className="row">
                            <div className="col-md-7">
                              <div className={styles.searchSection}>
                                <div className="input-group">
                                  <InputFiled
                                    type_name=""
                                    placeholder_name="Search by name, id, or internal"
                                    inputId=""
                                    input_name=""
                                    class_name="form-control"
                                    value={isVisaSearch}
                                    onChange={(e)=>{setIsVisaSearch(e.target.value)}}
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
                          {/* <h6 style={{ color: "red" }}>{errorMsg} </h6> */}
                          <div className="row">
                            <div className={`col-12`}>
                              {VisaList.length > 0 ? (
                                <div className={styles.visaStatusDiv}>
                                  {isVisaSearch.length == 0 ? (
                                    <div className={`form-group ${styles.fromGroup}`}>
                                      <div className={styles.selectinputBox}>
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
                              ) : allVisaList?.length !== 0 ? (
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
                                  </>  }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default UpdateVisaList;