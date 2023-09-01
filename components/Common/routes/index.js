import { lia_profile_update_service } from "../../helpers/client_services"

const Routes = ({
    Auth: {
        login: {
            as: "/",
            href: "/"
        },
        signup: {
            as: "/auth/SignUp",
            href: "/auth/SignUp"
        },
        forgot: {
            as: "/auth/forgot",
            href: "/auth/forgot"
        },
        otp: {
            as: "/auth/OptVerification",
            href: "/auth/OptVerification"
        },
        SignUpForm:{
            as:"/auth/SignUp/SignUpDetailsForm",
            href:"/auth/SignUp/SignUpDetailsForm"
        },
        SetPassword:{
            as:"/busines/owner/setPassword",
            href:"/busines/owner/setPassword"
        },
        LIA_setPassword:{
            as:"/LIA/PassWordSetForLia/PasswordSetLia",
            href:"/LIA/PassWordSetForLia/PasswordSetLia"
        },
        CompanyVerify:{
            as: "/auth/verify",
            href: "/auth/verify"
        },
        forgotPassword:{
            as:"/ForgetPassword",
            href:"/ForgetPassword"
        },
        liaSetup:{
            as:"/LIA/setup",
            href:"/LIA/setup"
        },
        liaWorkplace:{
            as:"/LIA/workplace",
            href:"/LIA/workplace"
        }
    },
    Business_Owner:{

        dashboard:{
           as: "/busines/owner/dashboard",
           href: "/busines/owner/dashboard"

        },
        Business_setup:{
            as: "/busines/owner/setup",
            href: "/busines/owner/setup"
 
         },
        allStaff:{
            as: "/busines/owner/allStaffList",
            href: "/busines/owner/allStaffList"
        },
        LIA:{
          as:"/busines/owner/lia's",
          href:"/busines/owner/lia's"

        },
        clientDetails:{
            as:"/busines/owner/allClient",
            href:"/busines/owner/allClient"

        },
        reports:{
            as:"/Client/reportAnIssue/ReportAndIssueList",
            href:"/Client/reportAnIssue/ReportAndIssueList"
        },
        accounts:{
            as:"/busines/owner/account",
            href:"/busines/owner/account"
        },
        employers:{
            as:"/busines/owner/employers",
            href:"/busines/owner/employers"
        }
       
    },
   Lia:{
    dashboard:{
        as: "/LIA/dashboard",
        href: "/LIA/dashboard"

     },
   
     allClient:{
         as: "/LIA/allClient",
         href: "/LIA/allClient"
     },
     booking:{
       as:"/LIA/booking",
       href:"/LIA/booking"

     },
     caseDetails:{
         as:"/LIA/caseDetail",
         href:"/LIA/caseDetail"

     },
     profile:{
         as:"/LIA/profile",
         href:"/LIA/profile"
     },
     Queries:{
         as:"/LIA/Queries",
         href:"/LIA/Queries"
     },
     workingHours:{
        as:"/LIA/workingHours",
        href:"/LIA/workingHours"
    },
    workplace:{
        as:"/LIA/workplace",
        href:"/LIA/workplace"
    }, 
    Selected_Country : {
        as:"/LIA/Selectcountry",
        href:"/LIA/Selectcountry"
     },
     Selected_Visa : {
      as:"/LIA/Selectvisa",
      href:"/LIA/Selectvisa"
   }, Appointment_mode : {
      as:"/busines/owner/visa/appointmentMode",
      href:"/busines/owner/visa/appointmentMode"
   }, workingHoursed_Visa : {
      as:"/LIA/workingHours",
      href:"/LIA/workingHours"
   },

   },
  
    Settings:{
        as:"/setting",
        href:"/setting"

    },
  })
export default Routes