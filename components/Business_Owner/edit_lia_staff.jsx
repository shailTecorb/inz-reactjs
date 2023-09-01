import InputFiled from "../Auth/Common/input_filed"
import styles from "../../styles/form.module.scss"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect, useContext } from "react";
import router, { useRouter } from 'next/router';
import { businees_owner_update_staff, get_all_cities, businees_owner_role_listing, business_owner_view_staff, admin_allCountry_list } from "../helpers/business_owner_service"
import { validateEmail, validateName, } from "../Common/validation";
import moment from 'moment';
import axios from 'axios';
import TimezoneSelect from "react-timezone-select"
import LinkLicenseMembership from '../Common/Modals/link_license_membership';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IdContext } from "../MyContext/IdDetailsContext";
import { Register } from "../Common/validation/index";
import { useForm } from "react-hook-form";
import { Location_key } from "../helpers/api_url";
import { placeAutoComplete, placeDetails } from "../geolocation";

const EditLiaStaff = () => {
    const route = useRouter()
    const { StaffId, type } = useContext(IdContext)
    const [countryList, setCountryList] = useState()
    const [errorMsg, setErrorMsg] = useState("")
    const [cityList, setAllCity] = useState([])
    const [addData, setAddData] = useState({
        fullName: "",
        email: "",
        addBy: "",
        role: "",
        licenseNo: "",
        expiryDate: "",
        landlineNumber: "",
        landline_country_Code: "+1",
        phoneNumber: "",
        country_Code: "",
        gender: "",
        country: "", city: "",
        address: "", lat: "", long: "",
        dob: "",
        joiningDate: "",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        startTime: "", startTimeMdn: "",
        endTime: "", endTimeMdn: ""
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
    } = useForm();
    const [error, setErrors] = useState({
        role: "businessOwner",
        roleId: "",
        membershipNumber: "",
        licenseExpiry: "",
        gender: "",
        country: "",
        address: "",
        dob: "",
        timezone: "",
        startTime: "",
        startTimeMdn: "",
        endTime: "",
        endTimeMdn: "", joiningDate: ""
    })
    // ***************************************
    const [allRole, setAllRole] = useState()

    const [isOpen, setIsOpen] = useState(false);
    const [link, setLink] = useState()
    const [image, setImage] = useState()
    const [demoImg, setImageDomo] = useState()
    const [isAllDaysChecked, setIsAllDaysChecked] = useState(false)
    const [isAllAccessChecked, setIsAllAccessChecked] = useState(false)
    const [isAllSelected, setIsAllSelected] = useState(true)
    const [isAllSelectedDay, setIsAllSelectedDay] = useState(true)
    const [activeDays, setActiveDays] = useState([])
    const [allAccess, setAllAccess] = useState([])
    const [getAllActiveDays, setGetAllActiveDays] = useState([])
    const [getAllActiveAccess, setGetAllActiveAccess] = useState([])
    const [suggestion, setSuggestion] = useState([])
    const [allDaysList, setAllDaysList] = useState([
        { name: "Monday", id: 1, status: false },
        { name: "Tuesday", id: 2, status: false },
        { name: "Wednesday", id: 3, status: false },
        { name: "Thursday", id: 4, status: false },
        { name: "Friday", id: 5, status: false },
        { name: "Saturday", id: 6, status: false },
        { name: "Sunday", id: 7, status: false },
    ])
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
    const updateState = (data) => setAddData((state) => ({ ...state, ...data }));

    // view staff 
    useEffect(() => {
        edit_staff()
    }, [StaffId])

    const edit_staff = async () => {
        const response = await business_owner_view_staff(StaffId)
        if (response.code == 200) {
            let licenseExpiryDate = moment(response?.result?.expiryDate).format("L")
            let joiningDate = new Date(response?.result?.joiningDate);
            let strTime = response.result.startTime;
            let EndTime = response.result.endTime;
            let time = strTime?.replace('AM', '')
            let Etime = EndTime?.replace('AM', '')
            let StrMdn = strTime?.slice(strTime.length - 2, strTime.length);
            let EndMdn = EndTime?.slice(strTime.length - 2, strTime.length);
            setAddData((state) => ({
                ...state, ...response?.result,
                expiryDate: licenseExpiryDate, startTime: time?.replace('PM', ''),
                addBy: response.result.roleId._id, startTimeMdn: StrMdn, endTime: Etime?.replace('PM', ''), endTimeMdn: EndMdn
                , role: response.result.roleId.role,
                phoneNumber: String(response.result.phoneNumberCountryCode) + String(response.result.phoneNumber),
                landlineNumber: String(response.result.lineNumberCountryCode) + String(response.result.landlineNumber),
                country_Code: response.result.phoneNumberCountryCode,
                lat: response.result.loc?.coordinates[0],
                long: response.result.loc?.coordinates[1],
                // joiningDate:joiningDate ? joiningDate: null
            }))
            setImageDomo(response.result?.image)
            setGetAllActiveAccess(response.result?.acessRight)
            setGetAllActiveDays(response.result?.activeDays)
            let getData = accessRightsList;
            let getAccessRights = response.result?.acessRight
            getData.map((accessData) => {
                getAccessRights?.map((newData) => {
                    if (accessData.name == newData) {
                        accessData.status = true;
                    }
                })
            })
            setValue('fullName', response?.result?.fullName)
            setValue('licenseNo', response?.result?.licenseNo)
            setValue('email', response?.result?.email)
            setValue('address', response?.result?.address)
            allCity(response.result.country)
            setAccessRightsList([...getData])
            if (accessRightsList.length == getAccessRights.length) {
                setIsAllAccessChecked(true)
            }


            let AllDays = allDaysList;
            let getAllDays = response.result?.activeDays
            AllDays.map((accessData) => {
                getAllDays?.map((newData) => {
                    if (accessData.name == newData) {
                        accessData.status = true;
                    }
                })
            })
            setAllDaysList([...AllDays])
            // if (allDaysList.length == getAllDays.length) {
            //     setIsAllDaysChecked(true)
            // }
        }
        else if (response.code == 400) {
            router.push("/busines/owner/allStaffList")
        }
    }
    const OpenModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };
    const CloseModal = (e) => {
        // e.preventDefault();
        setIsOpen(false);
    };
    const handleOnchangePhone = (phone, country) => {
        let country_code = `+${country.dialCode}`
        setAddData({ ...addData, phoneNumber: phone, country_Code: country_code })
        setErrors({ ...error, phoneNo: "" })
    }
    const handleOnchangeLandline = (phone, country, e, data, value) => {
        let name = "phoneNo"
        let country_code = `+${country.dialCode}`
        setAddData({ ...addData, landlineNumber: phone, landline_country_Code: country_code })

    }
    useEffect(() => {
        GetCountryList()
        getGeoInfo()
    }, [])
    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
    }


    const handleChange = async (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value }, validForm(name, value));
        setErrors({ ...error, [name]: "" })
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
    }
    const allCity = async (country) => {
        let response = await get_all_cities(country)
        if (response.code == 200) {
            setAllCity(response.result)
        }
    }
    const handleImageChange = (e) => {
        setImageDomo(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }
    const onClickItem = async (item) => {
        setSuggestion([])
        setAddData((prev) => {
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
        setAddData((prev) => {
            return {
                ...prev,
                lat: getLATLong.geometry.location.lat,
                long: getLATLong.geometry.location.lng
            }
        })

    }
    let searchingList = suggestion.map((item, index) => {
        return (
            <ul className={styles.searchingList}>
                <li style={{ cursor: "pointer" }} onClick={() => { onClickItem(item) }}>
                    <span>{item?.description}</span>
                </li>
            </ul>
        )
    })

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
        if (allDaysList.length == tempdata.length) {
            setIsAllDaysChecked(true)
        } else {
            setIsAllDaysChecked(false)
        }
    }

    //:::::::::::::::::::::::; access rights////////////////////////// 

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
        if (accessRightsList.length == tempdata.length) {
            setIsAllAccessChecked(true)
        } else {
            setIsAllAccessChecked(false)
        }
    }

    //:::::::::::::::::::::::::::::::::::::::::::::::::::::select all days //////////////////////////////

    const onCheckSelectAllDays = (e) => {
        setIsAllSelectedDay(!isAllSelectedDay)
        let allData = allDaysList;
        allData.map((item, index) => {
            item.status = isAllSelectedDay
        })
        setIsAllDaysChecked(isAllSelectedDay)
        setAllDaysList([...allData])
        let tempdata = allDaysList?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.name)
            }
            return acc;
        }, [])

        setActiveDays(tempdata)
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    const onCheckSelectAllAccess = (e) => {
        setIsAllSelected(!isAllSelected);
        let allData = accessRightsList;
        allData.map((item, index) => {
            item.status = isAllSelected
        })
        setIsAllAccessChecked(isAllSelected)
        setAccessRightsList([...allData])
        let tempdata = accessRightsList?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.name)
            }
            return acc;
        }, [])
        setAllAccess(tempdata)
    }

    const validForm = (fieldName, Value) => {
        let FullNameErrorMsg = isError.fullNameErrorMsg
        let isDisabledFullName = isError.isDisabledfullName
        let EmailErrorMsg = isError.EmailErrorMsg
        let isDisableEmail = isError.isDisabledEmail


        switch (fieldName) {

            case "fullName":
                FullNameErrorMsg = validateName(Value).error
                isDisabledFullName = validateName(Value).isDisabled
                break;

            case "email":
                EmailErrorMsg = validateEmail(Value).error
                isDisableEmail = validateEmail(Value).isDisabled
                break;

            default:
                break;
        }
        set_isError((prev) => {
            return ({
                ...prev, fullNameErrorMsg: FullNameErrorMsg,
                isDisabledfullName: isDisabledFullName,
                EmailErrorMsg: EmailErrorMsg,
                isDisabledEmail: isDisableEmail,


            })
        })
    }
    const [isError, set_isError] = useState({
        fullNameErrorMsg: "",
        EmailErrorMsg: "",
        //  imageErrorMsg: "",
        roleIdError: "",
        membershipNumberErrMsg: "",
        licenseExpiryErrMsg: "",
        landlineNoErrMsg: "",
        phoneNoErrMsg: "",
        genderErrMsg: "",
        countryErrMsg: "",
        addressErrMsg: "",
        activedayErrMsg: "",
        dobErrMsg: "",
        isDisabledfullName: false,
        isDisabledEmail: false,
        isDisableroleId: false,
        isDisablemembershipNumber: false,
        isDisablelicenseExpiry: false,
        isDisablelandlineNo: false,
        isDisablephoneNo: false,
        isDisablegender: false,
        isDisablecountry: false,
        isDisableaddress: false,
        isDisableactiveday: false,
        isDisabletimezone: false,
        isDisabledob: false


    })
    const handleSave = async (get) => {
        let count = addData.country_Code.length
        let phone_number = addData.phoneNumber;
        phone_number = phone_number?.substring(count);
        let allDays = allDaysList.filter((data) => data.status).map((item) => item.name)
        let accessRight = accessRightsList.filter((data) => data.status).map((item) => item.name)
        let countL = addData.landline_country_Code?.length
        let phoneL_number = addData.landlineNumber;
        phoneL_number = phoneL_number?.substring(countL);

        let LicensExpiry = moment(addData.expiryDate).format("YYYY/MM/DD")
        const formdata = new FormData();
        formdata.append("staffId", StaffId)
        formdata.append("image", image)
        formdata.append("fullName", addData.fullName)
        formdata.append("addBy", "businessOwner")
        formdata.append("role", addData.role)
        formdata.append("roleId", addData.addBy)
        formdata.append("expiryDate", LicensExpiry)
        formdata.append("licenseNo", addData.licenseNo)
        formdata.append("phoneNumberCountryCode", addData.country_Code)
        formdata.append("phoneNumber", phone_number)
        formdata.append("lineNumberCountryCode", addData.landline_country_Code)
        formdata.append("landlineNumber", addData.landlineNumber == '91null' ? 0 : phoneL_number)
        formdata.append("email", addData.email)
        formdata.append("country", addData.country)
        formdata.append("address", addData.address)
        formdata.append("activeDays", allDays)
        formdata.append("startTime", addData.startTime + " " + addData.startTimeMdn)
        formdata.append("endTime", addData.endTime + " " + addData.endTimeMdn)
        formdata.append("timeZone", addData.timeZone.value ? addData.timeZone.value : addData.timeZone)
        formdata.append("acessRight", accessRight)
        formdata.append("link", link)
        formdata.append("joiningDate", addData.joiningDate)
        formdata.append("lat", addData.lat)
        formdata.append("long", addData.long)

        // // *******************************************
        const phoneReg = /^[0-9\b]+$/;
        if (!addData.addBy) {
            setErrors({ ...error, roleId: "Please select role" })
        } else if (!addData.expiryDate) {
            setErrors({ ...error, licenseExpiry: "Please select license expiry date" })
        } else if (!addData.phoneNumber || addData.phoneNumber.length < 10) {
            setErrors({ ...error, phoneNo: "Please enter valid phone number" })
        } else if (!addData.joiningDate) {
            setErrors({ ...error, joiningDate: "Please select joining date" })
        } else if (addData.role != "liaAgent" && (addData.country == "Select Country" || addData.country == '')) {
            setErrors({ ...error, country: "Please select country" })
        } else if (addData.role == "liaAgent" && accessRight.length == 0) {
            setErrors({ ...error, allAccess: "Please select access rights " })
        } else if (!activeDays) {
            setErrors({ ...error, activeDay: "Please select active days" })
        } else if (!addData.timeZone) {
            setErrors({ ...error, timezone: "Please select timezone" })
        } else if (addData.endTime) {
            // if ((addData.startTimeMdn == "AM" && addData.endTimeMdn == "AM") && addData.startTime + addData.startTimeMdn !== "12:00PM") {
            //     console.log("hit")
            //     if (addData.endTime < addData.startTime) {
            //     console.log("hit")
            //         setErrors({ ...error, endTime: "Please select valid end time" })
            //     }

            // }else if ((addData.startTime + addData.startTimeMdn == "12:00PM") && addData.endTimeMdn !== "PM") {
            //     setErrors({ ...error, endTime: "Please select valid end time" })

            // }
            // else if (addData.startTimeMdn == "PM" && addData.endTimeMdn !== "PM") {

            //     setErrors({ ...error, endTime: "Please select valid end time" })

            // }
            // else {
            let response = await businees_owner_update_staff(formdata)
            if (response.code == 200) {
                if (type == "lia") {
                    route.push("/busines/owner/lia's")
                }
                else {
                    route.push("/busines/owner/allStaffList")
                }
            } else {
                setErrorMsg(response.message)
            }
            // }
        }
    }
    const handleCancel = () => {
        if (type == "lia") {
            route.push("/busines/owner/lia's")
        }
        else {
            route.push("/busines/owner/allStaffList")
        }

    }

    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setAddData((prev) => { return { ...prev, countryCode: data.country_code } })
            this.setState({
                countryName: data.country_code,
                countryCode: data.country_calling_code
            });
        }).catch((error) => {
            // //consolee.log(error);
        });
    };
    const handleLicenseExpiry = (licenseExpiry) => {
        let name = "licenseExpiry"
        setAddData({ ...addData, [name]: licenseExpiry });
    }
    const handleDob = (dob) => {
        let name = "dob"
        setAddData({ ...addData, [name]: dob });
    }

    useEffect(() => {
        roleListing()
    }, [])
    const roleListing = async () => {
        let perPage = 10;
        let page = 1
        let response = await businees_owner_role_listing(perPage, page)
        if (response.code == 200) {
            setAllRole(response.result)
            // var roleList = response.result
        }
    }
    const handleRole = (e) => {
        let index = e.target.selectedIndex
        const optionElement = e.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('id');
        setAddData({ ...addData, role: optionElementId, addBy: e.target.value })
        setErrors({ ...error, addBy: "" })

    }

    let roleList = allRole?.map((li, i) => {
        return (
            <option key={i} id={li.role} value={li._id}>{li.role === "liaAgent" ? "LIA Agent" : li.role == "manager" ? "Manager" : li.role == "worker" ? "Worker" : li.role}</option>
        )
    })
    const onError = () => {
        setAllAccess("")
    }
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h3 className="">Edit LIA</h3>
                        <div className={styles.formArea}>
                            <form>

                                {/* <div className="row">
                                    <div className="col-md-6">
                                        <h4>Basic Details</h4>
                                    </div>
                                    <div className={`col-md-6 ${styles.staffMemberStatus}`}>
                                        <a href="#">Enable Staff Member</a>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-md-6">

                                        <h4><b>Basic Details</b></h4    >
                                        <h4 className="text-center" style={{ color: "red" }}> {errorMsg}</h4>

                                        <div className={styles.NameDetail}>
                                            <label htmlFor={`photo`}>

                                                <input id={`photo`} type="file" onChange={handleImageChange} style={{ display: "none" }} accept=".pdf, .jpeg , .jpg ,.png" />
                                                <div className={styles.avatarUpload}>
                                                    <h5>  Profile Picture </h5>
                                                    <div className={styles.avatarPreview}>
                                                        <img onChange={handleImageChange} src={demoImg ? demoImg : "/images/camera.svg"} />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={`col-md-6 ${styles.staffMemberStatus}`}>
                                        {/* <a >Disable Staff Member</a> */}
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Full Name <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}> {errors.fullName?.message}</span>
                                            </label>
                                            {
                                                console.log(addData.fullName)
                                            }
                                            <InputFiled
                                                type_name="fullName"
                                                placeholder_name="Your Name"
                                                inputId="fullName"
                                                input_name="fullName"
                                                value={addData.fullName.trim()}
                                                register={register("fullName", {
                                                    ...Register.Name,
                                                    onChange: (e) => handleChange(e),
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-5">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Role
                                                <span className={styles.errorMsg}> {!addData.addBy ? error.roleId : ""}</span>
                                            </label>
                                            <select class="form-control"
                                                onChange={(e) => { handleRole(e) }}
                                                value={addData.addBy} name="addBy" size="0">
                                                <option value="">Select </option>
                                                {roleList}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-6">
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
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label> Licence/Membership Number
                                                <span className={styles.errorMsg}> {errors.licenseNo?.message}</span>
                                                {console.log(errors.licenseNo)}
                                            </label>

                                            <InputFiled
                                                type_name="text"
                                                name="licenseNo"
                                                input_name="licenseNo"
                                                placeholder_name=" Enter Licence/Membership Number"
                                                value={addData.licenseNo}
                                                register={register("licenseNo", {
                                                    ...Register.licenseNo,
                                                    onChange: (e) => handleChange(e),
                                                })}
                                                maxLength={9}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>License Expiry Date
                                                <span className={styles.errorMsg}> {!addData.licenseExpiry ? error.licenseExpiry : ""}</span>
                                            </label>

                                            <DatePicker
                                                className="form-control"
                                                name="expiryDate"
                                                selected={addData.expiryDate ? new Date(addData.expiryDate) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handleLicenseExpiry(date)}
                                                autoComplete="off"
                                                value={addData.expiryDate}

                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                            <label>Landline Number

                                            </label>
                                            <PhoneInput
                                                country={'in'}
                                                value={addData.landlineNumber}
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
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                            <label>Phone Number
                                                <span className={styles.errorMsg}> {!addData.phoneNo ? error.phoneNo : ""}</span></label>
                                            <PhoneInput
                                                country={'in'}
                                                value={addData.phoneNumber}
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
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Date of Joining
                                                <span className={styles.errorMsg}> {error.joiningDate}</span>
                                            </label>
                                            <DatePicker
                                                className="form-control"
                                                name="joiningDate"
                                                selected={addData.joiningDate ? new Date(addData.joiningDate) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={(date) => { setAddData((prev) => { return { ...prev, joiningDate: date } }); setErrors((prev) => { return { ...prev, joiningDate: "" } }) }}
                                                onChangeRaw={(e) => { e.preventDefault() }}
                                                autoComplete="off"
                                                value={addData.joiningDate}
                                                showYearDropdown
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Email
                                                <span className={styles.errorMsg}> {errors.email?.message}</span>
                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                name="email"
                                                input_name="email"
                                                placeholder_name="Email Address"
                                                value={addData.email}
                                                register={register("email", {
                                                    ...Register.Email,
                                                    onChange: (e) => handleChange(e),
                                                })}
                                            />

                                        </div>
                                    </div>
                                </div>

                                <h6> Office Address </h6>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country
                                                <span className={styles.errorMsg}> {!addData.country ? error.country : ""}</span>
                                            </label>
                                            <select class="form-control"
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                value={addData.country} name="country" size="0">
                                                <option value={null}> Select Country </option>
                                                {
                                                    countryList?.map((li, index) => <option key={index} value={li?._id}>{li?.countryName}</option>)
                                                }

                                            </select>


                                        </div>
                                    </div>
                                    {
                                        console.log(addData.city)
                                    }
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>City
                                                <span className={styles.errorMsg}> {error.city}</span>
                                            </label>

                                            <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, city: e.target.value }) }) }}
                                                value={addData.city} name="city" size="0">
                                                <option value="">{addData.city ? addData.city : "Select City"}</option>
                                                {
                                                    cityList?.map((data) => data?.map((li, index) => <option key={index} value={li._id}>{li.cityName}</option>))
                                                }

                                            </select>

                                        </div>
                                    </div>



                                    {/* <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Region
                                            </label>

                                            <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, region: e.target.value }) }) }}
                                                value={addData.region} name="region" size="0">
                                                <option value=" "> Select </option>
                                                <option value="Asia"> Asia </option>
                                                <option value="western europe"> Western europe </option>
                                                <option value="central and eastern europe"> Central and eastern europe </option>
                                                <option value="Africa"> Africa </option>
                                                <option value="America"> America </option>
                                                <option value="Mediterranean & middle east"> Mediterranean & middle east  </option>

                                            </select>

                                        </div>
                                    </div> */}


                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Address
                                                <span className={styles.errorMsg}> {errors.address?.message}</span> </label>
                                            <InputFiled
                                                type_name="text"
                                                name="address"
                                                input_name="address"
                                                placeholder_name="Enter Address"
                                                value={addData.address.trim()}
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
                                    addData.role == "liaAgent" && <>
                                        <div class="row">
                                            <div className="col-md-3 px-0">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <h6> <b> Access Rights</b>
                                                    </h6> <span className={styles.errorMsg}> {allAccess.length == 0 ? error.allAccess : ""}</span>

                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="row">
                                    <div className="col-md-3 px-1">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="selectAll" checked={isAllAccessChecked}
                                                    onChange={(e) => { onCheckSelectAllAccess(e) }}
                                                    name="selectAll" type="checkbox" />
                                                <label for="selectAll" className={styles.checkboxLabel} style={{ color: "#0c101a" }} >Select All </label>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                                    </>}

                                {/* ::::::::::::::::::::::::::: Active DAys :::::::::::::::::::::::::::: */}
                                <div class="row">
                                    <div className="col-md-3 px-0">
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
                                </div> */}
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
                                            <label style={{ height: "16px" }}>Starting From</label>

                                            <select class="form-control" onChange={(e) => {
                                                handleChange(e);
                                                setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="startTime" value={addData.startTime} size="0">
                                                <option >{addData.startTime}</option>
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
                                        </div>
                                    </div>


                                    <div className="col-md-2 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label style={{ height: "16px" }}></label>
                                            <select class="form-control" onChange={(e) => {
                                                handleChange(e);
                                                setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="startTimeMdn" value={addData.startTimeMdn} size="0">
                                                <option >{addData.startTimeMdn ? addData.startTimeMdn : "Select"}</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label style={{ height: "16px" }}>Till</label>
                                            <select class="form-control" onChange={(e) => {
                                                handleChange(e);
                                                setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="endTime" value={addData.endTime} size="0">
                                                <option >{addData.endTime}</option>
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
                                            <span className={styles.errorMsg}> {error.endTime}</span>

                                        </div>
                                    </div>

                                    <div className="col-md-2 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label style={{ height: "16px" }}></label>
                                            <select class="form-control" onChange={(e) => {
                                                handleChange(e);
                                                setErrors((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="endTimeMdn" value={addData.endTimeMdn} size="0">
                                                <option >Select</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Timezone</label>

                                            <TimezoneSelect
                                                name="timezone"
                                                value={addData.timeZone}
                                                //onChange={setSelectedTimezone}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, timeZone: val }) }) }}

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
                                                <button onClick={(e) => { handleCancel(e, false) }} className={styles.SaveBtn}>Cancel</button>
                                            </div>
                                            <div className="col-md-4">
                                                <button className={styles.SandBtn} onClick={handleSubmit(() => handleSave("save"), onError)}>Update </button>
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
export default EditLiaStaff;

