import InputFiled from "../../../Auth/Common/input_filed";
import styles from "../../../../styles/form.module.scss"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import { validateDatepicker, validateName } from '../../../Common/validation';
import { client_visaDetail_service } from "../../../helpers/client_services";

const BusinessContactDetail = () => {
    const [addData, setAddData] = useState({
        visaType: "",
        visaExiryDate: "",
        Visacountry: "",
        passportCountry: "",
        PassportNumber: "",
        visaPassportExiryDate: "",
        inzClientNumber: ""
    })
    const [isError, set_isError] = useState({
        VisaExpiryErrorMsg: "",
        VisaPassportExpiryErrorMsg: "",
        clientNumberErrorMsg: "",
        CountryErrorMsg: "",
        PassportCountryMsg: "",
        isDisabledPassportCountry: false,
        isDisabledVisaExp: false,
        isDisabledClientNumber: false,
        isDisabledVisaPassportExp: false,
        isDisabledCountry: false,

    })

    const handleSave = async (event,type) => {
        event.preventDefault();
        if (!addData.Visacountry) {
            set_isError((prev) => {
                return ({
                    ...prev, CountryErrorMsg: "This field is required",
                    isDisabledCountry: false,
                })
            })
        }
        else if (!addData.visaExiryDate) {
            set_isError((prev) => {
                return ({
                    ...prev, VisaExpiryErrorMsg: "Please select expiry date",
                    isDisabledVisaExp: false,
                })
            })
        }
        else if (!addData.passportCountry) {
            set_isError((prev) => {
                return ({
                    ...prev, PassportCountryMsg: "This field is required",
                    isDisabledPassportCountry: false,
                })
            })
        }
        else if (!addData.visaPassportExiryDate) {
            set_isError((prev) => {
                return ({
                    ...prev, VisaPassportExpiryErrorMsg: "Please select expiry date",
                    isDisabledVisaPassportExp: false,
                })
            })
        }
        else if (!addData.inzClientNumber) {
            set_isError((prev) => {
                return ({
                    ...prev, clientNumberErrorMsg: "Please enter Inz clientNumber",
                    isDisabledClientNumber: false,
                })
            })
        }
        else {
            const response = await client_visaDetail_service(
                addData.PassportNumber,
                addData.passportCountry,
                addData.visaPassportExiryDate,
                addData.Visacountry,
                addData.visaType,
                addData.visaExiryDate,
                addData.inzClientNumber,
                type=="Draft" ? true :false
            )
          console.log(response)
          if (response.code === 403) {
            localStorage.clear()
            window.location.href = "/"
        }
        else  if (response.code === 200) {
            localStorage.clear()
            window.location.href = '/Client/profile/contactDetail'
        }
        }
        // const response = await hg
    }
    const handleDobResponse = (visaExiryDate) => {
        let name = "visaExiryDate"
        setAddData({ ...addData, [name]: visaExiryDate }, validForm(name, visaExiryDate));

    }
    const handlePassportExpiryResponse = (visaExiryDate) => {
        let name = "visaPassportExiryDate"
        setAddData({ ...addData, [name]: visaExiryDate }, validForm(name, visaExiryDate));

    }
    const validForm = (fieldName, Value) => {

        let visaExpiryErrorMsg = isError.VisaExpiryErrorMsg
        let isDisabledVisaExpiry = isError.isDisabledVisaExp
        let clientErrorMsg = isError.clientNumberErrorMsg
        let isDisabledClient = isError.isDisabledClientNumber
        switch (fieldName) {
            case "visaExiryDate":
                visaExpiryErrorMsg = validateDatepicker(Value).error
                isDisabledVisaExpiry = validateDatepicker(Value).isDisabled
                break;
            case 'inzClientNumber':
                clientErrorMsg = validateName(Value).error
                isDisabledClient = validateName(Value).isDisabled
                break;
            default:
                break;
        }

        set_isError((prev) => {
            return ({
                ...prev,
                VisaExpiryErrorMsg: visaExpiryErrorMsg,
                isDisabledVisaExp: isDisabledVisaExpiry,
                clientNumberErrorMsg: clientErrorMsg,
                isDisabledClientNumber: isDisabledClient
            })
        })


    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value }, validForm(name, value));
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
                                            <li className={styles.Active}><span>Full Profile</span></li>
                                            <li className={styles.Active}><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <h4 className="col-md-12">VISA Details</h4>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="checkbox1" name="checkbox" type="checkbox" />
                                                <label for="checkbox1" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!isError.isDisabledCountry && isError.CountryErrorMsg}</span></label>
                                            <CountryDropdown class="form-control" name="cc_exp_mo" size="0"
                                                value={addData.Visacountry}
                                                onChange={(val) => {
                                                    setAddData((prev) => { return ({ ...prev, Visacountry: val }) });
                                                    set_isError((prev) => { return ({ ...prev, isDisabledCountry: true, CountryErrorMsg: "" }) })
                                                }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>VISA Type</label>
                                            <select class="form-control" name="cc_exp_mo" size="0">
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>VISA Expiry Date<span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!isError.isDisabledVisaExp && isError.VisaExpiryErrorMsg}</span></label>
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
                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <h4 className="col-md-12">Passport Details</h4>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country <span className={styles.required}>*</span></label>
                                            <CountryDropdown class="form-control" name="cc_exp_mo" size="0"
                                                value={addData.passportCountry}
                                                onChange={(val) => {
                                                    setAddData((prev) => { return ({ ...prev, passportCountry: val }) });
                                                    set_isError((prev) => { return ({ ...prev, isDisabledPassportCountry: true, VisaPassportExpiryErrorMsg: "" }) })
                                                }} />
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
                                                onChange={(e) => { handleChange(e) }} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">

                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>VISA Expiry Date<span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!isError.isDisabledVisaPassportExp && isError.VisaPassportExpiryErrorMsg}</span></label>

                                            <DatePicker
                                                className="form-control"
                                                name="visaPassportExiryDate"
                                                selected={addData.visaPassportExiryDate ? new Date(addData.visaPassportExiryDate) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handlePassportExpiryResponse(date)}
                                                autoComplete="off"
                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-12 ${styles.LinkSec}`}>
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <a href="">+ Add Another Passport</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>INZ Client Number <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!isError.isDisabledClientNumber && isError.clientNumberErrorMsg}</span></label>

                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="License"
                                                input_name="inzClientNumber"
                                                value={addData.inzClientNumber}
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
                                                <button className={styles.SaveBtn} onClick={(e,type)=>{handleSave(e,"Draft")}}>Save as Draft</button>
                                            </div>
                                            <div className="col-md-4">
                                                <button className={styles.SandBtn} onClick={(e,type)=>{handleSave(e,"Save")}}>Save and Next</button>
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
export default BusinessContactDetail