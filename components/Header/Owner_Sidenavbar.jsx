import styles from "../../styles/header.module.scss"
import Link from 'next/link';
import Routes from '../Common/routes';
import { Fragment, useEffect, useState } from 'react';
import { useRouter, withRouter } from "next/router";
import { get_business_owner, business_owner_logout } from "../helpers/business_owner_service"
import NotificationBySocket from "./NotificationBySocket";



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

const BusinessSideNavBar = () => {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [BoId, setBoId] = useState("")
  useEffect(() => {
    getBusinessOwner()
  }, [])
  const getBusinessOwner = async () => {
    const response = await get_business_owner()
    if (response.code == 200) {
      localStorage.profileDetails = response.result.profileDetails
      if (response?.result?.ownerName) {
        setName(response?.result?.ownerName)
        setBoId(response.result._id)
        setImage(response.result.image)
        localStorage.BoId = response.result._id
      }
    }
  }

  let { pathname, query } = useRouter();
  let dashboard = pathname === Routes.Business_Owner.dashboard.as;
  let allClients = pathname === Routes.Business_Owner.clientDetails.as
  let allStaff = pathname === Routes.Business_Owner.allStaff.as
  let allLIA = pathname === Routes.Business_Owner.LIA.as
  let reports = pathname === Routes.Business_Owner.reports.as
  let accounts = pathname === Routes.Business_Owner.accounts.as
  let settings = pathname === Routes.Settings.as
  let Business_setup = pathname === Routes.Business_Owner.Business_setup
  let employer = pathname === Routes.Business_Owner.employers.as
  let route = useRouter()

  const handleLogout = async (e) => {
    e.preventDefault()
    let response = await business_owner_logout()
    if (response.code == 200) {
      localStorage.clear()
      window.location.href = "/"
    }
  }


  return (
    <div className={styles.header}>
      {/* <!-- Navigation--> */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.mainNav} ${styles.mainNavFixedTop}`}>
        <a className={`navbar-brand  ${styles.navbarBrand}`} >ImmiTech</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navCollapse}`} id="navbarResponsive">
          <ul className={`navbar-nav navbar-sidenav ${styles.navbarSidenav}`} id="exampleAccordion">
            <LinkTag
              as={Routes.Business_Owner.dashboard.as}
              href={Routes.Business_Owner.dashboard.href}
              iconPath={dashboard ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg"}
              iconAlt="Dashboard"
              activeClass={dashboard ? styles.activeClass : ""}
              name="Dashboard" />

            <LinkTag
              as={Routes.Business_Owner.Business_setup.as}
              href={Routes.Business_Owner.Business_setup.href}
              iconPath={Business_setup ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg"}
              iconAlt="Dashboard"
              activeClass={Business_setup ? styles.activeClass : ""}
              name="Business Setup" />

            <LinkTag
              as={Routes.Business_Owner.allStaff.as}
              href={Routes.Business_Owner.allStaff.href}
              iconPath={allStaff ? "/images/selectedstaff.svg" : "/images/unselectedstaffs.svg"}
              iconAlt="All Staffs"
              activeClass={allStaff ? styles.activeClass : ""}
              title="Charts"
              name="All Staffs" />

            <LinkTag
              as={Routes.Business_Owner.LIA.as}
              href={Routes.Business_Owner.LIA.href}
              iconPath={allLIA ? "/images/selectedlias.svg" : "/images/unselectedlia.svg"}
              iconAlt="LIA's"
              title="Tables"
              activeClass={allLIA ? styles.activeClass : ""}
              name="LIA's" />

          <LinkTag
              as={Routes.Business_Owner.employers.as}
              href={Routes.Business_Owner.employers.href}
              iconPath={employer ? "/images/selectedstaff.svg" : "/images/unselectedstaffs.svg"}
              iconAlt="Employers"
              title="Tables"
              activeClass={employer ? styles.activeClass : ""}
              name="Employers" />

            <LinkTag
              as={Routes.Business_Owner.clientDetails.as}
              href={Routes.Business_Owner.clientDetails.href}
              iconPath={allClients ? "/images/selectedallclients.svg" : "/images/unselectedallclients.svg"}
              iconAlt="All Clients"
              title="Link"
              activeClass={allClients ? styles.activeClass : ""}
              name="All Clients" />

            <LinkTag
              as={Routes.Business_Owner.reports.as}
              href={Routes.Business_Owner.reports.href}
              iconPath={reports ? "/images/selectedreports.svg" : "/images/unselectedreports.svg"}
              iconAlt="Reports"
              title="Link"
              activeClass={reports ? styles.activeClass : ""}
              name="Reports"
            />

            <LinkTag
              as={Routes.Business_Owner.accounts.as}
              href={Routes.Business_Owner.accounts.href}
              iconPath={accounts ? "/images/selectedaccounts.svg" : "/images/unselectedaccounts.svg"}
              iconAlt="Account"
              title="Link"
              activeClass={accounts ? styles.activeClass : ""}
              name="Account" />

            <LinkTag
              as={Routes.Settings.as}
              href={Routes.Settings.href}
              iconPath={settings ? "/images/selectedsetting.svg" : "/images/unselectedsetting.svg"}
              iconAlt="Setting"
              title="Link"
              activeClass={settings ? styles.activeClass : ""}
              name="Setting" />

            <LinkTag
              as={Routes.Business_Owner.dashboard.as}
              href={""}
              iconPath={"/images/unselectedlogout.svg"}
              iconAlt="Logout"
              title="Link"
              name="Logout"
              onClick={(e) => { handleLogout(e) }} />

          </ul>
          <ul className={`navbar-nav sidenav-toggler ${styles.sidenavToggler}`}>
            <li className={styles.navItem}>
              <a className="nav-link text-center" id="sidenavToggler">
                <i className="fa fa-fw fa-angle-left"></i>
              </a>
            </li>
          </ul>
          <ul className={`navbar-nav ml-auto ${styles.navbarNav}`}>
            {/* <li className={`nav-item dropdown ${styles.navItem} ${styles.navDropdown}`}>
              <a className={`nav-link dropdown-toggle mr-lg-2 ${styles.navLink}`} id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={"./images/sms.svg"} width="20px" />

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
                  <div><strong>Jane Smith</strong>
                    <span className="small float-right text-muted">11:21 AM</span></div>
                  <div className={`dropdown-message small ${styles.dropdownMessage}`}>I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                </a>
                <div className="dropdown-divider"></div>
                <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
                  <div><strong>John Doe</strong>
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
              <NotificationBySocket
                BoId={BoId}
              />
            </li> */}

            <li className={`nav-item dropdown ${styles.navItem} ${styles.navProfileDropdown}`}>
              <a className={`nav-link dropdown-toggle mr-lg-2 ${styles.navLink}`} id="exampleModal" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className={styles.profileSec}>
                  <div className={styles.profileImg}>
                    <img alt="" src={image ? image : "/images/profile.svg"} />
                  </div>
                  <span style={{ color: "blueviolet" }} className="px-2 text-name">
                    {name}
                  </span>
                </div>
              </a>
              <div className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="exampleModal">

                

                {/* <a className={`dropdown-item ${styles.dropdownItem}`} style={{ cursor: "pointer" }} href="/busines/owner/template">
                  Template
                </a>
                <a className={`dropdown-item ${styles.dropdownItem}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => { route.push("/busines/owner/visa/selectCountry") }}>
                  Country List
                </a>
                <a className={`dropdown-item ${styles.dropdownItem}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => { route.push("/busines/owner/visa/visalist") }}>
                  Visa List
                </a> */}


                <a className={`dropdown-item ${styles.dropdownItem}`} style={{ cursor: "pointer" }} onClick={() => { route.push("/Faq") }}>
                  FAQ & Support
                </a>

                <a className={`dropdown-item ${styles.dropdownItem}`} style={{ cursor: "pointer" }} onClick={(e) => { handleLogout(e) }} >
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
export default BusinessSideNavBar