import InputFiled from "../../../Auth/Common/input_filed";
import styles from "../../../../styles/form.module.scss"
import moment, { locale } from 'moment';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import { validateDatepicker, validateEmail, validateName, validatePhone } from '../../../Common/validation';
import { API_URL, BASE_URL } from "../../../helpers/api_url";
const BusinessFullProfile = () => {
    const [addData, setAddData] = useState({
        primaryEmail: "",
        dob: "",
        maritalStatus: "",
        primarymobileNo: "",
        secondaryEmail: "",
        secondarymobileNo: "",
        country: "",
        state: "",
        houseNo: "",
        street: ""
    })
    const [isError, set_isError] = useState({
        PrimaryEmailErrorMsg: "",
        PrimaryMobileErrorMsg: "",
        dobErrorMsg: "",
        CountryErrorMsg: "", StateErrorMsg: "",
        HouseErrorMsg: "", StreetErrorMsg: "",
        MaritalErrormsg:"",
        isDisabledPrimaryEmail: false,
        isDisabledPrimaryMobile: false,
        isDisabledMarital:false,
        isDisabledDob: false,
        isDisabledCountry: false,
        isDisabledState: false,
        isDisabledHouse: false,
        isDisabledStreet: false,
        isDisabled: false
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value }, validForm(name, value));
    }
    const handleMaritalChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value });
        set_isError({...isError, isDisabledMarital:true, MaritalErrormsg:""})
    }
    const handleDobResponse = (dob) => {
        let name = "dob"
        console.log(dob, name)

        setAddData({ ...addData, [name]: dob }, validForm(name, dob));

    }
    const validForm = (fieldName, Value) => {
        let EmailErrorMsg = isError.PrimaryEmailErrorMsg
        let isDisabledEmail = isError.isDisabledPrimaryEmail
        let MobileErrorMsg = isError.PrimaryMobileErrorMsg
        let isDisabledMobile = isError.isDisabledPrimaryMobile
        let DobErrorMsg = isError.dobErrorMsg
        let isDisabledDob = isError.isDisabledDob
        let CountryErrorMsg = isError.CountryErrorMsg
        let isDisabledCountry = isError.isDisabledCountry
        let HouseErrorMsg = isError.HouseErrorMsg
        let isDisabledHouse = isError.isDisabledHouse
        let StreetErrorMsg = isError.StreetErrorMsg
        let isDisabledStreet = isError.isDisabledStreet

        switch (fieldName) {

            case "primaryEmail":
                EmailErrorMsg = validateEmail(Value).error
                isDisabledEmail = validateEmail(Value).isDisabled
                break;

            case "primarymobileNo":
                MobileErrorMsg = validatePhone(Value).error
                isDisabledMobile = validatePhone(Value).isDisabled
                break;

            case "dob":
                DobErrorMsg = validateDatepicker(Value).error
                isDisabledDob = validateDatepicker(Value).isDisabled
                break;
            case 'houseNo':
                HouseErrorMsg = validateName(Value).error
                isDisabledHouse = validateName(Value).isDisabled
                break;
            case 'street':
                StreetErrorMsg = validateName(Value).error
                isDisabledStreet = validateName(Value).isDisabled
                break;
            default:
                break;
        }

        set_isError((prev) => {
            return ({
                ...prev, PrimaryEmailErrorMsg: EmailErrorMsg,
                isDisabledPrimaryEmail: isDisabledEmail,
                PrimaryMobileErrorMsg: MobileErrorMsg,
                isDisabledPrimaryMobile: isDisabledMobile,
                dobErrorMsg:DobErrorMsg,
                isDisabledDob: isDisabledDob,
                StreetErrorMsg:StreetErrorMsg,
                isDisabledStreet:isDisabledStreet,
                HouseErrorMsg:HouseErrorMsg,
                isDisabledHouse:isDisabledHouse
            })
        })


    }



    const handleSave = async (event) => {
        event.preventDefault();
        const formdata = new FormData();
        // formdata.append("image", image)
        formdata.append("primaryPhoneNumber", addData.primarymobileNo)
        formdata.append("secondaryPhoneNumber", addData.secondarymobileNo)
        formdata.append("primaryEmail", addData.primaryEmail)
        formdata.append("secondaryEmail", addData.secondaryEmail)
        formdata.append("dob", addData.dob)
        formdata.append("martialStatus", addData.maritalStatus)
        formdata.append("saveAsDraft", false)
        formdata.append("image","")
        if (!addData.primarymobileNo) {
            set_isError((prev) => {
                return ({
                    ...prev, PrimaryMobileErrorMsg: "Please enter mobile no.",
                    isDisabledPrimaryMobile: false,
                })
            })
        }
        else if (!addData.primaryEmail) {
            set_isError((prev) => {
                return ({
                    ...prev, PrimaryEmailErrorMsg: "Please enter email",
                    isDisabledPrimaryEmail: false,
                })
            })
        }
        else if (!addData.dob) {
            set_isError((prev) => {
                return ({
                    ...prev, dobErrorMsg: "Please enter DOB",
                    isDisabledDob: false,
                })
            })
        }
        else if (!addData.maritalStatus) {
            set_isError((prev) => {
                return ({
                    ...prev, MaritalErrormsg: "this field is required",
                    isDisabledMarital: false,
                })
            })
        }
        else if(!addData.country){
            set_isError((prev) => {
                return ({
                    ...prev, CountryErrorMsg: "this field is required",
                    isDisabledCountry: false,
                })
            })
        }
        else if(!addData.state){
            set_isError((prev) => {
                return ({
                    ...prev, StateErrorMsg: "this field is required",
                    isDisabledState: false,
                })
            })
        }
        else if(!addData.houseNo){
            set_isError((prev) => {
                return ({
                    ...prev, HouseErrorMsg: "Please enter house no.",
                    isDisabledHouse: false,
                })
            })
        }
        else if(!addData.street){
            set_isError((prev) => {
                return ({
                    ...prev, StreetErrorMsg: "Please enter street",
                    isDisabledStreet: false,
                })
            })
        }
        else {
                let res = await axios.post(BASE_URL + API_URL.CLIENT_PROFILE_DETAILS,formdata, {
    
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "deviceType": "web",
                        "x-auth": "16ebfd0e6bed7bc4845c611ef1ddcc0c81858eb28193b19b7156b67f218c13b00d0b683ebd7aa10a8221a61ab083ff56"
                    }
                })
                try {
                    let response = res.data
                    if (response.code === 403) {
                        localStorage.clear()
                        window.location.href = "/"
                    }
                    else  if (response.code === 200) {
                        localStorage.clear()
                        window.location.href = '/Client/profile/contactDetail'
                    }
                    return response
                } catch (error) {
                    return error
    
                
            }

        }
        
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
                                            <li><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.avatarUpload}>
                                            <div className={styles.avatarPreview}>
                                                <img src="/images/camera.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.NameDetail}>
                                            <h5>Mr. {global.name}</h5>
                                            <p>INZ ID: #INZ8923409</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Primary Mobile Number <span className={styles.required}>*</span>  <span className={styles.errorMsg}>{!isError.isDisabledPrimaryMobile && isError.PrimaryMobileErrorMsg}</span></label>
                                            <InputFiled
                                                type_name="text"
                                                type="tel"
                                                placeholder_name=""
                                                inputId="Mobile"
                                                value={addData.primarymobileNo}
                                                input_name="primarymobileNo"
                                                maxLength="10"
                                                // onChange={(e) => { handleChange(e) }} 
                                                onChange={(e) => { setAddData((prev) => { return ({ ...prev, primarymobileNo: e.target.value.replace(/\D/g, '') }) }); validForm("primarymobileNo", addData.primarymobileNo) }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Secondary Mobile Number</label>
                                            <InputFiled
                                                type_name="text"
                                                type="tel"
                                                placeholder_name=""
                                                inputId="Mobile"
                                                value={addData.secondarymobileNo}
                                                input_name="secondarymobileNo"
                                                maxLength="10"
                                                // onChange={(e) => { handleChange(e) }} 
                                                onChange={(e) => { setAddData((prev) => { return ({ ...prev, secondarymobileNo: e.target.value.replace(/\D/g, '') }) }); validForm("secondarymobileNo", addData.mobileNo) }}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Primary Email <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledPrimaryEmail && isError.PrimaryEmailErrorMsg}</span></label>
                                            <InputFiled
                                                type_name="email"
                                                placeholder_name=""
                                                inputId="Email"
                                                value={addData.primaryEmail}
                                                input_name="primaryEmail"
                                                onChange={(e) => { handleChange(e) }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Secondary Email</label>
                                            <InputFiled
                                                type_name="email"
                                                placeholder_name=""
                                                inputId="Email"
                                                value={addData.secondaryEmail}
                                                input_name="secondaryEmail"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>D.O.B <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledDob && isError.dobErrorMsg}</span></label>
                                            <DatePicker
                                                className="form-control"
                                                name="dob"
                                                selected={addData.dob ? new Date(addData.dob) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                showYearDropdown={true}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                locale={locale.locale}
                                                onChange={date => handleDobResponse(date)}
                                                autoComplete="off"
                                                // minDate={moment().subtract(500, "years")}
                                                maxDate={moment().subtract(16, 'years')._d}

                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Marital Status<span className={styles.required}>*</span><span className={styles.errorMsg}>{!isError.isDisabledMarital && isError.MaritalErrormsg}</span></label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="Phone"
                                                value={addData.maritalStatus}
                                                input_name="maritalStatus"
                                                onChange={(e) => { handleMaritalChange(e) }}

                                                />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledCountry && isError.CountryErrorMsg}</span></label>
                                            <CountryDropdown class="form-control" name="cc_exp_mo" size="0"
                                                value={addData.country}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, country: val }) }); set_isError((prev)=>{return ({...prev,isDisabledCountry:true,CountryErrorMsg:""})}) }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>State/Province <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledState && isError.StateErrorMsg}</span></label>
                                            <RegionDropdown class="form-control" name="cc_exp_mo" size="0"
                                                country={addData.country}
                                                value={addData.state}
                                                onChange={(val) => 
                                                { setAddData((prev) => { return ({ ...prev, state: val }) });  
                                                set_isError((prev)=>{return ({...prev,isDisabledState:true,StateErrorMsg:""})}) }} />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>House/Suite/Building No. <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledHouse && isError.HouseErrorMsg}</span></label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="House"
                                                value={addData.houseNo}
                                                input_name="houseNo"
                                                onChange={(e) => { handleChange(e) }}
                                            // onChange={(e) => { setAddData((prev) => { return ({ ...prev, houseNo: e.target.value }) }); validForm("houseNo", addData.houseNo) }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Street Address <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledStreet && isError.StreetErrorMsg}</span></label>
                                            <InputFiled
                                                type_name="emtextail"
                                                placeholder_name=""
                                                inputId="Address"
                                                value={addData.street}
                                                input_name="street"
                                                onChange={(e) => { handleChange(e) }}
                                            />
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
                                                <button className={styles.SaveBtn}>Save as Draft</button>
                                            </div>
                                            <div className="col-md-4">
                                                <button className={styles.SandBtn} onClick={handleSave}>Save and Next</button>
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
export default BusinessFullProfile