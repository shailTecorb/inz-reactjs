import { Fragment, useState } from "react";
import CaptchaText from "../captcha";
import styles from "../../../styles/auth.module.scss"
import { validateEmail, validatePassword } from '../../Common/validation';
import { login_service } from "../../helpers/service";
import InputFiled from "../Common/input_filed";
import LeftBanner from "../Common/leftBanner";
import { useRouter } from "next/router";
const SignIn = () => {
    let route = useRouter()
    const [Isinput, setIsInput] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setLoading] = useState(false)
    const [captchaText, setCaptchaText] = useState('')
    const [random, setRandom] = useState('')
    const [captchaErrorMsg, setCaptchaError] = useState('')
    const [isDisabledCaptcha, setIsDisabledcaptcha] = useState(false)
    const [message, setMsg] = useState()

    //   const [isDisabled, set_isDisabled] = useState(false)
    const [isError, set_isError] = useState({
        emailErrorMsg: "",
        isDisabledEmail: false,
        passwordErrorMsg: "",
        isDisabledPassword: false,
    })
    const validForm = (fieldName, Value) => {
        let EmailErrorMsg = isError.emailErrorMsg
        let isDisabledEmail = isError.isDisabledEmail
        let PasswordErrorMsg = isError.passwordErrorMsg
        let isDisabledpassword = isError.passwordErrorMsg

        // switch (fieldName) {
        //     case "email":
        //         EmailErrorMsg = validateEmail(Value).error
        //         isDisabledEmail = validateEmail(Value).isDisabled
        //         break;

        //     case "password":
        //         PasswordErrorMsg = validatePassword(Value).error
        //         isDisabledpassword = validatePassword(Value).isDisabled
        //     default:
        //         break;
        // }

        set_isError((prev) => {
            return ({
                ...prev,
                EmailErrorMsg: EmailErrorMsg,
                isDisabledEmail: isDisabledEmail,
                passwordErrorMsg: PasswordErrorMsg,
                isDisabledPassword: isDisabledpassword
            })
        })
    }
    const handleSignin = async (e) => {
        let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
        let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/
        e.preventDefault();
        if (!emailRegex.test(Isinput.email)) {
            set_isError((prev) => { return ({ ...prev, emailErrorMsg: "Please enter email", isDisabledEmail: false }) })
        }
        else if (!passwordRegex.test(Isinput.password)) {
            set_isError((prev) => { return ({ ...prev, passwordErrorMsg: "Please enter password", isDisabledPassword: false }) })
        }
        else if (!captchaText) {
            setIsDisabledcaptcha(false)
            setCaptchaError("Please enter valid captcha")
        }
        else {
            set_isError((prev) => { return ({ ...prev, passwordErrorMsg: "", isDisabledPassword: true, emailErrorMsg: "", isDisabledEmail: true }) })
            setLoading(true)
            const response = await login_service(Isinput.email, Isinput.password)
            if (response.code == 200 && response.result.role == "businessOwner") {
                localStorage.setItem("countryId",JSON.stringify(response.result.usrDetail.selectedCountries) );
                localStorage.setItem("profileDetails",response.result.usrDetail.profileDetails);
                localStorage.setItem("visaType",JSON.stringify(response.result.usrDetail.selectedVisaTypes) );
                setLoading(false)
               // route.push("/busines/owner/dashboard")
              typeof window!=="undefined" && ( localStorage.token = response.result.token, localStorage.role=response.result.role )
                if (response.result.usrDetail.selectCountry === false) {
                    route.push("/busines/owner/visa/selectCountry")
                    // route.push("/busines/owner/dashboard")
                }
                else if(response.result.usrDetail.selectVisaType === false){
                    route.push("/busines/owner/visa/visalist")
                }
                else if(response.result.usrDetail.selectAppointmentMode === false){
                    route.push("/busines/owner/visa/appointmentMode")
                }
                else if (response.result.role == "businessOwner" && response.result.usrDetail.country ) {
                    route.push("/busines/owner/dashboard")
                     //route.push("/busines/owner/visa/selectCountry")
                }  
                else {
                    // route.push("/LIA/profile/dashboard") 
                    route.push("/busines/owner/dashboard")   
                }
            }  else if(response.code == 200 && response.result.role == "liaAgent"){
                typeof window!=="undefined" && ( localStorage.token = response.result.token, localStorage.role=response.result.role)
                localStorage.setItem("countryId",JSON.stringify(response.result.usrDetail.selectedCountries) );
                localStorage.setItem("userId",response.result.usrDetail._id);
                localStorage.setItem("visaType",JSON.stringify(response.result.usrDetail.selectedVisaTypes) )
                route.push("/LIA/workingHours") 
           }  
             else if(response.code == 400 ){
                setMsg(response.message)
                setLoading(false) 
            }
            else{

            }
        }
    }
    return (
        <Fragment>
            <section className={styles.auth}>
                <div className={styles.container}>
                    <div className="row mx-0">
                        <LeftBanner />
                        <div className="col-md-12 col-lg-6 bg-white">

                            <div className={styles.formSection}>
                                <h3 className="pb-3">Log In </h3>
                                <form>
                                    <div className={`form-group ${styles.fromGroup}`}>
                                    
                                        <label>Email <span className={styles.required}>*</span><span style={{color:"red"}}>{message}</span>
                                            {/* <span>{!isError.isDisabledEmail && isError.emailErrorMsg}</span>  */}
                                        </label>
                                        <InputFiled
                                            type_name="email"
                                            placeholder_name="Email"
                                            input_name={Isinput.email}
                                            onChange={(e) => {
                                                setIsInput((prev) => { return ({ ...prev, email: e.target.value }) });
                                                validForm("email", Isinput.email)
                                            }}
                                            class_name={isError.emailErrorMsg !== "" && styles.errorMsg} />
                                        <img src="/images/email.svg" alt="email" />
                                    </div>
                                    <div className={`form-group  ${styles.fromGroup}`}>
                                        <label>Password <span className={styles.required}>*</span>
                                            {/* <span>{!isError.isDisabledPassword && isError.passwordErrorMsg}</span> */}
                                        </label>
                                        <InputFiled
                                            type_name="password"
                                            placeholder_name="Password"
                                            input_name={Isinput.password}
                                            onChange={(e) => {
                                                setIsInput((prev) => { return ({ ...prev, password: e.target.value }) });
                                                validForm("password", Isinput.password)
                                            }}
                                            class_name={isError.passwordErrorMsg !== "" && styles.errorMsg}
                                        />
                                        <img src="/images/password.svg" alt="email" />
                                    </div>
                                    <div className={`form-group ${styles.fromGroup} ${styles.captchCodeSec}`}>
                                        <label>Captcha</label> <span style={{color:"red"}}>{captchaErrorMsg}</span>
                                      
                                            <CaptchaText styles={styles}
                                                captchaText={captchaText}
                                                setCaptchaText={setCaptchaText}
                                                setRandom={setRandom}
                                                setCaptchaErrorMsg={setCaptchaError}
                                               // captchaError={captchaErrorMsg}
                                                disabledCaptcha={isDisabledCaptcha}
                                                setIsDisabledcaptcha={setIsDisabledcaptcha}
                                                random={random}
                                            />
                                     
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <input name="" type="checkbox" value="" />
                                            <span className={`pl-2 ${styles.remeber}`}>Remember Me</span></div>
                                        <div className={styles.remeber}><a href="/auth/forgot">Forget Password?</a></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <div className="d-flex align-items-center">
                                            <button type="submit" className={`btn `} onClick={handleSignin}>
                                                {

                                                    isLoading ? <> <i class="fa fa-refresh fa-spin"></i>  Loading </> : "SIGN IN"

                                                }
                                            </button>


                                        </div>
                                        <div className={styles.remeber}> Not Registered yet? <a href="/auth/SignUp" >SIGN UP</a></div>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )


}

export default SignIn;