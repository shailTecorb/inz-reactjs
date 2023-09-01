"use strict";
exports.id = 1645;
exports.ids = [1645];
exports.modules = {

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_client_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3833);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const GenrateLink = ({
  clientId,
  link,
  open,
  openModal,
  closeModal,
  email,
  fname,
  lname
}) => {
  const {
    0: secondaryEmail,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const sendGenrateLink = async e => {
    const genrate_link_response = await (0,_helpers_client_services__WEBPACK_IMPORTED_MODULE_2__/* .send_link_client_service */ .rB)(email, secondaryEmail);
    console.log(genrate_link_response);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [clientId ? "" : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
      onClick: openModal,
      className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SaveBtn),
      children: "Generate Link"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeMoneyModal)}  ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeAccountModal)}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalHeader),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            class: "col-10",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
              children: "Genrate Link"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            class: "col-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeBtn),
              onClick: closeModal,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                src: "/images/popupcross.svg"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {})]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().genrateLink),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().genrateLinkSec),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
              children: "Share with client over email or copy link"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userDetail),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                children: fname + " " + lname
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                children: email
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "Add secondary email ID"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                id: "contact",
                name: "secondaryEmail",
                placeholder: "Plase enter secondary email",
                value: secondaryEmail,
                onChange: e => {
                  setEmail(e.target.value);
                },
                className: `form-control ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().stepbarInput)}`
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              class: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                class: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  onClick: e => {
                    e.preventDefault();
                    sendGenrateLink();
                  },
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sendBtn),
                  children: "Send"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
              children: " Copy & send link "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              class: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                readOnly: true,
                id: "exampleInputfirst_name1",
                name: "task_title",
                class: "form-control ",
                value: link,
                style: {
                  paddingRight: "85px"
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().CopyLinkBtn) // onClick={() => { onClickCopy() }}
                ,
                children: "Copy"
              })]
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenrateLink);

/***/ })

};
;