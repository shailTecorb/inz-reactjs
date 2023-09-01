import InputFiled from "../Auth/Common/input_filed"
import styles from "../../styles/form.module.scss"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { businees_owner_add_staff, get_all_cities, businees_owner_role_listing, admin_allCountry_list } from "../helpers/business_owner_service"
import TimezoneSelect from "react-timezone-select"
import LinkLicenseMembership from '../Common/Modals/link_license_membership';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";
import moment from "moment";
const AddLiaStaff = () => {

    const emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    const phoneReg = /^[0-9\b]+$/;
    const route = useRouter()
    const [countryList, setCountryList] = useState()
    const [addData, setAddData] = useState({
        fullName: "",
        email: "",
        role: "businessOwner",
        roleId: "",
        membershipNumber: "",
        licenseExpiry: "",
        countryCode: "",
        gender: "",
        country: "",
        address: "",
        dob: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        city: "",
        region: ""
    })
    const [phoneNo, setNo] = useState("")
    const [country_Code, set_Country_Code] = useState("")
    const [landlineNo, setLandlineNo] = useState("")
    const [landline_country_Code, setLindline_Country_Code] = useState("")
    const [isAllDaysChecked, setIsAllDaysChecked] = useState(false)
    const [isAllSelectedDay, setIsAllSelectedDay] = useState(true)
    const [isAllSelected, setIsAllSelected] = useState(true)
    const [isAllAccessChecked, setIsAllAccessChecked] = useState(false)
    const [error, setError] = useState({
        fullName: "",
        email: "",
        role: "businessOwner",
        roleId: "",
        membershipNumber: "",
        licenseExpiry: "",
        landlineNo: "",
        phoneNo: "",
        gender: "",
        country: "",
        address: "",
        dob: "",
        timezone: "",
        city: "",
        region: "",
        allAccess: "",
        activeDays: "",
        startTime: "",
        startTimeMdn: "",
        endTime: "",
        endTimeMdn: ""
    })

    // ***************************************
    const [isLoading, setIsLoading] = useState(false)
    const [allRole, setAllRole] = useState()
    const [activeDays, setActiveDays] = useState([])
    const [allAccess, setAllAccess] = useState([])
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState()
    const [startTimeMdn, setStartTimeMdn] = useState();
    const [endTimeMdn, setEndTimeMdn] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [link, setLink] = useState()
    const [errorMsg, setErrorMsg] = useState("")
    const [image, setImage] = useState()
    const [demoImg, setImageDomo] = useState()
    const [cityList, setAllCity] = useState([])
    const [checkBox, setCheckBox] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
    })

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
    const OpenModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };
    const CloseModal = (e) => {
        setIsOpen(false);
    };
    useEffect(() => {
        GetCountryList()
        getGeoInfo()
    }, [])
    useEffect(() => {
        getAllCities()
    }, [addData.country])
    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            console.log(data, 'data')
            setAddData((prev) => { return { ...prev, countryCode: data.country_code } })
            setLindline_Country_Code(data.country_calling_code)
            set_Country_Code(data.country_calling_code)
        }).catch((error) => {
            // //consolee.log(error);
        });
    };
    const getAllCities = async () => {
        let response = await get_all_cities(addData.country)
        if (response.code == 200) {
            setAllCity(response.result)
        }
    }
    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
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
        // console.log('1111',tempdata)
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
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value });
        setError({ ...error, [name]: "" })
    }
    const handleImageChange = (e) => {
        setImageDomo(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }
    const handleSave = async (event) => {
        event.preventDefault();
        let LicensExpiry = moment(addData.licenseExpiry).format("YYYY/MM/DD")
        let Dob = moment(addData.dob).format("YYYY/MM/DD")
        let Pnumber = phoneNo?.substring(country_Code.length - 1)
        let Lnumber = landlineNo?.substring(landline_country_Code.length - 1)
        const formdata = new FormData();
        formdata.append("image", image)
        formdata.append("fullName", addData.fullName)
        formdata.append("addBy", "businessOwner")
        formdata.append("role", addData.role)
        formdata.append("roleId", addData.roleId)
        formdata.append("expiryDate", addData.licenseExpiry)
        formdata.append("licenseNo", addData.membershipNumber)
        formdata.append("phoneNumberCountryCode", country_Code)
        formdata.append("phoneNumber", Pnumber)
        formdata.append("lineNumberCountryCode", landline_country_Code)
        formdata.append("landlineNumber", Lnumber)
        formdata.append("email", addData.email)
        formdata.append("country", addData.country)
        formdata.append("address", addData.address)
        formdata.append("activeDays", activeDays)
        formdata.append("startTime", startTime +" " + startTimeMdn)
        formdata.append("endTime", endTime + " " + endTimeMdn)
        formdata.append("timeZone", addData.timezone.value ? addData.timezone.value : addData.timezone)
        formdata.append("gender", addData.gender)
        formdata.append("acessRight", allAccess)
        formdata.append("link", link)
        formdata.append("dob", Dob)
        formdata.append("city", addData.city)
        formdata.append("region", addData.region)


        // *******************************************

        if (!addData.fullName.trim()) {
            setError({ ...error, fullName: "Please enter full name" })
        }
        else if (!addData.roleId) {
            setError({ ...error, roleId: "Please select role" })
        } else if (!phoneReg.test(addData.membershipNumber) || addData.membershipNumber.length !== 9 || !addData.membershipNumber) {
            setError({ ...error, membershipNumber: "Please enter valid membership number" })
        } else if (!addData.licenseExpiry) {
            setError({ ...error, licenseExpiry: "Please select license expiry date" })
        } else if (!addData.gender) {
            setError({ ...error, gender: "Please select gender " })
        }
        else if (!phoneNo || phoneNo.length < 10) {
            setError({ ...error, phoneNo: "Please enter valid phone number" })
        } else if (!country_Code) {
            setError({ ...error, phoneNo: "Please select country code" })
        } else if (!emailRegex.test(addData.email)) {
            setError({ ...error, email: "Please enter valid email" })
        } else if (!addData.dob) {
            setError({ ...error, dob: "Please enter date of birth" })
        } else if (addData.country == "Select Country" || addData.country == '') {
            setError({ ...error, country: "Please select country" })
        } else if (!addData.city) {
            setError({ ...error, city: "Please select city" })
        } else if (!addData.address.trim()) {
            setError({ ...error, address: "Please enter address" })
        } else if (allAccess.length == 0) {
            setError({ ...error, allAccess: "Please select access rights " })
        } else if (activeDays.length == 0) {
            setError({ ...error, activeDays: "Please select active days" })
        } else if (!addData.timezone) {
            setError({ ...error, timezone: "Please select timezone" })
        } else if (!startTime) {
            setError({ ...error, startTime: "Please select start time" })
        } else if (!startTimeMdn) {
            setError({ ...error, startTimeMdn: "Please select meridiem" })
        } else if (!endTime) {
            setError({ ...error, endTime: "Please select end time" })
        } else if (!endTimeMdn) {
            setError({ ...error, endTimeMdn: "Please select end meridiem" })
        }
        else if (endTime) {

            if ((startTimeMdn == "AM" && endTimeMdn == "AM") && startTime + startTimeMdn !== "12:00PM") {

                if (endTime < startTime) {
                    setError({ ...error, endTime: "Please select valid end time" })
                }
            }
            else if ((startTime + startTimeMdn == "12:00PM") && endTimeMdn !== "PM") {

                setError({ ...error, endTime: "Please select valid end time" })

            }
            else if (startTimeMdn == "PM" && endTimeMdn !== "PM") {

                setError({ ...error, endTime: "Please select valid end time" })

            }
            else {

                setIsLoading(true)
                let response = await businees_owner_add_staff(formdata)
                if (response.code == 200) {
                    setIsLoading(false)
                    route.push("/busines/owner/allStaffList")
                } else {
                    setIsLoading(false)
                    setErrorMsg(response.message)
                }
            }
        }
        else {
            
        }
    }


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
        }
    }


    let roleList = allRole?.map((li, i) => {
        return (
            <option key={i} value={li._id}>{li.role === "liaAgent" ? "LIA Agent" : li.role == "manager" ? "Manager" : li.role == "worker" ? "Worker" : li.role}</option>
        )
    })
 
    return (
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
                                        <h4 className="text-center" style={{ color: "red" }}> {errorMsg}</h4>

                                        {/* <h5 style={{ color: "#00ED97" }}>Disable Staff Member</h5> */}
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
                                        {/* <a>Disable Staff Member</a> */}
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12 px-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Full Name <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}> {error.fullName}</span>
                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name="Your Name"
                                                inputId="fullName"
                                                value={addData.fullName}
                                                input_name="fullName"
                                                // class_name={isError.fullNameErrorMsg !== "" && styles.errorMsg}
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Role
                                                <span className={styles.errorMsg}> {!addData.roleId ? error.roleId : ""}</span>
                                            </label>
                                            <select class="form-control" onChange={(e) => { handleChange(e) }} value={addData.roleId} name="roleId" size="0">
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
                                    <div className="col-md-6 px-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label> Licence/Membership Number
                                                <span className={styles.errorMsg}> {!phoneReg.test(addData.membershipNumber) || addData.membershipNumber.length < 9 ? error.membershipNumber : ""}</span>
                                            </label>

                                            <InputFiled
                                                type_name="text"
                                                name="membershipNumber"
                                                input_name="membershipNumber"
                                                placeholder_name=" Enter Licence/Membership Number"
                                                value={addData.membershipNumber}
                                                onChange={(e) => { handleChange(e) }}
                                                maxLength={9}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Licence Expiry Date
                                                <span className={styles.errorMsg}> {!addData.licenseExpiry ? error.licenseExpiry : ""}</span>
                                            </label>

                                            <DatePicker
                                                className="form-control"
                                                name="licenceExpiry"
                                                selected={addData.licenseExpiry ? new Date(addData.licenseExpiry) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handleLicenseExpiry(date)}
                                                onChangeRaw={(e) => { e.preventDefault() }}
                                                autoComplete="off"
                                                value={addData.licenseExpiry}
                                                showYearDropdown
                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 pr-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Gender
                                                <span className={styles.errorMsg}> {!addData.gender ? error.gender : ""}</span>
                                            </label>
                                            {/* <span style={{color:"red"}}>{isError.genderErrMsg}</span> */}
                                            <select class="form-control" onChange={(e) => { handleChange(e) }} name="gender" value={addData.gender} size="0">
                                                <option value="">Select </option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6 pl-0">
                                        <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                            <label>Landline Number
                                                {/* {console.log(String(addData.countryCode).toLowerCase(),"mmmmmmmmmmm")} */}
                                            </label>
                                            <PhoneInput
                                                country={'in'}
                                                value={landlineNo}
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
                                                <span className={styles.errorMsg}> {!phoneNo || phoneNo.length < 10 ? error.phoneNo : ""}</span></label>

                                            <PhoneInput
                                                country={'in'}
                                                value={phoneNo}
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
                                            <label>Email
                                                <span className={styles.errorMsg}> {!emailRegex.test(addData.email) || !addData.email ? error.email : ""}</span>
                                            </label>

                                            <InputFiled
                                                type_name="email"
                                                placeholder_name="Email Address"
                                                inputId="Email"
                                                value={addData.email.toLocaleLowerCase()}
                                                input_name="email"
                                                onChange={(e) => { handleChange(e) }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-md-6 pr-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label> DOB
                                                <span className={styles.errorMsg}> {!addData.dob ? error.dob : ""}</span> </label>

                                            <DatePicker
                                                className="form-control"
                                                name="dob"
                                                selected={addData.dob ? new Date(addData.dob) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handleDob(date)}
                                                autoComplete="off"
                                                peekNextMonth
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                                value={addData.dob}
                                                maxDate={moment().subtract(16, 'years')._d}

                                            />
                                            <img src="/images/calendar.svg" alt="email" />
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
                                                    setAddData((prev) => { return ({ ...prev, country: e.target.value }) });
                                                    setError((prev) => { return { ...prev, country: "" } })
                                                }}
                                                value={addData.country} name="country" size="0">
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
                                                <span className={styles.errorMsg}> {!addData.city ? error.city : ""}</span>
                                            </label>

                                            <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, city: e.target.value }) }) }}
                                                value={addData.city} name="city" size="0">
                                                <option> Select City</option>
                                                {
                                                    cityList?.map((data) => data?.map((li, index) => <option key={index} value={li._id}>{li.cityName}</option>))
                                                }

                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-6 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label> Region
                                                {/* <span style={{color:"red"}}> {!addData.region ? error.region :""}</span> */}
                                            </label>

                                            <select class="form-control" onChange={(e) => { setAddData((prev) => { return ({ ...prev, region: e.target.value }) }) }}
                                                value={addData.region} name="region" size="0">
                                                <option value=""> Select Region </option>
                                                <option value="Asia"> Asia </option>
                                                <option value="western europe"> Western europe </option>
                                                <option value="central and eastern europe"> Central and eastern europe </option>
                                                <option value="Africa"> Africa </option>
                                                <option value="America"> America </option>
                                                <option value="Mediterranean & middle east"> Mediterranean & middle east  </option>

                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-md-6 pr-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Address
                                                <span className={styles.errorMsg}> {error.address}</span> </label>

                                            <InputFiled
                                                type_name="text"
                                                type="tel"
                                                placeholder_name=""
                                                inputId="Mobile"
                                                value={addData.address}
                                                input_name="address"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* :::::::::::::::::::::::::::::::::::: Access Rights ::::::::::::::::::::::::::::::::::::::::::::::::::::       */}


                                <div class="row">
                                    <div className="col-md-12 px-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <h6> <b> Access Rights</b>

                                            </h6> <span className={styles.errorMsg}> {allAccess.length == 0 ? error.allAccess : ""}</span>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
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

                                {/* ::::::::::::::::::::::::::: Active DAys :::::::::::::::::::::::::::: */}
                                <div class="row">
                                    <div className="col-md-12 px-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <h6><b> Active Days </b> </h6>
                                            <span className={styles.errorMsg}> {activeDays.length == 0 ? error.activeDays : ""}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
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
                                </div>
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
                                                setStartTime(e.target.value);
                                                setError((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="startTime" value={startTime} size="0">
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
                                            {/* <DatePicker
                                                selected={startTime}
                                                onChange={(time) => setStartTime(time)}
                                                showTimeSelect
                                                name="endDate"
                                                value={startTime}
                                                showTimeSelectOnly
                                                timeIntervals={30}
                                                timeCaption="Time"
                                                dateFormat="h:mm"
                                                timeFormat="hh:mm"
                                                autoComplete='off'
                                                locale="ro"

                                            /> */}
                                            <span className={styles.errorMsg}> {!startTime ? error.startTime : ""}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-2 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label style={{ height: "16px" }}> </label>
                                            <select class="form-control" onChange={(e) => {
                                                setStartTimeMdn(e.target.value);
                                                setError((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="startTimeMdn" value={startTimeMdn} size="0">
                                                <option value="" >Select</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                            <span className={styles.errorMsg}> {!startTimeMdn ? error.startTimeMdn : ""}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Till
                                            </label>
                                            <select class="form-control" onChange={(e) => {
                                                setEndTime(e.target.value);
                                                setError((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="endTime" value={endTime} size="0">
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
                                            {/* <DatePicker
                                                selected={endTime}
                                                onChange={(time) => setEndTime(time)}
                                                showTimeSelect
                                                name="endDate"
                                                value={endTime}
                                                showTimeSelectOnly
                                                timeIntervals={30}
                                                timeCaption="Time"
                                                dateFormat="h:mm"
                                                timeFormat="hh:mm"
                                                autoComplete='off'
                                                locale="ro"

                                            /> */}

                                            <span className={styles.errorMsg}> {error.endTime}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-2 pl-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label style={{ height: "16px" }}></label>
                                            <select class="form-control" onChange={(e) => {
                                                setEndTimeMdn(e.target.value);
                                                setError((prev) => { return { ...prev, endTime: "", startTime: "", startTimeMdn: "", endTimeMdn: "" } })
                                            }} name="endTimeMdn" value={endTimeMdn} size="0">
                                                <option value="">Select</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                            <span className={styles.errorMsg}> {!endTimeMdn ? error.endTimeMdn : ""}</span>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Timezone

                                            </label>

                                            <TimezoneSelect
                                                name="timezone"
                                                value={addData.timezone}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, timezone: val }) }) }}
                                            />
                                            <span className={styles.errorMsg}> {!addData.timezone ? error.timezone : ""}</span>
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
                                                    : <button type="submit" className={styles.SandBtn} onClick={handleSave}>Save </button>
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
    )
}
export default AddLiaStaff;

