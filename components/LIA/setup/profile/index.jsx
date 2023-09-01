import InputFiled from "../../../Auth/Common/input_filed"
import styles from "../../../../styles/form.module.scss"
import { validateName, validateEmail, validatePhone, validateAddress, validateNumber } from '../../../Common/validation';

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { lia_agent_update_profile, getLiaAgent, all_city_listing } from "../../../helpers/lia_services"
import { admin_allCountry_list } from "../../../helpers/business_owner_service"
import moment from "moment"
import LinkLicenseMembership from "../../../Common/Modals/link_license_membership"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from "next/router"
import { placeAutoComplete } from "../../../geolocation";
import { Location_key } from "../../../helpers/api_url";
const ClientProfile = ({active,activeTab}) => {
    const router = useRouter()
    const [startDate, setStartDate] = useState("");
    const [countryList, setCountryList] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [link, setLink] = useState()
    const [cityList, setAllCityList] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [addData, setAddData] = useState({
        email: "",
        gender: "",
        name: "",
        licenseNo: "",
        description: "",
        address: "",
        location: "",
        Profession: "",
        country: "",
        city: "",
        expiryDate: "",
        LocationStatus: false,
        Suggestion: []
    })


    const [error, setError] = useState({
        email: "",
        gender: "",
        name: "",
        licenseNo: "",
        phoneNo: "",
        landlineNo: "",
        address: "",

        Profession: "",
        country: "",
        city: "",
        expiryDate: ""
    })
    const [phoneNo, setNo] = useState("")
    const [country_Code, set_Country_Code] = useState("")
    const [landlineNo, setLandlineNo] = useState("")
    const [landline_country_Code, setLindline_Country_Code] = useState("")
    const handleOnchangePhone = (phone, country, e, data, value) => {
        let name = "phoneNo"
        let country_code = `+${country.dialCode}`
        let country_name = country.countryCode
        set_Country_Code(country_code)
        setNo(phone)
    }
    const handleOnchangeLandline = (phone, country, e, data, value) => {
        let name = "phoneNo"
        let country_code = `+${country.dialCode}`
        let country_name = country.countryCode
        setLindline_Country_Code(country_code)
        setLandlineNo(phone)
    }
    useEffect(() => {
        get_lia_agent_all_data()
        GetCountryList()
        set_Country_Code(localStorage.userCountry)
        setLindline_Country_Code(localStorage.userCountry)
        setAddData({ email: localStorage.email })
    }, [])

    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
    }

    const get_lia_agent_all_data = async () => {
        let response = await getLiaAgent();
        if (response.code == 200) {
            // setStartDate()
            let ExpiryDate = moment(response.result.expiryDate).format("L")
            setAddData((prev) => {
                return ({
                    ...prev,
                    name: response.result.fullName,
                    licenseNo: response.result.membershipNumber,
                    email: response.result.email,
                    landlineNo: response.result.landlineNumber,
                    phoneNo: response.result.phoneNumber,
                    gender: response.result.gender,
                    country: response.result.country,
                    address: response.result.address,
                    location: response.result.address,
                    expiryDate: ExpiryDate,
                    licenseNo: response.result.licenseNo,
                    city: response.result.city._id,
                    country: response.result.country._id,
                    Profession: response.result.myProfession,
                    description: response.result.about

                })
            })

            setNo(String(response.result.phoneNumberCountryCode) + String(response.result.phoneNumber));
            set_Country_Code(String(response.result.phoneNumberCountryCode));
            setLindline_Country_Code(response.result.lineNumberCountryCode);
            setLandlineNo(String(response.result.lineNumberCountryCode) + String(response.result.landlineNumber));
            setImage(response.result.image)
        } else {
        }
    }

    const OpenModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };
    const CloseModal = (e) => {
        // ;
        setIsOpen(false);
    };
    const liaAgentProfileUpdate = async (e) => {
        e.preventDefault()

        let count = country_Code.length
        let phone_number = phoneNo;
        phone_number = phone_number.substring(count);
        let count2 = landline_country_Code.length
        let LandingNo = landlineNo;
        LandingNo = LandingNo.substring(count2);
        console.log(phoneNo, country_Code.length)
        let licenseExpiryDate = moment(startDate).format("L")
        if (!addData.name) {
            setError({ ...error, name: "Please enter full name" })
        } else if (!addData.licenseNo) {
            setError({ ...error, licenseNo: "Please enter license/membership number" })
        } else if (!addData.expiryDate) {
            setError({ ...error, expiryDate: "Please select license expiry date" })
        } else if (!phoneNo) {
            setError({ ...error, phoneNo: "Please enter valid phone number" })
        } else if (!addData.email) {
            setError({ ...error, email: "Please enter valid email" })
        } else if (!addData.gender) {
            setError({ ...error, gender: "Please select gender" })
        } else if (!addData.Profession) {
            setError({ ...error, Profession: "Please choose your Profession" })
        } else if (!addData.country) {
            setError({ ...error, country: "Please select country" })
        } else if (!addData.city) {
            setError({ ...error, city: "Please select city" })
        } else if (!addData.address) {
            setError({ ...error, address: "Please enter address" })
        } else {
            setIsLoading(true)
            const response = await lia_agent_update_profile(
                image,
                addData.name,
                addData.email,
                addData.gender,
                country_Code,
                phone_number,
                addData.country,
                landline_country_Code,
                LandingNo,
                addData.address,
                addData.licenseNo,
                addData.expiryDate,
                addData.location,
                addData.Profession,
                addData.city,
                link,
                addData.description
            )
            if (response.code == 200) {
                setIsLoading(false)
                window.location.href = "/LIA/workplace"
            } else {
                setIsLoading(false)
                setError(response.message)
            }
        }

    }



    useEffect(() => {
        getAllCityList()
    }, [addData.country])
    const getAllCityList = async () => {
        let response = await all_city_listing(addData.country)
        setAllCityList(response.result)
    }
    // image upload 
    const [image, setImage] = useState()
    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    // ***************** Error Msg ******************         
    const [submitErr, setSubmitErr] = useState()


    // ***************  Error MSg *************************


    const [isError, set_isError] = useState({
        EmailErrorMsg: "", NameErrorMsg: "",
        PhoneNoErrorMsg: "", LandlineNoErrorMsg: "",
        AddressErrorMsg: "", GenderErrorMsg: "",
        CountryErrorMsg: "", LicenseNoErrorMsg: "",
        LicenseDateErrorMsg: "",
        isDisabledName: false,
        isDisabledEmail: false,
        isDisabledPhoneNo: false,
        isDisabledLandlineNo: false,
        isDisabledLicenseNo: false,
        isDisabledLicenseDate: false,
        isDisabledCountry: false,
        isDisabledGender: false,
        isDisabledAddress: false,
        isDisabled: false
    })

    //**************************************************** */



    const validForm = (fieldName, Value) => {

        let EmailErrorMsg = isError.EmailErrorMsg
        let isDisabledEmail = isError.isDisabledEmail

        let NameErrorMsg = isError.NameErrorMsg
        let isDisabledName = isError.isDisabledName
        let GenderErrorMsg = isError.GenderErrorMsg
        let isDisabledGender = isError.isDisabledGender
        let PhoneNoErrorMsg = isError.PhoneNoErrorMsg
        let isDisabledPhoneNo = isError.isDisabledPhoneNo

        let LandlineNoErrorMsg = isError.LandlineNoErrorMsg
        let isDisabledLandlineNo = isError.isDisabledLandlineNo
        let AddressErrorMsg = isError.AddressErrorMsg
        let isDisabledAddress = isError.isDisabledAddress
        let LicenseNoErrorMsg = isError.LicenseNoErrorMsg
        let isDisabledLicenseNo = isError.isDisabledLicenseNo
        let CountryErrorMsg = isError.CountryErrorMsg
        let isDisabledCountry = isError.isDisabledCountry
        let LicenseDateErrorMsg = isError.LicenseDateErrorMsg
        let isDisabledLicenseDate = isError.isDisabledLicenseDate



        switch (fieldName) {
            case "email":
                EmailErrorMsg = validateEmail(Value).error
                isDisabledEmail = validateEmail(Value).isDisabled

                break;
            case "name":
                NameErrorMsg = validateName(Value).error
                isDisabledName = validateName(Value).isDisabled

                break;
            case "address":
                AddressErrorMsg = validateAddress(Value).error
                isDisabledAddress = validateAddress(Value).isDisabled

                break;
            case "phoneNo":
                PhoneNoErrorMsg = validatePhone(Value).error
                isDisabledPhoneNo = validatePhone(Value).isDisabled

                break;
            case "landlineNo":
                LandlineNoErrorMsg = validatePhone(Value).error
                isDisabledLandlineNo = validatePhone(Value).isDisabled

                break;
            case "licenseDate":
                LicenseDateErrorMsg = validateNumber(Value).error
                isDisabledLicenseDate = validateNumber(Value).isDisabled

                break;

            default:
                break;
        }

        set_isError((prev) => {
            return ({
                ...prev, EmailErrorMsg: EmailErrorMsg,
                isDisabledEmail: isDisabledEmail,
                NameErrorMsg: NameErrorMsg,
                isDisabledName: isDisabledName,
                GenderErrorMsg: GenderErrorMsg,
                isDisabledGender: isDisabledGender,
                PhoneNoErrorMsg: PhoneNoErrorMsg,
                isDisabledPhoneNo: isDisabledPhoneNo,
                LandlineNoErrorMsg: LandlineNoErrorMsg,
                isDisabledLandlineNo: isDisabledLandlineNo,
                AddressErrorMsg: AddressErrorMsg,
                isDisabledAddress: isDisabledAddress,
                LicenseNoErrorMsg: LicenseNoErrorMsg,
                isDisabledLicenseNo: isDisabledLicenseNo,
                LicenseDateErrorMsg: LicenseDateErrorMsg,
                isDisabledLicenseDate: isDisabledLicenseDate,
                CountryErrorMsg: CountryErrorMsg,
                isDisabledCountry: isDisabledCountry
            })
        })


    }


    const handleLicenseExpiry = (expiryDate) => {
        let name = "expiryDate"
        setAddData({ ...addData, [name]: expiryDate });
    }
    // ********************************************************
    const handleCancle = () => {
        router.push("/LIA/workplace")
    }
    const handleAddress = async (e) => {
        let name = e.target.name
        let value = e.target.value
        setAddData((prev) => {
            return {
                ...prev,
                location: value,
                LocationStatus: false
            }
        })
        let payload = {
            input: value,
            location: {
                lat: "28.6508353", lng: "77.267595"
            },
            key: Location_key,
            radius: '500'
        }


        if (value.length >= 5) {
            let getValue = await placeAutoComplete(payload)
            setAddData((prev) => {
                return {
                    ...prev,
                    Suggestion: getValue
                }
            })
        }
        else {
            setAddData((prev) => {
                return {
                    ...prev,
                    Suggestion: []
                }
            })
          }

    }
    const onClickItem = async (item) => {
        setAddData((prev) => {
            return {
                ...prev,
                location: item.description,
                address: item.description,
                Suggestion: [],
                LocationStatus: true
            }
        })
        let payload = {
            key: Location_key,
            place_id: item.place_id
        }
        // let getLATLong = await placeDetails(payload)
        // let type = getLATLong.address_components.map(item => {
        //     switch (item.types[0]) {
        //         case "country":
        //             setAddData((prev) => {
        //                 return {
        //                     ...prev,
        //                     country: item.long_name,
        //                 }
        //             })
        //             break;

        //         case "locality":
        //             setAddData((prev) => {
        //                 return {
        //                     ...prev,
        //                     city: item.long_name,
        //                 }
        //             })
        //             break;
        //     }
        // })


    };

    return (
        <div
            className={`tab-pane fade shadow rounded ${active ? "show active " : ""
                } `}
            id={activeTab}
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
        >
            <div className={styles.rightPageDetail}>
                <div className={styles.rightBox}>
                    <div className={styles.contentWrapper}>
                        <div className="container-fuild">
                            <div className="row">
                                <div className="col-md-12 m-auto">
                                    <h3 className="">My Profile</h3><span style={{ color: "red" }}>{submitErr}</span>
                                    <div className={styles.formArea}>
                                        <form  >
                                            {/* <div class="row">
                                    <h4 className="col-md-12">Add Personal Details </h4>
                                </div> */}
                                            <div className="row">
                                                <div className="col-md-6">


                                                    <h4> Profile Picture </h4>
                                                    <div className={styles.NameDetail}>

                                                        <label htmlFor={`photo`}>

                                                            <input id={`photo`} type="file" onChange={handleImageChange} style={{ display: "none" }} accept=".pdf, .jpeg , .jpg ,.png" />
                                                            <div className={styles.avatarUpload}>
                                                                <div className={styles.avatarPreview}>
                                                                    <img onChange={handleImageChange} src={image ? image : "/images/camera.svg"} />
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-12">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Full Name <span className={styles.required}>*</span> <span className={styles.errorMsg}> {!addData.name ? error.name : ""}</span></label>
                                                        <InputFiled
                                                            type_name="text"
                                                            placeholder_name="Full Name"
                                                            inputId="Name"
                                                            input_name="name"
                                                            onChange={(e) => { setAddData((prev) => { return ({ ...prev, name: e.target.value }) }); validForm("name", addData.name) }}
                                                            value={addData.name}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>License/Membership Number<span className={styles.errorMsg}> {!addData.licenseNo ? error.licenseNo : ""}</span></label>
                                                        <InputFiled
                                                            type_name="text"
                                                            placeholder_name=""
                                                            inputId="Membership"
                                                            input_name="membership"
                                                            onChange={(e) => { setAddData((prev) => { return ({ ...prev, licenseNo: e.target.value }) }); validForm("licenseNo", addData.licenseNo) }}
                                                            value={addData.licenseNo}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>License Expiry Date<span className={styles.errorMsg}> {!addData.expiryDate ? error.expiryDate : ""}</span></label>

                                                        <DatePicker placeholderText="DD/MM/YYYY"
                                                            selected={addData.expiryDate ? new Date(addData.expiryDate) : null}
                                                            //  onChange={(date) => {setStartDate(date)}}
                                                            onChange={date => handleLicenseExpiry(date)}
                                                            // onChange={(e) => { setAddData((prev) => { return ({ ...prev, expiryDate: e }) })}}
                                                            value={addData.expiryDate}
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                                        <label>Landline Number<span className={styles.errorMsg}> {!addData.landlineNo ? error.landlineNo : ""}</span></label>

                                                        <PhoneInput
                                                            prefix="+"
                                                            country={String(landline_country_Code).toLowerCase()}
                                                            value={landlineNo}
                                                            name="landlineNo"
                                                            placeholder="Enter Landline Number "
                                                            onChange={(phone, country_name, data, value) => { handleOnchangeLandline(phone, country_name, data, value); }}
                                                            countryCodeEditable={false}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                                        <label>Phone Number<span className={styles.errorMsg}> {!addData.phoneNo ? error.phoneNo : ""}</span></label>

                                                        <PhoneInput
                                                            prefix="+"
                                                            country={String(country_Code).toLowerCase()}
                                                            // country={"in"}
                                                            value={phoneNo}
                                                            placeholder="Enter phone number"
                                                            name="phoneNo"
                                                            onChange={(phone, country_name, data, value) => { handleOnchangePhone(phone, country_name, data, value); }}
                                                            countryCodeEditable={false}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Gender<span className={styles.errorMsg}> {!addData.gender ? error.gender : ""}</span></label>
                                                        <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, gender: e.target.value }) }) }}
                                                            value={addData.gender} name="gender" size="0">
                                                            <option value="">Select </option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Email<span className={styles.errorMsg}> {!addData.email ? error.email : ""}</span></label>
                                                        <InputFiled
                                                            disabled
                                                            type_name="email"
                                                            placeholder_name="email"
                                                            inputId="Email"
                                                            input_name="email"
                                                            // onChange={(e) => { setAddData((prev) => { return ({ ...prev, email: e.target.value }) }); validForm("email", addData.email) }}
                                                            value={addData.email}
                                                            readonly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>My Profession<span className={styles.errorMsg}> {!addData.Profession ? error.Profession : ""}</span></label>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className={styles.radio}>
                                                                    <input id="radio-1" name="radio" type="radio" value="LIA"
                                                                        checked={addData.Profession == "LIA"}
                                                                        onChange={(e) => { setAddData((prev) => { return ({ ...prev, Profession: e.target.value }) }) }}
                                                                    />
                                                                    <label for="radio-1" className={styles.radioLabel}>LIA</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className={styles.radio}>
                                                                    <input id="radio-2" name="radio" type="radio"
                                                                        checked={addData.Profession == "lawyer"}
                                                                        onChange={(e) => { setAddData((prev) => { return ({ ...prev, Profession: e.target.value }) }) }}
                                                                        value="lawyer"
                                                                    />
                                                                    <label for="radio-2" className={styles.radioLabel}>Lawyer</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className={`col-md-12 ${styles.LinkSec}`}>
                                                        <div className={`form-group ${styles.fromGroup}`}>

                                                            <LinkLicenseMembership
                                                                open={isOpen}
                                                                OpenModal={OpenModal}
                                                                closeModal={CloseModal}
                                                                link={link}
                                                                setLink={setLink}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <h4 className="col-md-12"><b>Physical/Office Address</b></h4>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Enter Your Location</label>
                                                        <InputFiled
                                                            type_name="text"
                                                            placeholder_name="Your Location"
                                                            onChange={(e) => { handleAddress(e) }}
                                                            value={addData.location}
                                                        />
                                                        {(addData.location?.length > 1 && !addData.LocationStatus) && (
                                                            <ul className={addData.Suggestion?.length === 0 ? "" : styles.list} >
                                                                {addData.Suggestion && addData.Suggestion.map(item => (
                                                                    <li onClick={() => onClickItem(item)} >{item.description}</li>

                                                                ))}

                                                            </ul>
                                                        )}

                                                    </div>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <h4 className="col-md-12">Or Mention your address below</h4>
                                            </div>
                                            <div class="row">

                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Address<span className={styles.errorMsg}> {!addData.address ? error.address : ""}</span></label>
                                                        <InputFiled
                                                            type_name="text"
                                                            placeholder_name="Address"
                                                            inputId="Address"
                                                            input_name="address"
                                                            onChange={(e) => { setAddData((prev) => { return ({ ...prev, address: e.target.value }) }); validForm("address", addData.address) }}
                                                            value={addData.address}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Country<span className={styles.errorMsg}> {!addData.country ? error.country : ""}</span></label>

                                                        <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, country: e.target.value }) }) }}
                                                            value={addData.country} name="country" size="0">
                                                            <option value="">Select country</option>
                                                            {
                                                                countryList?.map((li, index) => <option key={index} value={li._id}>{li.countryName}</option>)
                                                            }

                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label> City<span className={styles.errorMsg}> {!addData.city ? error.city : ""}</span></label>
                                                        <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, city: e.target.value }) }) }}
                                                            value={addData.city} name="city" size="0">
                                                            <option value="">Select city</option>
                                                            {
                                                                cityList?.map((data) => data.map((li, index) => {
                                                                    return (
                                                                        <>

                                                                            <option key={index} value={li._id}>{li.cityName}</option>
                                                                        </>
                                                                    )
                                                                }
                                                                ))
                                                            }
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-12">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>About me</label>
                                                        <textarea
                                                            name="description"
                                                            onChange={(e) => { setAddData((prev) => { return ({ ...prev, description: e.target.value }) }) }}
                                                            value={addData.description}
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
                                                            <button onClick={handleCancle} className={styles.SaveBtn}>Cancel</button>
                                                        </div>
                                                        <div className="col-md-4">
                                                            {isLoading ? <button disabled className={styles.SandBtn} onClick={liaAgentProfileUpdate}> <> <i class="fa fa-refresh fa-spin"></i>  Loading </> </button>
                                                                : <button className={styles.SandBtn} onClick={liaAgentProfileUpdate}>Save</button>}
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
                </div>
            </div>
        </div>
    )
}
export default ClientProfile