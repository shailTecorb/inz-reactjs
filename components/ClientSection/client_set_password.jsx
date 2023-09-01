import { Fragment, useState } from "react";
import styles from "../../styles/auth.module.scss"
import { validateEmail, validatePassword } from "../Common/validation";
import InputFiled from "../Auth/Common/input_filed";
import LeftBanner from "../Auth/Common/leftBanner";
import { client_setPassword_service } from "../helpers/client_services";
import { useRouter } from 'next/router';

const ClientSetPassword = () => {
    const route = useRouter()
    console.log(route)
    const [Isinput, setIsInput] = useState({
        password: "",
        confirmPassword: ""
    })
    const [hidden, setHidden] = useState(true)

    //   const [isDisabled, set_isDisabled] = useState(false)
    const [isError, set_isError] = useState({

        passwordErrorMsg: "",
        isDisabledPassword: false,
        confirmPasswordErrorMsg: "",
        isDisabledConfirmPassword: false
    })
    const validForm = (fieldName, Value) => {
        let PasswordErrorMsg = isError.passwordErrorMsg
        let isDisabledpassword = isError.passwordErrorMsg
        let ConfirmPasswordError = isError.confirmPasswordErrorMsg
        let isDisabledConfirmPassword = isError.isDisabledConfirmPassword
        switch (fieldName) {
            case "password":
                PasswordErrorMsg = validatePassword(Value).error
                isDisabledpassword = validatePassword(Value).isDisabled
                break;
            case "confirmPassword":
                ConfirmPasswordError = validatePassword(Value).error
                isDisabledConfirmPassword = validatePassword(Value).isDisabled
                break;
            default:
                break;
        }

        set_isError((prev) => {
            return ({
                ...prev,
                passwordErrorMsg: PasswordErrorMsg,
                isDisabledPassword: isDisabledpassword,
                confirmPasswordErrorMsg: ConfirmPasswordError,
                isDisabledConfirmPassword: isDisabledConfirmPassword
            })
        })
    }
    const toggleShow = () => {
        setHidden(!hidden);
    }
    const handleSignin = async (e) => {
        e.preventDefault();
        if (!Isinput.password) {
            set_isError((prev) => { return ({ ...prev, passwordErrorMsg: "Please enter password", isDisabledPassword: false }) })

        }
        else if (!Isinput.confirmPassword) {
            set_isError((prev) => { return ({ ...prev, confirmPasswordErrorMsg: "Please enter confirm password", isDisabledConfirmPassword: false }) })

        }
        else {
            console.log(route.query)
            set_isError((prev) => { return ({ ...prev, passwordErrorMsg: "", isDisabledPassword: true, EmailErrorMsg: "", isDisabledEmail: true }) })
            const response = await client_setPassword_service(route.query.id, Isinput.password)
            // if(response.code==200 && response.result.role=="bussines Owner"){
            //     route.push("/busines/owner/dashboard")
            // }


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
                                <h3 className="pb-3">Set Password</h3>
                                <form>

                                    <div className={`form-group  ${styles.fromGroup}`}>
                                        <label> Password <span className={styles.required}>*</span> <span>{!isError.isDisabledPassword && isError.passwordErrorMsg}</span></label>
                                        <InputFiled type_name={hidden ? "password" : "text"}
                                            placeholder_name="Password"
                                            inputId="Password"
                                            input_name="password"
                                            onChange={(e) => { setIsInput((prev) => { return ({ ...prev, password: e.target.value }) }); validForm("password", Isinput.password) }} />
                                        {hidden ? <img src="/images/password.svg" alt="password" onClick={toggleShow} /> : <img src="/images/eye.svg" alt="password" onClick={toggleShow} />}

                                    </div>
                                    <div className={`form-group ${styles.fromGroup}`}>
                                        <label>Confirm Password <span className={styles.required}>*</span> <span>{!isError.isDisabledConfirmPassword && isError.confirmPasswordErrorMsg}</span> </label>
                                        <InputFiled type_name={hidden ? "password" : "text"}

                                            placeholder_name="Confirm Password"
                                            inputId="confirmPassword"
                                            input_name="confirmPassword"
                                            onChange={(e) => { setIsInput((prev) => { return ({ ...prev, confirmPassword: e.target.value }) }); validForm("confirmPassword", Isinput.email) }} />
                                        {hidden ? <img src="/images/password.svg" alt="password" onClick={toggleShow} /> : <img src="/images/eye.svg" alt="password" onClick={toggleShow} />}
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4">
                                        <div className="d-flex align-items-center">
                                            <button 
                                            type="submit" 
                                            className={`btn `} 
                                            onClick={handleSignin}>
                                            Set Password
                                            </button>
                                        </div>
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

export default ClientSetPassword;