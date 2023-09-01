
import styles from "../../../../styles/form.module.scss"
import { validateName, validateEmail, validatePhone, validateAddress, } from '../../../Common/validation';
import { useState } from "react"
import { add_client_service } from "../../../helpers/client_services"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useRouter } from 'next/router';
import GenrateLink from "../../../Common/Modals/genrate_link";
import InputFiled from "../../../Auth/Common/input_filed";
const BusinessBasicProfile = () => {
    const router = useRouter()
    const [addData, setAddData] = useState({
        email: "",
        title: "Mr.",
        fname: "",
        mname: "",
        lname: "",
        mobileNo: "",
        country: "india",
        state: "up",
        houseNo: "",
        street: ""
    })
    const [message, setMessage] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    // *************** Country / State Selector ************88

    const OpenModal = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }
    const CloseModal = () => {
        setIsOpen(false)

    }

    const handleSaveNext = async (event, type) => {
        console.log(type)
        event.preventDefault();
        if (!addData.email) {
            set_isError((prev) => {
                return ({
                    ...prev, EmailErrorMsg: "Please enter email",
                    isDisabledEmail: false,
                })
            })
        }
        else if (!addData.fname) {
            set_isError((prev) => {
                return ({
                    ...prev,
                    FnameErrorMsg: "Please enter first name",
                    isDisabledFname: false,
                })
            })
        }
        else if (!addData.lname) {
            set_isError((prev) => {
                return ({
                    ...prev,
                    LnameErrorMsg: "Please enter last name",
                    isDisabledLname: false,

                })
            })
        }
        else if (!addData.mobileNo) {
            set_isError((prev) => {
                return ({
                    ...prev,
                    MobileErrorMsg: "Please enter mobile no.",
                    isDisabledMobile: false,
                })
            })
        }
        else {
            const response = await add_client_service(
                addData.fname,
                addData.mname,
                addData.lname,
                addData.email,
                addData.title,
                addData.mobileNo,
                addData.country,
                addData.state,
                addData.houseNo,
                addData.street,
                type == "Draft" ? true : false
            )

            localStorage.user = JSON.stringify(addData.fname,
                addData.mname,
                addData.lname,
                addData.email,
                addData.title,
                addData.mobileNo,
                addData.country,
                addData.state,
                addData.houseNo,
                addData.street)
            console.log(response)
            if (response.code == 200) {
                onClickClear()
                router.push("/Client/profile")
            }
            else if (response.code == 402) {
                onClickClear()
                setMessage("Email Already Exist.")
            }

        }

    }
    const onClickClear = () => {
        set_isError((prev) => {
            return ({
                ...prev, EmailErrorMsg: "Please enter email",
                isDisabledEmail: false,
                FnameErrorMsg: "Please enter first name",
                isDisabledFname: false,
                MnameErrorMsg: "Please enter middle name",
                isDisabledMname: false,
                LnameErrorMsg: "Please enter last name",
                isDisabledLname: false,
                MobileErrorMsg: "Please enter mobile no.",
                isDisabledMobile: false,
                StreetErrorMsg: "Please enter street",
                isDisabledStreet: false,
                HouseErrorMsg: "Please enter House no",
                isDisabledHouse: false
            })
        })
    }




    const [isError, set_isError] = useState({
        EmailErrorMsg: "", FnameErrorMsg: "",
        MnameErrorMsg: "", LnameErrorMsg: "",
        MobileErrorMsg: "", TitleErrorMsg: "",
        CountryErrorMsg: "", StateErrorMsg: "",
        HouseErrorMsg: "", StreetErrorMsg: "",
        isDisabledFname: false,
        isDisabledEmail: false,
        isDisabledMname: false,
        isDisabledLname: false,
        isDisabledMobile: false,
        isDisabledTitle: false,
        isDisabledCountry: false,
        isDisabledState: false,
        isDisabledHouse: false,
        isDisabledStreet: false,
        isDisabled: false
    })

    const validForm = (fieldName, Value) => {
        // console.log("Hit")
        let EmailErrorMsg = isError.EmailErrorMsg
        let isDisabledEmail = isError.isDisabledEmail

        let FnameErrorMsg = isError.FnameErrorMsg
        let isDisabledFname = isError.isDisabledFname
        let MnameErrorMsg = isError.MnameErrorMsg
        let isDisabledMname = isError.isDisabledMname
        let LnameErrorMsg = isError.LnameErrorMsg
        let isDisabledLname = isError.isDisabledLname

        let TitleErrorMsg = isError.TitleErrorMsg
        let isDisabledTitle = isError.isDisabledTitle
        let MobileErrorMsg = isError.MobileErrorMsg
        let isDisabledMobile = isError.isDisabledMobile
        let StateErrorMsg = isError.StateErrorMsg
        let isDisabledState = isError.isDisabledState
        let CountryErrorMsg = isError.CountryErrorMsg
        let isDisabledCountry = isError.isDisabledCountry
        let HouseErrorMsg = isError.HouseErrorMsg
        let isDisabledHouse = isError.isDisabledHouse
        let StreetErrorMsg = isError.StreetErrorMsg
        let isDisabledStreet = isError.isDisabledStreet


        switch (fieldName) {
            case "email":
                EmailErrorMsg = validateEmail(Value).error
                isDisabledEmail = validateEmail(Value).isDisabled

                break;
            case "fname":
                FnameErrorMsg = validateName(Value).error
                isDisabledFname = validateName(Value).isDisabled

                break;
            case "mname":
                MnameErrorMsg = validateName(Value).error
                isDisabledMname = validateName(Value).isDisabled

                break;
            case "lname":
                LnameErrorMsg = validateName(Value).error
                isDisabledLname = validateName(Value).isDisabled

                break;
            case "mobileNo":
                MobileErrorMsg = validatePhone(Value).error
                isDisabledMobile = validatePhone(Value).isDisabled

                break;
            case "houseNo":
                HouseErrorMsg = validateAddress(Value).error
                isDisabledHouse = validateAddress(Value).isDisabled

                break;
            case "street":
                StreetErrorMsg = validateAddress(Value).error
                isDisabledStreet = validateAddress(Value).isDisabled

                break;
            default:
                break;
        }

        set_isError((prev) => {
            return ({
                ...prev, EmailErrorMsg: EmailErrorMsg,
                isDisabledEmail: isDisabledEmail,
                FnameErrorMsg: FnameErrorMsg,
                isDisabledFname: isDisabledFname,
                MnameErrorMsg: MnameErrorMsg,
                isDisabledMname: isDisabledMname,
                LnameErrorMsg: LnameErrorMsg,
                isDisabledLname: isDisabledLname,
                MobileErrorMsg: MobileErrorMsg,
                isDisabledMobile: isDisabledMobile,
                StreetErrorMsg: StreetErrorMsg,
                isDisabledStreet: isDisabledStreet,
                HouseErrorMsg: HouseErrorMsg,
                isDisabledHouse: isDisabledHouse
            })
        })


    }




    //****************************************************** */

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
                            <form >
                            <div class="row">
                                    <div className="col-md-12">
                                        <ul className={styles.progressBar}>
                                            <li className={styles.Active}><span>Basic Personal Details</span></li>
                                            <li ><span>Full Profile</span></li>
                                            <li><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <h4 className="col-md-12"> Basic Details </h4>
                                    <span>{message}</span>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>
                                                Email
                                                <span className={styles.required}>*</span>
                                                {/* <span className={styles.errorMsg}>{!isError.isDisabledEmail && isError.EmailErrorMsg}</span> */}
                                            </label>
                                            <InputFiled
                                                type_name="email"
                                                placeholder_name=""
                                                inputId="Email"
                                                value={addData.email}
                                                input_name="email"
                                                class_name={isError.EmailErrorMsg !== "" && styles.errorMsg}
                                                onChange={(e) => { handleChange(e) }}
                                            //    onChange={(e) => { setAddData((prev) => { return ({ ...prev, email: e.target.value }) }); validForm("email", addData.email) }}
                                            />


                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={styles.titleSec}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Title <span className={styles.required}>*</span> <span className={styles.errorMsg}>{!isError.isDisabledTitle && isError.TitleErrorMsg}</span></label>
                                                <select class="form-control" name="cc_exp_mo" value={addData.title} size="0">
                                                    <option value="01">Mr.</option>
                                                    <option value="01">Mrs.</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={styles.NameSec}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>First Name <span className={styles.required}>*</span>
                                                {/* <span className={styles.errorMsg}>{!isError.isDisabledFname && isError.FnameErrorMsg}</span>  */}
                                                </label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name=""
                                                    value={addData.fname}
                                                    inputId="FName"
                                                    input_name="fname"
                                                    onChange={(e) => { handleChange(e) }}
                                                    class_name={isError.FnameErrorMsg !== "" && styles.errorMsg}
                                                // onChange={(e) => { setAddData((prev) => { return ({ ...prev, fname: e.target.value }) }); validForm("fname", addData.fname) }}
                                                />

                                            </div>
                                        </div>
                                        <div className={styles.NameSec}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Middle Name <span className={styles.required}>*</span>
                                                {/* <span className={styles.errorMsg}>{!isError.isDisabledMname && isError.MnameErrorMsg}</span> */}
                                                 </label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name=""
                                                    inputId="MName"
                                                    value={addData.mname}
                                                    input_name="mname"
                                                    onChange={(e) => { handleChange(e) }}
                                                    // class_name={isError.MnameErrorMsg !== "" && styles.errorMsg}
                                                // onChange={(e) => { setAddData((prev) => { return ({ ...prev, mname: e.target.value }) }); validForm("mname", addData.mname) }}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${styles.NameSec} mr-0`}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Last Name <span className={styles.required}>*</span>
                                                 {/* <span className={styles.errorMsg}>{!isError.isDisabledLname && isError.LnameErrorMsg}</span> */}
                                                 </label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name=""
                                                    inputId="LName"
                                                    value={addData.lname}
                                                    input_name="lname"
                                                    onChange={(e) => { handleChange(e) }}
                                                    class_name={isError.LnameErrorMsg !== "" && styles.errorMsg}
                                                // onChange={(e) => { setAddData((prev) => { return ({ ...prev, lname: e.target.value }) }); validForm("lname", addData.lname) }}

                                                />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Mobile Number</label> <span className={styles.required}>{!isError.isDisabledMobile && isError.MobileErrorMsg}</span>
                                            <InputFiled
                                                type_name="text"
                                                type="tel"
                                                placeholder_name=""
                                                inputId="Mobile"
                                                value={addData.mobileNo}
                                                input_name="mobileNo"
                                                onChange={(e) => { handleChange(e) }}
                                            // onChange={(e) => { setAddData((prev) => { return ({ ...prev, mobileNo: e.target.value.replace(/\D/g,'') }) }); validForm("mobileNo", addData.mobileNo) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country <span className={styles.required}>*</span> 
                                            {/* <span className={styles.errorMsg}>{!isError.isDisabledCountry && isError.CountryErrorMsg}</span> */}
                                            </label>
                                            <CountryDropdown  name="cc_exp_mo" size="0"  className={isError.CountryErrorMsg !== "" && styles.errorMsg}
                                                value={addData.country}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, country: val }) }); validForm("mobileNo", addData.mobileNo) }} />




                                            {/* <select class="form-control" name="cc_exp_mo" value={addData.country} size="0">
                                                <option value="01">Mr.</option>
                                                <option value="01">Mrs.</option>
                                            </select> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>State/Province <span className={styles.required}>*</span>
                                             {/* <span className={styles.errorMsg}>{!isError.isDisabledState && isError.StateErrorMsg}</span> */}
                                             </label>

                                            <RegionDropdown className={isError.StateErrorMsg !== "" && styles.errorMsg} name="cc_exp_mo" size="0"
                                                country={addData.country}
                                                value={addData.state}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, state: val }) }); validForm("mobileNo", addData.mobileNo) }} />


                                            {/* <select class="form-control" name="cc_exp_mo" size="0" value={addData.state}>
                                                <option value="01">Mr.</option>
                                                <option value="01">Mrs.</option>
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>House/Suite/Building No. <span className={styles.required}>*</span>
                                            {/* <span className={styles.errorMsg}>{!isError.isDisabledHouse && isError.HouseErrorMsg}</span>  */}
                                            </label>
                                            <InputFiled
                                                type_name="text"
                                                placeholder_name=""
                                                inputId="House"
                                                value={addData.houseNo}
                                                input_name="houseNo"
                                                onChange={(e) => { handleChange(e) }}
                                                class_name={isError.HouseErrorMsg !== "" && styles.errorMsg}
                                            // onChange={(e) => { setAddData((prev) => { return ({ ...prev, houseNo: e.target.value }) }); validForm("houseNo", addData.houseNo) }}
                                            />


                                        </div>
                                    </div>

                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Street Address <span className={styles.required}>*</span>
                                            {/* <span className={styles.errorMsg}>{!isError.isDisabledStreet && isError.StreetErrorMsg}</span> */}
                                             </label>
                                            <InputFiled
                                                type_name="emtextail"
                                                placeholder_name=""
                                                inputId="Address"
                                                value={addData.street}
                                                input_name="street"
                                                onChange={(e) => { handleChange(e) }}
                                                class_name={isError.StreetErrorMsg !== "" && styles.errorMsg}
                                            // onChange={(e) => { setAddData((prev) => { return ({ ...prev, street: e.target.value }) }); validForm("street", addData.street) }}
                                            />


                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className={`col-md-9 ${styles.ButtonGroup}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p>Will be show on client list with mark as " Draft"</p>
                                                <button className={`${styles.SaveBtn} mt-0`}>Save as Draft</button>
                                            </div>
                                            <div className="col-md-4">
                                                <GenrateLink email={addData.email} styles={styles} closeModal={CloseModal} open={isOpen} openModal={OpenModal} />
                                            </div>
                                            <div className="col-md-4">
                                                <button className={styles.SandBtn} onClick={handleSaveNext}>Save and Next</button>
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
export default BusinessBasicProfile