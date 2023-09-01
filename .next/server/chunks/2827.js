"use strict";
exports.id = 2827;
exports.ids = [2827];
exports.modules = {

/***/ 2827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_client_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3833);

const Routes = {
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
    SignUpForm: {
      as: "/auth/SignUp/SignUpDetailsForm",
      href: "/auth/SignUp/SignUpDetailsForm"
    },
    SetPassword: {
      as: "/busines/owner/setPassword",
      href: "/busines/owner/setPassword"
    },
    LIA_setPassword: {
      as: "/LIA/PassWordSetForLia/PasswordSetLia",
      href: "/LIA/PassWordSetForLia/PasswordSetLia"
    },
    CompanyVerify: {
      as: "/auth/verify",
      href: "/auth/verify"
    },
    forgotPassword: {
      as: "/ForgetPassword",
      href: "/ForgetPassword"
    },
    liaSetup: {
      as: "/LIA/setup",
      href: "/LIA/setup"
    },
    liaWorkplace: {
      as: "/LIA/workplace",
      href: "/LIA/workplace"
    }
  },
  Business_Owner: {
    dashboard: {
      as: "/busines/owner/dashboard",
      href: "/busines/owner/dashboard"
    },
    Business_setup: {
      as: "/busines/owner/setup",
      href: "/busines/owner/setup"
    },
    allStaff: {
      as: "/busines/owner/allStaffList",
      href: "/busines/owner/allStaffList"
    },
    LIA: {
      as: "/busines/owner/lia's",
      href: "/busines/owner/lia's"
    },
    clientDetails: {
      as: "/busines/owner/allClient",
      href: "/busines/owner/allClient"
    },
    reports: {
      as: "/Client/reportAnIssue/ReportAndIssueList",
      href: "/Client/reportAnIssue/ReportAndIssueList"
    },
    accounts: {
      as: "/busines/owner/account",
      href: "/busines/owner/account"
    },
    employers: {
      as: "/busines/owner/employers",
      href: "/busines/owner/employers"
    }
  },
  Lia: {
    dashboard: {
      as: "/LIA/dashboard",
      href: "/LIA/dashboard"
    },
    allClient: {
      as: "/LIA/allClient",
      href: "/LIA/allClient"
    },
    booking: {
      as: "/LIA/booking",
      href: "/LIA/booking"
    },
    caseDetails: {
      as: "/LIA/caseDetail",
      href: "/LIA/caseDetail"
    },
    profile: {
      as: "/LIA/profile",
      href: "/LIA/profile"
    },
    Queries: {
      as: "/LIA/Queries",
      href: "/LIA/Queries"
    },
    workingHours: {
      as: "/LIA/workingHours",
      href: "/LIA/workingHours"
    },
    workplace: {
      as: "/LIA/workplace",
      href: "/LIA/workplace"
    },
    Selected_Country: {
      as: "/LIA/Selectcountry",
      href: "/LIA/Selectcountry"
    },
    Selected_Visa: {
      as: "/LIA/Selectvisa",
      href: "/LIA/Selectvisa"
    },
    Appointment_mode: {
      as: "/busines/owner/visa/appointmentMode",
      href: "/busines/owner/visa/appointmentMode"
    },
    workingHoursed_Visa: {
      as: "/LIA/workingHours",
      href: "/LIA/workingHours"
    }
  },
  Settings: {
    as: "/setting",
    href: "/setting"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

/***/ }),

/***/ 3833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ev": () => (/* binding */ view_client_service),
/* harmony export */   "cD": () => (/* binding */ add_client_service),
/* harmony export */   "m8": () => (/* binding */ genrateLink_client_service),
/* harmony export */   "rB": () => (/* binding */ send_link_client_service),
/* harmony export */   "Mb": () => (/* binding */ client_visaDetail_service),
/* harmony export */   "cY": () => (/* binding */ client_setPassword_service),
/* harmony export */   "bY": () => (/* binding */ add_client_profile_details),
/* harmony export */   "fi": () => (/* binding */ list_of_partner),
/* harmony export */   "SA": () => (/* binding */ typeOfConviction)
/* harmony export */ });
/* unused harmony exports genrate_link, lia_profile_update_service */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7869);


const ISSERVER = true;
let GUEST_TOKEN = "";
let SESSION_TOKEN = "";

if (!ISSERVER) {
  // SECURITY_TOKEN = localStorage.getItem("token")
  GUEST_TOKEN = localStorage.g_token, SESSION_TOKEN = localStorage.token;
} // VIEW CLIENT VIEW_LIA_CLIENT


const view_client_service = async clientId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.VIEW_LIA_CLIENT */ .T5.VIEW_LIA_CLIENT, {
    "clientId": clientId
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {// localStorage.clear()
      // window.location.href = "/"
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const add_client_service = async (clientId, fname, mname, lname, email, title, country_Code, Pnumber, country, state, houseNo, street, saveasDraft, lat, long, address, permanentStreet, permanentHouseNo, permanentCountry, permanentState, permanantAddSameAsCurrent) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.ADD_CLIENT */ .T5.ADD_CLIENT, {
    "clientId": clientId,
    "firstName": fname,
    "middleName": mname,
    "lastName": lname,
    "email": email,
    "title": title,
    "phoneCountryCode": country_Code,
    "phone": Pnumber,
    "country": country,
    "state": state,
    "houseNo": houseNo,
    "street": street,
    "saveAsDraft": saveasDraft,
    "lat": lat,
    "long": long,
    "address": address,
    "permanentStreetAddress": permanentStreet,
    "permanentHouseNo": permanentHouseNo,
    "permanentCountry": permanentCountry,
    "permanentState": permanentState,
    "permanantAddSameAsCurrent": permanantAddSameAsCurrent
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const genrateLink_client_service = async clientId => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.GENRATE_LINK */ .T5.GENRATE_LINK, {
    "clientId": clientId,
    "type": "generateLink"
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; //   SEND LINK TO EMAIL

const send_link_client_service = async (email, cc) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.SEND_LINK_TO_EMAIL */ .T5.SEND_LINK_TO_EMAIL, {
    "email": email,
    "cc": cc // "message":message

  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const client_visaDetail_service = async (visaCountry, visaType, visaExpiryDate, passportNumber, passportVisaExpiryDate, passportCountry, inzClientNo, saveAsDraft, permanentAddSameAsCurrent, clientId) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.CLIENT_VISA_DETAILS */ .T5.CLIENT_VISA_DETAILS, {
    "visaCountry": visaCountry,
    "visaType": visaType,
    "visaExpiryDate": visaExpiryDate,
    "passportNumber": passportNumber,
    "passportExpiryDate": passportVisaExpiryDate,
    "passportCountry": passportCountry,
    "inzClientNumber": inzClientNo,
    // "familyMemberId":familyID,
    "draftPage": saveAsDraft,
    "permanentAddSameAsCurrent": permanentAddSameAsCurrent,
    "clientId": clientId
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const genrate_link = async (email, type) => {
  let res = await axios.post(BASE_URL + API_URL.GENRATE_LINK_FOR_CLIENT, {
    "email": email,
    "type": "" //  liaAgent

  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const client_setPassword_service = async (userId, password) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.CLIENT_SET_PASSWORD */ .T5.CLIENT_SET_PASSWORD, {
    "userId": userId,
    "password": password
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ***************** add client basic details ***********************

const lia_profile_update_service = async (fname, mname, lname, email, title, phone, country, state, houseNo, street) => {
  let res = await axios.post(BASE_URL + API_URL.ADD_CLIENT, {
    "firstName": fname,
    "middleName": mname,
    "lastName": lname,
    "email": email,
    "title": title,
    "phone": phone,
    "country": country,
    "state": state,
    "houseNo": houseNo,
    "street": street,
    "draftPage1": "true"
  }, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // *************************** add Client profile details ********************

const add_client_profile_details = async formdata => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.CLIENT_PROFILE_DETAILS */ .T5.CLIENT_PROFILE_DETAILS, formdata, {
    headers: {
      "Content-Type": "application/json",
      "deviceType": "web",
      "x-auth": localStorage.token
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // ******************************* LIST OF PARTNER   *********************************************

const list_of_partner = async () => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.LIST_OF_PARTNER */ .T5.LIST_OF_PARTNER, {
    "page": 1,
    "perPage": 20
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      "deviceType": "web",
      "x-auth": localStorage.token
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
    console.log(error, "error");
    return error;
  }
}; // ******************************************   type of conviction  ***********************************************

const typeOfConviction = async () => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.TYPE_OF_CONVICTION_LIST */ .T5.TYPE_OF_CONVICTION_LIST, {
    "page": 1,
    "perPage": 20
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      "deviceType": "web",
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
    console.log(error, "error");
    return error;
  }
};

/***/ })

};
;