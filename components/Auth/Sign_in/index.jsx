import { Fragment, useState, useEffect, useContext } from "react";
import styles from "../../../styles/auth.module.scss";
import { validateEmail, validatePassword } from "../../Common/validation";
import { login_service } from "../../helpers/service";
import InputFiled from "../Common/input_filed";
import LeftBanner from "../Common/leftBanner";
import router, { useRouter } from "next/router";
import axios from "axios";
import { IdContext } from "../../MyContext/IdDetailsContext";
import Link from "next/link";
import Routes from "../../Common/routes";
import Captcha from "../Common/ReCaptcha";
const SignIn = () => {
  let emailRegex =
    /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
  let passwordRegex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/;
  let route = useRouter();
  const [Isinput, setIsInput] = useState({
    email: "",
    password: "",
    captchaValue: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [random, setRandom] = useState("");
  const [reference, setReference] = useState({});

  //   const [captchaErrorMsg, setCaptchaError] = useState("");
  const [isDisabledCaptcha, setIsDisabledcaptcha] = useState(false);
  const [message, setMsg] = useState();
  const { setCountryId } = useContext(IdContext);
  const [isError, set_isError] = useState({
    EmailErrorMsg: "",
    passwordErrorMsg: "",
    isDisabledPassword: false,
    isDisabledEmail: false,
    isDisabled: false,
    captchaErrorMsg: "",
  });

  const [userCountry, setUserCountry] = useState("");
  useEffect(() => {
    setRandom(Math.floor(100000 + Math.random() * 900000));
  }, []);

  const handleClick = (event) => {
    //   event.preventDefault()
    setRandom(Math.floor(100000 + Math.random() * 900000));
  };

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        //   console.log(data,"data")
        setUserCountry(response.country_name);
        console.log(data, "data");
        localStorage.setItem("userCountry", data.country_code);
      })
      .catch((error) => {
        // //consolee.log(error);
      });
  };

  useEffect(() => {
    if (!localStorage.token) {
    } else if (localStorage.token && localStorage.role == "businessOwner") {
      route.replace("/busines/owner/dashboard");
    } else if (
      localStorage.token &&
      localStorage.role == "liaAgent" &&
      localStorage.countryId &&
      localStorage.visaType
    ) {
      route.push("/LIA/workplace");
    } else if (
      localStorage.token &&
      localStorage.role == "liaAgent" &&
      !localStorage.countryId &&
      !localStorage.visaType
    ) {
      route.push("/LIA/workplace");
    }
  }, []);
  const validForm = (fieldName, Value) => {
    let EmailErrorMsg = isError.EmailErrorMsg;
    let isDisabledEmail = isError.isDisabledEmail;
    let PasswordErrorMsg = isError.isDisabledPassword;
    let isDisabledPassword = isError.isDisabledPassword;
    switch (fieldName) {
      case "email":
        EmailErrorMsg = validateEmail(Value).error;
        isDisabledEmail = validateEmail(Value).isDisabled;

        break;
      case "password":
        PasswordErrorMsg = validatePassword(Value).error;
        isDisabledPassword = validatePassword(Value).isDisabled;

        break;
      default:
        break;
    }

    set_isError((prev) => {
      return {
        ...prev,
        EmailErrorMsg: EmailErrorMsg,
        isDisabledEmail: isDisabledEmail,
        passwordErrorMsg: PasswordErrorMsg,
        isDisabledPassword: isDisabledPassword,
      };
    });
  };
  const handleSignin = async (e) => {
    if (!captchaText || Number(captchaText) == Number(random)) {
    } else {
      set_isError((prev) => {
        return { ...prev, EmailErrorMsg: "" };
      });
      handleClick();
    }

    e.preventDefault();
    if (!Isinput.email) {
      set_isError((prev) => {
        return {
          ...prev,
          EmailErrorMsg: "Please enter email",
          isDisabledEmail: false,
        };
      });
    } else if (!emailRegex.test(Isinput.email)) {
      set_isError((prev) => {
        return {
          ...prev,
          EmailErrorMsg: "Please enter Valid email",
          isDisabledEmail: false,
        };
      });
    } else if (!Isinput.password) {
      set_isError((prev) => {
        return {
          ...prev,
          passwordErrorMsg: "Please enter password",
          isDisabledPassword: false,
        };
      });
    } else if (!passwordRegex.test(Isinput.password)) {
      set_isError((prev) => {
        return {
          ...prev,
          passwordErrorMsg:
            "Password must be more than 6 characters with 1 uppercase & 1 number.",
          isDisabledPassword: false,
        };
      });
    }
    //  else if (!captchaText) {
    //   setIsDisabledcaptcha(false);
    //   setCaptchaError("Please enter captcha");
    // }
    else if (!Isinput.captchaValue) {
      set_isError((prev) => {
        return {
          ...prev,
          captchaErrorMsg: "Please check captcha",
        };
      });
    }
    // else if (!captchaText || Number(captchaText) !== Number(random)) {
    //   setIsDisabledcaptcha(false);
    //   setCaptchaError("Please enter valid captcha");
    // }
    else {
      setLoading(true);
      getGeoInfo();
      const response = await login_service(Isinput.email, Isinput.password);

      if (response.code == 200 && response.result.role == "businessOwner") {
        localStorage.setItem(
          "countryId",
          JSON.stringify(response.result.usrDetail.selectedCountries)
        );
        localStorage.setItem(
          "profileDetails",
          response.result.usrDetail.profileDetails
        );
        localStorage.setItem(
          "visaType",
          JSON.stringify(response.result.usrDetail.selectedVisaTypes)
        );
        localStorage.setItem("approved", response.result.usrDetail.approved);
        localStorage.setItem("email", response.result.usrDetail.email);
        localStorage.setItem(
          "selectAppointmentMode",
          response.result.selectAppointmentMode
        );
       
        typeof window !== "undefined" &&
          ((localStorage.token = response.result.token),
          (localStorage.role = response.result.role),
          (localStorage.selectAppointmentMode = response?.result?.usrDetail?.selectAppointmentMode));
        setLoading(false);
        window.location.href = "/busines/owner/dashboard";
      } else if (
        response.code == 200 &&
        (response.result.role == "liaAgent" ||
          response.result.role == "manager" ||
          response.result.role == "worker")
      ) {
        typeof window !== "undefined" &&
          ((localStorage.token = response.result.token),
          (localStorage.selectAppointmentMode = response.result.userDetail.selectAppointmentMode),
          (localStorage.role = response.result.role));
        localStorage.setItem("userId", response.result.userDetail._id);
        setLoading(false);
        if (response.result.userDetail.selectCountry == false) {
          window.location.href = "/LIA/workplace";
        } else if (response.result.userDetail.selectVisaType == false) {
          console.log(response.result.userDetail?.selectedCountries);
          setCountryId(response.result.userDetail?.selectedCountries);
          window.location.href = "/LIA/workplace";
        } else if (response.result.userDetail.selectVisaType == "true") {
          localStorage.setItem(
            "visaType",
            JSON.stringify(response.result.usrDetail.selectedVisaTypes)
          );
        } else {
          window.location.href = "/LIA/workplace";
        }
      } else {
        setMsg(response.message);
        setLoading(false);
        reference?.current?.reset();
      }
    }
  };

  const handleCaptch = (value) => {
    console.log("Handle Captcha ", value);
    setIsInput((prev) => {
      return { ...prev, captchaValue: value };
    });
    setIsDisabled(true);
    set_isError((prev) => {
      return { ...prev, captchaErrorMsg: "" };
    });
  };
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
                    <label>
                      Email <span className={styles.required}>*</span>{" "}
                      <span className={styles.errorMsg}>{message} </span>{" "}
                      <span className={styles.errorMsg}>
                        {!Isinput.email || !emailRegex.test(Isinput.email)
                          ? isError.EmailErrorMsg
                          : ""}
                      </span>
                    </label>
                    <InputFiled
                      type_name="email"
                      placeholder_name="Email"
                      input_name={Isinput.email.toLocaleLowerCase()}
                      onChange={(e) => {
                        setIsInput((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                        validForm("email", e.target.value);
                      }}
                    />

                    <img src="/images/email.svg" alt="email" />
                  </div>
                  <div className={`form-group  ${styles.fromGroup}`}>
                    <label>
                      Password{" "}
                      <span className={styles.required}>
                        *{" "}
                        <small className={styles.errorMsg}>
                          {!Isinput.password ||
                          !passwordRegex.test(Isinput.password)
                            ? isError.passwordErrorMsg
                            : ""}
                        </small>
                      </span>
                    </label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="Password"
                      input_name={Isinput.password}
                      onChange={(e) => {
                        setIsInput((prev) => {
                          return { ...prev, password: e.target.value };
                        });
                        validForm("password", e.target.value);
                      }}
                    />
                    <img src="/images/password.svg" alt="email" />
                    <div className="w-100 text-right">
                      {/* <div className="d-flex align-items-center">
                      <input name="" type="checkbox" value="" />
                                            <span className={`pl-2 ${styles.remeber}`}>Remember Me</span>
                    </div> */}
                      <div className={styles.remeber}>
                        <Link
                          href={Routes.Auth.forgot.href}
                          as={Routes.Auth.forgot.as}
                        >
                          <a>Forget Password?</a>
                        </Link>
                      </div>
                    </div>

                    <div
                      className={`form-group ${styles.fromGroup} ${styles.captchCodeSec}`}
                    >
                      {/* <label>Captcha <span className={styles.required}>*</span> <span style={{ color: "red" }}>{captchaErrorMsg}</span></label> */}

                      {/* <button onClick={handleClick} type="button" className={styles.refresh}> <img src="/images/refresh.svg" alt="refresh" /></button>
                                        <CaptchaText styles={styles}
                                            captchaText={captchaText}
                                            setCaptchaText={setCaptchaText}
                                            setRandom={setRandom}
                                            setCaptchaErrorMsg={setCaptchaError}
                                            disabledCaptcha={isDisabledCaptcha}
                                            setIsDisabledcaptcha={setIsDisabledcaptcha}
                                            random={random}
                                            handleClick={handleClick}

                                        /> */}
                      <label>
                        Captcha{" "}
                        <span className={styles.errorMsg}>
                          {isError.captchaErrorMsg}
                        </span>
                      </label>
                      {/* <button onClick={handleClick} type="button" className={styles.refresh}> <img src="/images/refresh.svg" alt="refresh" /></button> */}
                      <h6>
                        <Captcha
                          handleCaptch={handleCaptch}
                          setReference={setReference}
                        />
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className={styles.remeber}>
                      {" "}
                      Not Registered yet? &nbsp;
                      <Link
                        href={Routes.Auth.CompanyVerify.href}
                        as={Routes.Auth.CompanyVerify.as}
                      >
                        <a>SIGN UP</a>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <button type="submit" onClick={handleSignin}>
                        {isLoading && (
                          <i
                            className="fa fa-spinner fa-spin"
                            style={{ marginRight: "5px" }}
                          />
                        )}
                        {isLoading && <span>WAIT</span>}
                        {!isLoading && <span>SIGN IN</span>}
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
  );
};

export default SignIn;
