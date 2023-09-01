"use strict";
exports.id = 7583;
exports.ids = [7583];
exports.modules = {

/***/ 7583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const AdminApprovedBW = ({
  open
}) => {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const BusinessOwnerLogout = async e => {
    e.preventDefault();
    const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__/* .business_owner_logout */ .Vg)();

    if (response.code == 200) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().customeAccountModal)}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalHeader),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          class: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            class: "col-10"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().genrateLink),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().genrateLinkSec)} text-center`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              class: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                class: "col-13 text-center mb-2",
                children: "Thank you for registration. Administrator will approve your account then you can login to continue."
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                class: "col-12 text-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                  onClick: BusinessOwnerLogout,
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sendBtn),
                  style: {
                    float: "unset"
                  },
                  children: "OK"
                })
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminApprovedBW);

/***/ })

};
;