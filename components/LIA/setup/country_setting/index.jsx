import InputFiled from "../../../Auth/Common/input_filed";
import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import { lia_allCountry_list, business_addCountry } from "../../../helpers/business_owner_service";
import { country_list_for_lia, country_update_for_lia, lia_agent_add_country } from "../../../helpers/lia_services"
import { Backdrop, CircularProgress } from "@mui/material";
import { IdContext } from "../../../MyContext/IdDetailsContext";
import SuccessModal from "../../../Common/Modals/success_modal"
    
    const SelectCountry = ({ styles, country_tab, activeTab, active }) => {
      const [allCountry, setAllCountry] = useState([]);
      const [isSearching, setSearching] = useState("");
      const [isLoading, setIsLoading] = useState(false);
      const [isSelectAll, setIsSelectAll] = useState(true);
      const [isChecked, setIsChecked] = useState(false);
      const [count, setCount] = useState(0);
      const [totalCountryCount, setTotalCountryCount] = useState(0);
      const [errorMsg, setErrorMsg] = useState("");
      const [isOpen, setIsOpen] = useState(false);
      const [isErrorOpen, setIsErrorOpen] = useState(false);
    
      let router = useRouter();
    //   const closeModal = () => {
    //     setIsOpen(false);
    //     router.push("/busines/owner/dashboard");
    //   };
    //   const closeErrorModal = () => {
    //     setIsErrorOpen(false);
    //   };
      // ************************************ FILTER COUNTRY IF SEARCH **************************************************************
      let FilterValue = allCountry?.filter((flterData) => {
        if (isSearching == "") {
          return flterData;
        } else if (
          flterData.countryId.countryName
            ?.toLowerCase()
            .includes(isSearching.toLowerCase())
        ) {
          return flterData;
        }
      });
      let CountryList;
      if (FilterValue?.length > 0) {
        CountryList = FilterValue?.map((item, index) => {
          return (
            <div className={`form-group ${styles.fromGroup}`}>
              <div className={styles.CheckBox}>
                <input
                  id={index}
                  name="checkbox"
                  type="checkbox"
                  checked={item.select}
                  value={item.countryId?._id}
                  onChange={(e) => {
                    onSelectedCountry(item);
                  }}
                />
                <label for={index} className={styles.checkboxLabel}>
                  {item.countryId?.countryName}
                </label>
              </div>
            </div>
          );
        });
      } else {
        CountryList = [];
      }
      //************************************* ALL COUNTRY LIST ************************************************* */
      useEffect(() => {
        countryListing();
      }, []);
      const countryListing = async () => {
        const resList = await country_list_for_lia();
        if (resList.code == 200) {
          setAllCountry(resList.result);
          setTotalCountryCount(resList.result?.length);
          let checkselectAll = resList.result?.filter(
            (item) => item.select
          );
          if (checkselectAll?.length == resList.result?.length) {
            setIsChecked(true);
    
          } else if (checkselectAll.length == resList.result?.length) {
            setIsChecked(false);
          }
          setCount(checkselectAll?.length);
        }
      };
      // *********************** ON CHANGE FUNCTION FOR SELECT COUNTRY****************************************************************
      const onSelectedCountry = async (item) => {
        let newArr = allCountry?.map((curr) =>
          curr.countryId?._id == item.countryId?._id
            ? { ...curr, select: !curr.select }
            : { ...curr }
        );
        setAllCountry(newArr);
        let selectCheck = newArr.reduce((acc, curr) => {
          if (curr.select) {
            acc.push(curr);
          }
          return acc;
        }, []);
        setCount(selectCheck.length);
        setErrorMsg("")
        if (selectCheck.length !== allCountry.length) {
          setIsChecked(false);
        } else if (selectCheck.length == allCountry.length) {
          setIsChecked(true);
        }
        setErrorMsg("");
      };
      // ************************************  ON SUBMIT FUNCTION *******************************************************
      const addSelectedCountry = async () => {
        let selectedCountry = allCountry?.reduce((acc,curr)=>{
            if(curr.select){
                acc.push(curr.countryId._id)
            }
            return acc;
        },[])
        console.log(selectedCountry,"selectedCountry");
        if (selectedCountry.length !==0) {
        setIsLoading(true);
          const response = await lia_agent_add_country(selectedCountry);
          setIsLoading(false);
          if (response.code == 200) {
            router.push("/LIA/setup")
            setErrorMsg("Country Updated Successfully..")
          } else {
            setErrorMsg(response?.message);
          }
        } else {
          setErrorMsg("Please select at least one country");
        }
      };
      //*********************************************SELECT ALL FUNCTION ********************************************************** */
      const onSelectAll = (e) => {
        setIsSelectAll(!isSelectAll);
        let allData = allCountry.map((item) => {
          return { ...item, select: isSelectAll };
        });
        setAllCountry(allData);
        setIsChecked(isSelectAll);
        setErrorMsg("")
        if (isSelectAll) {
          setCount(allCountry.length);
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
          className={`tab-pane fade shadow rounded ${active ? "show active " : ""
            } `}
          id={activeTab}
          role="tabpanel"
          aria-labelledby="v-pills-country-tab"
        >
          <div className={styles.rightPageDetail}>
            <div className={styles.rightBox}>
              <div className="col-md-6  m-auto">
                <div className={styles.visaStatus}>
                <h4 className="">  Country Setting  </h4>
    
                  <div className="row">
                    <div className={`col-12 ${styles.clientStatus}`}>
                      <ul>
                        <li>
                       Total Selected Countries <span>{count}</span>
                        </li>
                        <li>
                          Not Selected Countries{" "}
                          <span>{totalCountryCount - count}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                        <br />
                        <h6 style={{ color: "red" }}>{errorMsg} </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className={`col-12`}>
                      <div className={styles.visaStatusDiv}>
                        {CountryList?.length > 0 ? (
                          <div className={`form-group ${styles.fromGroup}`}>
                            {isSearching.length == 0 ? (
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
                            ) : (
                              ""
                            )}
                          </div>
                        ) : allCountry?.length !== 0 ? (
                          <h6 style={{ color: "red" }}>No Data Found.. </h6>
                        ) : (
                          ""
                        )}
    
                        {CountryList}
                      </div>
                    </div>
                    <div className={`col-md-12 text-right ${styles.buttonGroup}`}>
                      <button
                        // disabled={!isDisabled}
                        onClick={addSelectedCountry}
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
              message="Country setting updated Successfully"
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
    export default SelectCountry;
    