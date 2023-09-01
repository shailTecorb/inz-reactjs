import InputFiled from "../Auth/Common/input_filed"
import styles from "../../styles/form.module.scss"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import { validateEmail, validateName, } from "../Common/validation";
import { API_URL, BASE_URL } from "../helpers/api_url";
import axios from 'axios';
import { CountryDropdown } from 'react-country-region-selector';
import { useRouter } from 'next/router';
import TimezoneSelect from "react-timezone-select"
import { IdContext } from "../MyContext/IdDetailsContext";
import { get_staff_data_services } from "../helpers/business_owner_service";
import moment from "moment";
//import DateDetails from "../Common/dateFormate";


const AddLiaStaff = () => {
    const { email } = useContext(IdContext)
    const id = useRouter().query.id
    const [addData, setAddData] = useState({
        fullName: "",
        email: "",
        role: "supervisor",
        membershipNumber: "",
        licenseExpiry: "",
        landlineNo: "",
        phoneNo: "",
        gender: "",
        country: "",
        address: "",
        activeday: "",
        timezone: ""
    })
    // ***************************************
    const [startTime, setStartTime] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [image, setImage] = useState()
    const [activeDays, setActiveDays] = useState([])
    const [isAllDaysChecked, setIsAllDaysChecked] = useState(false)
    const [isAllSelectedDay,setIsAllSelectedDay] = useState(true)

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
        { name: "Monday", id: 0, status: false },
        { name: "Tuesday", id: 1, status: false },
        { name: "Wednesday", id: 2, status: false },
        { name: "Thursday", id: 3, status: false },
        { name: "Friday", id: 4, status: false },
        { name: "Saturday", id: 5, status: false },
        { name: "Sunday", id: 6, status: false },
    ])
    const [accessRightsList, setAccessRightsList] = useState([
        { name: "Client", id: 11, status: false },
        { name: "ViewClients", id: 12, status: false },
        { name: "Reports", id: 13, status: false },
        { name: "CreateStaff", id: 14, status: false },
        { name: "Accounts", id: 15, status: false },
        { name: "Settings", id: 16, status: false },
        { name: "Dashboard", id: 17, status: false },
        { name: "ClientVisa", id: 18, status: false },
    ])
    useEffect(() => {
        get_staff_data()
    }, [id])
    const get_staff_data = async () => {
        const response = await get_staff_data_services(id)
        if (response.code == 200) {
        let licenseExpiryDate = moment(response?.result?.expiryDate).format("L")

            setAddData((prev) => {
                return {
                    ...prev, fullName: response.result.fullName, email: response.result.email,
                    role: response.result.role, licenseExpiry:licenseExpiryDate, phoneNo: response.result.phoneNumber,
                    activeday: response.result.activeDays
                }
            })
            // let newWeek = response.result.activeDays.map((item,index)=>{
            //     return({ })
            // })
            setAllDaysList((prev)=>{
                return([...prev.map((itm)=>{
                    return({...itm,status : response.result.activeDays.includes(itm.name) ? true : false})
                })])
            })
        }
        console.log(response.result.activeDays)
    }
console.log(allDaysList,"allDaysList")
    const [isError, set_isError] = useState({
        fullNameErrorMsg: "",
        EmailErrorMsg: "",

        isDisabledfullName: false,
        isDisabledEmail: false,


    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value }, validForm(name, value));
    }
    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
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


    const handleSave = async (event) => {

        event.preventDefault();

        // ****** Push activeday's **********

        let checkArray = [];
        for (var key in checkBox) {
            console.log(checkBox[key])

            if (checkBox[key] === true) {
                checkArray.push(key);
            }
            console.log(checkArray, "checkArray")
        }

        let checkData = {
            checkbox: checkArray.toString()
        };
        console.log(checkBox)


        //"****************"

        const formdata = new FormData();
        // formdata.append("image", image)
        formdata.append("image", image)
        formdata.append("fullName", addData.fullName)
        formdata.append("addBy", "businessOwner")
        formdata.append("role", addData.role)
        formdata.append("expiryDate", addData.licenseExpiry)
        formdata.append("membershipNumber", addData.membershipNumber)
        formdata.append("phoneNumber", addData.phoneNo)
        formdata.append("landlineNumber", addData.landlineNo)
        formdata.append("email", addData.email)
        formdata.append("country", addData.country)
        formdata.append("gender", addData.gender)
        formdata.append("address", addData.address)
        formdata.append("activeday", addData.activeday)
        formdata.append("startDate", startTime)
        formdata.append("endDate", endDate)
        formdata.append("timezone", addData.timezone.value)


        // formdata.append("draftPage2", addData)



        // *******************************************
        if (!addData.fullName) {
            set_isError((prev) => {
                return ({
                    ...prev, fullNameErrorMsg: "Please enter fullName",
                    isDisabledfullName: false,
                })
            })
        }

        else if (!addData.email) {
            set_isError((prev) => {
                return ({
                    ...prev, EmailErrorMsg: "Please enter email",
                    isDisabledEmail: false,
                })
            })
        }
        else {
            let res = await axios.post(BASE_URL + API_URL.BUSINESS_OWNER_ADD_STAFF, formdata,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "deviceType": "web",
                        "x-auth": localStorage.token
                    }
                })
            try {
                let response = res.data
                if (response.code === 403) {
                    localStorage.clear()
                    window.location.href = "/"
                }
                else if (response.code === 200) {
                    localStorage.clear()
                    window.location.href = '/busines/owner/allStaffList'
                }
                return response
            } catch (error) {
                return error
            }


        }
        console.log(startTime)
        console.log(endDate)
    }

    const handleDobResponse = (licenseExpiry) => {
        let name = "licenseExpiry"
        setAddData({ ...addData, [name]: licenseExpiry });

    }
    const onCheckSelectAllDays = (e) => {
        setIsAllSelectedDay(!isAllSelectedDay)
        let allData = allDaysList;
        allData.map((item, index) => {
            item.status = isAllSelectedDay
        })
        setIsAllDaysChecked(isAllSelectedDay)
      //  setAllDaysList([...allData])
        let tempdata = allDaysList?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.name)
            }
            return acc;
        }, [])
       
        setActiveDays(tempdata)
    }
    const onCheckDays = (data) => {
        let allData = allDaysList;
        allData.map((item, index) => {
            if (item.id == data.id) {
                item.status = !item.status
            }
        })
      //  setAllDaysList([...allData])
        let tempdata = allDaysList?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.name)
            }
            return acc;
        }, [])
        setActiveDays(tempdata);
        // console.log('1111',tempdata)
        if(allDaysList.length==tempdata.length){
            setIsAllDaysChecked(true)
        }else{
            setIsAllDaysChecked(false)
        }
    }

    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h3 className="">Edit Staff</h3>
                        <div className={styles.formArea}>
                            <form >
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Basic Details</h4>
                                    </div>
                                    <div className={`col-md-6 ${styles.staffMemberStatus}`}>
                                        <a href="#">Disabled Staff Member</a>
                                    </div>
                                </div>
                                <div className="row">
                                <div className={styles.NameDetail}>
                                            <label htmlFor={`photo`}>

                                                <input id={`photo`} type="file" onChange={handleImageChange} style={{ display: "none" }} accept=".pdf, .jpeg , .jpg ,.png" />
                                                <div className={styles.avatarUpload}>
                                                    <h5>  Profile Picture </h5>
                                                    <div className={styles.avatarPreview}>
                                                        <img onChange={handleImageChange} src={image ? image : "/images/camera.svg"} />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Full Name <span className={styles.required}>*</span>

                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name="Your Name"
                                                inputId="fullName"
                                                value={addData.fullName}
                                                input_name="fullName"
                                                class_name={isError.fullNameErrorMsg !== "" && styles.errorMsg}
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Role </label>
                                            <select class="form-control" onChange={handleChange} name="role" value={addData.role} size="0">
                                                <option value="LIA">LIA</option>
                                                <option value="supervisor">supervisor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Link license/membership</label>
                                            <InputFiled
                                                type_name="text"
                                                name="membershipNumber"
                                                input_name="membershipNumber"
                                                placeholder_name="Link license/membershipNUmber"
                                                value={addData.membershipNumber}
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>License Expiry Date</label>

                                            <DatePicker
                                                className="form-control"
                                                name="licenseExpiry"
                                                selected={addData.licenseExpiry ? new Date(addData.licenseExpiry) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={date => handleDobResponse(date)}
                                                autoComplete="off"
                                                value={addData.licenseExpiry}

                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Landline Number</label>
                                            <InputFiled
                                                type_name="text"
                                                type="tel"
                                                placeholder_name="Landline Number"
                                                inputId="Mobile"
                                                value={addData.landlineNo}
                                                input_name="landlineNo"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Phone Number</label>
                                            <InputFiled
                                                type_name="text"
                                                type="tel"
                                                placeholder_name="Phone Number"
                                                inputId="Mobile"
                                                value={addData.phoneNo}
                                                input_name="phoneNo"
                                                onChange={(e) => { handleChange(e) }}

                                            />

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Gender</label>
                                            <select class="form-control" onChange={(e) => { handleChange(e) }} name="gender" value={addData.gender} size="0">
                                                <option onChange={(e) => { handleChange(e) }} value="male">Male</option>
                                                <option onChange={(e) => { handleChange(e) }} value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Email</label>

                                            <InputFiled
                                                type_name="email"
                                                placeholder_name="Email Address"
                                                inputId="Email"
                                                value={addData.email}
                                                readOnly={true}
                                                input_name="email"
                                                class_name={isError.EmailErrorMsg !== "" && styles.errorMsg}
                                                onChange={(e) => { handleChange(e) }}
                                            />

                                        </div>
                                    </div>
                                </div>
                                <h6> Office Address </h6>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country</label>

                                            <CountryDropdown class="form-control"
                                                name="country"
                                                size="0"
                                                value={addData.country}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, country: val }) }); validForm("country", addData.country) }}
                                            />                                          
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Address   </label>
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
                                <div class="row">
                                    <div className="col-md-3 px-0">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <h6><b> Active Days </b> </h6>
                                            {/* <span style={{ color: "red" }}> {activeDays.length == 0 ? error.activeDays : ""}</span> */}
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
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Starting From</label>
                                                    <DatePicker
                                                        selected={startTime}
                                                        onChange={(time) => setStartTime(time)}
                                                        showTimeSelect
                                                        name="startDate"
                                                        input_name="startDate"
                                                        value={startTime}
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        timeCaption="Time"
                                                        dateFormat="h:mm aa"

                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Till</label>
                                                    <DatePicker
                                                        selected={endDate}
                                                        onChange={(time) => setEndDate(time)}
                                                        showTimeSelect
                                                        name="endDate"
                                                        input_name="endDate"
                                                        value={endDate}
                                                        showTimeSelectOnly
                                                        timeIntervals={15}
                                                        timeCaption="Time"
                                                        dateFormat="h:mm aa"

                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Timezone</label>
                                            <TimezoneSelect
                                                //   className={styles.CustomeTimeZone}
                                                name="timezone"
                                                value={addData.timezone}
                                                //onChange={setSelectedTimezone}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, timezone: val }) }); validForm("timezone", addData.timezone) }}

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
                                                <button className={styles.SaveBtn}>Cancel</button>
                                            </div>
                                            <div className="col-md-4">
                                                <button className={styles.SandBtn} onClick={handleSave}>Update </button>
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
export default AddLiaStaff