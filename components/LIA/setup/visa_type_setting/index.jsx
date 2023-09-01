import InputFiled from "../../../Auth/Common/input_filed";
import { Fragment, useContext, useEffect, useState, useRef } from "react";
import styles from "../../../../styles/query.module.scss"
import  { useRouter } from 'next/router';
import {  business_add_visa_type} from "../../../helpers/business_owner_service";
import { IdContext } from "../../../MyContext/IdDetailsContext";
import { country_update_for_lia,update_lia_agent_list_of_visa_type, updated_lia_add_visa_request } from "../../../helpers/lia_services";
import AdminApprovedBW from '../../../Common/Modals/admin_approved_BW';
import {uniq as _uniq} from  "lodash";

    const ALLVISALIST = ({ styles, visa_type_tab, activeTab, active }) => {
      const [countryList, setCountryList] = useState([])
      const [allVisaList, setAllVisaList] = useState([])
      const [isSearching, setSearching] = useState("");
      const [isLoading, setIsLoading] = useState(false);
      const [isSelectAll, setIsSelectAll] = useState(true);
      const [isChecked, setIsChecked] = useState(false);
      const [count, setCount] = useState(0);
      const [totalCount, setTotalCount] = useState(0)
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [errorMsg, setErrorMsg] = useState("");
      const [isOpen, setIsOpen] = useState(false);
      const [isErrorOpen, setIsErrorOpen] = useState(false);
      const [isVisaSearch, setIsVisaSearch] = useState("")// for filter visa type
      const [isCountryList, setIsCountryList] = useState(false) // this is for showing country or visa type 
      const [visaCount, setVisaCount] = useState(0);
      const [totalVisaCount, setTotalVisaCount] = useState(0);
      const [selectedCountry, setSelectedCountry] = useState("")
     
      let router = useRouter();
      useEffect(() => {
        getAllCountryList()
      }, []);
      const closeModal = () => {
        setIsOpen(false);
        router.push("/busines/owner/dashboard");
      };
      const closeErrorModal = () => {
        setIsErrorOpen(false);
      };
      //*************************************************ALL COUNTRY **************************************************************************** */
      const getAllCountryList = async () => {
        const response = await country_update_for_lia()
        if (response.code == 200) {
          let filterCountry = response?.result?.filter((data) => data.select)
          setCountryList(filterCountry)
          setCount(filterCountry.length)
          setTotalCount(response.totalCountry)
        }
      }
    
      // ************************************************ FILTER COUNTRY IF SEARCH **************************************************************
      let FilterVisaType = allVisaList?.filter((flterData) => {
        if (isVisaSearch == "") {
          return flterData;
        } else if (
          flterData?.visaTypeId?.visaType?.toLowerCase().includes(isVisaSearch.toLowerCase())
        ) {
          return flterData;
        }
      });
      let VisaList;
      if (FilterVisaType.length > 0) {
        VisaList = FilterVisaType?.map((item, index) => {
          return (
            <div className={`form-group ${styles.fromGroup}`}>
              <div className={styles.CheckBox}>
                <input
                  id={index}
                  name="checkbox"
                  type="checkbox"
                  checked={item.selected}
                  value={item.visaTypeId}
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
      } else {
        VisaList = [];
      }
     
      // *********************** ON CHANGE FUNCTION FOR SELECT VISA TYPE****************************************************************
      const onSelectedVisaType = async (item) => {
        let newArr = allVisaList?.reduce((acc, curr) => {
          if (curr.visaTypeId == item.visaTypeId){
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
        setErrorMsg("");
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
        // *************************** HERE PREVENT FROM EMPTY VISATYPE WHEN SUBMIT*********************************************
        if (tempData.length !== 0) {
          setIsLoading(true);
          const response = await updated_lia_add_visa_request(keyData);
          if (response.code == 200) {
            setIsOpen(true);
            setIsLoading(false);
          setIsCountryList(false)
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
    
      //########################################### select country section ############################################################
    
      let FilterValue = countryList?.filter((flterData) => {
        if (isSearching == "") {
          return flterData
        } else if (flterData?.countryName.toLowerCase().includes(isSearching.toLowerCase())) {
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
                  <li style={{ cursor: "pointer" }} onClick={() => { handleList(item?._id) }}>{item?.countryName + " " + ">"} </li>
                </ul>
              </div>
            </div>
          )
        })
      }
      else {
        CountryList = []
      }
      //************************************************ ON LIST CLICK *************************************************************88 */
      const handleList = async (id) => {
        setIsCountryList(true)
        setSelectedCountry(id)
        const response = await update_lia_agent_list_of_visa_type(id)
        if (response.code == 200){
          setAllVisaList(response.result)
          setTotalVisaCount(response.result.length)
          let checkselectAll = response.result?.filter((item) => item.selected);
          if (checkselectAll.length == response.result?.length) {
            setIsChecked(true);
          } else if (checkselectAll.length == response.result?.length) {
            setIsChecked(false);
          }
          setVisaCount(checkselectAll.length);
        } else {
        }
      }
      //################################################################################################################################
      return (
        <div
          className={`tab-pane fade shadow rounded ${active ? "show active " : ""
            } `}
          id={activeTab}
          role="tabpanel"
          aria-labelledby="v-pills-about-tab"
        >
          <div className={styles.rightPageDetail}>
            <div className={styles.rightBox}>
              <div className="col-md-6 m-auto">
                {/* <h3 className=""> Select Countries  </h3> */}
                <div className={styles.visaStatus}>
                  {CountryList.length > 0 ?
                    <div className="row">
                      <div className={`col-8 ${styles.clientStatus}`}>
                        <ul>
                          <li>
                            {!isCountryList ? <span> Total Selected Countries {count}</span> : <span>Total Selected Visa Type {visaCount} </span>}
                          </li>
                          <li>
                            {!isCountryList ? <span> Not Selected Countries {totalCount - count} </span> : <span> Total Not Selected Visa Type {totalVisaCount - visaCount} </span>}
                          </li>
                        </ul>
                      </div>
                      <div className={`col-4 ${styles.buttonGroup}`}>
                        {/* <button onClick={()=>{setIsModalOpen(true)}} className={`${styles.SandBtn} mt-0 mb-0`}>Add Visa Type</button> */}
    
                        {/* ************** add Visa type Modal*************************** */}
                        {/* <AddVisaType
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        style={styles}
                      /> */}
                      </div>
    
                      {/* ************************************************************** */}
                    </div>
                    : ""}
                  {!isCountryList ?
                    <>
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
                    </>
    
                    : <>
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
                                onChange={(e) => { setIsVisaSearch(e.target.value) }}
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
                              {isVisaSearch.length == 0 ? (
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
    
                    </>}
    
                </div>
              </div>
            </div>
          </div>
          {/* {isOpen && (
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
          )} */}
        </div>
      );
    };
    export default ALLVISALIST;
    








