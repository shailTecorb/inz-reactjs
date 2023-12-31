"use strict";
exports.id = 7869;
exports.ids = [7869];
exports.modules = {

/***/ 7869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_n": () => (/* binding */ BASE_URL),
/* harmony export */   "UE": () => (/* binding */ Location_key),
/* harmony export */   "T5": () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony export Proxy_URL */
const Proxy_URL = "https://frozen-tundra-07943.herokuapp.com";
const BASE_URL = "https://immitech.onrender.com/api/v1"; // export const BASE_URL = "http://3.26.77.96:2001/api/v1"   
// development url

const Location_key = "AIzaSyDZmB3X3IzXru66uMfDH1jwlewKCMHBjqE";
const API_URL = {
  // ------- SIGNIN ---------
  LOGIN: "/client/clientLogin",
  //    LIA_LOGIN:"/liaAgent/liaAgentLogin",
  BUSINESS_OWNER_LOGIN: "/business/businessOwnerLogin",
  BUSINESS_OWNER_FORGOTPASSWORD: "/business/forgetPassword",
  BUSINESS_OWNER_LOGOUT: "/business/logout",
  SIGNUP: "/client/addSignup",
  OTP_VERIFY: "/client/otpVarification",
  RESEND_OTP: "/business/resendOtp",
  ADD_CLIENT: "/client/AddClientBasicDetail",
  GENRATE_LINK: "/liaAgent/getClient",
  SEND_LINK_TO_EMAIL: "/liaAgent/sendEmail",
  GENRATE_LINK_FOR_CLIENT: "/LiaAgent/forgetPassword",
  CLIENT_PROFILE_DETAILS: "/client/AddClientProfileDetail",
  CLIENT_VISA_DETAILS: "/client/AddClientVisaDetail",
  //    CLIENT_SET_PASSWORD:"",
  BUSINESS_OWNER_SET_PASSWORD: "/business/updatePassword",
  BUSINESS_OWNER_ADD_STAFF: "/business/addStaff",
  BUSINESSOWNER_ADD_STAFF_ROLELIST: "/admin/listOfRole",
  MANAGE_BOOKING: "/booking/AddBooking",
  BUSINESS_OWNER_ALL_LIA_LIST: "/business/allLia",
  LIST_OF_ALL_STAFF: "/business/listOfStaff",
  ADMIN_ALL_COUNTRY: "/admin/listingOfCountries",
  ALL_COUNTRY: "/business/listingOfCountries",
  ALL_CITY_LIST: "/liaAgent/allCity",
  UPDATE_COUNTRY: "/business/updateCountry",
  ALL_VISA_LIST: "/admin/getAllVisaTypes",
  BO_VISA_LIST: "/business/getvisaTypePerticularBusinessOwner",
  BUSINESSOWNER_GET_ALL_ADD_VISA: "/business/getvisaTypePerticularBusinessOwner",
  UPDATE_VISA_TYPE: "/business/updateVisaType",
  LIST_OF_APPOINTMENT: "/admin/listingOfAppointment",
  SECOND_TIME_LIST_OF_APPOINTMENT: "/liaAgent/listOfAppointMentOfLia",
  ADD_WORKING_HOUR: "/liaAgent/addWorkingHour",
  GET_STAFF_DATA: "/business/getStaff",
  ADD_TEMPLATE: "/template/addTemplate",
  TEMPLATE_TYPE_LIST: "/templateType/listOfTemplateType",
  EDIT_TEMPLATE_TYPE: "/templateType/editTemplateType",
  TEMPLATE_LIST: "/template/getTemplate",
  DUPLICATE_TEMPLATE: "/template/addDuplicateTemplate",
  VIEW_TEMPLATE: "/template/getbyTemplate",
  LIST_OF_CLIENT_OF_PARTICULAR_LIA: "/client/listOfClient",
  APPOINTMENT_BOOKING_MODE: "/business/addAppointment",
  BUSINESS_OWNER_SIGNUP: "/business/businessOwnerSignUp",
  VERIFY_NZBN: "/business/verifyNzbn",
  BUSINESS_OWNER_OTP_VERIFICATION: "/business/verifyOpt",
  BUSINESS_OWNER_UPDATE_PROFILE: "/business/profileUpdate",
  BUSINESS_OWNER_GET_PROFILE: "/business/getBusinessOwner",
  BUSINESS_OWNER_COUNTRY_LIST: "/business/listingOfCountries",
  BUSINEES_OWNER_UPDATE_COUNTRY_LIST: "/business/updateCountry",
  BUSINEES_OWNER_VISA_TYPE_LIST: "/business/getvisaTypePerticularBusinessOwner",
  BUSINESS_OWNER_UPDATE_VISA_TYPE: "/business/updateVisaType",
  BUSINESS_OWNER_TYPE_LIST: "/admin/listOfBusinessType",
  ADMIN_LIST_OF_APPOINTMENT_MODE: "/admin/listingOfAppointment",
  BUSINESS_OWNER_APPOINTMENT_MODE_LIST: "/business/getBusinessAppointmentMode",
  BUSINESS_OWNER_UPDATE_APPOINTMENT_MODE: "/business/AddEditAppointmentMode",
  BUSINESS_OWNER_ADD_VISA_BY_MODAL: "/business/addVisaType",
  BUSINESS_OWNER_ADD_BUSINESS_SIGN_UP_FORM: "/business/profileUpdate",
  BUSINESS_OWNER_VIEW_STAFF: "/business/getStaff",
  BUSINESS_OWNER_UPDATE_STAFF: "/business/editStaff",
  BUSINESS_OWNER_DASHBORD_ALL_QUERY: "/client/listOfQuery",
  BUSINESS_OWNER_DASHBORD_ALL_COUNT: "/business/dashBoardAPIs",
  BUSINESS_OWNER_DASHBORD: "/business/dashBoardAPIs",
  BUSINESS_OWNER_DASHBORD_GRAPH: "/business/dashboardGrap",
  BUSINESS_OWNER_DASHBORD_TASK_LIST: "/task/taskList",
  BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_UPDATE: "/business/updateNotificationStatus",
  BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_STATUS: "/business/getNotificationStatus",
  BUSINEES_OWNER_CHANGE_PASSWORD: "/business/resetPassword",
  // ----------Template--------
  BUSINEES_OWNER_TEMPLATE_LIST: "/template/getTemplate",
  BUSINEES_OWNER_VIEW_TEMPLATE: "/template/getbyTemplate",
  BUSINEES_OWNER_ADD_UPDATE_TEMPLATE: "/template/addTemplate",
  // BUSINEES_OWNER_UPDATE_TEMPLATE:"/template/addTemplate",
  BUSINEES_OWNER_ADD_DUPLICATE_TEMPLATE: "/template/addDuplicateTemplate",
  BUSINEES_OWNER_LIST_OF_KEY_ATTRIBUTE: "/keyAttribute/listingOfKeyAttributes",
  BUSINEES_OWNER_DASHBORD_ALL_PPI_LIST: "/case/listOfPpi",
  BUSINESS_OWNER_ALL_CLIENT_LIST: "/business/allClients",
  GET_BUSINESS_OWNER: "/business/getBusinessOwner",
  VISA_STATUS_NOTIFICATION: "/visa/listOfStatusNotification",
  VISA_STATUS_NOTIFICATION_UPDATE: "/visa/editStatusNotification",
  VISA_STATUS_NOTIFICATION_LIST_OF_VISA_STATUS: "/business/getVisaStatus",
  VISA_STATUS_REMOVE_NOTIFICATION: "/visa/removeNotification",
  REPORT_AN_ISSUE: "/report/addReport",
  REPORT_VIEW: "/report/reportView",
  LIA_REPORTS_AND_ISSUES: "/report/listOfReportsforLia",
  BUSINESS_OWNER_REPORTS_AND_ISSUES: "/report/listOfReportsforBusinessOwner",
  LIA_AGENT_SET_PASSWORD: "/liaAgent/updatePassword",
  LIA_WORKPLACE_LIST_OF_TASK: "/task/getTask",
  FAQ_FOR_ALL: "/faq/faqList",
  ADD_NEW_TASK_LIA_WORKPLACE: "/task/addTask",
  ADD_FOLLOWERS: "/task/taskFollwers",
  LIA_AGENT_PROFILE_UPDATE: "/LiaAgent/profileUpdate",
  LIA_SELECT_COUNTRY_LIST: "/liaAgentCountry/listingOfCountries",
  UPDATE_COUNTRY_AFTER_LOGIN: "/liaAgentCountry/liaCountries",
  UPDATE_VISATYPE_AFTER_LOGIN: "/liaAgentCountry/liaVisaType",
  LIA_AGENT_ADD_COUNTRY: "/liaAgentCountry/addCountry",
  LIA_AGENT_LIST_OF_VISATYPE: "/liaAgentCountry/listOfVisaType",
  NEW_LIA_AGENT_LIST_OF_VISATYPE: "/liaAgentCountry/getvisaTypePerticularLia",
  LIA_AGENT_ADD_VISA_TYPE: "/liaAgentCountry/addVisaType",
  ALL_CITIES: "/liaAgent/allCity",
  LIA_LOGOUT: "/liaAgent/logout",
  GET_LIA_AGENT: "/LiaAgent/getLiaAgent",
  GENERATE_PDF_FOR_PRINT: "/pdf/generatePdf",
  LIST_OF_STATE: "/admin/listOfState",
  WORKING_HOUR_SLOT: "/liaAgent/slots1",
  FORGOT_PASSWORD: "/business/updatePassword",
  LIST_OF_SUBSCRIPTION: "/admin/listOfSubscriptions",
  BOOKING_REASON: "/admin/listOfReason",
  BUSINESS_OWNER_PERMISSION_TO_VIEW_LIA: "/business/viewBusinessOwnerPermission",
  BUSINESS_OWNER_BUSINESS_TYPE: "/admin/listOfBusinessType",
  VIEW_LIA_CLIENT: "/liaAgent/getClient",
  COUNT_FOR_DASHBOARD: "/liaAgent/totalCount",
  EDIT_TASK_FOR_BO_AND_LIA: "/task/editTask",
  GET_PARTICULAR_TASK_FOR_BO_AND_LIA: "/task/getTaskById",
  LIA_SEND_EMAIL_TO_IMMITECH: "/liaAgent/sendEmail",
  LIA_SEND_BULK_EMAIL_TO_CLIENT: "/liaAgent/sendBulkEmail",
  LIST_OF_PARTNER: "/admin/listOfPartner",
  TYPE_OF_CONVICTION_LIST: "/admin/typeOfConvictionList",
  //******************Employers API *********************** */
  EMPLOYERS_LIST: "/employers/listOfEmployers"
};

/***/ })

};
;