"use strict";
exports.id = 4777;
exports.ids = [4777];
exports.modules = {

/***/ 4777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zX": () => (/* binding */ login_service),
/* harmony export */   "VR": () => (/* binding */ forgot_password_service)
/* harmony export */ });
/* unused harmony exports signup_service, otp_service */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7869);


const ISSERVER = true;
let GUEST_TOKEN = "";
let SESSION_TOKEN = "";

if (!ISSERVER) {
  // SECURITY_TOKEN = localStorage.getItem("token")
  // GUEST_TOKEN = localStorage.g_token,
  SESSION_TOKEN = localStorage.token;
}

const Access_Control_Allow_Origin_url = "https://inz-visa.herokuapp.com"; // import jstz from 'jstz';
// LOGIN SERVICES

const login_service = async (email, password) => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_LOGIN */ .T5.BUSINESS_OWNER_LOGIN, {
    email: email,
    password: password
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web"
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
}; // FORGOT SERVICES

const forgot_password_service = async email => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(_api_url__WEBPACK_IMPORTED_MODULE_1__/* .BASE_URL */ ._n + _api_url__WEBPACK_IMPORTED_MODULE_1__/* .API_URL.BUSINESS_OWNER_FORGOTPASSWORD */ .T5.BUSINESS_OWNER_FORGOTPASSWORD, {
    email: email
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web"
    }
  });

  try {
    let response = res.data;

    if (response.code === 403) {
      localStorage.clear();
      window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
}; // SIGNUP SERVICES

const signup_service = async (email, password) => {
  let res = await axios.post(BASE_URL + API_URL.SIGNUP, {
    email: email,
    password: password
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web"
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    } else {}

    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const otp_service = async (email, otp) => {
  let res = await axios.post(BASE_URL + API_URL.OTP_VERIFY, {
    email: email,
    otp: otp
  }, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web"
    }
  });

  try {
    let response = res.data;

    if (response.code === 401) {
      // localStorage.clear()
      window.location.href = "/";
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