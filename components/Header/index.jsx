import styles from "../../styles/header.module.scss"
import { useRouter } from 'next/router';
import { lia_logout, getLiaAgent } from "../helpers/lia_services"
import React, { useState, useEffect, Fragment, useContext } from "react"
import Routes from "../Common/routes";
import Link from 'next/link'
import { IdContext } from "../MyContext/IdDetailsContext";

const LinkTag = ({ title, as, href, iconPath, activeClass, iconAlt, onClick, name }) => {
  return (
    <Fragment>
      <li onClick={onClick} className={`${styles.navItem} `} data-toggle="tooltip" data-placement="right" title={title}>
        <Link as={as} href={href} >
          <a className={`nav-link ${styles.navLink} ${activeClass}`} >
            <img src={iconPath} alt={iconAlt} className="mr-2" />
            <span className="nav-link-text">{name}</span>
          </a>
        </Link>
      </li>
    </Fragment>
  )
}
const Header = () => {
  const route = useRouter()
  const [role, setRole] = useState("")
  const [fullName, setName] = useState("")
  const [accessRight, setAccess] = useState([])
  const { setname } = useContext(IdContext)
  useEffect(() => {
    setRole(localStorage.role)
    get_lia_agent_data()
  }, [])
  const get_lia_agent_data = async () => {
    const response = await getLiaAgent()
    if (response.code == 200) {
      setName(response.result.fullName)
      setname(response.result.fullName)
      setAccess(response.result.acessRight)
    }
  }
  let { pathname, query } = useRouter();
  let dashboard = pathname === Routes.Lia.dashboard.as;
  let LIA_Workplace = pathname === Routes.Lia.workplace.as
  let allClients = pathname === Routes.Lia.allClient.as
  let reports = pathname === Routes.Business_Owner.reports.as
  let settings = pathname === Routes.Settings.as
  let LIA_dashboard = pathname === Routes.Lia.dashboard.as

  const handleLogout = async () => {
    const response = await lia_logout()
    if (response.code == 200) {
      localStorage.clear()
      window.location.href = "/"
    }
  }

  return (
    <div className={styles.header}>
      {/* <!-- Navigation--> */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.mainNav} ${styles.mainNavFixedTop}`}>
        <a style={{color:"white"}} className={`navbar-brand  ${styles.navbarBrand}`} >ImmiTech</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navCollapse}`} id="navbarResponsive">
          <ul className={`navbar-nav navbar-sidenav ${styles.navbarSidenav}`} id="exampleAccordion">
            <LinkTag
              as={Routes.Lia.workplace.as}
              href={Routes.Lia.workplace.href}
              iconPath={LIA_Workplace ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg"}
              iconAlt="Workplace"
              activeClass={(LIA_Workplace) ? styles.activeClass : ""}
              name={`Workplace`} />


            {
              accessRight.map((item, index) => {
                return <>
                  {item == "Dashboard" && <LinkTag
                    as={Routes.Lia.dashboard.as}
                    href={Routes.Lia.dashboard.href}
                    iconPath={(dashboard) ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg"}
                    iconAlt="Dashboard"
                    activeClass={(dashboard) ? styles.activeClass : ""}
                    name={`${item}`} />}

                  {(item == "client") && <LinkTag
                    as={Routes.Lia.allClient.as}
                    href={Routes.Lia.allClient.href}
                    iconPath={allClients ? "/images/selectedallclients.svg" : "/images/unselectedallclients.svg"}
                    iconAlt="All Clients"
                    activeClass={allClients ? styles.activeClass : ""}
                    title="All Clients"
                    name={`${item=="View Clients"?"Client":item}`} />}
                  {item == "Reports" && <LinkTag
                    as={Routes.Business_Owner.reports.as}
                    href={Routes.Business_Owner.reports.href}
                    iconPath={reports ? "/images/selectedreports.svg" : "/images/unselectedreports.svg"}
                    iconAlt="Reports"
                    title="Link"
                    activeClass={reports ? styles.activeClass : ""}
                    name="Reports"
                  />}
                  {item == "Settings" && <LinkTag
                    as={Routes.Settings.as}
                    href={Routes.Settings.href}
                    iconPath={settings ? "/images/selectedsetting.svg" : "/images/unselectedsetting.svg"}
                    iconAlt="Setting"
                    title="Link"
                    activeClass={settings ? styles.activeClass : ""}
                    name="Setting" />}

                  {item == "dashboard" && <LinkTag
                    as={Routes.Business_Owner.dashboard.as}
                    href={""}
                    iconPath={"/images/unselectedlogout.svg"}
                    iconAlt="Logout"
                    title="Link"
                    name="Logout"
                    onClick={(e) => { handleLogout(e) }} />}

                  {item == "dashboard" &&<LinkTag
                    as={Routes.Business_Owner.accounts.as}
                    href={Routes.Business_Owner.accounts.href}
                    iconPath={accounts ? "/images/selectedaccounts.svg" : "/images/unselectedaccounts.svg"}
                    iconAlt="Account"
                    title="Link"
                    activeClass={accounts ? styles.activeClass : ""}
                    name="Account" />}

                </>
              })
            }
            {/* 
            */}

          </ul>
          <ul className={`navbar-nav sidenav-toggler ${styles.sidenavToggler}`}>
            <li className={styles.navItem}>
              <a className="nav-link text-center" id="sidenavToggler">
                <i className="fa fa-fw fa-angle-left"></i>
              </a>
            </li>
          </ul>
          <ul className={`navbar-nav ml-auto ${styles.navbarNav}`}>
            <li className={`nav-item dropdown ${styles.navItem} ${styles.navDropdown}`}>
              <a className={`nav-link dropdown-toggle mr-lg-2 ${styles.navLink}`} id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="./images/sms.svg" width="20px" />
                <span className="d-lg-none">Messages
                  <span className="badge badge-pill badge-primary">12 New</span>
                </span>
                <span className={`text-primary d-none d-lg-block ${styles.indicator}`}>
                  <i className="fa fa-fw fa-circle"></i>
                </span>
              </a>
              <div className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">New Messages:</h6>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <div><strong>David Miller</strong>
                    <span className="small float-right text-muted">11:21 AM</span></div>
                  <div className={`dropdown-message small ${styles.dropdownMessage}`}>Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <div><strong>David Miller</strong>
                    <span className="small float-right text-muted">11:21 AM</span></div>
                  <div className={`dropdown-message small ${styles.dropdownMessage}`}>I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <div><strong>David Miller</strong>
                    <span className="small float-right text-muted">11:21 AM</span></div>
                  <div className={`dropdown-message small ${styles.dropdownMessage}`}>I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-message small ${styles.dropdownViewAll}`} href="#">View all messages</a>
              </div>
            </li>
            <li className={`nav-item dropdown ${styles.navItem} ${styles.navDropdown}`}>
              <a className={`nav-link dropdown-toggle mr-lg-2 ${styles.navLink}`} id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="./images/notification.svg" width="18px" />
                <span className="d-lg-none">Alerts
                  <span className="badge badge-pill badge-warning">6 New</span>
                </span>
                <span className={`text-warning d-none d-lg-block ${styles.indicator}`}>
                  <i className="fa fa-fw fa-circle"></i>
                </span>
              </a>
              <div className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">New Alerts:</h6>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <span className="text-success">
                    <strong>
                      <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                  </span>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <span className="text-danger">
                    <strong>
                      <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
                  </span>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <span className="text-success">
                    <strong>
                      <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                  </span>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item small" href="#">View all alerts</a>
              </div>
            </li>

            <li className={`nav-item dropdown ${styles.navItem} ${styles.navProfileDropdown}`}>
              <a className={`nav-link dropdown-toggle mr-lg-2 ${styles.navLink}`} id="exampleModal" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className={styles.profileSec}>
                  <div className={styles.profileImg}>
                    <img alt="" src="/images/clients.svg" />
                  </div>
                  <span style={{ color: "blueviolet" }} className="px-2 text-name">
                    {fullName}
                  </span>
                </div>
              </a>
              <div className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="exampleModal">

                <a className={`dropdown-item ${styles.dropdownItem}`} style={{ cursor: "pointer" }} onClick={() => { route.push("/LIA/setup") }}>
                  Profile
                </a>

                <a className={`dropdown-item ${styles.dropdownItem}`} style={{ cursor: "pointer" }} onClick={() => { route.push("/busines/owner/template") }}>
                  Template
                </a>
                <a className={`dropdown-item ${styles.dropdownItem}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => { route.push("/LIA/country") }}>
                  Country List
                </a>
                <a className={`dropdown-item ${styles.dropdownItem}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => { route.push("/LIA/visaList") }}>
                  Visa List
                </a>


                <a className={`dropdown-item ${styles.dropdownItem}`} style={{ cursor: "pointer" }} onClick={() => { route.push("/Faq") }}>
                  FAQ & Support
                </a>

                <a className={`dropdown-item ${styles.dropdownItem}`}
                  style={{ cursor: "pointer" }} onClick={handleLogout}
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header