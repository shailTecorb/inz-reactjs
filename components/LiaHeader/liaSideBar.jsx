import styles from "../../styles/header.module.scss"
import Link from 'next/link';
import Routes from '../Common/routes';
import { Fragment ,useEffect} from 'react';
import { useRouter, withRouter } from "next/router";
import UserHeader from "./userHeader";
import { business_owner_logout } from '../helpers/business_owner_service';



const LinkTag = ({ title, as, href, iconPath,activeClass, iconAlt,onClick, name }) => {
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

const LiaSideNavBar = () => {
  useEffect(()=>{
     if(localStorage.role == "liaAgent") return null
  },[])
 
  let { pathname } = useRouter();
  let dashboard = pathname === Routes.Business_Owner.dashboard.as;
  let allClients = pathname === Routes.Business_Owner.clientDetails.as
  let allStaff = pathname=== Routes.Business_Owner.allStaff.as
  let allLIA = pathname === Routes.Business_Owner.LIA.as
  let reports = pathname === Routes.Business_Owner.reports.as
  let accounts = pathname=== Routes.Business_Owner.accounts.as

  let route = useRouter()

  const handleLogout =async (e) =>{
    e.preventDefault()
    let response = await business_owner_logout()
    if(response.code == 200){
      localStorage.clear()
      window.location.href = "/"
    }
  }


  return (
    <div className={styles.header}>
      {/* <!-- Navigation--> */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.mainNav} ${styles.mainNavFixedTop}`}>
        <a className={`navbar-brand  ${styles.navbarBrand}`} href="index.html">INZvisa</a>
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
              activeClass={dashboard ? styles.activeClass :""}
              name="Dashboard" />

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
              as={Routes.Business_Owner.clientDetails.as}
              href={Routes.Business_Owner.clientDetails.href}
              iconPath={allClients ? "/images/selectedclients.svg" : "/images/unselectedclients.svg"}
              iconAlt="All Clients"
              title="Link"
              activeClass={allClients ? styles.activeClass :""}
              name="All Clients" />

            <LinkTag
              as={Routes.Business_Owner.reports.as}
              href={Routes.Business_Owner.reports.href}
              iconPath={"/images/unselectedreports.svg"}
              iconAlt="Reports"
              title="Link"
              activeClass={reports ? styles.activeClass :""}
              name="Reports"
              // onClick={()=>{route.push("/Client/reportAnIssue/ReportAndIssueList")}}
              />

            <LinkTag
              as={Routes.Business_Owner.accounts.as}
              href={Routes.Business_Owner.accounts.href}
              iconPath={"/images/unselectedaccounts.svg"}
              iconAlt="Account"
              title="Link"
              activeClass={accounts ? styles.activeClass : ""}
              name="Account" />

            <LinkTag
              as={Routes.Business_Owner.dashboard.as}
              href={Routes.Business_Owner.dashboard.href}
              iconPath={"/images/unselectedsetting.svg"}
              iconAlt="Setting"
              title="Link"
              // activeClass={styles.activeClass}
              name="Setting" />

            <LinkTag
              as={Routes.Business_Owner.dashboard.as}
              href={""}
              iconPath={"/images/unselectedlogout.svg"}
              iconAlt="Logout"
              title="Link"
              name="Logout"
              onClick={(e)=>{handleLogout(e)}} />

         
          </ul>
          <UserHeader styles={styles}/>
        </div>
      </nav>
    </div>
  )
}
export default LiaSideNavBar