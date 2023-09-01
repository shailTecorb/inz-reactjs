"use strict";
exports.id = 4878;
exports.ids = [4878];
exports.modules = {

/***/ 4878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ IdContext),
/* harmony export */   "v": () => (/* binding */ IdProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const IdContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

const IdProvider = props => {
  const {
    0: contryId,
    1: setCountryId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: visaId,
    1: setVisaId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: Useremail,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: StaffId,
    1: setStaffId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: type,
    1: setTpe
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: UserName,
    1: setname
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: "",
    phone: "",
    country: "",
    state: "",
    street: "",
    houseNo: ""
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IdContext.Provider, {
    value: {
      contryId,
      setCountryId,
      visaId,
      setVisaId,
      Useremail,
      setEmail,
      StaffId,
      setStaffId,
      type,
      setTpe,
      UserName,
      setname,
      data,
      setData
    },
    children: props.children
  });
};



/***/ })

};
;