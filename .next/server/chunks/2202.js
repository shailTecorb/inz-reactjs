exports.id = 2202;
exports.ids = [2202];
exports.modules = {

/***/ 6608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4289);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Captcha = ({
  handleCaptch,
  setReference
}) => {
  let registerRecaptcha = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();

  const onChange = value => {
    console.log("Captcha value:", value);
    handleCaptch(value);
    setReference(registerRecaptcha);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_0___default()) // ref={(el) => {
  // //  registerRecaptcha = el;
  // console.log("---EL----",el)
  // }}
  , {
    ref: registerRecaptcha,
    sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    onChange: onChange
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Captcha);

/***/ }),

/***/ 1318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4118);
/* harmony import */ var _styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Common_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9199);
/* harmony import */ var _helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4777);
/* harmony import */ var _Common_input_filed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _Common_leftBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8903);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4878);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var _Common_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2827);
/* harmony import */ var _Common_ReCaptcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6608);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const SignIn = () => {
  let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
  let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/;
  let route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: Isinput,
    1: setIsInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: "",
    password: "",
    captchaValue: ""
  });
  const {
    0: isLoading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: captchaText,
    1: setCaptchaText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: random,
    1: setRandom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: reference,
    1: setReference
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}); //   const [captchaErrorMsg, setCaptchaError] = useState("");

  const {
    0: isDisabledCaptcha,
    1: setIsDisabledcaptcha
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: message,
    1: setMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    setCountryId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_7__/* .IdContext */ .B);
  const {
    0: isError,
    1: set_isError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    EmailErrorMsg: "",
    passwordErrorMsg: "",
    isDisabledPassword: false,
    isDisabledEmail: false,
    isDisabled: false,
    captchaErrorMsg: ""
  });
  const {
    0: userCountry,
    1: setUserCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setRandom(Math.floor(100000 + Math.random() * 900000));
  }, []);

  const handleClick = event => {
    //   event.preventDefault()
    setRandom(Math.floor(100000 + Math.random() * 900000));
  };

  const getGeoInfo = () => {
    axios__WEBPACK_IMPORTED_MODULE_6___default().get("https://ipapi.co/json/").then(response => {
      let data = response.data; //   console.log(data,"data")

      setUserCountry(response.country_name);
      console.log(data, "data");
      localStorage.setItem("userCountry", data.country_code);
    }).catch(error => {// //consolee.log(error);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!localStorage.token) {} else if (localStorage.token && localStorage.role == "businessOwner") {
      route.replace("/busines/owner/dashboard");
    } else if (localStorage.token && localStorage.role == "liaAgent" && localStorage.countryId && localStorage.visaType) {
      route.push("/LIA/workplace");
    } else if (localStorage.token && localStorage.role == "liaAgent" && !localStorage.countryId && !localStorage.visaType) {
      route.push("/LIA/workplace");
    }
  }, []);

  const validForm = (fieldName, Value) => {
    let EmailErrorMsg = isError.EmailErrorMsg;
    let isDisabledEmail = isError.isDisabledEmail;
    let PasswordErrorMsg = isError.isDisabledPassword;
    let isDisabledPassword = isError.isDisabledPassword;

    switch (fieldName) {
      case "email":
        EmailErrorMsg = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_1__/* .validateEmail */ .oH)(Value).error;
        isDisabledEmail = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_1__/* .validateEmail */ .oH)(Value).isDisabled;
        break;

      case "password":
        PasswordErrorMsg = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_1__/* .validatePassword */ .uo)(Value).error;
        isDisabledPassword = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_1__/* .validatePassword */ .uo)(Value).isDisabled;
        break;

      default:
        break;
    }

    set_isError(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        EmailErrorMsg: EmailErrorMsg,
        isDisabledEmail: isDisabledEmail,
        passwordErrorMsg: PasswordErrorMsg,
        isDisabledPassword: isDisabledPassword
      });
    });
  };

  const handleSignin = async e => {
    if (!captchaText || Number(captchaText) == Number(random)) {} else {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          EmailErrorMsg: ""
        });
      });
      handleClick();
    }

    e.preventDefault();

    if (!Isinput.email) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          EmailErrorMsg: "Please enter email",
          isDisabledEmail: false
        });
      });
    } else if (!emailRegex.test(Isinput.email)) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          EmailErrorMsg: "Please enter Valid email",
          isDisabledEmail: false
        });
      });
    } else if (!Isinput.password) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          passwordErrorMsg: "Please enter password",
          isDisabledPassword: false
        });
      });
    } else if (!passwordRegex.test(Isinput.password)) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          passwordErrorMsg: "Password must be more than 6 characters with 1 uppercase & 1 number.",
          isDisabledPassword: false
        });
      });
    } //  else if (!captchaText) {
    //   setIsDisabledcaptcha(false);
    //   setCaptchaError("Please enter captcha");
    // }
    else if (!Isinput.captchaValue) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          captchaErrorMsg: "Please check captcha"
        });
      });
    } // else if (!captchaText || Number(captchaText) !== Number(random)) {
    //   setIsDisabledcaptcha(false);
    //   setCaptchaError("Please enter valid captcha");
    // }
    else {
      setLoading(true);
      getGeoInfo();
      const response = await (0,_helpers_service__WEBPACK_IMPORTED_MODULE_2__/* .login_service */ .zX)(Isinput.email, Isinput.password);

      if (response.code == 200 && response.result.role == "businessOwner") {
        var _response$result, _response$result$usrD;

        localStorage.setItem("countryId", JSON.stringify(response.result.usrDetail.selectedCountries));
        localStorage.setItem("profileDetails", response.result.usrDetail.profileDetails);
        localStorage.setItem("visaType", JSON.stringify(response.result.usrDetail.selectedVisaTypes));
        localStorage.setItem("approved", response.result.usrDetail.approved);
        localStorage.setItem("email", response.result.usrDetail.email);
        localStorage.setItem("selectAppointmentMode", response.result.selectAppointmentMode);
         false && (0);
        setLoading(false);
        window.location.href = "/busines/owner/dashboard";
      } else if (response.code == 200 && (response.result.role == "liaAgent" || response.result.role == "manager" || response.result.role == "worker")) {
         false && (0);
        localStorage.setItem("userId", response.result.userDetail._id);
        setLoading(false);

        if (response.result.userDetail.selectCountry == false) {
          window.location.href = "/LIA/workplace";
        } else if (response.result.userDetail.selectVisaType == false) {
          var _response$result$user, _response$result$user2;

          console.log((_response$result$user = response.result.userDetail) === null || _response$result$user === void 0 ? void 0 : _response$result$user.selectedCountries);
          setCountryId((_response$result$user2 = response.result.userDetail) === null || _response$result$user2 === void 0 ? void 0 : _response$result$user2.selectedCountries);
          window.location.href = "/LIA/workplace";
        } else if (response.result.userDetail.selectVisaType == "true") {
          localStorage.setItem("visaType", JSON.stringify(response.result.usrDetail.selectedVisaTypes));
        } else {
          window.location.href = "/LIA/workplace";
        }
      } else {
        var _reference$current;

        setMsg(response.message);
        setLoading(false);
        reference === null || reference === void 0 ? void 0 : (_reference$current = reference.current) === null || _reference$current === void 0 ? void 0 : _reference$current.reset();
      }
    }
  };

  const handleCaptch = value => {
    console.log("Handle Captcha ", value);
    setIsInput(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        captchaValue: value
      });
    });
    setIsDisabled(true);
    set_isError(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        captchaErrorMsg: ""
      });
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("section", {
      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().auth),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "row mx-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_leftBanner__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: "col-md-12 col-lg-6 bg-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().formSection),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h3", {
                className: "pb-3",
                children: "Log In "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: `form-group ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fromGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                    children: ["Email ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().required),
                      children: "*"
                    }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().errorMsg),
                      children: [message, " "]
                    }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().errorMsg),
                      children: !Isinput.email || !emailRegex.test(Isinput.email) ? isError.EmailErrorMsg : ""
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_input_filed__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                    type_name: "email",
                    placeholder_name: "Email",
                    input_name: Isinput.email.toLocaleLowerCase(),
                    onChange: e => {
                      setIsInput(prev => {
                        return _objectSpread(_objectSpread({}, prev), {}, {
                          email: e.target.value
                        });
                      });
                      validForm("email", e.target.value);
                    }
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("img", {
                    src: "/images/email.svg",
                    alt: "email"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: `form-group  ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fromGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                    children: ["Password", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().required),
                      children: ["*", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("small", {
                        className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().errorMsg),
                        children: !Isinput.password || !passwordRegex.test(Isinput.password) ? isError.passwordErrorMsg : ""
                      })]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_input_filed__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                    type_name: "password",
                    placeholder_name: "Password",
                    input_name: Isinput.password,
                    onChange: e => {
                      setIsInput(prev => {
                        return _objectSpread(_objectSpread({}, prev), {}, {
                          password: e.target.value
                        });
                      });
                      validForm("password", e.target.value);
                    }
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("img", {
                    src: "/images/password.svg",
                    alt: "email"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                    className: "w-100 text-right",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().remeber),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_8__.default, {
                        href: _Common_routes__WEBPACK_IMPORTED_MODULE_9__/* .default.Auth.forgot.href */ .Z.Auth.forgot.href,
                        as: _Common_routes__WEBPACK_IMPORTED_MODULE_9__/* .default.Auth.forgot.as */ .Z.Auth.forgot.as,
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
                          children: "Forget Password?"
                        })
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                    className: `form-group ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fromGroup)} ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().captchCodeSec)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
                      children: ["Captcha", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                        className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().errorMsg),
                        children: isError.captchaErrorMsg
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h6", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_ReCaptcha__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                        handleCaptch: handleCaptch,
                        setReference: setReference
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: "d-flex align-items-center justify-content-between mt-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                    className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_12___default().remeber),
                    children: [" ", "Not Registered yet? \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_link__WEBPACK_IMPORTED_MODULE_8__.default, {
                      href: _Common_routes__WEBPACK_IMPORTED_MODULE_9__/* .default.Auth.CompanyVerify.href */ .Z.Auth.CompanyVerify.href,
                      as: _Common_routes__WEBPACK_IMPORTED_MODULE_9__/* .default.Auth.CompanyVerify.as */ .Z.Auth.CompanyVerify.as,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
                        children: "SIGN UP"
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                    className: "d-flex align-items-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
                      type: "submit",
                      onClick: handleSignin,
                      children: [isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
                        className: "fa fa-spinner fa-spin",
                        style: {
                          marginRight: "5px"
                        }
                      }), isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                        children: "WAIT"
                      }), !isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                        children: "SIGN IN"
                      })]
                    })
                  })]
                })]
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;