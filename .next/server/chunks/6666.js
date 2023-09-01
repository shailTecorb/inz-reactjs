"use strict";
exports.id = 6666;
exports.ids = [6666];
exports.modules = {

/***/ 6666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const AddVisaType = ({
  isModalOpen,
  setIsModalOpen,
  style
}) => {
  const {
    0: allSelectedCountry,
    1: setAllSelectedCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: countryId,
    1: setCountryData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: msg,
    1: setMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getCountryList();
  }, []);

  const onChangeCountry = e => {
    setCountryData(e.target.value);
  }; //************************************ getting country list whose select status is true **************************************************************** */


  const getCountryList = async () => {
    const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__/* .businesOwnerCountryList */ .OL)();

    if (response.code == 200) {
      var _response$result;

      let newArr = (_response$result = response.result) === null || _response$result === void 0 ? void 0 : _response$result.countries;
      const newcountry = newArr.filter(item => item.select);
      setAllSelectedCountry(newcountry);
    }
  }; //************************************ on submit function  ******************************************************* */


  const handleSubmit = async e => {
    e.preventDefault();

    if (!countryId || countryId == "select" || !title || !status || status == "select") {
      setMsg("Please fill all data ");
    } else {
      setMsg("");
      let data = {
        countryId: countryId,
        visaType: title,
        isActive: status
      };
      const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__/* .business_add_visa_type_by_modal */ .I8)(data);

      if (response.code == 200) {
        console.log(response, "response");
        setCountryData("");
        setTitle("");
        setStatus(true);
        setIsModalOpen(false);
        window.location.reload();
      } else {
        setMsg("this visa type already exist ");
      }
    }
  };

  let CountryList = allSelectedCountry === null || allSelectedCountry === void 0 ? void 0 : allSelectedCountry.map((item, i) => {
    var _item$countryId, _item$countryId2;

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
      value: item === null || item === void 0 ? void 0 : (_item$countryId = item.countryId) === null || _item$countryId === void 0 ? void 0 : _item$countryId._id,
      children: item === null || item === void 0 ? void 0 : (_item$countryId2 = item.countryId) === null || _item$countryId2 === void 0 ? void 0 : _item$countryId2.countryName
    }, i);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
      onClick: () => {
        setIsModalOpen(true);
      },
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SandBtn)} mt-0 mb-0`,
      children: "Add Visa Type"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeMoneyModal)}  ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeAccountModal)}`,
      isOpen: isModalOpen,
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
              children: "Add Visa Type"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
              style: {
                color: "red",
                textAlign: "center"
              },
              children: msg
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            class: "col-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              style: {
                cursor: "pointer"
              },
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeBtn),
              onClick: () => {
                setIsModalOpen(false);
              },
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "Visa For"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                class: "form-control",
                name: "country",
                size: "0",
                value: countryId,
                onChange: e => {
                  onChangeCountry(e);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: "select",
                  children: "Select Country "
                }), CountryList]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "Visa Title"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "text",
                id: "title",
                name: "title",
                value: title,
                onChange: e => {
                  setTitle(e.target.value);
                },
                placeholder: "Visa Type",
                className: `form-control ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().stepbarInput)}`
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                children: "Status"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                class: "form-control",
                name: "maritalStatus",
                size: "0",
                value: status,
                onChange: e => {
                  setStatus(e.target.value);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: true,
                  children: " Active "
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: false,
                  children: "Deactive"
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              class: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                class: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  onClick: handleSubmit,
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sendBtn),
                  children: "Submit"
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddVisaType);

/***/ })

};
;