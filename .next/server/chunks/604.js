"use strict";
exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B9": () => (/* binding */ placeAutoComplete),
/* harmony export */   "_U": () => (/* binding */ placeDetail),
/* harmony export */   "FG": () => (/* binding */ placeDetails)
/* harmony export */ });
/* unused harmony exports place_details_api, getAddressFromLatLong, geoCode, getGeocodeAddress */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function placeAutoComplete(payload) {
  // &components=country:CA
  if (true) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${payload.input}&key=${payload.key}&radius=${payload.radius}` // `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${payload.input}&key=${payload.key}&radius=${payload.radius}&location=${payload.location.lat+","+ payload.location.lng}`
    ).then(response => {
      // console.log('Auto Complete Response', response.data.predictions)
      return response.data.predictions;
    }).catch(error => {
      console.log("error", error);
      return error.response;
    });
  } else {}
}
function placeDetail(payload) {
  if (true) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${payload.key}&placeid=${payload.place_id}`).then(result => {
      return result;
    }, error => {
      console.log('error', error);

      if (error.status !== 500) {// Alerts.showAlert(error.data.message, false)
      } else {// Alerts.showAlert('Oops! something went wrong')
      }

      return error;
    });
  } else {}
} // **************** HERE WE GET LAT LONG BASED ON PLACE ID ; WHICH IS SELECTED BY USER*****************************************************************

const place_details_api = payload => {
  return Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${payload.place_id}&key=${payload.key}`).then(function (response) {
    return response;
  }).catch(function (error) {
    return error.response;
  });
}; //********************************************************************************************************************** */

function placeDetails(payload) {
  if (true) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${payload.key}&placeid=${payload.place_id}`).then(result => {
      return result.data.result;
    }, error => {
      console.log('error', error);

      if (error.status !== 500) {// Alerts.showAlert(error.data.message, false)
      } else {// Alerts.showAlert('Oops! something went wrong')
      }

      return error;
    });
  } else {}
}
function getAddressFromLatLong(payload) {
  // console.log("Payload of get address ", payload)
  // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
  if (true) {
    return Axios.get(`https://frozen-tundra-07943.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=${payload.lat},${payload.lng}&key=${payload.key}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(result => {
      return result.data.results[0];
    }, error => {
      console.log('error', error);

      if (error.status !== 500) {// Alerts.showAlert(error.data.message, false)
      } else {// Alerts.showAlert('Oops! something went wrong')
      }

      return error;
    });
  } else {}
}
function geoCode(payload) {
  if (true) {
    console.log("payload : " + JSON.stringify(payload));
    console.log("api name : " + JSON.stringify(Constants.API.GeoCode));
    return Axios.get('json', payload, Constants.API.GeoCode).then(result => {
      // console.log('result', result)
      return result;
    }, error => {
      console.log('error', error);

      if (error.status !== 500) {// Alerts.showAlert(error.data.message, false)
      } else {// Alerts.showAlert('Oops! something went wrong')
      }

      return error;
    });
  } else {}
}
function getGeocodeAddress(payload) {
  if (true) {
    return Axios.post(Constants.API.GetGeocodeAddress, payload).then(result => {
      // console.log('result', result)
      return result;
    }, error => {
      console.log('error', error);

      if (error.status !== 500) {// Alerts.showAlert(error.data.message, false)
      } else {// Alerts.showAlert('Oops! something went wrong')
      }

      return error;
    });
  } else {}
}

/***/ })

};
;