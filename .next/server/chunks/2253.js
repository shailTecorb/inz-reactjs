"use strict";
exports.id = 2253;
exports.ids = [2253];
exports.modules = {

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eN": () => (/* binding */ business_allCountry_list),
/* harmony export */   "zI": () => (/* binding */ admin_allCountry_list),
/* harmony export */   "UG": () => (/* binding */ lia_allCountry_list),
/* harmony export */   "hj": () => (/* binding */ business_UpdateCountry),
/* harmony export */   "BE": () => (/* binding */ business_allvisalist_service),
/* harmony export */   "Ux": () => (/* binding */ lia_allvisalist_service),
/* harmony export */   "VO": () => (/* binding */ business_add_visa_type),
/* harmony export */   "I8": () => (/* binding */ business_add_visa_type_by_modal),
/* harmony export */   "Qf": () => (/* binding */ list_of_staff_service),
/* harmony export */   "qS": () => (/* binding */ businees_owner_add_staff),
/* harmony export */   "x_": () => (/* binding */ businees_owner_update_staff),
/* harmony export */   "Sn": () => (/* binding */ businees_owner_role_listing),
/* harmony export */   "li": () => (/* binding */ list_of_appointment),
/* harmony export */   "J": () => (/* binding */ secondTimeAppointmentList),
/* harmony export */   "T7": () => (/* binding */ get_staff_data_services),
/* harmony export */   "u7": () => (/* binding */ appointment_booking_mode),
/* harmony export */   "zX": () => (/* binding */ business_owner_signup),
/* harmony export */   "WB": () => (/* binding */ business_owner_otp_verification),
/* harmony export */   "UN": () => (/* binding */ business_owner_resend_otp),
/* harmony export */   "Vg": () => (/* binding */ business_owner_logout),
/* harmony export */   "$H": () => (/* binding */ business_owner_setPassword_service),
/* harmony export */   "Fm": () => (/* binding */ business_owner_sign_up_form),
/* harmony export */   "iZ": () => (/* binding */ business_owner_view_staff),
/* harmony export */   "pv": () => (/* binding */ business_owner_view_all_query),
/* harmony export */   "PR": () => (/* binding */ visa_status_notification),
/* harmony export */   "SE": () => (/* binding */ visa_status_notification_update),
/* harmony export */   "zw": () => (/* binding */ visa_status_listing_api),
/* harmony export */   "FC": () => (/* binding */ visa_status_remove_notification),
/* harmony export */   "g0": () => (/* binding */ report_an_issue),
/* harmony export */   "G_": () => (/* binding */ view_all_reports),
/* harmony export */   "vE": () => (/* binding */ lia_reports_issues),
/* harmony export */   "QY": () => (/* binding */ business_owner_reports_issues),
/* harmony export */   "WW": () => (/* binding */ faq_for_all),
/* harmony export */   "OP": () => (/* binding */ business_owner_all_client_list),
/* harmony export */   "Bl": () => (/* binding */ business_owner_all_lia_list),
/* harmony export */   "aO": () => (/* binding */ get_business_owner),
/* harmony export */   "TL": () => (/* binding */ get_all_cities),
/* harmony export */   "au": () => (/* binding */ state_list),
/* harmony export */   "jV": () => (/* binding */ forgot_password),
/* harmony export */   "LJ": () => (/* binding */ subscription_list),
/* harmony export */   "B0": () => (/* binding */ booking_reason_list),
/* harmony export */   "on": () => (/* binding */ business_type),
/* harmony export */   "_2": () => (/* binding */ businesOwnerDashboard),
/* harmony export */   "s0": () => (/* binding */ businesOwnerDashboardGraph),
/* harmony export */   "c9": () => (/* binding */ businesOwnerDashboardTaskList),
/* harmony export */   "vJ": () => (/* binding */ businesTypeList),
/* harmony export */   "im": () => (/* binding */ businesOwnerProfileDetails),
/* harmony export */   "X9": () => (/* binding */ businesOwnerUpdateProfile),
/* harmony export */   "OL": () => (/* binding */ businesOwnerCountryList),
/* harmony export */   "Mm": () => (/* binding */ businesOwnerVisaList),
/* harmony export */   "dk": () => (/* binding */ businesOwnerUpdateVisaType),
/* harmony export */   "Tz": () => (/* binding */ adminAppointmentModeList),
/* harmony export */   "ms": () => (/* binding */ businesOwnerAppointmentModeList),
/* harmony export */   "fe": () => (/* binding */ businesOwnerUpdateAppointmentModeList),
/* harmony export */   "qz": () => (/* binding */ verifyNZBN),
/* harmony export */   "nl": () => (/* binding */ addTaskDashboardBO),
/* harmony export */   "x4": () => (/* binding */ addFollowersService),
/* harmony export */   "AZ": () => (/* binding */ BONotificatioStatusUpdate),
/* harmony export */   "$s": () => (/* binding */ BONotificatioStatus),
/* harmony export */   "NG": () => (/* binding */ changePasswordService),
/* harmony export */   "KY": () => (/* binding */ getTemplateService),
/* harmony export */   "zC": () => (/* binding */ addUpdateTemplateService),
/* harmony export */   "JB": () => (/* binding */ addDuplicateTemplateService),
/* harmony export */   "bO": () => (/* binding */ listOfKeyAttributeService),
/* harmony export */   "yM": () => (/* binding */ update_task_api),
/* harmony export */   "xt": () => (/* binding */ get_task_api)
/* harmony export */ });
/* unused harmony exports business_addNewStaff_service, visalist_for_particular_lia, verify_NZBN, business_owner_dashbord_all_count, business_owner_view_all_ppi_list, permission_to_view_lia, businesOwnerUpdateCountryList, viewTemplateService */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7869);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ISSERVER = true;
let GUEST_TOKEN = "";
let SESSION_TOKEN = "";

if (!ISSERVER) {
  // SECURITY_TOKEN = localStorage.getItem("token")
  // GUEST_TOKEN = localStorage.g_token,
  SESSION_TOKEN = localStorage.token;
}

const Access_Control_Allow_Origin_url = "https://immitech.herokuapp.com/api/v1";
const business_addNewStaff_service = async (passportNumber, passportCountry, passportExpireyDate, visaCountry, visaType, visaExpiryDate, clientNumber, saveasDraft) => {
  let res = await axios.post(BASE_URL + API_URL.CLIENT_VISA_DETAILS, {
    permanantAddSameAsCurrent: "true",
    passportDetail: [{
      passportNumber: passportNumber,
      passportCountry: passportCountry,
      passportIssuedate: "passportIssuedate",
      passportExpireyDate: passportExpireyDate
    }],
    visaCountry: visaCountry,
    visaType: visaType,
    visaExpiryDate: visaExpiryDate,
    inzClientNumber: clientNumber,
    saveAsDraft: saveasDraft
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // COUNTRY LIST

const business_allCountry_list = async search => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ALL_COUNTRY */ .T5.ALL_COUNTRY, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ADMIN LIST OF COUNTRIES

const admin_allCountry_list = async search => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADMIN_ALL_COUNTRY */ .T5.ADMIN_ALL_COUNTRY, {
    page: 1,
    perPage: 199
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // COUNTRY LIST  FOR LIA

const lia_allCountry_list = async search => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_ALL_COUNTRY */ .T5.LIA_ALL_COUNTRY, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // Country Add

const business_UpdateCountry = async countries => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.UPDATE_COUNTRY */ .T5.UPDATE_COUNTRY, {
    countries: countries
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //  ALL VISA LIST

``;
const business_allvisalist_service = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BO_VISA_LIST */ .T5.BO_VISA_LIST, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403 || response.code === 400) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //  LIA VISA LIST

const lia_allvisalist_service = async countryId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ALL_VISA_LIST */ .T5.ALL_VISA_LIST, {
    countryId: countryId
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403 || response.code === 400) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ******************* visa type for particular lia ********************

const visalist_for_particular_lia = async () => {
  let res = await axios.get(BASE_URL + API_URL.BUSINESSOWNER_GET_ALL_ADD_VISA, {// "countryId": countryId,
    // "search": search,
    // "perPage": perPage,
    // "page": page
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ADD VISA TYPE

const business_add_visa_type = async visaList => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.UPDATE_VISA_TYPE */ .T5.UPDATE_VISA_TYPE, {
    visaTypes: visaList
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ADD VISA TYPE BY MODAL

const business_add_visa_type_by_modal = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_ADD_VISA_BY_MODAL */ .T5.BUSINESS_OWNER_ADD_VISA_BY_MODAL, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //  LIST OF ALL STAFFS

const list_of_staff_service = async (page, perPage, role, search) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_ALL_STAFF */ .T5.LIST_OF_ALL_STAFF, {
    pageNo: page,
    perPage: perPage,
    role: role,
    search: search
  }, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // BUSINESSOWNER ADD STAFF

const businees_owner_add_staff = async formdata => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_ADD_STAFF */ .T5.BUSINESS_OWNER_ADD_STAFF, formdata, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    } // transformRequest: [function (data, headers) {
    //     return data;
    // }],

  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // *********************BUSINESSOWNER UPDATE STAFF *********************************
//

const businees_owner_update_staff = async formdata => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_UPDATE_STAFF */ .T5.BUSINESS_OWNER_UPDATE_STAFF, formdata, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // LIST OF ROLE IN BUSINESS OWNER ADD STAFF

const businees_owner_role_listing = async (perPage, page) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESSOWNER_ADD_STAFF_ROLELIST */ .T5.BUSINESSOWNER_ADD_STAFF_ROLELIST, {
    perPage: perPage,
    page: page
  }, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //************************** FIRST TIME LIST OF APPOINTMENT *************************************

const list_of_appointment = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_APPOINTMENT */ .T5.LIST_OF_APPOINTMENT, {}, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //*************************************************************************** */

const secondTimeAppointmentList = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.SECOND_TIME_LIST_OF_APPOINTMENT */ .T5.SECOND_TIME_LIST_OF_APPOINTMENT, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //  GET STAFF DATA

const get_staff_data_services = async staffId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.GET_STAFF_DATA */ .T5.GET_STAFF_DATA, {
    staffId: staffId
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const appointment_booking_mode = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.APPOINTMENT_BOOKING_MODE */ .T5.APPOINTMENT_BOOKING_MODE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // SIGN UP

const business_owner_signup = async data => {
  delete data.captcha;
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_SIGNUP */ .T5.BUSINESS_OWNER_SIGNUP, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // VERIFY NZBN
// SIGN UP

const verify_NZBN = async NZBNumber => {
  let res = await axios.post(BASE_URL + API_URL.VERIFY_NZBN, {
    NZBNumber: NZBNumber
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web" // "x-auth": SESSION_TOKEN

    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // OTP VERIFICATION

const business_owner_otp_verification = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_OTP_VERIFICATION */ .T5.BUSINESS_OWNER_OTP_VERIFICATION, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // RESEND OTP

const business_owner_resend_otp = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.RESEND_OTP */ .T5.RESEND_OTP, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // Business Owner Logout

const business_owner_logout = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_LOGOUT */ .T5.BUSINESS_OWNER_LOGOUT, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // update password for business owner

const business_owner_setPassword_service = async (userId, password) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_SET_PASSWORD */ .T5.BUSINESS_OWNER_SET_PASSWORD, {
    userId: userId,
    password: password
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web" // "x-auth" : SESSION_TOKEN

    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // BUSINESS OWNER SIGN UP FORM

const business_owner_sign_up_form = async formdata => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_ADD_BUSINESS_SIGN_UP_FORM */ .T5.BUSINESS_OWNER_ADD_BUSINESS_SIGN_UP_FORM, formdata, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //BUSINESS_OWNER_VIEW_STAFF

const business_owner_view_staff = async id => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_VIEW_STAFF */ .T5.BUSINESS_OWNER_VIEW_STAFF, {
    staffId: id
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // BUSINESS OWNER DASHBORD ALL LIST COUNTING

const business_owner_dashbord_all_count = async (type, count) => {
  let res = await axios.post(BASE_URL + API_URL.BUSINESS_OWNER_DASHBORD_ALL_COUNT, {
    type: type,
    count: count
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // Business Owner View Query

const business_owner_view_all_query = async status => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_DASHBORD_ALL_QUERY */ .T5.BUSINESS_OWNER_DASHBORD_ALL_QUERY, {
    status: status
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // BUSINESS OWNER DASHBORD ALL PPI LIST

const business_owner_view_all_ppi_list = async (perPage, page) => {
  let res = await axios.post(BASE_URL + API_URL.BUSINEES_OWNER_DASHBORD_ALL_PPI_LIST, {
    perPage: perPage,
    page: page
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // Visa Status Notification ....

const visa_status_notification = async role => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VISA_STATUS_NOTIFICATION */ .T5.VISA_STATUS_NOTIFICATION, {
    addBy: role,
    perPage: 3,
    page: 1
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // visa status update notification

const visa_status_notification_update = async (title, status, description, role, id) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VISA_STATUS_NOTIFICATION_UPDATE */ .T5.VISA_STATUS_NOTIFICATION_UPDATE, {
    title: title,
    visaStatus: status,
    description: description,
    addBy: role,
    statusNotificationId: id
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // VISA STATUS LISTING API

const visa_status_listing_api = async id => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VISA_STATUS_NOTIFICATION_LIST_OF_VISA_STATUS */ .T5.VISA_STATUS_NOTIFICATION_LIST_OF_VISA_STATUS, {
    visaTypeId: id
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // visa status remove notification

const visa_status_remove_notification = async (id, role) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VISA_STATUS_REMOVE_NOTIFICATION */ .T5.VISA_STATUS_REMOVE_NOTIFICATION, {
    statusNotificationId: id,
    addBy: role
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // FOR REPORT AN ISSUE

const report_an_issue = async (title, description, role, saveAsDraft) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.REPORT_AN_ISSUE */ .T5.REPORT_AN_ISSUE, {
    title: title,
    description: description,
    createdBy: role,
    saveAsDraft: saveAsDraft
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // VIEW ALL REPORT

const view_all_reports = async reportId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.REPORT_VIEW */ .T5.REPORT_VIEW, {
    reportId: reportId
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // LIST  OF Reports and issues for lia

const lia_reports_issues = async (status, inputData, page, perPage) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_REPORTS_AND_ISSUES */ .T5.LIA_REPORTS_AND_ISSUES, {
    status: status,
    search: inputData,
    page: page,
    perPage: perPage
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // LIST  OF Reports and issues for business owner

const business_owner_reports_issues = async (status, inputData, page, perPage) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_REPORTS_AND_ISSUES */ .T5.BUSINESS_OWNER_REPORTS_AND_ISSUES, {
    status: status,
    search: inputData,
    page: page,
    perPage: perPage
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // FAQ FOR ALL

const faq_for_all = async (page, perPage, role, inputData) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.FAQ_FOR_ALL */ .T5.FAQ_FOR_ALL, {
    page: page,
    perPage: perPage,
    role: role,
    search: inputData
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // Business owener all client list

const business_owner_all_client_list = async (page, perPage, search) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_ALL_CLIENT_LIST */ .T5.BUSINESS_OWNER_ALL_CLIENT_LIST, {
    page: page,
    perPage: perPage,
    search: search
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // BUSINESS OWNER DASHBORD ALL LIA LISTV

const business_owner_all_lia_list = async (perPage, page, search) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_ALL_LIA_LIST */ .T5.BUSINESS_OWNER_ALL_LIA_LIST, {
    perPage: perPage,
    pageNo: page,
    search: search
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //GET  BUSINESS OWNER ALL INFORMATION

const get_business_owner = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.GET_BUSINESS_OWNER */ .T5.GET_BUSINESS_OWNER, {}, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ******************* GET  ALL CiTIES ***********************

const get_all_cities = async countryId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ALL_CITIES */ .T5.ALL_CITIES, {
    countryId: countryId
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********* list of STATE for profile details client page *************

const state_list = async country => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_STATE */ .T5.LIST_OF_STATE, {
    countryId: country
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********* FORGOT PASSWORD FOR BUSINESS OWNER AND LIA  *************

const forgot_password = async (id, password) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.FORGOT_PASSWORD */ .T5.FORGOT_PASSWORD, {
    userId: id,
    password: password
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********* SUBSCRIPTION LIST FOR BUSINESS OWNER  *************

const subscription_list = async (perPage, page) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_SUBSCRIPTION */ .T5.LIST_OF_SUBSCRIPTION, {
    perPage: perPage,
    page: page
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********* REPORT REASON FOR REPORT AND ISSUES   *************

const booking_reason_list = async (perPage, page) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BOOKING_REASON */ .T5.BOOKING_REASON, {
    perPage: perPage,
    page: page
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // :::::::::: PERMISSION TO ADMIN TO VIEW LIA DETAILS ::::::::::::::::::::

const permission_to_view_lia = async permission => {
  let res = await axios.post(BASE_URL + API_URL.BUSINESS_OWNER_PERMISSION_TO_VIEW_LIA, {
    permission: permission
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // :::::::::: BUSINESS owner  business type for signup form ::::::::::::::::::::

const business_type = async permission => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_BUSINESS_TYPE */ .T5.BUSINESS_OWNER_BUSINESS_TYPE, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerDashboard = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_DASHBORD */ .T5.BUSINESS_OWNER_DASHBORD, {}, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerDashboardGraph = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_DASHBORD_GRAPH */ .T5.BUSINESS_OWNER_DASHBORD_GRAPH, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerDashboardTaskList = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_DASHBORD_TASK_LIST */ .T5.BUSINESS_OWNER_DASHBORD_TASK_LIST, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesTypeList = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_TYPE_LIST */ .T5.BUSINESS_OWNER_TYPE_LIST, // { ...data },
  {
    perPage: 20,
    page: 1
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerProfileDetails = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_GET_PROFILE */ .T5.BUSINESS_OWNER_GET_PROFILE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerUpdateProfile = async formdata => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_UPDATE_PROFILE */ .T5.BUSINESS_OWNER_UPDATE_PROFILE, formdata, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerCountryList = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_COUNTRY_LIST */ .T5.BUSINESS_OWNER_COUNTRY_LIST, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerUpdateCountryList = async data => {
  let res = await axios.post(BASE_URL + API_URL.BUSINEES_OWNER_UPDATE_COUNTRY_LIST, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerVisaList = async data => {
  // console.log(data,"dddddddddddda")
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_VISA_TYPE_LIST */ .T5.BUSINEES_OWNER_VISA_TYPE_LIST, {
    "countryId": data
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const businesOwnerUpdateVisaType = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_UPDATE_VISA_TYPE */ .T5.BUSINESS_OWNER_UPDATE_VISA_TYPE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********************************** GET ADMIN APPOINTMENT MODE LIST *******************************************************************

const adminAppointmentModeList = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADMIN_LIST_OF_APPOINTMENT_MODE */ .T5.ADMIN_LIST_OF_APPOINTMENT_MODE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// localStorage.clear();
      // window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********************************** GET APPOINTMENT MODE LIST *******************************************************************

const businesOwnerAppointmentModeList = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_APPOINTMENT_MODE_LIST */ .T5.BUSINESS_OWNER_APPOINTMENT_MODE_LIST, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ********************************** UPDATE APPOINTMENT MODE LIST *******************************************************************

const businesOwnerUpdateAppointmentModeList = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_UPDATE_APPOINTMENT_MODE */ .T5.BUSINESS_OWNER_UPDATE_APPOINTMENT_MODE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // *********************************************************************************************************************

const verifyNZBN = async data => {
  delete data.captcha;
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VERIFY_NZBN */ .T5.VERIFY_NZBN, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web" // "x-auth": SESSION_TOKEN

    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//   localStorage.clear();
      //   window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const addTaskDashboardBO = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADD_NEW_TASK_LIA_WORKPLACE */ .T5.ADD_NEW_TASK_LIA_WORKPLACE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const addFollowersService = async searchBy => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADD_FOLLOWERS */ .T5.ADD_FOLLOWERS, {
    page: 1,
    perPage: 12,
    search: "",
    searchBy: searchBy
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const BONotificatioStatusUpdate = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_UPDATE */ .T5.BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_UPDATE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//localStorage.clear()
      //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const BONotificatioStatus = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_STATUS */ .T5.BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_STATUS, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {//localStorage.clear()
      //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const changePasswordService = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_CHANGE_PASSWORD */ .T5.BUSINEES_OWNER_CHANGE_PASSWORD, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ____________________ Temaplate ___________________

const getTemplateService = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_TEMPLATE_LIST */ .T5.BUSINEES_OWNER_TEMPLATE_LIST, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const viewTemplateService = async data => {
  let res = await axios.post(BASE_URL + API_URL.BUSINEES_OWNER_VIEW_TEMPLATE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const addUpdateTemplateService = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_ADD_UPDATE_TEMPLATE */ .T5.BUSINEES_OWNER_ADD_UPDATE_TEMPLATE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const addDuplicateTemplateService = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_ADD_DUPLICATE_TEMPLATE */ .T5.BUSINEES_OWNER_ADD_DUPLICATE_TEMPLATE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const listOfKeyAttributeService = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINEES_OWNER_LIST_OF_KEY_ATTRIBUTE */ .T5.BUSINEES_OWNER_LIST_OF_KEY_ATTRIBUTE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //******************************************  UPDATE TASK API FOR BO AND LIA BOTH *********************************************** */

const update_task_api = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.EDIT_TASK_FOR_BO_AND_LIA */ .T5.EDIT_TASK_FOR_BO_AND_LIA, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //******************************************  GET TASK API FOR BO AND LIA BOTH *********************************************** */

const get_task_api = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.GET_PARTICULAR_TASK_FOR_BO_AND_LIA */ .T5.GET_PARTICULAR_TASK_FOR_BO_AND_LIA, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      //   window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

/***/ })

};
;