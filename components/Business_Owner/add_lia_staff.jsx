import { Fragment, useEffect, useState } from "react";
import InputFiled from "../../components/Auth/Common/input_filed";
import styles from "../../styles/form.module.scss"
import { useForm } from "react-hook-form";
import { Register } from "../Common/validation/index";
import LinkLicenseMembership from "../Common/Modals/link_license_membership";
import { admin_allCountry_list, businees_owner_add_staff, businees_owner_role_listing, get_all_cities } from '../helpers/business_owner_service';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import TimezoneSelect from "react-timezone-select"
import moment from "moment";
import router from "next/router";
import SuccessModal from "../Common/Modals/success_modal";
import { Location_key } from "../helpers/api_url";
import { placeAutoComplete, placeDetails } from "../geolocation";

const AddLiaStaff = () => {

    const [allRole, setAllRole] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [link, setLink] = useState()
    const [countryList, setCountryList] = useState()
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState(false)
    const [allAccess, setAllAccess] = useState([])
    const [activeDays, setActiveDays] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [suggestion, setSuggestion] = useState([])
    const [cityList, setAllCity] = useState([])

    const [keyData, setKeyData] = useState({
        fullName: "",
        demoImg: "",
        addBy: "",
        role: "",
        licenseNo: "",
        expiryDate: "",
        joiningDate: "",
        landlineNumber: "", landline_country_Code: "",
        phoneNumber: "", country_Code: "",
        email: "",
        country: "",
        city: "",
        address: "", lat: "", long: "",
        startTime: "", startTimeMdn: "",
        endTime: "", endTimeMdn: "",
        timeZone: "", image: ""
    });
    const [error, setErrors] = useState({
        expiryDate: "", joiningDate: "",
        addBy: "",
        startTime: "", endTime: "",
        startTimeMdn: "", endTimeMdn: "",
        responseMsg: "", phoneNo: "",
        country: "", city: "", allAccess: "",
        activeDays: "", timezone: ""
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
    } = useForm();

    const handleChange = async (event) => {
        event.persist();
        setKeyData((keyData) =>
        ({
            ...keyData,
            [event.target.name]: event.target.value,

        }));

        setErrors({ ...error, [event.target.name]: "", responseMsg: "" })
        let value = event.target.value
        if (event.target.name == "address") {
            let payload = {
                input: value,
                location: {
                    lat: "28.6508353", lng: "77.267595"
                },
                key: Location_key,
                radius: '100'
            }
            if (value.length >= 3) {
                let getValue = await placeAutoComplete(payload)
                setSuggestion(getValue)

            }
            else {
                setSuggestion([])
            }
        }

        else if (event.target.name == "country") {
            let response = await get_all_cities(value)
            if (response.code == 200) {
                setAllCity(response.result)
            }
        }

    };
    const onClickItem = async (item) => {
        setSuggestion([])
        setKeyData((prev) => {
            return {
                ...prev,
                address: item.description,
            }
        })
        let payload = {
            key: Location_key,
            place_id: item.place_id
        }
        let getLATLong = await placeDetails(payload)
        setKeyData((prev) => {
            return {
                ...prev,
                lat: getLATLong.geometry.location.lat,
                long: getLATLong.geometry.location.lng
            }
        })


    };
    let searchingList = suggestion.map((item, index) => {
        return (
            <ul className={styles.searchingList}>
                <li style={{ cursor: "pointer" }} onClick={() => { onClickItem(item) }}>
                    <span>{item?.description}</span>
                </li>
            </ul>
        )
    })
    const handleRole = (e) => {
        let index = e.target.selectedIndex
        const optionElement = e.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id');
        setKeyData({ ...keyData, role: optionElementId, addBy: e.target.value })
        setErrors({ ...error, addBy: "" })

    }
    const OpenModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };
    const CloseModal = (e) => {
        router.push("/busines/owner/lia's")
        setIsOpen(false);
    };
    const handleImageChange = (e) => {
        setKeyData({ ...keyData, demoImg: URL.createObjectURL(e.target.files[0]), image: e.target.files[0] })
    }
    useEffect(() => {
        roleListing()
        GetCountryList()
    }, [])

    const roleListing = async () => {
        let perPage = 10;
        let page = 1
        let response = await businees_owner_role_listing(perPage, page)
        if (response.code == 200) {
            setAllRole(response.result)
        }
    }
    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
    }

    const [accessRightsList, setAccessRightsList] = useState([
        { name: "Dashboard", id: 11, status: false },
        { name: "View Clients", id: 12, status: false },
        { name: "Reports", id: 13, status: false },
        { name: "CreateStaff", id: 14, status: false },
        { name: "Accounts", id: 15, status: false },
        { name: "Settings", id: 16, status: false },
        { name: "Client", id: 17, status: false },
        // { name: "ClientVisa", id: 18, status: false },
    ])
    const [allDaysList, setAllDaysList] = useState([
        { name: "Monday", id: 1, status: false },
        { name: "Tuesday", id: 2, status: false },
        { name: "Wednesday", id: 3, status: false },
        { name: "Thursday", id: 4, status: false },
        { name: "Friday", id: 5, status: false },
        { name: "Saturday", id: 6, status: false },
        { name: "Sunday", id: 7, status: false },
    ])

    const onCheckAccess = (data) => {
        let allData = accessRightsList;
        allData.map((item, index) => {
            if (item.id == data.id) {
                item.status = !item.status
            }
        })
        setAccessRightsList([...allData])
        let tempdata = accessRightsList?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.name)
            }
            return acc;
        }, [])
        setAllAccess(tempdata);
        // if (accessRightsList.length == tempdata.length) {
        //     setIsAllAccessChecked(true)
        // } else {
        //     setIsAllAccessChecked(false)
        // }
    }

    const onCheckDays = (data) => {
        let allData = allDaysList;
        allData.map((item, index) => {
            if (item.id == data.id) {
                item.status = !item.status
            }
        })
        setAllDaysList([...allData])
        let tempdata = allDaysList?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.name)
            }
            return acc;
        }, [])
        setActiveDays(tempdata);
        // if (allDaysList.length == tempdata.length) {
        //     setIsAllDaysChecked(true)
        // } else {
        //     setIsAllDaysChecked(false)
        // }
    }
    const handleLicenseExpiry = (licenseExpiry) => {
        let name = "expiryDate"
        setKeyData({ ...keyData, [name]: licenseExpiry });
        setErrors({ ...error, expiryDate: "" })

    }
    const handleOnchangeLandline = (phone, country, e, data, value) => {
        let country_code = `+${country.dialCode}`
        setKeyData({ ...keyData, landlineNumber: phone, landline_country_Code: country_code })

    }
    const handleOnchangePhone = (phone, country) => {
        let country_code = `+${country.dialCode}`
        setKeyData({ ...keyData, phoneNumber: phone, country_Code: country_code })
        setErrors({ ...error, phoneNo: "" })

    }
    const onSubmit = async (event) => {
        // event.preventDefault();
        let LicensExpiry = moment(keyData.licenseExpiry).format("YYYY/MM/DD")
        let Dob = moment(keyData.dob).format("YYYY/MM/DD")
        let Pnumber = keyData.phoneNumber?.substring(keyData.country_Code.length - 1)
        let Lnumber = keyData.landlineNumber?.substring(keyData.landline_country_Code.length - 1)
        const formdata = new FormData();
        formdata.append("image", keyData.image)
        formdata.append("fullName", keyData.fullName)
        formdata.append("addBy", "businessOwner")
        formdata.append("role", keyData.role)
        formdata.append("roleId", keyData.addBy)
        formdata.append("expiryDate", keyData.expiryDate)
        formdata.append("licenseNo", keyData.licenseNo)
        formdata.append("phoneNumberCountryCode", keyData.country_Code)
        formdata.append("phoneNumber", Pnumber)
        formdata.append("lineNumberCountryCode", keyData.landline_country_Code)
        formdata.append("landlineNumber", Lnumber)
        formdata.append("email", keyData.email)
        keyData.country && formdata.append("country", keyData.country)
        keyData.country && formdata.append("address", keyData.address)
        formdata.append("activeDays", activeDays)
        formdata.append("startTime", keyData.startTime + " " + keyData.startTimeMdn)
        formdata.append("endTime", keyData.endTime + " " + keyData.endTimeMdn)
        formdata.append("timeZone", keyData.timeZone.value ? keyData.timeZone.value : keyData.timeZone)
        formdata.append("lat", keyData.lat)
        allAccess.length != 0 && formdata.append("acessRight", allAccess)
        link && formdata.append("link", link)
        formdata.append("joiningDate", keyData.joiningDate)
        formdata.append("long", keyData.long)
        formdata.append("city", keyData.city)

        // formdata.append("region", keyData.region)

        // *******************************************

        if (!keyData.addBy) {
            setErrors({ ...error, addBy: "Please select role" })
        } else if (!keyData.expiryDate) {
            setErrors({ ...error, expiryDate: "Please select license expiry date" })
        } else if (!keyData.joiningDate) {
            setErrors({ ...error, joiningDate: "Please select joining date" })
        }
        else if (!keyData.phoneNumber || keyData.phoneNumber.length < 10) {
            setErrors({ ...error, phoneNo: "Please enter valid phone number" })
        } else if ((keyData.country == "Select Country" || keyData.country == '')) {
            setErrors({ ...error, country: "Please select country" })
        } else if (keyData.city == "Select Country" || keyData.city == '') {
            setErrors({ ...error, city: "Please select city" })
        } else if ( allAccess.length == 0) {
            setErrors({ ...error, allAccess: "Please select access rights " })
        } else if (activeDays.length == 0) {
            setErrors({ ...error, activeDays: "Please select active days" })
        } else if (!keyData.timeZone) {
            setErrors({ ...error, timezone: "Please select timezone" })
        } else if (!keyData.startTime) {
            setErrors({ ...error, startTime: "Please select start time" })
        } else if (!keyData.startTimeMdn) {
            setErrors({ ...error, startTimeMdn: "Please select meridiem" })
        } else if (!keyData.endTime) {
            setErrors({ ...error, endTime: "Please select end time" })
        } else if (!keyData.endTimeMdn) {
            setErrors({ ...error, endTimeMdn: "Please select end meridiem" })
        }
        else if (keyData.endTime) {
            // if ((keyData.startTimeMdn == "AM" && keyData.endTimeMdn == "AM") && addData.startTime + addData.startTimeMdn !== "12:00PM" ) {
            //     console.log("keyData",keyData.endTime < keyData.startTime)
            //     if (keyData.endTime <= keyData.startTime) {
            //     console.log("keyData")

            //         setErrors({ ...error, endTime: "Please select valid end time" })
            //     }
            //     else{
            //         setErrors({ ...error, endTime: "" })

            //     }
            // }
            // else if ((keyData.startTime + keyData.startTimeMdn == "12:00PM") && keyData.endTimeMdn !== "PM") {
            //     console.log("keyData")

            //     setErrors({ ...error, endTime: "Please select valid end time" })

            // }
            // else if (keyData.startTimeMdn == "PM" && keyData.endTimeMdn !== "PM") {
            //     console.log("keyData")

            //     setErrors({ ...error, endTime: "Please select valid end time" })

            // }
            // else {

            setIsLoading(true)
            let response = await businees_owner_add_staff(formdata)
            if (response.code == 200) {
                setIsLoading(false)
                setOpen(true)
                setMessage("Staff Created Successfully")
            } else {
                setIsLoading(false)
                setErrors({ ...error, responseMsg: response.message })
                window.scrollTo(0, 0)
            }
            // }
        }

    }
    const onError = (data) => {
        // setIsLoading("");
    };
    let roleList = allRole?.map((li, i) => {
        return (
            <option key={i} id={li.role} value={li._id}>{li.role === "liaAgent" ? "LIA Agent" : li.role == "manager" ? "Manager" : li.role == "worker" ? "Worker" : li.role}</option>
        )
    })
    const closeModal = (e) => {
        e.preventDefault()
        router.push("/busines/owner/allStaffList")
    }
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className="">Add New Staff</h3>
                            <div className={styles.formArea}>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 px-0">

                                            <h4><b>Basic Details</b></h4    >
                                            <h4 className="text-center" style={{ color: "red" }}> {""}</h4>

                                            {/* <h5 style={{ color: "#00ED97" }}>Disable Staff Member</h5> */}
                                            <div className={styles.NameDetail}>
                                                <label htmlFor={`photo`}>

                                                    <input id={`photo`} type="file" onChange={handleImageChange} style={{ display: "none" }} accept=".pdf, .jpeg , .jpg ,.png" />
                                                    <div className={styles.avatarUpload}>
                                                        <h5>  Profile Picture </h5>
                                                        <div className={styles.avatarPreview}>
                                                            <img onChange={handleImageChange} src={keyData.demoImg ? keyData.demoImg : "/images/camera.svg"} />
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className={`col-md-6 ${styles.staffMemberStatus}`}>
                                            {/* <a>Disable Staff Member</a> */}
                                            <h2 style={{ fontSize: "1.5rem", color: "red" }}>{error.responseMsg}</h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col-md-12 px-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Full Name <span className={styles.required}>*</span>
                                                    <span className={styles.errorMsg}> {errors.fullName?.message}</span>
                                                </label>
                                                <InputFiled
                                                    type_name="fullName"
                                                    placeholder_name="Your Name"
                                                    inputId="fullName"
                                                    input_name="fullName"
                                                    value={keyData.fullName.trim()}
                                                    register={register("fullName", {
                                                        ...Register.Name,
                                                        onChange: (e) => handleChange(e),
                                                    })}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col-md-6 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>

                                                <label>Role
                                                    <span className={styles.errorMsg}> {error.addBy}</span>
                                                </label>

                                                <select class="form-control"
                                                    onChange={(e) => { handleRole(e) }}
                                                    value={keyData.addBy} name="addBy" size="0">
                                                    <option value="">Select </option>
                                                    {roleList}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6 pr-0">

                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <LinkLicenseMembership
                                                    open={isOpen}
                                                    OpenModal={OpenModal}
                                                    closeModal={CloseModal}
                                                    link={link}
                                                    setLink={setLink}
                                                    style={styles} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col-md-6 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label> Licence/Membership Number
                                                    <span className={styles.errorMsg}> {errors.licenseNo?.message}</span>
                                                </label>

                                                <InputFiled
                                                    type_name="text"
                                                    name="licenseNo"
                                                    input_name="licenseNo"
                                                    placeholder_name=" Enter Licence/Membership Number"
                                                    value={keyData.licenseNo}
                                                    register={register("licenseNo", {
                                                        ...Register.licenseNo,
                                                        onChange: (e) => handleChange(e),
                                                    })}
                                                    maxLength={9}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Licence Expiry Date
                                                    <span className={styles.errorMsg}> {error.expiryDate}</span>
                                                </label>

                                                <DatePicker
                                                    className="form-control"
                                                    name="expiryDate"
                                                    selected={keyData.expiryDate ? new Date(keyData.expiryDate) : null}
                                                    dateFormat="MM/dd/yyyy"
                                                    dropdownMode="scroll"
                                                    minDate={new Date()}
                                                    dateFormatCalendar="MMMM"
                                                    yearDropdownItemNumber={15}
                                                    scrollableYearDropdown={true}
                                                    onChange={(date) => handleLicenseExpiry(date)}
                                                    onChangeRaw={(e) => { e.preventDefault() }}
                                                    autoComplete="off"
                                                    value={keyData.expiryDate}
                                                    showYearDropdown
                                                />
                                                <img src="/images/calendar.svg" alt="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col-md-6 pl-0">
                                            <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                                <label>Landline Number
                                                </label>
                                                <PhoneInput
                                                    country={'in'}
                                                    value={keyData.landlineNumber}
                                                    name="landlineNo"
                                                    placeholder="Enter Landline Number "
                                                    onChange={(phone, country_name, data, value) => { handleOnchangeLandline(phone, country_name, data, value); }}
                                                    disableCountryCode={false}
                                                    copyNumbersOnly={false}
                                                    disableCountryGuess={true}
                                                    countryCodeEditable={false}
                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-0">
                                            <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                                <label>Phone Number
                                                    <span className={styles.errorMsg}> {error.phoneNo}</span></label>
                                                <PhoneInput
                                                    country={'in'}
                                                    value={keyData.phoneNumber}
                                                    placeholder="Enter phone number"
                                                    name="phoneNo"
                                                    onChange={(phone, country_name, data, value) => { handleOnchangePhone(phone, country_name, data, value); }}
                                                    disableCountryCode={false}
                                                    copyNumbersOnly={false}
                                                    disableCountryGuess={true}
                                                    countryCodeEditable={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="col-md-6 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Date of Joining
                                                    <span className={styles.errorMsg}> {error.joiningDate}</span>
                                                </label>
                                                <DatePicker
                                                    className="form-control"
                                                    name="joiningDate"
                                                    selected={keyData.joiningDate ? new Date(keyData.joiningDate) : null}
                                                    dateFormat="MM/dd/yyyy"
                                                    dropdownMode="scroll"
                                                    minDate={new Date()}
                                                    dateFormatCalendar="MMMM"
                                                    yearDropdownItemNumber={15}
                                                    scrollableYearDropdown={true}
                                                    onChange={(date) => { setKeyData((prev) => { return { ...prev, joiningDate: date } }); setErrors((prev) => { return { ...prev, joiningDate: "" } }) }}
                                                    onChangeRaw={(e) => { e.preventDefault() }}
                                                    autoComplete="off"
                                                    value={keyData.joiningDate}
                                                    showYearDropdown
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Email
                                                    <span className={styles.errorMsg}> {errors.email?.message}</span>
                                                </label>
                                                <InputFiled
                                                    type_name="text"
                                                    name="email"
                                                    input_name="email"
                                                    placeholder_name="Email Address"
                                                    value={keyData.email}
                                                    register={register("email", {
                                                        ...Register.Email,
                                                        onChange: (e) => handleChange(e),
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <h4 className="col-md-12 pl-0"><b> Office Address </b> </h4>

                                        <div className="col-md-6 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Country
                                                    <span className={styles.errorMsg}> {error.country}</span>
                                                </label>
                                                <select class="form-control"
                                                    onChange={(e) => {
                                                        handleChange(e)
                                                    }}
                                                    value={keyData.country} name="country" size="0">
                                                    <option value={null}> Select Country </option>
                                                    {
                                                        countryList?.map((li, index) => <option key={index} value={li?._id}>{li?.countryName}</option>)
                                                    }

                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-md-6 pr-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>City
                                                    <span className={styles.errorMsg}> {error.city}</span>
                                                </label>

                                                <select class="form-control"  onChange={(e) => {
                                                        handleChange(e)
                                                    }}
                                                    value={keyData.city} name="city" size="0">

                                                    <option> Select City</option>
                                                    {
                                                        cityList?.map((data) => data?.map((li, index) => <option key={index} value={li._id}>{li.cityName}</option>))
                                                    }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 pr-0">
                                            <div className={`form-group ${styles.fromGroup}`}>

                                                <label>Address
                                                    <span className={styles.errorMsg}> {errors.address?.message}</span> </label>
                                                <InputFiled
                                                    type_name="text"
                                                    name="address"
                                                    input_name="address"
                                                    placeholder_name="Enter Address"
                                                    value={keyData.address.trim()}
                                                    register={register("address", {
                                                        ...Register.Address,
                                                        onChange: (e) => handleChange(e),
                                                    })}
                                                />
                                                {searchingList}
                                            </div>
                                        </div>

                                    </div>
                                    {/* :::::::::::::::::::::::::::::::::::: Access Rights ::::::::::::::::::::::::::::::::::::::::::::::::::::       */}


                                    {
                                        <>
                                            <div class="row">
                                                <div className="col-md-12 px-0">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <h6> <b> Access Rights</b>

                                                        </h6> <span className={styles.errorMsg}> {allAccess.length == 0 ? error.allAccess : ""}</span>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                {accessRightsList?.map((li, i) => {
                                                    return (
                                                        <div className="col-md-3 px-1">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <div className={styles.CheckBox}>
                                                                    <input key={i} id={li.id} checked={li.status ? li.name : ""}
                                                                        onChange={() => { onCheckAccess(li) }} name={li.name} type="checkbox" />
                                                                    <label for={li.id} className={styles.checkboxLabel} style={{ color: "#0c101a" }}  >{li.name} </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </>
                                    }

                                    {/* ::::::::::::::::::::::::::: Active DAys :::::::::::::::::::::::::::: */}
                                    <div class="row">
                                        <div className="col-md-12 px-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <h6><b> Active Days </b> </h6>
                                                <span className={styles.errorMsg}> {activeDays.length == 0 ? error.activeDays : ""}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="row">
                                    <div className="col-md-3 px-1">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="selectAllDays" checked={isAllDaysChecked}
                                                    onChange={(e) => { onCheckSelectAllDays(e) }}
                                                    name="selectAllDays" type="checkbox" />
                                                <label for="selectAllDays" className={styles.checkboxLabel} style={{ color: "#0c101a" }} >Select All </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>  */}
                                    <div class="row">

                                        {allDaysList?.map((li, i) => {
                                            return (
                                                <div className="col-md-3 px-1">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <div className={styles.CheckBox}>
                                                            <input key={i} id={li.id} checked={li.status ? li.name : ""}
                                                                onChange={() => { onCheckDays(li) }} name={li.name} type="checkbox" />
                                                            <label for={li.id} className={styles.checkboxLabel} style={{ color: "#0c101a" }}  >{li.name}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <div class="row mt-2">
                                        <div className="col-md-2 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Starting From

                                                </label>
                                                <select class="form-control" onChange={(e) => {
                                                    handleChange(e);
                                                    setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                                }} name="startTime" value={keyData.startTime} size="0">
                                                    <option value="">Start Time</option>
                                                    <option value="01:00">01:00</option>
                                                    <option value="02:00">02:00</option>
                                                    <option value="03:00">03:00</option>
                                                    <option value="04:00">04:00</option>
                                                    <option value="05:00">05:00</option>
                                                    <option value="06:00">06:00</option>
                                                    <option value="07:00">07:00</option>
                                                    <option value="08:00">08:00</option>
                                                    <option value="09:00">09:00</option>
                                                    <option value="10:00">10:00</option>
                                                    <option value="11:00">11:00</option>
                                                    <option value="11:59">12:00</option>

                                                </select>

                                                <span className={styles.errorMsg}> {error.startTime}</span>
                                            </div>

                                        </div>
                                        <div className="col-md-2 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label style={{ height: "16px" }}> </label>
                                                <select class="form-control" onChange={(e) => {
                                                    handleChange(e);
                                                    setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                                }} name="startTimeMdn" value={keyData.startTimeMdn} size="0">
                                                    <option value="" >Select</option>
                                                    <option value="AM">AM</option>
                                                    <option value="PM">PM</option>
                                                </select>
                                                <span className={styles.errorMsg}> {error.startTimeMdn}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Till
                                                </label>
                                                <select class="form-control" onChange={(e) => {
                                                    handleChange(e);
                                                    setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                                }} name="endTime" value={keyData.endTime} size="0">
                                                    <option value="">End Time</option>
                                                    <option value="01:00">01:00</option>
                                                    <option value="02:00">02:00</option>
                                                    <option value="03:00">03:00</option>
                                                    <option value="04:00">04:00</option>
                                                    <option value="05:00">05:00</option>
                                                    <option value="06:00">06:00</option>
                                                    <option value="07:00">07:00</option>
                                                    <option value="08:00">08:00</option>
                                                    <option value="09:00">09:00</option>
                                                    <option value="10:00">10:00</option>
                                                    <option value="11:00">11:00</option>
                                                    <option value="11:59">11:59</option>

                                                </select>

                                                <span className={styles.errorMsg}> {error.endTime}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-2 pl-0">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label style={{ height: "16px" }}></label>
                                                <select class="form-control" onChange={(e) => {
                                                    handleChange(e);
                                                    setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                                }} name="endTimeMdn" value={keyData.endTimeMdn} size="0">
                                                    <option value="">Select</option>
                                                    <option value="AM">AM</option>
                                                    <option value="PM">PM</option>
                                                </select>
                                                <span className={styles.errorMsg}> {!keyData.endTimeMdn ? error.endTimeMdn : ""}</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Timezone

                                                </label>

                                                <TimezoneSelect
                                                    name="timezone"
                                                    value={keyData.timeZone}
                                                    onChange={(val) => { setKeyData((prev) => { return ({ ...prev, timeZone: val }) }) }}
                                                />
                                                <span className={styles.errorMsg}> {!keyData.timeZone ? error.timezone : ""}</span>
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
                                                    <button onClick={() => { route.push("/busines/owner/dashboard") }} className={styles.SaveBtn}>Cancel</button>
                                                </div>
                                                <div className="col-md-4 pr-0">
                                                    {isLoading ? <button disabled type="submit" className={styles.SandBtn} > <> <i class="fa fa-refresh fa-spin"></i>  Loading </>  </button>
                                                        : <button type="submit" className={styles.SandBtn} onClick={handleSubmit(onSubmit, onError)}>Save </button>
                                                    }
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
            <SuccessModal open={open} message={message} closeModal={closeModal} />
        </Fragment>

    )
}

export default AddLiaStaff;

