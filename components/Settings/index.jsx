import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../styles/settings.module.scss";
import ChangePasswordSection from "./ChangePasswordSection/index";
import NotificationsSection from "./notification";

let notification_tab = "notification_tab";
let profile_tab = "profile_tab";

const Settings = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showDivRight, setShowDivRight] = useState(false);
  const [activeTab, setActiveTab] = useState(notification_tab);

  // console.log("USerData====>", userData);
  const getNotification = () => {
    // console.log("Notification")
    setActiveTab(notification_tab);
    setShowDiv(true);
  };

  const getEditProfile = () => {
    // console.log("getEditProfile")
    setActiveTab(profile_tab);
    setShowDiv(true);
  };

  const hideSection = () => {
    setShowDiv(false);
  };

  let active_notification_tab = activeTab === notification_tab;
  let active_profile_tab = activeTab === profile_tab;
  let showStatus = showDiv ? "leftSecHide" : "";
  let showStatusRight = showDiv ? "rightSecHide" : "";
  // let showStatusRight = showDivRight ? "leftSecHide" : "";

  let backButton = (
    <button onClick={hideSection} className="smallBackBtn">
      {" "}
      <img src="/images/prev.svg" style={{ marginTop: "-5px" }} />
    </button>
  );
  return (
    <Fragment>
      <section className={styles.pageContent}>
        <div className="row">
          <div class="col-12">
            <h3>Settings</h3>
          </div>
          <div className="col-12">
            <div className={styles.pageDetailArea}>
              <div className="row">
                <div
                  className={`col-lg-4 pr-0  setting leftMenu ${showStatus}`}
                >
                  <div className={styles.leftMenu}>
                    <h5>General</h5>
                    <div
                      className="nav flex-column nav-pills nav-pills-custom"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        onClick={getNotification}
                        className={`nav-link ${styles.navLink}  shadow ${
                          active_notification_tab ? "active" : ""
                        }`}
                        id="v-pills-home-tab"
                        data-toggle="pill"
                        href={`#${notification_tab}`}
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <span className="">Notifications Settings</span>
                        {/* <p>Header Font</p> */}
                        <img src="/images/next_grey.svg" />
                      </a>
                      <a
                        onClick={getEditProfile}
                        className={`nav-link  ${styles.navLink}  shadow ${
                          active_profile_tab ? "active" : ""
                        }`}
                        id="v-pills-profile-tab"
                        data-toggle="pill"
                        href="#v-pills-profile"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        <span className=" ">Change Password</span>
                        {/* <p>Header Font</p> */}
                        <img src="/images/next_grey.svg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-8 pl-0 ${showStatusRight}`}>
                  <div className="tab-content" id="v-pills-tabContent">
                    {active_notification_tab && (
                      <NotificationsSection
                        backButton={backButton}
                        styles={styles}
                        activeTab={activeTab}
                        notification_tab={activeTab}
                        active={active_notification_tab}
                      />
                    )}
                    {active_profile_tab && (
                      <ChangePasswordSection
                        backButton={backButton}
                        styles={styles}
                        activeTab={activeTab}
                        profile_tab={profile_tab}
                        active={active_profile_tab}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Settings;
