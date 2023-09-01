import { Fragment, useState, useEffect, useContext } from "react";
import styles from "../../../styles/auth.module.scss";
import { useRouter } from "next/router";
import LeftBanner from "../Common/leftBanner";
import OtpInput from "./otp_input";
import {
  business_owner_otp_verification,
  business_owner_resend_otp,
} from "../../helpers/business_owner_service";
import { IdContext } from "../../MyContext/IdDetailsContext";
import { decryptJs } from "../../Common/encryptDecrypt";
import jwtDecode from "jwt-decode";
import Routes from "../../Common/routes";
const OtpVerification = () => {
  const router = useRouter();

  const [isResend, setIsResend] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(60);
  const [msgErr, setMsgErr] = useState("");
  const { Useremail } = useContext(IdContext);
  const [email, setEmail] = useState("");

  const handleOnchangeOtp = (otp) => {
    setOtp(otp);
  };

  useEffect(() => {
    if (router.query?.verified) {
      let verifiedData = router.query.verified;
      let decryptedData = decryptJs(verifiedData);
      if (decryptedData) {
        let decodedData = jwtDecode(decryptedData);
        console.log("Decoded data, ", decodedData);
        setEmail(decodedData);
      } else {
        router.replace(Routes.Auth.CompanyVerify.href);
      }
    } else {
      router.replace(Routes.Auth.CompanyVerify.href);
    }
  }, []);

  const handleOtp = async (event) => {
    event.preventDefault();
    let data = {
      email,
      otp,
    };
    console.log("Key Data", data);
    if (!otp) {
      setMsgErr("Please enter otp we send on your email");
    } else {
      setIsLoading(true);
      const response = await business_owner_otp_verification(data);
      if (response.code == 200) {
        localStorage.setItem("token", response.Token);
        localStorage.setItem("role", "businessOwner");
        localStorage.profileDetails = response.profileDetail;
        localStorage.profileStatus = true;

        localStorage.setItem("selectAppointmentMode",false)
        setIsLoading(false);
        window.location.replace("/busines/owner/dashboard");
      } else {
        setIsLoading(false);
        setMsgErr("Please Enter Valid OTP We Send On Your Email ");
      }
    }
  };
  const handleRsendotp = async (event) => {
    event.preventDefault();
    setIsResend(false);
    setCount(60);
    setMsgErr("")
    setOtp("");
    let data = {
      email,
    };
    const response = await business_owner_resend_otp(data);
    if (response.code == 200) {
      setIsLoading(false);
     
    } else {
      setMsgErr(response.message);
      setIsResend(true);
    }
  };
  // timer ::::::::::::::::::::::::::::::::::::::

  useEffect(() => {
    if (!isResend) {
      const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
      return () => clearInterval(timer);
    } else {
    }
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    if (!isResend) {
      setCount(count - 1);
      const timer = setTimeout(() => setIsResend(true), 60000);
      return () => clearTimeout(timer);
    } else {
      setCount(count - 1);
      const timer = setTimeout(() => setIsResend(true), 60000);
      return () => clearTimeout(timer);
    }
  }, [isResend]);

  return (
    <Fragment>
      <section className={styles.auth}>
        <div className={styles.container}>
          <div className="row mx-0">
            <LeftBanner />
            <div className="col-md-12 col-lg-6 bg-white">
              <div className={styles.formSection}>
                <div className={styles.emailImg}>
                  <img src="/images/verificationmail.svg" />
                </div>
                <h3 className="pb-3">Enter Verification Code</h3>
                {msgErr ? (
                  <span style={{ color: "red" }}>{msgErr}</span>
                ) : (
                  <p></p>
                )}
                <form>
                  <div
                    className={`form-group pb-3 ${styles.fromGroup} ${styles.fromVerifiGroup}`}
                  >
                    <OtpInput
                      value={otp}
                      onChange={handleOnchangeOtp}
                      numInputs={6}
                      separator={<span> </span>}
                      isInputNum={true}
                      name="otp"
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-5">
                    {isResend ? (
                      <>
                        <div className="d-flex align-items-center">
                          <button
                            type="submit"
                            className={`btn`}
                            onClick={(event) => {
                              handleOtp(event);
                            }}
                          >
                            {isLoading ? (
                              <>
                                {" "}
                                <i class="fa fa-refresh fa-spin"></i> Loading{" "}
                              </>
                            ) : (
                              "Verify"
                            )}
                          </button>
                        </div>

                        <div className="d-flex align-items-center">
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={handleRsendotp}
                          >
                            {" "}
                            Resend OTP
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="d-flex align-items-center">
                          {isLoading ? (
                            <button disabled type="submit" className={``}>
                              <>
                                {" "}
                                <i class="fa fa-refresh fa-spin"></i> Loading{" "}
                              </>
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className={``}
                              onClick={(e) => {
                                e.preventDefault();
                                handleOtp(e);
                              }}
                            >
                              Verify
                            </button>
                          )}
                        </div>
                        <span className={styles.remeber}>00 : {count} </span>
                      </>
                    )}
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

export default OtpVerification;
