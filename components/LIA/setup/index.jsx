import { useState, Fragment } from "react";
import styles from "../../../styles/setup.module.scss";
import WorkingHours from "./working_hour";
import AppointmentMode from "./appointment_modes";
import CountrySetting from "./country_setting";
import Profile from "./profile";
import TemplateSetting from "./template_settings";
import VisaTypeSetting from "./visa_type_setting";
import VisaStatusLia from "./visa_status";

let appointment_tab = "appointment_tab";
let country_tab = "country_tab";
let profile_tab = "profile_tab";
let template_tab = "template_tab";
let visa_type_tab = "visa_type_tab";
let working_hour_tab = "working_hour_tab";
let visa_status_tab = "visa_status_tab";

const SetUp = () => {
  const [activeTab, setActiveTab] = useState(profile_tab);
  const [showDiv, setShowDiv] = useState(false);
  const getLanguage = () => {
    setActiveTab(appointment_tab);
    setShowDiv(true);
  };
  const getBilling = () => {
    setActiveTab(profile_tab);
    setShowDiv(true);
  };
  const getWorkingHours = () => {
    setActiveTab(working_hour_tab);
    setShowDiv(true);
  };
  const getFAQ = () => {
    // console.log("getFAQ")
    setActiveTab(visa_type_tab);
    setShowDiv(true);
  };
  const getNotification = () => {
    // console.log("Notification")
    setActiveTab(country_tab);
    setShowDiv(true);
  };

  const getAbout = () => {
    setActiveTab(template_tab);
    setShowDiv(true);
  };
  const getVisaStatus = () => {
    setActiveTab(visa_status_tab);
    setShowDiv(true);
  };
  const hideSection = () => {
    setShowDiv(false);
  };

  let active_appointment_tab = activeTab === appointment_tab;
  let active_country_tab = activeTab === country_tab;
  let active_profile_tab = activeTab === profile_tab;
  let active_template_tab = activeTab === template_tab;
  let active_visa_type_tab = activeTab === visa_type_tab;
  let working_hours_tab = activeTab === working_hour_tab;
  let active_visa_status_tab = activeTab === visa_status_tab;


  return (
    <Fragment>
      <div className={styles.contentWrapper}>
        <div className={styles.pageDetailArea}>
          <div className="row">
            <div className={`col-lg-12 pr-0  setting leftMenu `}>
              <div
                className={`nav flex-row nav-pills nav-pills-custom ${styles.TopMenu}`}
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  onClick={getBilling}
                  className={`nav-link  shadow ${
                    active_profile_tab ? styles.active : ""
                  }`}
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href={`#${profile_tab}`}
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <span className=" ">Profile</span>
                </a>
                <a
                  onClick={getVisaStatus}
                  className={`nav-link  shadow ${active_visa_status_tab ? styles.active : ""
                    }`}
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href={`#${visa_status_tab}`}
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <span className=" ">VISA Status</span>
                </a>
                <a
                  onClick={getWorkingHours}
                  className={`nav-link  shadow ${
                    working_hours_tab ? styles.active : ""
                  }`}
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href={`#${profile_tab}`}
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <span className=" ">Working Hours</span>
                </a>
                <a
                  onClick={getNotification}
                  className={`nav-link  shadow ${
                    active_country_tab ? styles.active : ""
                  }`}
                  id="v-pills-country-tab"
                  data-toggle="pill"
                  href="#v-pills-country"
                  role="tab"
                  aria-controls="v-pills-country"
                  aria-selected="false"
                >
                  <span className=" ">Country Settings</span>
                </a>
                <a
                  onClick={getFAQ}
                  className={`nav-link  shadow ${
                    active_visa_type_tab ? styles.active : ""
                  }`}
                  id="v-pills-visa-tab"
                  data-toggle="pill"
                  href="#v-pills-visa"
                  role="tab"
                  aria-controls="v-pills-visa"
                  aria-selected="false"
                >
                  <span className=" ">VISA Types Settings</span>
                </a>
                <a
                  onClick={getAbout}
                  className={`nav-link  shadow ${
                    active_template_tab ? styles.active : ""
                  }`}
                  id="v-pills-template-tab"
                  data-toggle="pill"
                  href="#v-pills-template"
                  role="tab"
                  aria-controls="v-pills-template"
                  aria-selected="false"
                >
                  <span className="">Template Settings</span>
                </a>
                <a
                  onClick={getLanguage}
                  className={`nav-link  shadow ${
                    active_appointment_tab ? styles.active : ""
                  }`}
                  id="v-pills-appointment-tab"
                  data-toggle="pill"
                  href="#v-pills-appointment"
                  role="tab"
                  aria-controls="v-pills-appointment"
                  aria-selected="true"
                >
                  <span className="">Appoinment</span>
                </a>
              </div>
            </div>
            <div className={`col-lg-12 rightSec  `}>
              <div className="tab-content" id="v-pills-tabContent">
                {active_appointment_tab && (
                  <AppointmentMode
                    styles={styles}
                    activeTab={activeTab}
                    appointment_tab={appointment_tab}
                    active={active_appointment_tab}
                  />
                )}

                {active_profile_tab && (
                  <Profile
                    styles={styles}
                    activeTab={activeTab}
                    profile_tab={profile_tab}
                    active={active_profile_tab}
                  />
                )}
                 {active_visa_status_tab && (
                  <VisaStatusLia
                    styles={styles}
                    activeTab={activeTab}
                    appointment_tab={appointment_tab}
                    active={active_appointment_tab}
                  />
                )}
                {working_hours_tab && (
                  <WorkingHours
                    styles={styles}
                    activeTab={activeTab}
                    profile_tab={working_hour_tab}
                    active={working_hours_tab}
                  />
                )}
                {active_visa_type_tab && (
                  <VisaTypeSetting
                    styles={styles}
                    activeTab={activeTab}
                    visa_type_tab={visa_type_tab}
                    active={active_visa_type_tab}
                  />
                )}
                {active_country_tab && (
                  <CountrySetting
                    styles={styles}
                    activeTab={activeTab}
                    country_tab={activeTab}
                    active={active_country_tab}
                  />
                )}
                {active_template_tab && (
                  <TemplateSetting
                    styles={styles}
                    activeTab={activeTab}
                    template_tab={template_tab}
                    active={active_template_tab}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SetUp;
