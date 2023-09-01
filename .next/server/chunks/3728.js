"use strict";
exports.id = 3728;
exports.ids = [3728];
exports.modules = {

/***/ 3728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P0": () => (/* binding */ encryptJS),
/* harmony export */   "zP": () => (/* binding */ decryptJs),
/* harmony export */   "U_": () => (/* binding */ jwtEncode),
/* harmony export */   "oO": () => (/* binding */ jwtDecode)
/* harmony export */ });
/* harmony import */ var crypto_js_aes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(749);
/* harmony import */ var crypto_js_aes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_aes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_encode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2391);
/* harmony import */ var jwt_encode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_encode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6420);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
 // npm i crypto-js




const secret = 'INZLiveBO';
const encryptJS = dataString => {
  if (!isNaN(dataString)) dataString = dataString.toString();
  var result;

  try {
    result = crypto_js_aes__WEBPACK_IMPORTED_MODULE_0___default().encrypt(dataString, 'INZLiveBO').toString().replace('+', 'aFaFa').replace('+', 'aFaFa').replace('+', 'aFaFa').replace('/', 'bFbFb').replace('=', 'cFcFc').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('+', 'aFaFa').replace('+', 'aFaFa').replace('+', 'aFaFa'); // console.log("Encrypted Done");
  } catch {
    result = false;
  }

  return result;
};
const decryptJs = dataString => {
  console.log("DataString", dataString);
  var plaintext;

  try {
    var str = dataString.toString().replace('aFaFa', '+').replace('aFaFa', '+').replace('aFaFa', '+').replace('bFbFb', '/').replace('cFcFc', '=').replace('bFbFb', '/').replace('bFbFb', '/').replace('bFbFb', '/').replace('bFbFb', '/').replace('bFbFb', '/').replace('aFaFa', '+').replace('aFaFa', '+').replace('aFaFa', '+');
    var bytes = crypto_js_aes__WEBPACK_IMPORTED_MODULE_0___default().decrypt(str, 'INZLiveBO');
    var plaintext = bytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8)); // console.log("Decryption Done");
  } catch {
    plaintext = false; // try {
    //     useRouter().replace("/Error_404")
    // } catch {
    //     plaintext = false;
    // }
  }

  return plaintext;
};
const jwtEncode = data => {
  const jwt = jwt_encode__WEBPACK_IMPORTED_MODULE_2___default()(data, secret);
  console.log(jwt);
  return jwt;
};
const jwtDecode = token => {
  var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
  console.log(decoded);
  return decoded;
};

/***/ })

};
;