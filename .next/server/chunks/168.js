"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Select */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const InputFiled = ({
  placeholder_name,
  type_name,
  class_name,
  readOnly,
  input_name,
  onChange,
  value,
  maxLength,
  onKeyPress,
  disabled,
  register
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", _objectSpread({
      type: type_name,
      placeholder: placeholder_name,
      onChange: onChange,
      value: value,
      name: input_name,
      maxLength: maxLength,
      autoComplete: "off",
      "aria-describedby": "emailHelp ",
      className: class_name || "",
      onKeyPress: onKeyPress,
      disabled: disabled,
      readOnly: readOnly
    }, register))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputFiled);
function Select({
  register,
  options,
  name,
  onChange,
  id
}) {
  return /*#__PURE__*/_jsx("select", _objectSpread(_objectSpread({}, register), {}, {
    onChange: onChange,
    name: name,
    id: id,
    children: options.map(value => /*#__PURE__*/_jsx("option", {
      value: value,
      children: value
    }, value))
  }));
}

/***/ })

};
;