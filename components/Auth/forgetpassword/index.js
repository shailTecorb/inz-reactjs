import { Fragment, useState } from "react";
import CaptchaText from "../captcha";
import styles from "../../../styles/auth.module.scss";
import { validateEmail } from "../../Common/validation";
import { forgot_password_service, login_service } from "../../helpers/service";
import InputFiled from "../Common/input_filed";
import LeftBanner from "../Common/leftBanner";
import { useRouter } from "next/router";
import SuccessModal from "../../Common/Modals/success_modal";
const Forgot = () => {
  let route = useRouter();
  const [Isinput, setIsInput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [openForgotModal, setOpenForgotModal] = useState(false);

  const [isError, set_isError] = useState({
    emailErrorMsg: "",
    isDisabledEmail: false,
    code: "",
  });
  const validForm = (fieldName, Value) => {
    let EmailErrorMsg = isError.emailErrorMsg;
    let isDisabledEmail = isError.isDisabledEmail;
    switch (fieldName) {
      case "email":
        EmailErrorMsg = validateEmail(Value).error;
        isDisabledEmail = validateEmail(Value).isDisabled;
        break;
    }
    setErrMsg("");
    set_isError((prev) => {
      return {
        ...prev,
        emailErrorMsg: EmailErrorMsg,
        isDisabledEmail: isDisabledEmail,
      };
    });
  };
  const handleforgetpassword = async (e) => {
    e.preventDefault();
    let emailRegex =
      /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    if (!emailRegex.test(Isinput.email)) {
      // {console.log(isError.passwordErrorMsg )}
      set_isError((prev) => {
        return {
          ...prev,
          emailErrorMsg: "Please enter valid email",
          isDisabledEmail: false,
        };
      });
    } else {
      // set_isError((prev) => { return ({ ...prev, EmailErrorMsg: "", isDisabledEmail: true }) })
      setLoading(true);
      // console.log("mail",Isinput.email)
      const response = await forgot_password_service(Isinput.email);
      if (response.code == 200) {
        setLoading(false);
        // route.push("/");
        openModal();
      } else if (response.code == 400) {
        setLoading(false);
        setErrMsg(response.message);
      } else if (response.code == 503) {
        setLoading(false);
        setErrMsg("Server Error Please Try After Some Time");
      } else {
        setLoading(false);
        setErrMsg(response.message);
      }
    }
  };

  const openModal = () => {
    setOpenForgotModal(true);
  };
  const closeModal = () => {
    setOpenForgotModal(false);
  };
  return (
    <Fragment>
      <section className={styles.auth}>
        <div className={styles.container}>
          <div className="row mx-0">
            <LeftBanner />
            <div className="col-md-12 col-lg-6 bg-white">
              <div className={styles.formSection}>
                <h3 className="pb-3">Forgot Password</h3>

                <p>
                  {" "}
                  Please Enter Email and we will send a link in your email to
                  set your new password
                </p>
                <form>
                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>
                      Email <span className={styles.required}>*</span>
                      <span className={styles.errorMsg}>
                        {!isError.isDisabledEmail && isError.emailErrorMsg}
                        {errMsg}
                      </span>
                    </label>
                    <InputFiled
                      type_name="email"
                      placeholder_name="Email"
                      input_name={Isinput.email}
                      onChange={(e) => {
                        setIsInput((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                        validForm("email", Isinput.email);
                      }}
                      class_name={
                        isError.emailErrorMsg !== "" && styles.errorMsg
                      }
                    />
                    <img src="/images/email.svg" alt="email" />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex align-items-center">
                      {isLoading ? (
                        <button disabled type="submit">
                          {" "}
                          <>
                            {" "}
                            <i class="fa fa-refresh fa-spin"></i> Loading{" "}
                          </>{" "}
                        </button>
                      ) : (
                        <button type="submit" onClick={handleforgetpassword}>
                          {" "}
                          Submit{" "}
                        </button>
                      )}
                    </div>
                    <div className={styles.remeber}>
                      {" "}
                      Already Signin? <a href="/auth/SignIn">SIGN In</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {openForgotModal && (
        <SuccessModal
          open={openForgotModal}
          closeModal={closeModal}
          message="Please check your email. Instructions were sent to your email address."
        />
      )}
    </Fragment>
  );
};

export default Forgot;
