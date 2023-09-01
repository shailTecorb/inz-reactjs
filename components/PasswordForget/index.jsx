import { Fragment, useState } from "react";
// import styles from "../../../styles/auth.module.scss"
import styles from "../../styles/auth.module.scss"
import LeftBanner from "../Auth/Common/leftBanner"
// import InputFiled from "../../Auth/Common/input_filed";
import InputFiled from "../Auth/Common/input_filed"
import { forgot_password } from "../helpers/business_owner_service"
import { useRouter } from 'next/router'
const PasswordForget = () => {
  let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/
  const router = useRouter()
  const { id } = router.query
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [error, setErr] = useState("")

  const forgot_password_for_all = async (e) => {
    e.preventDefault()
    if (!password) {
      setPasswordErr("Please Enter Password")
    } else if (!passwordRegex.test(password)) {
      setPasswordErr("Please Enter Valid Password")
    } else if (!confirmPassword) {
      setConfirmPasswordErr("Please Enter Confirm Password")
    }
    else if (confirmPassword !== password) {
      setConfirmPasswordErr("Please Enter Same Password")
    }
    else {
      setIsLoading(true)
      let response = await forgot_password(id, password)
      if (response.code == 200){
        setIsLoading(false)
        router.push("/")
      }else if(response.code == 503 || !response) {
        setIsLoading(false)
        setErr("Server Error Please Try After Some Time")
      } else {
        setIsLoading(false)
        setErr(response.message)
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
                <h3 className="pb-3">Reset Password  </h3><span style={{ color: "red" }}></span>
                <div><p> Password must be more than 6 characters with 1 uppercase & 1 number.</p></div>
                <form>
                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>Password <span className={styles.required}>*</span><span style={{ color: "red" }}>{!password || !passwordRegex.test(password) ? passwordErr : ""}</span></label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="password"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <img src="/images/password.svg" alt="password" />
                  </div>
                  <div className={`form-group  ${styles.fromGroup}`}>
                    <label>Confirm Password <span className={styles.required}>*</span><span style={{ color: "red" }}>{!confirmPassword || !passwordRegex.test(confirmPassword) ? confirmPasswordErr : ""}</span></label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="confirm Password"
                      value={confirmPassword}
                      onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                    <img src="/images/password.svg" alt="password" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex align-items-center">
                     {isLoading? <button disabled type="submit"  >  <> <i class="fa fa-refresh fa-spin"></i>  Loading </> </button> :
                     <button type="submit"  onClick={forgot_password_for_all}> submit </button>}
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

export default PasswordForget;