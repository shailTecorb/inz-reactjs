"use strict";
exports.id = 9199;
exports.ids = [9199];
exports.modules = {

/***/ 9199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ol": () => (/* binding */ validateName),
/* harmony export */   "YN": () => (/* binding */ validateAddress),
/* harmony export */   "oH": () => (/* binding */ validateEmail),
/* harmony export */   "uo": () => (/* binding */ validatePassword),
/* harmony export */   "mE": () => (/* binding */ validateNumber),
/* harmony export */   "Qx": () => (/* binding */ validateDatepicker),
/* harmony export */   "a$": () => (/* binding */ validatePhone)
/* harmony export */ });
/* unused harmony exports validateDescription, UnAuthorizedAccess, validateLink */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const style = {// paddingTop: "6px",
  // paddingBottom: "6px",
  // padding:"0px",
  // fontSize: "12px"
};
const style_newsletter = {
  paddingTop: "3px",
  paddingBottom: "3px",
  fontSize: "12px"
};
const alert = "alert alert-login";
const validateName = name => {
  let nameRegex = /^[a-zA-Z ]+$/; // name = name?.trim();

  if (name === "" || name === undefined || name === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        children: "Please enter your Name. "
      })
    };
  } else if (!nameRegex.test(name)) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        children: "Please provide valid name"
      })
    };
  } else if (name.length < 2) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        children: "Please provide valid name"
      })
    };
  } else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
}; // **************************************************

const validateAddress = name => {
  let nameRegex = /^[a-zA-Z ]+$/; // name = name?.trim();

  if (name === "" || name === undefined || name === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        children: "Please enter your Address. "
      })
    };
  } else if (!nameRegex.test(name)) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        children: "Please provide valid Address"
      })
    };
  } else if (name.length < 5) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        children: "Please provide valid Address"
      })
    };
  } else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
}; // ***************************************

const validateEmail = email => {
  let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;

  if (email === "" || email === undefined || email === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Please enter Email ID."
      })
    };
  } else if (!emailRegex.test(email)) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Please enter valid Email Address."
      })
    };
  } else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
};
const validatePassword = password => {
  let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/;

  if (password === "" || password === undefined || password === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Please enter valid password."
      })
    };
  } else if (!passwordRegex.test(password)) {
    return {
      isDisabled: false,
      error: "Password must be more than 6 characters with 1 uppercase & 1 number."
    };
  } else if (password.length < 6) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Password must contain 6 or more than 6 characters."
      })
    };
  } else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
};
const validateNumber = number => {
  // let numberRegex = /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;
  // let numberRegex = /^[1-9][0-9]{9,12}$/;
  number = number.trim();

  if (number === "" || number === undefined || number === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Please enter Phone number."
      })
    };
  } // else if (!numberRegex.test(number)) {
  //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid Phone Number.</div> };
  // }
  else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
};
const validateDescription = description => {
  description = description.trim();

  if (description === "" || description === undefined || description === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/_jsx("div", {
        className: alert,
        style: style,
        children: "Field is not Empty."
      })
    };
  } else if (description.length >= 1000) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/_jsx("div", {
        className: alert,
        style: style,
        children: "Description must contain maximum 1000 characters."
      })
    };
  } else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
};
const UnAuthorizedAccess = code => {
  // code = license.trim();
  if (code === 404) {
    return {
      status: false,
      error: /*#__PURE__*/_jsx("div", {
        className: alert,
        style: {
          paddingBottom: "6px",
          paddingTop: "6px",
          fontSize: "12px"
        },
        children: "User does not access"
      })
    };
  } else {
    return {
      status: true,
      error: ''
    };
  }
};
const validateDatepicker = date => {
  // let passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  // date = date.trim();
  if (date === "" || date === undefined || date === null) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Please enter valid date."
      })
    };
  } // else if (!passwordRegex.test(password)) {
  //     return { status: false, error: "Please enter valid password." };
  // }
  // else if (password.length < 6) {
  //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Password must contain 6 or more than 6 characters.</div> };
  // }
  else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
};
const validatePhone = phone => {
  // let passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  // date = date.trim();
  const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9/d{10}]*$/;

  if (!phoneReg.test(phone) || phone.length < 8) {
    return {
      status: false,
      isDisabled: false,
      error: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: alert,
        style: style,
        children: "Please enter valid Phone Number."
      })
    };
  } // if (phone === "" || phone === undefined || phone === null) {
  //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid Phone Number.</div> }
  // }
  // else if (!passwordRegex.test(password)) {
  //     return { status: false, error: "Please enter valid password." };
  // }
  // else if (password.length < 6) {
  //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Password must contain 6 or more than 6 characters.</div> };
  // }
  // else if (  phone !== Number){
  //     return { status : false, isDisabled:false, error: <div className={alert} style={style}>  Number must contain 10 characters</div>}
  // }
  else {
    return {
      status: true,
      isDisabled: true,
      error: ''
    };
  }
};
const validateLink = phone => {};

/***/ })

};
;