import { useRouter } from "next/router";
import Routes from "../components/Common/routes";
import { useEffect, useState } from "react";
import { IdProvider } from "../components/MyContext/IdDetailsContext";
import SignUpModal from "../components/Common/Modals/signUpModal";
import Header from "../components/Header";
import BusinessSideNavBar from "../components/Header/Owner_Sidenavbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(
    typeof window !== "undefined"
      ? localStorage.profileDetails == "false"
        ? true
        : false
      : false
  );
  const [role, setRole] = useState("");
  let router = useRouter().pathname;
  useEffect(() => {
    const ClearFunc = () => {
      router === Routes.Auth.signup.as ||
      router === Routes.Auth.login.as ||
      router === Routes.Auth.forgot.as ||
      router === Routes.Auth.otp.as ||
      router == "/LIA/PassWordSetForLia/PasswordSetLia" ||
      router === Routes.Auth.CompanyVerify.href
        ? (document.getElementById("overlay").className = "landingBackground")
        : "";
    };
    ClearFunc();
  }, [Routes]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(localStorage.profileDetails == "false");
      setOpen(localStorage.profileStatus == "true");
      setRole(localStorage.role);
    }
  }, []);

  return (
    <>
      <IdProvider>
        {/* {manageHeader} */}
        {router === Routes.Auth.signup.as ||
        router === Routes.Auth.login.as ||
        router === Routes.Auth.forgot.as ||
        router === Routes.Auth.otp.as ||
        router === Routes.Auth.SetPassword.as ||
        router === Routes.Lia.Selected_Country.as ||
        router === Routes.Lia.Selected_Visa.as ||
        router === Routes.Lia.Appointment_mode.as ||
        router === Routes.Lia.workingHours.as ||
        router === Routes.Auth.LIA_setPassword.as ||
        router === Routes.Auth.forgotPassword.as || 
        router === Routes.Auth.liaSetup.as || 
        router === Routes.Auth.liaWorkplace.as || 
        router === Routes.Auth.CompanyVerify.href ? (
          ""
        ) : role == "liaAgent" || role == "manager" ? (
          <Header />
        ) : (
          <BusinessSideNavBar />
        )}

        <Component {...pageProps} />
      </IdProvider>
      {Routes.Auth.SignUpForm.href == router ||
      router == "/LIA/PassWordSetForLia/PasswordSetLia"
        ? ""
        : open && <SignUpModal open={open} setOpen={setOpen} />}
      {/* <RouteGuard>
    <Component {...pageProps} />
     </RouteGuard> */}
    </>
  );
}

export default MyApp;
