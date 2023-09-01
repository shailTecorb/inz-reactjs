"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/Common/routes/index.js
var routes = __webpack_require__(2827);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/MyContext/IdDetailsContext.js
var IdDetailsContext = __webpack_require__(4878);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./styles/customeModal.module.scss
var customeModal_module = __webpack_require__(3686);
var customeModal_module_default = /*#__PURE__*/__webpack_require__.n(customeModal_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Common/Modals/signUpModal.jsx







const SignUpModal = ({
  open,
  setOpen,
  style,
  closeModal
}) => {
  const router = (0,router_.useRouter)();

  const handleChange = e => {
    e.preventDefault();
    localStorage.profileStatus == "true";
    localStorage.setItem("profileStatus", "false");
    router.push("/busines/owner/setup");
    setOpen(false);
  };

  const handleNotNow = () => {
    localStorage.setItem("profileStatus", "false");
    setOpen(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_modal_default()), {
      className: `${(customeModal_module_default()).customeModal} ${(customeModal_module_default()).customeAccountModal}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: (customeModal_module_default()).modalHeader,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "col-10"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (customeModal_module_default()).genrateLink,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(customeModal_module_default()).genrateLinkSec} text-center`,
          children: /*#__PURE__*/jsx_runtime_.jsx("form", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "row",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                class: "col-13 text-center mb-2",
                children: [" ", "Your profile is incomplete. Please complete your profile now.", " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                class: "col-12 text-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: handleNotNow,
                  className: (customeModal_module_default()).sendBtn,
                  style: {
                    float: "unset"
                  },
                  children: "Not Now"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: e => {
                    handleChange(e);
                  },
                  className: (customeModal_module_default()).sendBtn,
                  style: {
                    float: "unset"
                  },
                  children: "Yes"
                })]
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const signUpModal = (SignUpModal);
// EXTERNAL MODULE: ./components/Header/index.jsx
var Header = __webpack_require__(3431);
// EXTERNAL MODULE: ./components/Header/Owner_Sidenavbar.jsx + 2 modules
var Owner_Sidenavbar = __webpack_require__(4865);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)( false ? 0 : false);
  const {
    0: role,
    1: setRole
  } = (0,external_react_.useState)("");
  let router = (0,router_.useRouter)().pathname;
  (0,external_react_.useEffect)(() => {
    const ClearFunc = () => {
      router === routes/* default.Auth.signup.as */.Z.Auth.signup.as || router === routes/* default.Auth.login.as */.Z.Auth.login.as || router === routes/* default.Auth.forgot.as */.Z.Auth.forgot.as || router === routes/* default.Auth.otp.as */.Z.Auth.otp.as || router == "/LIA/PassWordSetForLia/PasswordSetLia" || router === routes/* default.Auth.CompanyVerify.href */.Z.Auth.CompanyVerify.href ? document.getElementById("overlay").className = "landingBackground" : "";
    };

    ClearFunc();
  }, [routes/* default */.Z]);
  (0,external_react_.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(IdDetailsContext/* IdProvider */.v, {
      children: [router === routes/* default.Auth.signup.as */.Z.Auth.signup.as || router === routes/* default.Auth.login.as */.Z.Auth.login.as || router === routes/* default.Auth.forgot.as */.Z.Auth.forgot.as || router === routes/* default.Auth.otp.as */.Z.Auth.otp.as || router === routes/* default.Auth.SetPassword.as */.Z.Auth.SetPassword.as || router === routes/* default.Lia.Selected_Country.as */.Z.Lia.Selected_Country.as || router === routes/* default.Lia.Selected_Visa.as */.Z.Lia.Selected_Visa.as || router === routes/* default.Lia.Appointment_mode.as */.Z.Lia.Appointment_mode.as || router === routes/* default.Lia.workingHours.as */.Z.Lia.workingHours.as || router === routes/* default.Auth.LIA_setPassword.as */.Z.Auth.LIA_setPassword.as || router === routes/* default.Auth.forgotPassword.as */.Z.Auth.forgotPassword.as || router === routes/* default.Auth.liaSetup.as */.Z.Auth.liaSetup.as || router === routes/* default.Auth.liaWorkplace.as */.Z.Auth.liaWorkplace.as || router === routes/* default.Auth.CompanyVerify.href */.Z.Auth.CompanyVerify.href ? "" : role == "liaAgent" || role == "manager" ? /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}) : /*#__PURE__*/jsx_runtime_.jsx(Owner_Sidenavbar/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    }), routes/* default.Auth.SignUpForm.href */.Z.Auth.SignUpForm.href == router || router == "/LIA/PassWordSetForLia/PasswordSetLia" ? "" : open && /*#__PURE__*/jsx_runtime_.jsx(signUpModal, {
      open: open,
      setOpen: setOpen
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 324:
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9997:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7069:
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,7869,2253,2827,5764,4878,7018,4865,3431,3686], () => (__webpack_exec__(2003)));
module.exports = __webpack_exports__;

})();