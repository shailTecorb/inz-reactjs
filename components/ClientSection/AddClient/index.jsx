import InputFiled from "../../Auth/Common/input_filed"
import styles from "../../../styles/form.module.scss"
import { useState, useEffect, useContext } from "react"
import { add_client_service, view_client_service, genrateLink_client_service } from "../../helpers/client_services"
import { useRouter } from 'next/router';
import GenrateLink from "../../Common/Modals/genrate_link";
import { admin_allCountry_list, state_list } from "../../helpers/business_owner_service";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { IdContext } from "../../MyContext/IdDetailsContext";
import { placeAutoComplete ,place_details_api,placeDetail} from "../../geolocation";
import { Location_key } from "../../helpers/api_url";


const AddClient = () => {
    let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    const router = useRouter()
    const [addData, setAddData] = useState({
        email: "",
        title: "",
        fname: "",
        mname: "",
        lname: "",
        country: "",
        state: "",
        houseNo: "",
        street: "",
        address: "",
        placeId:"",
        lat:"",
        long:"",
        permanentHouseNo: "",
        permanentStreet: "",
        permanentCountry: "",
        premanentState: ""
    })
    const [error, setError] = useState({
        email: "",
        title: "",
        fname: "",
        lname: "",
        phoneNo: "",
        country: "",
        state: "",
        houseNo: "",
        street: "",
        country_Code: "",
        permanentHouseNo: "",
        permanentStreet: "",
        permanentCountry: "",
        premanentState: ""
    })
    const { setData } = useContext(IdContext)
    const [message, setMessage] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])
    const [phoneNo, setNo] = useState("")
    const [country_Code, set_Country_Code] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [genrateLink, setLink] = useState("")
    const [suggestion, setSuggestion] = useState([])
    const [permanentAddSameAsCurrent, setPermanentAddSameAsCurrent] = useState(true)

    let clientId = router.query?.id
    // *************** Country / State Selector ****************


    const CloseModal = () => {
        setIsOpen(false)
    }
    useEffect(() => {
        clientId && viewClient(clientId)
    }, [clientId])

    const viewClient = async (clientId) => {
        const response = await view_client_service(clientId)
        if (response.code == 200) {
            setAddData((prev) => {
                return {
                    ...prev,
                    fname: response.result.firstName,
                    lname: response.result.lastName,
                    mname: response.result.middleName,
                    email: response.result.email,
                    title: response.result.title,
                    country: response.result.country,
                    houseNo: response.result.houseNo,
                    state: response.result.state,
                    street: response.result.streetAddress,
                    address:response.result.address,
                    lat:response.result.loc.coordinates[0],
                    long:response.result.loc.coordinates[1],
                    permanentHouseNo: response.result.permanentHouseNo,
                    permanentStreet: response.result.permanentStreetAddress,
                    permanentCountry: response.result.permanentCountry,
                    premanentState: response.result.permanentState
                }
            })
            setNo(response.result?.phoneCountryCode + response.result?.phone)
            set_Country_Code(response.result?.phoneCountryCode)
            setPermanentAddSameAsCurrent(response.result.permanantAddSameAsCurrent)
        }
    }
  
    const handleSaveNext = async (event, saveAsDraft) => {

        event.preventDefault();
        if (!addData.email) {
            setError({ ...error, email: "Please enter email" })
        } else if (!emailRegex.test(addData.email)) {
            setError({ ...error, email: "Please enter valid email" })
        } else if (!addData.title) {
            setError({ ...error, title: "Please select title" })
        }
        else if (!addData.fname){
            setError({ ...error, fname: "Please enter first name" })
        }
        else if (!addData.lname){
            setError({ ...error, lname: "Please enter last name" })
        }
        else if (!phoneNo) {
            setError({ ...error, phoneNo: "Please enter phone number" })
        } else if (!country_Code){
            setError({ ...error, country_Code: "Please select country code" })
        }
       
        else if (!addData.houseNo){
            setError({ ...error, houseNo: "Please enter house number" })
        }
        else if (!addData.street){
            setError({ ...error, street: "Please enter street address" })
        }
        else if (!addData.country){
            setError({ ...error, country: "Please select country" })
        }
        else if (!addData.state){
            setError({ ...error, state: "Please select state" })
        }else if (!permanentAddSameAsCurrent && !addData.permanentHouseNo){
            setError({ ...error, permanentHouseNo: "Please enter permanent house address" })
        }else if (!permanentAddSameAsCurrent && !addData.permanentStreet){
            setError({ ...error, permanentStreet: "Please enter permanent street address" })
        }else if (!permanentAddSameAsCurrent && !addData.permanentCountry){
            setError({ ...error, permanentCountry: "Please enter permanent country" })
        }else if (!permanentAddSameAsCurrent && !addData.premanentState){
            setError({ ...error, premanentState: "Please enter permanent state" })
        }
        else {
            setIsLoading(true)
            let Pnumber = phoneNo
            let Updatenumber = phoneNo
            let count = country_Code.length
            Pnumber = Pnumber.substring(count - 1)
            Updatenumber = Updatenumber.substring(count)

            const response = await add_client_service(
                clientId,
                addData.fname,
                addData.mname,
                addData.lname,
                addData.email,
                addData.title,
                country_Code,
                clientId ? Updatenumber : Pnumber,
                addData.country,
                addData.state,
                addData.houseNo,
                addData.street,
                saveAsDraft == "link" ? "" : saveAsDraft,
                addData.lat ? addData.lat : "00",
                addData.long ? addData.long : "00",
                addData.address,
                addData.permanentStreet,
                addData.permanentHouseNo,
                addData.permanentCountry,
                addData.premanentState,
                permanentAddSameAsCurrent
            )
            if (response.code == 200) {
                if (clientId) {
                    setData((prev) => {
                        return {
                            ...prev,
                            email: addData.email,
                            phone: Pnumber,
                            country: addData.country,
                            state: addData.state,
                            street: addData.street,
                            houseNo: addData.houseNo
                        }
                    })
                    router.push(`/Client/profile?id=${encodeURIComponent(response.result?._id ? response.result?._id : clientId)}`)
                }
                else if (saveAsDraft == "link") {
                    const genrateLinkResponse = await genrateLink_client_service(response.result?._id)
                    if (genrateLinkResponse.code == 200) {
                        setIsOpen(true)
                        setLink(genrateLinkResponse.generateLink)
                    }
                }
                else {
                    setData((prev) => {
                        return {
                            ...prev,
                            email: addData.email,
                            phone: phoneNo,
                            country: addData.country,
                            state: addData.state,
                            street: addData.street,
                            houseNo: addData.houseNo
                        }
                    })
                    router.push(`/Client/profile?id=${encodeURIComponent(response.result._id)}`)

                }
                setIsLoading(false)
            }
            else if (response.code == 400) {
                setIsLoading(false)
                setMessage(response.message)

            }
            else if (response.code == 402) {
                setIsLoading(false)
                setMessage("Email Already Exist.")
            } else {
                setMessage(response.message)
            }
        }
    }
    const handleOnchangePhone = (phone, country, e, data, value) => {
        let name = "phoneNo"
        let country_code = `+${country.dialCode}`
        let country_name = country.countryCode
        set_Country_Code(country_code)
        setNo(phone)
    }
    const handleChange = async (event) => {
        const { name, value } = event.target;
        if(addData.address?.length == 0 && value == ' '){

        } else if(addData.houseNo.length == 0 && value == ' '){

        }else if(addData.street.length == 0 && value == ' '){

        }
        else if(addData.permanentCountry.length == 0 && value == ' '){

        }else if(addData.premanentState.length == 0 && value == ' '){

        }else if(addData.permanentHouseNo.length == 0 && value == ' '){

        }else if(addData.permanentStreet.length == 0 && value == ' '){

        }else{
            setAddData({ ...addData, [name]: value });
        }
        setError({ ...error, [name]: "" })
        setError((prev) => {
            return {
                ...prev,
                fname: "", email: "", title: "", fname: "", lname: "", phoneNo: "", country: "",
                state: "", houseNo: "", street: "", country_Code: "", permanentHouseNo:"", permanentStreet:"",
                premanentState:"", permanentCountry:""
            }
        })
        if (event.target.name == "address") {
            // setStatus(true)
            let payload = {
                input: value,
                // location: {
                //     lat: "28.6508353", lng: "77.267595"
                // },
                key: Location_key,
                radius: '500'
            }
            if (value.length >= 3) {
                let getValue = await placeAutoComplete(payload)
                setSuggestion(getValue)
            }
            else {
                setSuggestion([])
            }
        }
    }
    const onClickItem = async (item) => {
        setSuggestion([])
        setAddData((prev) => {
            return {
                ...prev,
                address: item.description,
                country:item?.terms[item?.terms?.length -1]?.value,
                state:item?.terms[item?.terms?.length -2]?.value,
                houseNo:item?.terms[0]?.value,
                street:item?.terms[1]?.value,
                placeId:item?.place_id
            }
        })
        let payload = {
            key:Location_key,
            place_id:item.place_id
        }
        const getLatLong = await placeDetail(payload)// GETTING LAT LONG BY THEIR PLACE_ID
        if(getLatLong){
           
            setAddData((prev) => {
                return {
                    ...prev,
                    lat:getLatLong.data?.result?.geometry.location.lat,
                    long:getLatLong.data?.result?.geometry.location.lng,
                    address: item.description,
                    country:item?.terms[item?.terms?.length -1]?.value,
                    state:item?.terms[item?.terms?.length -2]?.value,
                    houseNo:item?.terms[0]?.value,
                    street:item?.terms[1]?.value
                }
            })
        }
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

    const onChangePermanentSameAsCorrentAdd = () => {
        setPermanentAddSameAsCurrent(!permanentAddSameAsCurrent)
        setAddData({
            ...addData,
            permanentCountry: "",
            permanentState: "",
            permanentHouseNo: "",
            permanentStreetAddress: ""
        })
    }
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className={`col-md-9 m-auto ${styles.workingHourseSec}`}>
                        <h3 className="">{clientId ? "Edit Client" : "Add Client"}</h3>
                        <div className={styles.formArea}>
                            <form >
                                <div class="row">
                                    <div className="col-md-12">
                                        <ul className={styles.progressBar}>
                                            <li className={styles.Active}><span>Basic Personal Details</span></li>
                                            <li><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <h4 className="col-md-12"> Basic Details </h4>
                                    <h4 className="text-center col-md-12" style={{ color: "red" }}><span>{message}</span></h4>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>
                                                Email
                                                <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!emailRegex.test(addData.email) || !addData.email ? error.email : ""}</span>
                                            </label>
                                            <InputFiled
                                                type_name="email"
                                                placeholder_name=""
                                                inputId="Email"
                                                value={addData.email?.trim()}
                                                input_name="email"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={styles.titleSec}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Title <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!addData.title ? error.title : ""}</span></label>
                                                <select class="form-control" name="title" onChange={(e) => { handleChange(e) }} value={addData.title} size="0">
                                                    <option value="">Select</option>
                                                    <option value="Mr.">Mr.</option>
                                                    <option value="Ms.">Ms.</option>
                                                    <option value="Mrs.">Mrs.</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className={styles.NameSec}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>First Name <span className={styles.required}>*</span>
                                                    <span className={styles.errorMsg}>{error.fname}</span>
                                                </label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name=""
                                                    value={addData.fname.trim()}
                                                    inputId="FName"
                                                    input_name="fname"
                                                    onChange={(e) => { handleChange(e) }}

                                                />

                                            </div>
                                        </div>
                                        <div className={styles.NameSec}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Middle Name <span className={styles.required}></span>

                                                </label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name=""
                                                    inputId="MName"
                                                    value={addData.mname.trim()}
                                                    input_name="mname"
                                                    onChange={(e) => { handleChange(e) }}

                                                />
                                            </div>
                                        </div>
                                        <div className={`${styles.NameSec} mr-0`}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Last Name <span className={styles.required}>*</span>
                                                    <span className={styles.errorMsg}>{error.lname}</span>
                                                </label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name=""
                                                    inputId="LName"
                                                    value={addData.lname.trim()}
                                                    input_name="lname"
                                                    onChange={(e) => { handleChange(e) }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                                            <label>Mobile Number <span className={styles.required}>{!phoneNo ? error.phoneNo : ""}{!country_Code ? error.country_Code : ""}</span></label>

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
                                {/* ********************************** Google API as pre new changes ************************************************************************************* */}
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Address</label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name="Address"
                                                inputId="Address"
                                                value={addData.address}
                                                input_name="address"
                                                onChange={(e) => { handleChange(e) }}
                                            />

                                            {searchingList}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>House/Building No. <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{error.houseNo}</span>
                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="House"
                                                value={addData.houseNo}
                                                input_name="houseNo"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Street Address <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{error.street}</span>
                                            </label>
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
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!addData.country ? error.country : ""}</span>
                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name="country"
                                                inputId="country"
                                                value={addData.country}
                                                input_name="country"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>State/Province <span className={styles.required}>*</span>
                                                <span className={styles.errorMsg}>{!addData.state ? error.state : ""}</span>
                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name="State"
                                                inputId="state"
                                                value={addData.state}
                                                input_name="state"
                                                onChange={(e) => { handleChange(e) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="checkbox1" name="permanentAddSameAsCurrent" type="checkbox" checked={permanentAddSameAsCurrent} onChange={() => { setPermanentAddSameAsCurrent(!permanentAddSameAsCurrent) }} />
                                                <label for="checkbox1" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {!permanentAddSameAsCurrent ?
                                    <>
                                        <div class="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Permanent House/Building No. <span className={styles.required}>*</span>
                                                        <span className={styles.errorMsg}>{(!permanentAddSameAsCurrent || !addData.permanentHouseNo) ? error.permanentHouseNo :""}</span>
                                                    </label>
                                                    <InputFiled
                                                        type_name="text"
                                                        placeholder_name="Permanent House Number"
                                                        inputId="permanentHouseNo"
                                                        value={addData.permanentHouseNo}
                                                        input_name="permanentHouseNo"
                                                        onChange={(e) => { handleChange(e) }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Permanent Street Address <span className={styles.required}>*</span>
                                                        <span className={styles.errorMsg}>{(!permanentAddSameAsCurrent || !addData.permanentStreet) ? error.permanentStreet :""}</span>
                                                    </label>
                                                    <InputFiled
                                                        type_name="text"
                                                        placeholder_name="Permanent Street"
                                                        inputId="permanentStreet"
                                                        value={addData.permanentStreet}
                                                        input_name="permanentStreet"
                                                        onChange={(e) => { handleChange(e) }}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Permanent Country <span className={styles.required}>*</span>
                                                        <span className={styles.errorMsg}>{(!permanentAddSameAsCurrent || !addData.permanentCountry) ? error.permanentCountry : ""}</span>
                                                    </label>
                                                    <InputFiled
                                                        type_name="text"
                                                        placeholder_name="Permanent Country"
                                                        inputId="permanentCountry"
                                                        value={addData.permanentCountry}
                                                        input_name="permanentCountry"
                                                        onChange={(e) => { handleChange(e) }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Permanent State/Province <span className={styles.required}>*</span>
                                                        <span className={styles.errorMsg}>{(!permanentAddSameAsCurrent || !addData.premanentState) ? error.premanentState : ""}</span>
                                                    </label>
                                                    <InputFiled
                                                        type_name="text"
                                                        placeholder_name="Premanent State"
                                                        inputId="premanentState"
                                                        value={addData.premanentState}
                                                        input_name="premanentState"
                                                        onChange={(e) => { handleChange(e) }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                    : ""}
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className={`col-md-9 ${styles.ButtonGroup}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p>Will be show on client list with mark as " Draft"</p>

                                                {
                                                    clientId ?
                                                        ""
                                                        :
                                                        isLoading ? <button disabled className={`${styles.SaveBtn} mt-0`} > Save as Draft</button>
                                                            : <button className={`${styles.SaveBtn} mt-0`} onClick={(e) => { handleSaveNext(e, true) }}> Save as Draft</button>
                                                }
                                            </div>
                                            <div className="col-md-4">
                                                <GenrateLink openModal={(e) => { handleSaveNext(e, "link") }} link={genrateLink} clientId={clientId} fname={addData.fname} lname={addData.lname} email={addData.email} styles={styles} closeModal={CloseModal} open={isOpen} />
                                            </div>
                                            <div className="col-md-4">
                                                {
                                                    isLoading ? <button disabled className={styles.SandBtn} ><> <i class="fa fa-refresh fa-spin"></i>  Loading </></button>
                                                        : <button className={styles.SandBtn} onClick={(e) => { handleSaveNext(e, false) }}>{clientId ? "Update" : "Save and Next"}</button>}
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
export default AddClient