import { Fragment, useState, useEffect, useContext } from "react";
import styles from "../../../styles/auth.module.scss";
import InputFiled from "../Common/input_filed";
import LeftBanner from "../Common/leftBanner";
import { business_owner_signup } from "../../helpers/business_owner_service";
import { useRouter } from "next/router";
import { IdContext } from "../../MyContext/IdDetailsContext";
import Routes from "../../Common/routes";
import {
  decryptJs,
  encryptJS,
  jwtDecode,
  jwtEncode,
} from "../../Common/encryptDecrypt";
import Link from "next/link";
import Captcha from "../Common/ReCaptcha";
import { useForm } from "react-hook-form";
import { Register } from "../../Common/validation/index";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [keyData, setKeyData] = useState({
    NZBNumber: "",
    companyName: "",
    email: "",
    password: "",
    captcha: "",
  });

  const [getErrors, setGetErrors] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [reference, setReference] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const { setEmail } = useContext(IdContext);

  const [name, setName] = useState("NZBN or ABN");

  const [decryptedData, setDecryptedData] = useState({});

  const [fieldDisabled, setFieldDisabled] = useState({
    NZBNStatus: false,
    CompanyNameStatus: false,
  });

  useEffect(() => {
    if (router.query?.verified) {
      let verifiedData = router.query.verified;

      let decryptedData = decryptJs(verifiedData);
      if (decryptedData) {
        let decodedData = jwtDecode(decryptedData);
        console.log("Decoded data, ", decodedData);
        setDecryptedData(decodedData);
        setKeyData((prev) => {
          return {
            ...prev,
            companyName: decodedData.company,
            NZBNumber: decodedData.number,
            email: decodedData.email,
          };
        });
        setValue("companyName", decodedData.company);
        setValue("NZBNumber", decodedData.number);
        setValue("email", decodedData.email);

        setName(decodedData?.type);
        if (decodedData.company !== "") {
          setFieldDisabled((prev) => {
            return {
              ...prev,
              CompanyNameStatus: true,
            };
          });
        }
        if (decodedData.number !== "") {
          setFieldDisabled((prev) => {
            return {
              ...prev,
              NZBNStatus: true,
            };
          });
        }
      } else {
        router.replace(Routes.Auth.CompanyVerify.href);
      }
    } else {
      router.replace(Routes.Auth.CompanyVerify.href);
    }
    // setRandom(Math.floor(100000 + Math.random() * 900000))
  }, []);

  useEffect(() => {
    if (!localStorage.token) {
    } else if (localStorage.token && localStorage.approved == "true") {
      router.replace("/busines/owner/dashboard");
    } else if (localStorage.token && localStorage.approved == "false") {
      router.replace("/busines/owner/visa/selectCountry");
    }
  }, []);

  const handleChange = async (event) => {
    event.persist();
    setKeyData((keyData) => ({
      ...keyData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleEdit = () => {
    console.log("________DecryptedData________", decryptedData);
    let encoded = jwtEncode(decryptedData);
    let encrypted = encryptJS(encoded);
    console.log("----------", encrypted);
    // setIsDisabled(false);
    // setVerifyStatus(false);
    router.push(`${Routes.Auth.CompanyVerify.href}?verified=${encrypted}`);
  };

  const handleCaptch = (value) => {
    console.log("Handle Captcha ", reference);
    setKeyData((prev) => {
      return { ...prev, captcha: value };
    });

    setCaptchaError("");
  };

  const onSubmit = async (data) => {
    if (keyData.captcha) {
      setIsLoading(true);
      const response = await business_owner_signup(keyData);
      if (response.code == 200) {
        setEmail(keyData.email);
        let encoded = jwtEncode(keyData.email);
        let encrypted = encryptJS(encoded);
        router.replace(`/auth/OptVerification?verified=${encrypted}`);
        setIsLoading(false);
      } else if (response.code == 400) {
        reference?.current?.reset()
        setGetErrors(response.message);
        setIsLoading(false);
      } else {
        reference?.current?.reset()
        setGetErrors(response.message);
        setIsLoading(false);
      }
    } else {
      console.log("Key Data", keyData);

      setCaptchaError("Please check captcha");
    }
  };

  const onError = (data) => {
    // setNZBNStatus("");
  };
  return (
    <Fragment>
      <section className={styles.auth}>
        <div className={styles.container}>
          <div className="row mx-0">
            <LeftBanner />
            <div className="col-md-12 col-lg-6 bg-white">
              <div className={styles.formSection}>
                <h3 className="pb-3">
                  Sign Up
                  {/* <button onClick={()=>router.replace(Routes.Auth.CompanyVerify.href)} className={styles.editBtn}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button> */}
                </h3>
                {/* Error Message */}
                {<h2 className={styles.userExist}>{getErrors} </h2>}
                <form>
                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>
                      {name || "NZBN or ABN"}{" "}
                      <span className={styles.required}>*</span>
                      <span className={styles.errorMsg}>
                        {errors.NZBNumber?.message}
                      </span>
                    </label>
                    <InputFiled
                      type_name="text"
                      placeholder_name="NZBN or ABN"
                      inputId=""
                      input_name="NZBNumber"
                      class_name="loading"
                      value={keyData.NZBNumber}
                      maxLength="13"
                      disabled={fieldDisabled.NZBNStatus}
                      register={register("NZBNumber", {
                        ...Register.NZBN_Number,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                    <button
                      onClick={() => handleEdit()}
                      type="button"
                      className={styles.edit}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>

                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>
                      Company Name <span className={styles.required}>*</span>
                      <small className={styles.errorMsg}>
                        {errors.companyName?.message}
                      </small>
                    </label>
                    <InputFiled
                      type_name="companyName"
                      placeholder_name="Company Name"
                      inputId="companyName"
                      input_name="companyName"
                      value={keyData.companyName}
                      disabled={fieldDisabled.CompanyNameStatus}
                      register={register("companyName", {
                        ...Register.CompanyName,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                    <img src="/images/password.svg" alt="password" />
                  </div>
                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>
                      Email <span className={styles.required}>*</span>{" "}
                      <span className={styles.errorMsg}>
                        {errors.email?.message}
                      </span>
                    </label>
                    <InputFiled
                      type_name="email"
                      placeholder_name="Email"
                      inputId="email"
                      input_name="email"
                      value={keyData.email.toLocaleLowerCase()}
                      register={register("email", {
                        ...Register.Email,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                    <img src="/images/email.svg" alt="email" />
                  </div>
                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>
                      Password <span className={styles.required}>*</span>
                      <small className={styles.errorMsg}>
                        {errors.password?.message}
                      </small>
                    </label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="Password"
                      inputId="password"
                      input_name="password"
                      value={keyData.password}
                      register={register("password", {
                        ...Register.Password,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                    <img src="/images/password.svg" alt="password" />
                  </div>
                  <div
                    className={`form-group col-12 pl-0 ${styles.fromGroup} ${styles.captchCodeSec} mb-2`}
                  >
                    <label>
                      Captcha{" "}
                      <span className={styles.errorMsg}>{captchaError}</span>
                    </label>
                    <h6>
                      <Captcha handleCaptch={handleCaptch} setReference={setReference} />
                    </h6>
                  </div>
                  <div
                    className={`form-group col-12 pl-0 ${styles.fromGroup} ${styles.captchCodeSec} mb-2`}
                  >
                    <p className={styles.info}>
                      By Clicking sign up ,I you agree to the T&Cs of Immitech
                      and its polices.<br></br> Click on the hyperlink to review
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className={styles.remeber}>
                      {" "}
                      Already Account? &nbsp;
                      <Link
                        href={Routes.Auth.login.href}
                        as={Routes.Auth.login.as}
                        replace={true}
                      >
                        <a>SIGN IN</a>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        type="submit"
                        onClick={handleSubmit(onSubmit, onError)}
                      >
                        {isLoading && (
                          <i
                            className="fa fa-spinner fa-spin"
                            style={{ marginRight: "5px" }}
                          />
                        )}
                        {isLoading && <span>Wait</span>}
                        {!isLoading && <span>Sign Up</span>}
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

export default SignUp;
