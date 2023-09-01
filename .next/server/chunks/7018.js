"use strict";
exports.id = 7018;
exports.ids = [7018];
exports.modules = {

/***/ 7018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sl": () => (/* binding */ add_working_hour),
/* harmony export */   "pY": () => (/* binding */ add_template),
/* harmony export */   "um": () => (/* binding */ template_type_list),
/* harmony export */   "dM": () => (/* binding */ edit_template_type),
/* harmony export */   "Qi": () => (/* binding */ all_template_list),
/* harmony export */   "Tm": () => (/* binding */ duplicate_template),
/* harmony export */   "ej": () => (/* binding */ view_template),
/* harmony export */   "SB": () => (/* binding */ list_of_client_of_particular_lia),
/* harmony export */   "cz": () => (/* binding */ advance_search),
/* harmony export */   "zc": () => (/* binding */ lia_set_password),
/* harmony export */   "Uo": () => (/* binding */ lia_workplace_task_list),
/* harmony export */   "i_": () => (/* binding */ lia_workplace_add_new_task),
/* harmony export */   "g9": () => (/* binding */ lia_agent_update_profile),
/* harmony export */   "wO": () => (/* binding */ all_city_listing),
/* harmony export */   "Bb": () => (/* binding */ country_list_for_lia),
/* harmony export */   "Cp": () => (/* binding */ country_update_for_lia),
/* harmony export */   "GU": () => (/* binding */ lia_agent_add_country),
/* harmony export */   "AG": () => (/* binding */ update_lia_agent_list_of_visa_type),
/* harmony export */   "lV": () => (/* binding */ lia_agent_add_visa_type),
/* harmony export */   "rQ": () => (/* binding */ updated_lia_add_visa_request),
/* harmony export */   "yN": () => (/* binding */ lia_logout),
/* harmony export */   "oS": () => (/* binding */ getLiaAgent),
/* harmony export */   "Zu": () => (/* binding */ working_hour_slot_timimg),
/* harmony export */   "uM": () => (/* binding */ dashboard_count_services),
/* harmony export */   "oW": () => (/* binding */ send_email_to_emmitech),
/* harmony export */   "PU": () => (/* binding */ send_bulk_email_to_client)
/* harmony export */ });
/* unused harmony exports manage_booking_service, add_reminder_service, visaTpe_update_for_lia, lia_agent_list_of_visa_type, generatePdfForPrint */
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
  GUEST_TOKEN = localStorage.g_token, SESSION_TOKEN = localStorage.token;
}

const manage_booking_service = async (title, country, visatype, meetingtype, paymentstatus, date, time, description) => {
  let res = await axios.post(BASE_URL + API_URL.CLIENT_VISA_DETAILS, {
    "title": title,
    "country": country,
    "visaType": visatype,
    "typeOfMeating": meetingtype,
    "paymentStatus": paymentstatus,
    "date": date,
    "time": time,
    "description": description
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const add_working_hour = async (day, startTime) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADD_WORKING_HOUR */ .T5.ADD_WORKING_HOUR, {
    "day": day,
    "startTime": startTime
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {//localStorage.clear()
      //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //  ADD NEW REMINDER 

const add_reminder_service = async (date, time, user, title, description) => {
  let res = await axios.post(BASE_URL + API_URL.CLIENT_VISA_DETAILS, {
    "date": date,
    "time": time,
    "client": user,
    "title": title,
    "description": description
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const add_template = async (templateTitle, role, content, templateType) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADD_TEMPLATE */ .T5.ADD_TEMPLATE, {
    "tittle": templateTitle,
    "addBy": role,
    "content": content,
    "templateType": templateType
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const template_type_list = async (perPage, page) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.TEMPLATE_TYPE_LIST */ .T5.TEMPLATE_TYPE_LIST, {
    "perPage": perPage,
    "page": page
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const edit_template_type = async (templateId, tempTitle, typeName) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.EDIT_TEMPLATE_TYPE */ .T5.EDIT_TEMPLATE_TYPE, {
    "templateTypeId": templateId,
    "title": tempTitle,
    "typeName": typeName
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // All  Template  List

const all_template_list = async (perPage, page, addBy) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.TEMPLATE_LIST */ .T5.TEMPLATE_LIST, {
    "perPage": perPage,
    "page": page,
    "addBy": addBy
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const duplicate_template = async (role, templateId) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.DUPLICATE_TEMPLATE */ .T5.DUPLICATE_TEMPLATE, {
    "addBy": role,
    "templateId": templateId
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const view_template = async (templateId, role) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VIEW_TEMPLATE */ .T5.VIEW_TEMPLATE, {
    "templateId": templateId,
    "addBy": role
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const list_of_client_of_particular_lia = async (perPage, page, search) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_CLIENT_OF_PARTICULAR_LIA */ .T5.LIST_OF_CLIENT_OF_PARTICULAR_LIA, {
    "perPage": perPage,
    "page": page,
    "search": search
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
const advance_search = async (inputData, firstName, email, visaType, dob, perPage, page) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_CLIENT_OF_PARTICULAR_LIA */ .T5.LIST_OF_CLIENT_OF_PARTICULAR_LIA, {
    "search": inputData,
    "firstName": firstName,
    "email": email,
    "visaType": visaType,
    "dob": dob,
    "perPage": perPage,
    "page": page
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // set PassWord For LIA 

const lia_set_password = async (id, password) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_AGENT_SET_PASSWORD */ .T5.LIA_AGENT_SET_PASSWORD, {
    "userId": id,
    "password": password
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // LIST OF TASK  IN LIA WORKPLACE DATE WISE

const lia_workplace_task_list = async (day, endDate) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_WORKPLACE_LIST_OF_TASK */ .T5.LIA_WORKPLACE_LIST_OF_TASK, {
    "type": day,
    "date": endDate
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // Lia Add New Task In workplace Page 

const lia_workplace_add_new_task = async (date, startTime, endTime, title, description, taskFollowers) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADD_NEW_TASK_LIA_WORKPLACE */ .T5.ADD_NEW_TASK_LIA_WORKPLACE, {
    "date": date,
    "startTime": startTime,
    "dueTime": endTime,
    "tittle": title,
    "description": description,
    "taskFollowers": taskFollowers
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // LIA AGENT UPDATE PROFILE 

const lia_agent_update_profile = async (image, name, email, gender, country_Code, phoneNo, country, landlineCountrycode, landlineNo, address, licenseNo, licenseExpiryDate, location, Profession, city, link, description) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_AGENT_PROFILE_UPDATE */ .T5.LIA_AGENT_PROFILE_UPDATE, {
    "image": image,
    "fullName": name,
    "email": email,
    "expiryDate": licenseExpiryDate,
    "gender": gender,
    "phoneNumberCountryCode": country_Code,
    "phoneNumber": phoneNo,
    "country": country,
    "lineNumberCountryCode": landlineCountrycode,
    "landlineNumber": landlineNo,
    "address": address,
    "licenseNumber": licenseNo,
    "location": location,
    "myProfession": Profession,
    "city": city,
    "licenseNo": link,
    "about": description
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // All City Listing 

const all_city_listing = async countryId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ALL_CITY_LIST */ .T5.ALL_CITY_LIST, {
    "countryId": countryId
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // LIA SELECT ALL COUNTRY LIST 

const country_list_for_lia = async (perPage, page) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_SELECT_COUNTRY_LIST */ .T5.LIA_SELECT_COUNTRY_LIST, {
    "perPage": 250,
    "page": 1
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // UPDATE_COUNTRY_AFTER_LOGIN

const country_update_for_lia = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.UPDATE_COUNTRY_AFTER_LOGIN */ .T5.UPDATE_COUNTRY_AFTER_LOGIN, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // UPDATE_VISATYPE_AFTER_LOGIN

const visaTpe_update_for_lia = async () => {
  let res = await axios.get(BASE_URL + API_URL.UPDATE_VISATYPE_AFTER_LOGIN, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // LIA AGENT Add Country 

const lia_agent_add_country = async id => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_AGENT_ADD_COUNTRY */ .T5.LIA_AGENT_ADD_COUNTRY, {
    "countryId": id
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // LIA AGENT LISTING OF VISA TYPE

const lia_agent_list_of_visa_type = async id => {
  let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_LIST_OF_VISATYPE, {
    "countryId": id
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; //************************** */UPDATE LIA AGENT LISTING OF VISA TYPE*************************************8

const update_lia_agent_list_of_visa_type = async id => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.NEW_LIA_AGENT_LIST_OF_VISATYPE */ .T5.NEW_LIA_AGENT_LIST_OF_VISATYPE, {
    "countryId": id
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; // LIA ADD VISA TYPE 

const lia_agent_add_visa_type = async visaList => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_AGENT_ADD_VISA_TYPE */ .T5.LIA_AGENT_ADD_VISA_TYPE, {
    "visaTypes": visaList
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; //************************************* UPDATED  LIA ADD VISA TYPE  REQUEST ********************************

const updated_lia_add_visa_request = async data => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_AGENT_ADD_VISA_TYPE */ .T5.LIA_AGENT_ADD_VISA_TYPE, _objectSpread({}, data), {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; //********************* */ LIA LOGOUT ******************* 

const lia_logout = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_LOGOUT */ .T5.LIA_LOGOUT, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
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
}; //*********************   get LIA AGENT ******************* 

const getLiaAgent = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.GET_LIA_AGENT */ .T5.GET_LIA_AGENT, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// //localStorage.clear()
      // //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //*********************   GENERATE PDF FOR PRINT ******************* 

const generatePdfForPrint = async () => {
  let res = await axios.post(BASE_URL + API_URL.GENERATE_PDF_FOR_PRINT, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// //localStorage.clear()
      // //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //*********************  Working hour  slot timimg ******************* 

const working_hour_slot_timimg = async (day, liaId) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.WORKING_HOUR_SLOT */ .T5.WORKING_HOUR_SLOT, {
    "day": day,
    "liaAgentId": liaId,
    "date": new Date()
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// //localStorage.clear()
      // //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // COUNT API FOR LIA DASHBOARD

const dashboard_count_services = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.COUNT_FOR_DASHBOARD */ .T5.COUNT_FOR_DASHBOARD, {}, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// //localStorage.clear()
      // //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // **********************************  LIA_SEND_EMAIL_TO_IMMITECH *************************************************************

const send_email_to_emmitech = async formData => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_SEND_EMAIL_TO_IMMITECH */ .T5.LIA_SEND_EMAIL_TO_IMMITECH, formData, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// //localStorage.clear()
      // //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //******************************  LIA_SEND_BULK_EMAIL_TO_CLIENT  *********************************** */

const send_bulk_email_to_client = async formData => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIA_SEND_BULK_EMAIL_TO_CLIENT */ .T5.LIA_SEND_BULK_EMAIL_TO_CLIENT, formData, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": SESSION_TOKEN
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {// //localStorage.clear()
      // //window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

/***/ })

};
;