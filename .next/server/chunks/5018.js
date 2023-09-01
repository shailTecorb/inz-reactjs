exports.id = 5018;
exports.ids = [5018];
exports.modules = {

/***/ 6908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const LinkLicenseMembership = ({
  open,
  closeModal,
  OpenModal,
  setLink,
  link,
  style
}) => {
  const {
    0: linkErr,
    1: setErr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const handleChange = e => {
    let linkValidation = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if (!linkValidation.test(e.target.value)) {
      setErr("Please Enter Valid Link");
    } else {
      setLink(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (link) {
      closeModal();
    } else {}
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          style: {
            cursor: "pointer",
            color: "#00a2ff",
            display: "block",
            marginTop: "40px"
          },
          onClick: OpenModal,
          children: link ? link : "Link your Licence/Membership"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          onClick: OpenModal,
          children: link ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            style: {
              cursor: "pointer",
              color: "#00ed97"
            },
            children: "  Edit"
          }) : ""
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeAccountModal)}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modalHeader),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            class: "col-10",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
              children: "Link your License/Membership"
            }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
              style: {
                color: "red"
              }
            })]
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
          className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().genrateLinkSec)} text-center`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              class: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                class: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeFormGroup)}`,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                    children: "Link your License/Membership"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                    type_name: "text",
                    placeholder_name: "link",
                    inputId: "link",
                    input_name: "link",
                    onChange: handleChange // onChange={(e) => {setLink(e.target.value)}}
                    ,
                    value: link,
                    maxLength: 35
                  })]
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              class: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                class: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  onClick: handleSubmit,
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sendBtn),
                  style: {
                    float: "unset"
                  },
                  children: "Done"
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkLicenseMembership);

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;