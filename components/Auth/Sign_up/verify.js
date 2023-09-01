import { Fragment, useEffect, useState } from "react";
import LeftBanner from "../Common/leftBanner";
import InputFiled from "../Common/input_filed";
import Captcha from "../Common/ReCaptcha";
import styles from "../../../styles/auth.module.scss";
import { useRouter } from "next/router";
import { IdContext } from "../../MyContext/IdDetailsContext";
import { decryptJs, encryptJS, jwtEncode } from "../../Common/encryptDecrypt";
import Routes from "../../Common/routes";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { verifyNZBN } from "../../helpers/business_owner_service";
import { useForm } from "react-hook-form";
import { Register } from "../../Common/validation/index";

const VerifyNZBN = () => {
  const [keyData, setKeydata] = useState({
    NZBNumber: "",
    captcha: "",
  });
  const [getErrors, setGetErrors] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const [NZBNStatus, setNZBNStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reference, setReference] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();

  useEffect(() => {
    if (!localStorage.token) {
      if (router.query?.verified) {
        let verifiedData = router.query.verified;

        let decryptedData = decryptJs(verifiedData);
        if (decryptedData) {
          let decodedData = jwtDecode(decryptedData);
          console.log("Decoded data, ", decodedData);
          setKeydata((prev) => {
            return {
              ...prev,
              NZBNumber: decodedData.number,
            };
          });
          setValue("NZBNumber", decodedData.number);
        } else {
          router.replace(Routes.Auth.CompanyVerify.href);
        }
      } else {
        router.replace(Routes.Auth.CompanyVerify.href);
      }
    } else if (localStorage.token) {
      console.log("HIO");
      router.replace("/busines/owner/dashboard");
    }
    //  else if (localStorage.token && localStorage.approved == "false") {
    //   console.log("HIOw");
    //   router.replace("/busines/owner/visa/selectCountry");
    // }
    console.log("HIO", localStorage.token, localStorage.approved);
  }, []);
  useEffect(() => {}, []);
  let router = useRouter();
  const onSubmit = async (data) => {
    console.log("Key Data", keyData);
    if (keyData.captcha) {
      // delete keyData.captcha;
      setIsLoading(true);
      let verifyResponse = await verifyNZBN(keyData);
      if (verifyResponse.code === 200) {
        if (verifyResponse.result?.verify == true) {
          setNZBNStatus("Verified");
          let encoded = jwtEncode(verifyResponse.result);
          let encrypted = encryptJS(encoded);
          router.push(`${Routes.Auth.signup.href}?verified=${encrypted}`);
          setIsLoading(false);
        } else {
          setNZBNStatus("invalid");
          setIsLoading(false);
        }
      } else {
        reference?.current?.reset()
        setError("NZBNumber", { type: "custom", message: verifyResponse.message });
        setIsLoading(false);
        setNZBNStatus("");
      }
    } else {
      setCaptchaError("Please check captcha");
    }
  };

  const onError = (data) => {
    setNZBNStatus("");
  };
  const handleChange = (event) => {
    event.persist();
    let value = String(event.target.value).replace(/ /g,'');
    setKeydata((keyData) => ({
      ...keyData,
      [event.target.name]: value,
    }));
    setNZBNStatus("");
  };

  const handleCaptch = (value) => {
    setKeydata((prev) => {
      return { ...prev, captcha: value };
    });
    setCaptchaError("");
  };
  console.log("Level", );

  return (
    <Fragment>
      <section className={styles.auth}>
        <div className={styles.container}>
          <div className="row mx-0">
            <LeftBanner />
            <div className="col-md-12 col-lg-6 bg-white">
              <div className={styles.formSection}>
                <h3 className="pb-3">Sign Up</h3>
                {/* Error message */}
                <h2 className={styles.userExist}>{getErrors} </h2>
                <form>
                  <div className={`form-group ${styles.fromGroup}`}>
                    <label>
                      NZBN or ABN <span className={styles.required}>*</span>
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
                      register={register("NZBNumber", {
                        ...Register.NZBN_Number,

                        onChange: (e) => handleChange(e),
                      })}
                    />
                    {NZBNStatus == "Verified" && (
                      <span className={styles.verifyNZBN}>Verified</span>
                    )}
                    {/* Invalid Status */}
                    {NZBNStatus == "invalid" && (
                      <span
                        className={`${styles.verifyNZBN} ${styles.invalid}`}
                      >
                        Invalid
                      </span>
                    )}
                  </div>
                  <div className="row">
                    <div
                      className={`form-group col-12 ${styles.fromGroup} ${styles.captchCodeSec} mb-2`}
                    >
                      <label>
                        Captcha{" "}
                        <span className={styles.errorMsg}>{captchaError}</span>
                      </label>
                      <h6>
                        <Captcha handleCaptch={handleCaptch} setReference={setReference} />
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className={styles.remeber}>
                      Not Registered yet? &nbsp;
                      <Link
                        href={Routes.Auth.login.href}
                        as={Routes.Auth.login.as}
                      >
                        <a>LOG IN</a>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        type="submit"
                        disabled={isLoading}
                        onClick={handleSubmit(onSubmit, onError)}
                      >
                        {isLoading && (
                          <i
                            className="fa fa-spinner fa-spin"
                            style={{ marginRight: "5px" }}
                          />
                        )}
                        {isLoading && <span>Verifying</span>}
                        {!isLoading && <span>Get Verified</span>}
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
export default VerifyNZBN;
