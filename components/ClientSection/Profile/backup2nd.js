import InputFiled from "../../Auth/Common/input_filed"
import styles from "../../../styles/form.module.scss"
import moment, { locale } from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import { useState ,useEffect, useContext} from "react";
import {add_client_profile_details, view_client_service} from "../../helpers/client_services"
import {admin_allCountry_list,state_list} from "../../helpers/business_owner_service"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IdContext } from "../../MyContext/IdDetailsContext";
const ClientProfile = () => {
    let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
const {data} = useContext(IdContext)

    const route  = useRouter()
    const [addData, setAddData] = useState({
        primaryEmail: data.email,
        dob: "",
        maritalStatus: "",
        // primarymobileNo: "",
        secondaryEmail: "",
        // secondarymobileNo: "",
        country: data.country,
        state: data.state,
        houseNo: data.houseNo,
        street: data.street
    })
    const [phoneNo, setNo] = useState("")
    const [isLoading,setisLoading] = useState(false)
    const [country_Code,set_Country_Code] = useState("")
    const [secondaryMobile, setSecondaryMobile] = useState("")
    const [secondarycountryCode,setSecondaryCountryCode] = useState("")
    const [image, setImage] = useState()
    const [demoImg, setImageDomo] = useState()
    const [errorMsg,setErrorMsg] = useState("")
    const [error, setError] = useState({
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
    const [countryList,setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    let clientId = route.query?.id
    const handleOnchangePhone = (phone, country, e,data,value) => {
        let name = "phoneNo"
        let country_code = `+${country.dialCode}`
        let country_name = country.countryCode
        set_Country_Code(country_code)
        setNo(phone)
    }
    const handleOnchangeSecondaryPhone = (phone, country, e,data,value) => {
        let name = "phoneNo"
        let country_code = `+${country.dialCode}`
        let country_name = country.countryCode
        setSecondaryMobile(phone)
    }
    useEffect(() => {
        GetCountryList()
        setNo(String(data.country+data.phone))
        clientId && viewClient(clientId)
    }, [clientId])
    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
    }
    const viewClient=async(clientId)=>{
        const response = await view_client_service(clientId)
        if(response.code==200){
            setAddData((prev)=>{
                return{
                    ...prev,
                    primaryEmail:response.result.email,
                    dob:response.result.dob,
                    maritalStatus:response.result.martialStatus,
                    title:response.result.title,
                    country:response.result.country?._id,
                    houseNo:response.result.houseNo,
                    state:response.result.state?._id,
                    street:response.result.streetAddress
                }
            })
            setNo(response.result.phoneCountryCode+response.result.phone)
            set_Country_Code(response.result.phoneCountryCode)
            response.result.secondaryPhoneNumber && setSecondaryMobile(response.result.secondaryPhoneNumber)
        }
    }

    useEffect(() => {
        getAllStateList()
    }, [addData.country])
    const getAllStateList = async () => {
        let response = await state_list(addData.country)
        setStateList(response.result)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value });
        setError({...error, [name]: "" })
    }
  
    const handleDobResponse = (dob) => {
        let name = "dob"
        setAddData({ ...addData, [name]: dob });
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
        setImageDomo(URL.createObjectURL(e.target.files[0]))
    }
    const handleSave = async (event,saveAsDraft) => {
        event.preventDefault();
        let Snumber = secondaryMobile
        let count1 = secondarycountryCode.length
        Snumber?.substring(count1-1)
        let Pnumber = phoneNo
        let count = country_Code.length
        Pnumber = phoneNo.substring(count-1)
        let Updatenumber = phoneNo
        Updatenumber = Updatenumber.substring(count)

        const formdata = new FormData();
        formdata.append("clientId",clientId?clientId:null)
        formdata.append("image", image)
        formdata.append("primaryPhoneNumber",clientId ? Updatenumber : Pnumber,)
        formdata.append("phone",clientId ? Updatenumber : Pnumber)
        formdata.append("secondaryPhoneNumber", Snumber)
        formdata.append("primaryEmail", addData.primaryEmail)
        formdata.append("secondaryEmail", addData.secondaryEmail)
        formdata.append("dob", moment(addData.dob).format("YYYY/MM/DD"))
        formdata.append("martialStatus", addData.maritalStatus)
        formdata.append("saveAsDraft", false)
        formdata.append("houseNo", addData.houseNo);
        formdata.append("country", addData.country);
        formdata.append("state", addData.state);
        formdata.append("streetAddress", addData.street);        
        formdata.append("primaryPhoneNumberCountryCode", country_Code);
        formdata.append("secondaryPhoneNumberCountryCode", secondarycountryCode);
        let phonumber = data.phone || phoneNo
        let primaryEmail = data.email || addData.primaryEmail
        let country = data.country || addData.country
        let state = data.state || addData.state
        let houseNo = data.houseNo || addData.houseNo
        let street = data.street || addData.street
        if (!phonumber) {
            setError({ ...error, phoneNo: "Please enter phone number" })
        }else if(!country_Code){
            setError({ ...error, country_Code: "Please select country code" })
        }
        else if (!primaryEmail) {
            setError({ ...error, primaryEmail: "Please enter email" })
        }else if (!emailRegex.test(primaryEmail)) {
            setError({ ...error, primaryEmail: "Please valid email" })
        }
        else if (!addData.dob) {
            setError({ ...error, dob: "Please enter dob" })
        }
        else if (!addData.maritalStatus) {
            setError({ ...error, maritalStatus: "Please select marital status" })
        }
        else if(!country){
            setError({ ...error, country: "Please select country" })
        }
        else if(!state){
            setError({ ...error, state: "Please select state" })
        }
        else if(!houseNo){
            setError({ ...error, houseNo: "Please enter house number" })
        }
        else if(!street){
            setError({ ...error, street: "Please enter street address" })
        }
        else {
            setisLoading(true)
                const response = await add_client_profile_details(formdata)
                if(response.code == 200){
                    if(clientId){
                        route.push(`/Client/profile/visaDetail?id=${clientId}`)

                    }
                    else{
                    route.push("/Client/profile/visaDetail")

                    }
                    setisLoading(false)
                }else{
                    setisLoading(false)
                    setErrorMsg(response.message)
                }
        }
    }
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h3 className="">My Profile</h3> <h3 className="text-center" style={{color:"red"}}> {errorMsg} </h3>
                        <div className={styles.formArea}>

                            <form>
                                <div class="row">
                                    <div className="col-md-12">
                                        <ul className={styles.progressBar}>
                                            <li  className={styles.Active}><span>Basic Personal Details</span></li>
                                            <li className={styles.Active}><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className={styles.NameDetail}>
                                            <label htmlFor={`photo`}>
                                                
                                                <input id={`photo`} type="file" onChange={handleImageChange} style={{ display: "none" }} accept=".pdf, .jpeg , .jpg ,.png" />
                                                <div className={styles.avatarUpload}>
                                                    Profile Picture
                                            <div className={styles.avatarPreview}>
                                                <img onChange={handleImageChange} src={demoImg ? demoImg : "/images/camera.svg"} />
                                            </div>
                                        </div>
                                            </label>
                                       
                                        </div>
                                        <div className={styles.NameDetail}>
                                            {/* <h5>Mr. {global.name}</h5>
                                            <p>INZ ID: #INZ8923409</p> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>D.O.B <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!addData.dob ? error.dob :""}</span></label>
                                            <DatePicker
                                                className="form-control"
                                                name="dob"
                                                selected={addData.dob ? new Date(addData.dob) : null}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                showYearDropdown={true}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={70}
                                                scrollableYearDropdown={true}
                                                locale={locale.locale}
                                                onChange={date => handleDobResponse(date)}
                                                autoComplete="off"
                                                maxDate={moment().subtract(16, 'years')._d}

                                            />
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Marital Status<span className={styles.required}>*</span><span className={styles.errorMsg}>{!addData.maritalStatus ?error.maritalStatus:""}</span></label>
                                            <select class="form-control" name="maritalStatus" value={addData.maritalStatus} onChange={handleChange} size="0">
                                                <option value="">Select </option>
                                                    <option value="Married">Married</option>
                                                    <option value="single">Single</option>
                                                    <option value="divorced">Divorced</option>
                                                    <option value="Widowed">Widowed</option>
                                                </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!addData.country ? error.country :""}</span></label>
                                           <select class="form-control" name="country" onChange={(e) => { handleChange(e) }} value={addData.country} size="0">
                                                <option value="">Select Country</option>
                                               {countryList?.map((li,index)=> <option key={index} value={li._id}>{li.countryName}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>State/Province <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!addData.state? error.state :""}</span></label>
                                           
                                            <select class="form-control" name="state" onChange={(e) => { handleChange(e) }} size="0" value={addData.state}>
                                                <option value="">select </option>
                                                {stateList?.map((li,index)=><option key={index} value={li._id}>{li.stateName}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>House/Building No. <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!addData.houseNo ? error.houseNo :""}</span></label>
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
                                            <label>Street Address <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!addData.street? error.street:""}</span></label>
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
                                               {
                                                   clientId?
                                                   "":
                                               isLoading? <button disabled className={styles.SaveBtn} >Loading...</button>
                                               : <button className={styles.SaveBtn} onClick={(event)=>{handleSave(event,true)}}>Save as Draft</button>}
                                            </div>
                                            <div className="col-md-4">
                                                {isLoading ? <button disabled className={styles.SandBtn} ><> <i class="fa fa-refresh fa-spin"></i>  Loading </></button> :
                                                <button className={styles.SandBtn} onClick={(event)=>{handleSave(event,false)}}>{clientId?"Update":"Save and Next"}</button>}
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
export default ClientProfile