import InputFiled from "../../Auth/Common/input_filed"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import styles from "../../../styles/form.module.scss";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { admin_allCountry_list, lia_allvisalist_service } from "../../helpers/business_owner_service";
import { useState, useEffect } from "react";
import { validateDatepicker, validateName } from "../../Common/validation";
import { client_visaDetail_service, view_client_service } from "../../helpers/client_services";
import Route, { useRouter } from 'next/router';
import moment from "moment";
const ContactDetail = () => {
    const route = useRouter()
    const [addData, setAddData] = useState({
        visaType: "",
        visaExiryDate: "",
        Visacountry: "",
        passportCountry: "",
        PassportNumber: "",
        visaPassportExiryDate: "",
        inzClientNumber: ""
    })
    const [error, setError] = useState({
        visaType: "",
        visaExiryDate: "",
        Visacountry: "",
        passportCountry: "",
        PassportNumber: "",
        visaPassportExiryDate: "",
        inzClientNumber: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [permanentAddSameAsCurrent, setPermanentAddSameAsCurrent] = useState(true)
    const handleCheckbox = () => {
        setPermanentAddSameAsCurrent(!permanentAddSameAsCurrent);
    };
    const [countryList, setCountryList] = useState([])
    let clientId = route.query?.id

    useEffect(() => {
        GetCountryList()
        clientId && viewClient(clientId)

    }, [clientId])
    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
    }
    const [visaTypeList, setVisaList] = useState([])
    const viewClient = async (clientId) => {
        const response = await view_client_service(clientId)
        if(response.code==200){
            let passportExpiry = moment(response.result.passportExpiryDate).format("MM/DD/YYYY")
            setAddData((prev) => {
                return {
                    ...prev,
                    visaExiryDate: response.result.visaExpiryDate,
                    Visacountry: response.result.visaCountry?._id,
                    passportCountry: response.result.passportCountry?._id,
                    visaType: response.result.visaType?._id,
                    inzClientNumber: response.result.inzClientNumber,
                    // visaPassportExiryDate: passportExpiry,
                    PassportNumber: response.result.passportNumber
                }
            })
        }
    }
    useEffect(() => {
        getAllVisaType()
    }, [addData.Visacountry])
    const getAllVisaType = async () => {
        let page = 1;
        let perPage = 20;
        const response = await lia_allvisalist_service(addData.Visacountry, "", perPage, page)
        if (response.code == 200) {
            setVisaList(response.result)
        }
    }
    const handleSave = async (event, saveAsDraft) => {
        event.preventDefault();
        // if (!addData.Visacountry) {
        //     console.log(addData.Visacountry)
        //     setError({ ...error, Visacountry: "Please select country" })
        // }
        // else if (!addData.visaType) {
        //     setError({ ...error, visaType: "Please select visa type" })
        // }
        // else if (!addData.visaExiryDate) {
        //     setError({ ...error, visaExiryDate: "Please select visa expiry date" })
        // }
        // else if (!addData.passportCountry) {
        //     setError({ ...error, passportCountry: "Please select country" })
        // }
        // else if (!addData.visaPassportExiryDate) {
        //     setError({ ...error, visaPassportExiryDate: "Please select passport expiry" })
        // }
        // else if (!addData.inzClientNumber) {
        //     setError({ ...error, inzClientNumber: "Please enter inz client number" })
        // }
        // else if (!addData.PassportNumber) {
        //     setError({ ...error, PassportNumber: "Please enter passport number" })
        // }
        // else {
            setIsLoading(true)
            const response = await client_visaDetail_service(
                addData.Visacountry,
                addData.visaType,
                addData.visaExiryDate,
                addData.PassportNumber,
                addData.visaPassportExiryDate,
                addData.passportCountry,
                addData.inzClientNumber,
                saveAsDraft,
                permanentAddSameAsCurrent,
                clientId
            )

            if (response.code === 200) {
                setIsLoading(false)
                route.push("/LIA/allClient")

            } else if (response.code === 400) {
                setIsLoading(false)
                setErrorMsg(response.message)
            }
        // }
    }
    const handleDobResponse = (visaExiryDate) => {
        let name = "visaExiryDate"
        setAddData({ ...addData, [name]: visaExiryDate });

    }
    const handlePassportExpiryResponse = (visaExiryDate) => {
        let name = "visaPassportExiryDate"
        setAddData({ ...addData, [name]: visaExiryDate });

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value });
        setError({...error, [name]: "" })
        setErrorMsg("")
    }
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h3 className="">Profile Details</h3>
                        <div className={styles.formArea}>
                            <form>
                                <div class="row">
                                    <div className="col-md-12">
                                        <ul className={styles.progressBar}>
                                            <li className={styles.Active}><span>Basic Personal Details</span></li>
                                            {/* <li className={styles.Active}><span>Full Profile</span></li> */}
                                            <li className={styles.Active}><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <h4 style={{ color: "red", textAlign: "center" }}>{errorMsg} </h4>

                                <div class="row">
                                    <h4 className="col-md-12"> <b>VISA Details</b></h4>
                                </div>
                                {/* <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                        <div className={styles.CheckBox}>
                                            <input id="checkbox1" name="permanentAddSameAsCurrent" type="checkbox" checked={permanentAddSameAsCurrent} onChange={handleCheckbox} />
                                                <label for="checkbox1" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country 
                                                </label>

                                            <select class="form-control" name="Visacountry" value={addData.Visacountry} onChange={handleChange} size="0">
                                                <option value="">Select</option>
                                                {countryList?.map((li, i) => <option value={li._id}>{li.countryName}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>VISA Type<span className={styles.errorMsg}>{!addData.visaType ? error.visaType : ""}</span></label>
                                            <select class="form-control" name="visaType" value={addData.visaType} onChange={handleChange} size="0">
                                                <option value="">Select</option>
                                                {visaTypeList?.map((li, i) => <option value={li._id}>{li.visaType}</option>)}

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>VISA Expiry Date
                                                </label>
                                            <DatePicker
                                                className="form-control"
                                                name="visaExiryDate"
                                                selected={addData.visaExiryDate ? new Date(addData.visaExiryDate) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handleDobResponse(date)}
                                                autoComplete="off"
                                                showYearDropdown
                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <h4 className="col-md-12"><b>Passport Details</b>  </h4>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country </label>
                                            <select class="form-control" name="passportCountry" onChange={(e) => { handleChange(e) }} value={addData.passportCountry} size="0">
                                                <option value="">Select Country</option>
                                                {countryList?.map((li, index) => <option key={index} value={li._id}>{li.countryName}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Passport Number</label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="License"
                                                input_name="PassportNumber"
                                                value={addData.PassportNumber}
                                                maxLength="15"
                                                onChange={(e) => { handleChange(e) }} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Passport Expiry Date
                                                </label>

<DatePicker
                                                className="form-control"
                                                name="visaExiryDate"
                                                selected={addData.visaPassportExiryDate ? new Date(addData.visaPassportExiryDate) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handlePassportExpiryResponse(date)}
                                                autoComplete="off"
                                                showYearDropdown
                                            />

                                            {/* <DatePicker
                                                className="form-control"
                                                name="visaPassportExiryDate"
                                                selected={addData.visaPassportExiryDate ? new Date(addData.visaPassportExiryDate) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                // minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handlePassportExpiryResponse(date)}
                                                autoComplete="off"
                                                value={addData.visaPassportExiryDate}
                                                showYearDropdown
                                            /> */}
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-12 ${styles.LinkSec}`}>
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <a > Add Another Passport</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>INZ Client Number 
                                                </label>

                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="License"
                                                input_name="inzClientNumber"
                                                value={addData.inzClientNumber}
                                                maxLength="9"
                                                onChange={(e) => { handleChange(e) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className={`col-md-9 ${styles.ButtonGroup}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                            </div>
                                            <div className="col-md-4">
                                                {
                                                    clientId ? "" :
                                                        isLoading ? <button disabled className={styles.SaveBtn} >Save as Draft</button>
                                                            : <button className={styles.SaveBtn} onClick={(e) => { handleSave(e, true) }}>Save as Draft</button>}
                                            </div>
                                            <div className="col-md-4">
                                                {isLoading ? <button className={styles.SandBtn} onClick={(e) => { handleSave(e, false) }}><> <i class="fa fa-refresh fa-spin"></i>  Loading </></button> :
                                                    <button className={styles.SandBtn} onClick={(e) => { handleSave(e, false) }}>{clientId ? "Update" : "Save and Submit"}</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactDetail