import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputFiled from "../../../Auth/Common/input_filed";
import ErrorModal from "../../../Common/Modals/ErrorModal"
import SuccessModal from "../../../Common/Modals/success_modal";
import VisaStatusModal from "../../../Common/Modals/visaStatus";
import AddVisaType from '../../../Common/Modals/visaType'
import VisaStatusForLia from "../../../Common/Modals/visa_status_for_lia";
import {
    businesOwnerCountryList,
    business_UpdateCountry,
} from "../../../helpers/business_owner_service";

const VisaStatusLia = ({ styles, country_tab, activeTab, active }) => {
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
    const closeModal = () => {
        setIsOpen(false);
        router.push("/LIA/setup");
    };
    const closeErrorModal = () => {
        setIsErrorOpen(false);
    };
    // ************************************ FILTER COUNTRY IF SEARCH **************************************************************




    //************************************* ALL COUNTRY LIST ************************************************* */
    useEffect(() => {   
        countryListing();
    }, []);
    const countryListing = async () => {
        const resList = await businesOwnerCountryList();
        if (resList.code == 200) {
            setAllCountry(resList.result?.countries);
            setTotalCountryCount(resList.result?.countries.length);
            let checkselectAll = resList.result?.countries?.filter(
                (item) => item.select
            );
            if (checkselectAll.length == resList.result?.countries?.length) {
                setIsChecked(true);

            } else if (checkselectAll.length == resList.result?.countries?.length) {
                setIsChecked(false);
            }
            setCount(checkselectAll.length);
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
        let selectedCountry = allCountry?.map((li) => {
            if (li.countryId) {
                return { countryId: li.countryId?._id, select: li.select };
            }
        });
        if (selectedCountry.find((item) => item.select)) {
            setIsLoading(true);
            const response = await business_UpdateCountry(selectedCountry);
            if (response.code == 200) {
                setIsLoading(false);

                setIsOpen(true);
            } else {
                setIsErrorOpen(true);
                setErrorMsg(response?.message);
                setIsLoading(false);
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
                    <div className="col-md-8 m-auto">
                        <div className={`${styles.visaStatus} setting leftMenu `}>
                        <span style={{color:"red"}}>{errorMsg} </span>
                            <div className="row">
                                <div className="col-md-8">
                                    <ul className={`${styles.TopMenu} nav flex-row nav-pills nav-pills-custom`} role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Working Status</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Submitted Status</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Completed Status</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`col-md-4 text-right pt-1 ${styles.ButtonGroup}`}>
                                    {/* <VisaStatusModal
                                        styles={styles}
                                    /> */}
                                    <VisaStatusForLia
                                    styles={styles}
                                    />
                                </div>
                            </div>

                      
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="row">
                                        <div className={`col-2`}>
                                        </div >
                                        <div className={`col-10`}>
                                            <div className={styles.visaStatusDiv}>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input
                                                            name="checkbox"
                                                            type="checkbox"
                                                            checked={true}
                                                            value='Initial Consuitation'
                                                            onChange={(e) => {
                                                                onSelectedCountry(item);
                                                            }}
                                                        />
                                                        <label className={styles.checkboxLabel}>
                                                            Initial Consuitation
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input
                                                            name="checkbox"
                                                            type="checkbox"
                                                            checked={true}
                                                            value='Initial Consuitation'
                                                            onChange={(e) => {
                                                                onSelectedCountry(item);
                                                            }}
                                                        />
                                                        <label className={styles.checkboxLabel}>
                                                            Agreement Sent
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input
                                                            name="checkbox"
                                                            type="checkbox"
                                                            checked={true}
                                                            value='Initial Consuitation'
                                                            onChange={(e) => {
                                                                onSelectedCountry(item);
                                                            }}
                                                        />
                                                        <label className={styles.checkboxLabel}>
                                                            List of Documents Sent
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input
                                                            name="checkbox"
                                                            type="checkbox"
                                                            checked={true}
                                                            value='Initial Consuitation'
                                                            onChange={(e) => {
                                                                onSelectedCountry(item);
                                                            }}
                                                        />
                                                        <label className={styles.checkboxLabel}>
                                                            Preparing
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input
                                                            name="checkbox"
                                                            type="checkbox"
                                                            checked={true}
                                                            value='Initial Consuitation'
                                                            onChange={(e) => {
                                                                onSelectedCountry(item);
                                                            }}
                                                        />
                                                        <label className={styles.checkboxLabel}>
                                                            Waiting for client response
                                                        </label>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                        <div className={`col-md-12 text-right ${styles.buttonGroup}`}>
                                            <button
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
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <p>Second Panel</p>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <p>Third Panel</p>
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
export default VisaStatusLia;
