exports.id = 6581;
exports.ids = [6581];
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

/***/ 5739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4118);
/* harmony import */ var _styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Common_input_filed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony import */ var _Common_leftBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8903);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2253);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4878);
/* harmony import */ var _Common_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2827);
/* harmony import */ var _Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3728);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var _Common_ReCaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6608);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Common_validation_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5027);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const SignUp = () => {
  var _errors$NZBNumber, _errors$companyName, _errors$email, _errors$password;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: keyData,
    1: setKeyData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    NZBNumber: "",
    companyName: "",
    email: "",
    password: "",
    captcha: ""
  });
  const {
    0: getErrors,
    1: setGetErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: captchaError,
    1: setCaptchaError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: reference,
    1: setReference
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setError,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)();
  const {
    setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_5__/* .IdContext */ .B);
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("NZBN or ABN");
  const {
    0: decryptedData,
    1: setDecryptedData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    0: fieldDisabled,
    1: setFieldDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    NZBNStatus: false,
    CompanyNameStatus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _router$query;

    if ((_router$query = router.query) !== null && _router$query !== void 0 && _router$query.verified) {
      let verifiedData = router.query.verified;
      let decryptedData = (0,_Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__/* .decryptJs */ .zP)(verifiedData);

      if (decryptedData) {
        let decodedData = (0,_Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__/* .jwtDecode */ .oO)(decryptedData);
        console.log("Decoded data, ", decodedData);
        setDecryptedData(decodedData);
        setKeyData(prev => {
          return _objectSpread(_objectSpread({}, prev), {}, {
            companyName: decodedData.company,
            NZBNumber: decodedData.number,
            email: decodedData.email
          });
        });
        setValue("companyName", decodedData.company);
        setValue("NZBNumber", decodedData.number);
        setValue("email", decodedData.email);
        setName(decodedData === null || decodedData === void 0 ? void 0 : decodedData.type);

        if (decodedData.company !== "") {
          setFieldDisabled(prev => {
            return _objectSpread(_objectSpread({}, prev), {}, {
              CompanyNameStatus: true
            });
          });
        }

        if (decodedData.number !== "") {
          setFieldDisabled(prev => {
            return _objectSpread(_objectSpread({}, prev), {}, {
              NZBNStatus: true
            });
          });
        }
      } else {
        router.replace(_Common_routes__WEBPACK_IMPORTED_MODULE_6__/* .default.Auth.CompanyVerify.href */ .Z.Auth.CompanyVerify.href);
      }
    } else {
      router.replace(_Common_routes__WEBPACK_IMPORTED_MODULE_6__/* .default.Auth.CompanyVerify.href */ .Z.Auth.CompanyVerify.href);
    } // setRandom(Math.floor(100000 + Math.random() * 900000))

  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!localStorage.token) {} else if (localStorage.token && localStorage.approved == "true") {
      router.replace("/busines/owner/dashboard");
    } else if (localStorage.token && localStorage.approved == "false") {
      router.replace("/busines/owner/visa/selectCountry");
    }
  }, []);

  const handleChange = async event => {
    event.persist();
    setKeyData(keyData => _objectSpread(_objectSpread({}, keyData), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const handleEdit = () => {
    console.log("________DecryptedData________", decryptedData);
    let encoded = (0,_Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__/* .jwtEncode */ .U_)(decryptedData);
    let encrypted = (0,_Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__/* .encryptJS */ .P0)(encoded);
    console.log("----------", encrypted); // setIsDisabled(false);
    // setVerifyStatus(false);

    router.push(`${_Common_routes__WEBPACK_IMPORTED_MODULE_6__/* .default.Auth.CompanyVerify.href */ .Z.Auth.CompanyVerify.href}?verified=${encrypted}`);
  };

  const handleCaptch = value => {
    console.log("Handle Captcha ", reference);
    setKeyData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        captcha: value
      });
    });
    setCaptchaError("");
  };

  const onSubmit = async data => {
    if (keyData.captcha) {
      setIsLoading(true);
      const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_3__/* .business_owner_signup */ .zX)(keyData);

      if (response.code == 200) {
        setEmail(keyData.email);
        let encoded = (0,_Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__/* .jwtEncode */ .U_)(keyData.email);
        let encrypted = (0,_Common_encryptDecrypt__WEBPACK_IMPORTED_MODULE_7__/* .encryptJS */ .P0)(encoded);
        router.replace(`/auth/OptVerification?verified=${encrypted}`);
        setIsLoading(false);
      } else if (response.code == 400) {
        var _reference$current;

        reference === null || reference === void 0 ? void 0 : (_reference$current = reference.current) === null || _reference$current === void 0 ? void 0 : _reference$current.reset();
        setGetErrors(response.message);
        setIsLoading(false);
      } else {
        var _reference$current2;

        reference === null || reference === void 0 ? void 0 : (_reference$current2 = reference.current) === null || _reference$current2 === void 0 ? void 0 : _reference$current2.reset();
        setGetErrors(response.message);
        setIsLoading(false);
      }
    } else {
      console.log("Key Data", keyData);
      setCaptchaError("Please check captcha");
    }
  };

  const onError = data => {// setNZBNStatus("");
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("section", {
      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().auth),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().container),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "row mx-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Common_leftBanner__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
            className: "col-md-12 col-lg-6 bg-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().formSection),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h3", {
                className: "pb-3",
                children: "Sign Up"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("h2", {
                className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().userExist),
                children: [getErrors, " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: `form-group ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fromGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                    children: [name || "NZBN or ABN", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().required),
                      children: "*"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                      children: (_errors$NZBNumber = errors.NZBNumber) === null || _errors$NZBNumber === void 0 ? void 0 : _errors$NZBNumber.message
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                    type_name: "text",
                    placeholder_name: "NZBN or ABN",
                    inputId: "",
                    input_name: "NZBNumber",
                    class_name: "loading",
                    value: keyData.NZBNumber,
                    maxLength: "13",
                    disabled: fieldDisabled.NZBNStatus,
                    register: register("NZBNumber", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_11__/* .Register.NZBN_Number */ .a.NZBN_Number), {}, {
                      onChange: e => handleChange(e)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
                    onClick: () => handleEdit(),
                    type: "button",
                    className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().edit),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("i", {
                      className: "fa fa-pencil-square-o",
                      "aria-hidden": "true"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: `form-group ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fromGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                    children: ["Company Name ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().required),
                      children: "*"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("small", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                      children: (_errors$companyName = errors.companyName) === null || _errors$companyName === void 0 ? void 0 : _errors$companyName.message
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                    type_name: "companyName",
                    placeholder_name: "Company Name",
                    inputId: "companyName",
                    input_name: "companyName",
                    value: keyData.companyName,
                    disabled: fieldDisabled.CompanyNameStatus,
                    register: register("companyName", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_11__/* .Register.CompanyName */ .a.CompanyName), {}, {
                      onChange: e => handleChange(e)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("img", {
                    src: "/images/password.svg",
                    alt: "password"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: `form-group ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fromGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                    children: ["Email ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().required),
                      children: "*"
                    }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                      children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                    type_name: "email",
                    placeholder_name: "Email",
                    inputId: "email",
                    input_name: "email",
                    value: keyData.email.toLocaleLowerCase(),
                    register: register("email", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_11__/* .Register.Email */ .a.Email), {}, {
                      onChange: e => handleChange(e)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("img", {
                    src: "/images/email.svg",
                    alt: "email"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: `form-group ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fromGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                    children: ["Password ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().required),
                      children: "*"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("small", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                      children: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                    type_name: "password",
                    placeholder_name: "Password",
                    inputId: "password",
                    input_name: "password",
                    value: keyData.password,
                    register: register("password", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_11__/* .Register.Password */ .a.Password), {}, {
                      onChange: e => handleChange(e)
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("img", {
                    src: "/images/password.svg",
                    alt: "password"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: `form-group col-12 pl-0 ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fromGroup)} ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().captchCodeSec)} mb-2`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                    children: ["Captcha", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                      className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().errorMsg),
                      children: captchaError
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h6", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Common_ReCaptcha__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                      handleCaptch: handleCaptch,
                      setReference: setReference
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                  className: `form-group col-12 pl-0 ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fromGroup)} ${(_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().captchCodeSec)} mb-2`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("p", {
                    className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().info),
                    children: ["By Clicking sign up ,I you agree to the T&Cs of Immitech and its polices.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {}), " Click on the hyperlink to review"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: "d-flex align-items-center justify-content-between mt-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                    className: (_styles_auth_module_scss__WEBPACK_IMPORTED_MODULE_13___default().remeber),
                    children: [" ", "Already Account? \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(next_link__WEBPACK_IMPORTED_MODULE_8__.default, {
                      href: _Common_routes__WEBPACK_IMPORTED_MODULE_6__/* .default.Auth.login.href */ .Z.Auth.login.href,
                      as: _Common_routes__WEBPACK_IMPORTED_MODULE_6__/* .default.Auth.login.as */ .Z.Auth.login.as,
                      replace: true,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("a", {
                        children: "SIGN IN"
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                    className: "d-flex align-items-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("button", {
                      type: "submit",
                      onClick: handleSubmit(onSubmit, onError),
                      children: [isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("i", {
                        className: "fa fa-spinner fa-spin",
                        style: {
                          marginRight: "5px"
                        }
                      }), isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                        children: "Wait"
                      }), !isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                        children: "Sign Up"
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;