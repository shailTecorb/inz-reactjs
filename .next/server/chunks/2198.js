"use strict";
exports.id = 2198;
exports.ids = [2198];
exports.modules = {

/***/ 2198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony import */ var _styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3486);
/* harmony import */ var _styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_validation_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5027);
/* harmony import */ var _Common_Modals_link_license_membership__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6908);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2253);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9008);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5183);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_timezone_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3273);
/* harmony import */ var react_timezone_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_timezone_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Common_Modals_success_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8266);
/* harmony import */ var _helpers_api_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7869);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(604);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const AddLiaStaff = () => {
  var _errors$fullName, _errors$licenseNo, _errors$email, _errors$address;

  const {
    0: allRole,
    1: setAllRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: link,
    1: setLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: countryList,
    1: setCountryList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: allAccess,
    1: setAllAccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: activeDays,
    1: setActiveDays
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: suggestion,
    1: setSuggestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: cityList,
    1: setAllCity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: keyData,
    1: setKeyData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fullName: "",
    demoImg: "",
    addBy: "",
    role: "",
    licenseNo: "",
    expiryDate: "",
    joiningDate: "",
    landlineNumber: "",
    landline_country_Code: "",
    phoneNumber: "",
    country_Code: "",
    email: "",
    country: "",
    city: "",
    address: "",
    lat: "",
    long: "",
    startTime: "",
    startTimeMdn: "",
    endTime: "",
    endTimeMdn: "",
    timeZone: "",
    image: ""
  });
  const {
    0: error,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    expiryDate: "",
    joiningDate: "",
    addBy: "",
    startTime: "",
    endTime: "",
    startTimeMdn: "",
    endTimeMdn: "",
    responseMsg: "",
    phoneNo: "",
    country: "",
    city: "",
    allAccess: "",
    activeDays: "",
    timezone: ""
  });
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setError,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();

  const handleChange = async event => {
    event.persist();
    setKeyData(keyData => _objectSpread(_objectSpread({}, keyData), {}, {
      [event.target.name]: event.target.value
    }));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      [event.target.name]: "",
      responseMsg: ""
    }));
    let value = event.target.value;

    if (event.target.name == "address") {
      let payload = {
        input: value,
        location: {
          lat: "28.6508353",
          lng: "77.267595"
        },
        key: _helpers_api_url__WEBPACK_IMPORTED_MODULE_13__/* .Location_key */ .UE,
        radius: '100'
      };

      if (value.length >= 3) {
        let getValue = await (0,_geolocation__WEBPACK_IMPORTED_MODULE_14__/* .placeAutoComplete */ .B9)(payload);
        setSuggestion(getValue);
      } else {
        setSuggestion([]);
      }
    } else if (event.target.name == "country") {
      let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .get_all_cities */ .TL)(value);

      if (response.code == 200) {
        setAllCity(response.result);
      }
    }
  };

  const onClickItem = async item => {
    setSuggestion([]);
    setKeyData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        address: item.description
      });
    });
    let payload = {
      key: _helpers_api_url__WEBPACK_IMPORTED_MODULE_13__/* .Location_key */ .UE,
      place_id: item.place_id
    };
    let getLATLong = await (0,_geolocation__WEBPACK_IMPORTED_MODULE_14__/* .placeDetails */ .FG)(payload);
    setKeyData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        lat: getLATLong.geometry.location.lat,
        long: getLATLong.geometry.location.lng
      });
    });
  };

  let searchingList = suggestion.map((item, index) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("ul", {
      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().searchingList),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("li", {
        style: {
          cursor: "pointer"
        },
        onClick: () => {
          onClickItem(item);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
          children: item === null || item === void 0 ? void 0 : item.description
        })
      })
    });
  });

  const handleRole = e => {
    let index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const optionElementId = optionElement.getAttribute('id');
    setKeyData(_objectSpread(_objectSpread({}, keyData), {}, {
      role: optionElementId,
      addBy: e.target.value
    }));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      addBy: ""
    }));
  };

  const OpenModal = e => {
    e.preventDefault();
    setIsOpen(true);
  };

  const CloseModal = e => {
    next_router__WEBPACK_IMPORTED_MODULE_11___default().push("/busines/owner/lia's");
    setIsOpen(false);
  };

  const handleImageChange = e => {
    setKeyData(_objectSpread(_objectSpread({}, keyData), {}, {
      demoImg: URL.createObjectURL(e.target.files[0]),
      image: e.target.files[0]
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    roleListing();
    GetCountryList();
  }, []);

  const roleListing = async () => {
    let perPage = 10;
    let page = 1;
    let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .businees_owner_role_listing */ .Sn)(perPage, page);

    if (response.code == 200) {
      setAllRole(response.result);
    }
  };

  const GetCountryList = async () => {
    let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .admin_allCountry_list */ .zI)();
    setCountryList(response.result);
  };

  const {
    0: accessRightsList,
    1: setAccessRightsList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    name: "Dashboard",
    id: 11,
    status: false
  }, {
    name: "View Clients",
    id: 12,
    status: false
  }, {
    name: "Reports",
    id: 13,
    status: false
  }, {
    name: "CreateStaff",
    id: 14,
    status: false
  }, {
    name: "Accounts",
    id: 15,
    status: false
  }, {
    name: "Settings",
    id: 16,
    status: false
  }, {
    name: "Client",
    id: 17,
    status: false
  } // { name: "ClientVisa", id: 18, status: false },
  ]);
  const {
    0: allDaysList,
    1: setAllDaysList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    name: "Monday",
    id: 1,
    status: false
  }, {
    name: "Tuesday",
    id: 2,
    status: false
  }, {
    name: "Wednesday",
    id: 3,
    status: false
  }, {
    name: "Thursday",
    id: 4,
    status: false
  }, {
    name: "Friday",
    id: 5,
    status: false
  }, {
    name: "Saturday",
    id: 6,
    status: false
  }, {
    name: "Sunday",
    id: 7,
    status: false
  }]);

  const onCheckAccess = data => {
    let allData = accessRightsList;
    allData.map((item, index) => {
      if (item.id == data.id) {
        item.status = !item.status;
      }
    });
    setAccessRightsList([...allData]);
    let tempdata = accessRightsList === null || accessRightsList === void 0 ? void 0 : accessRightsList.reduce((acc, curr) => {
      if (curr.status) {
        acc.push(curr.name);
      }

      return acc;
    }, []);
    setAllAccess(tempdata); // if (accessRightsList.length == tempdata.length) {
    //     setIsAllAccessChecked(true)
    // } else {
    //     setIsAllAccessChecked(false)
    // }
  };

  const onCheckDays = data => {
    let allData = allDaysList;
    allData.map((item, index) => {
      if (item.id == data.id) {
        item.status = !item.status;
      }
    });
    setAllDaysList([...allData]);
    let tempdata = allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.reduce((acc, curr) => {
      if (curr.status) {
        acc.push(curr.name);
      }

      return acc;
    }, []);
    setActiveDays(tempdata); // if (allDaysList.length == tempdata.length) {
    //     setIsAllDaysChecked(true)
    // } else {
    //     setIsAllDaysChecked(false)
    // }
  };

  const handleLicenseExpiry = licenseExpiry => {
    let name = "expiryDate";
    setKeyData(_objectSpread(_objectSpread({}, keyData), {}, {
      [name]: licenseExpiry
    }));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      expiryDate: ""
    }));
  };

  const handleOnchangeLandline = (phone, country, e, data, value) => {
    let country_code = `+${country.dialCode}`;
    setKeyData(_objectSpread(_objectSpread({}, keyData), {}, {
      landlineNumber: phone,
      landline_country_Code: country_code
    }));
  };

  const handleOnchangePhone = (phone, country) => {
    let country_code = `+${country.dialCode}`;
    setKeyData(_objectSpread(_objectSpread({}, keyData), {}, {
      phoneNumber: phone,
      country_Code: country_code
    }));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      phoneNo: ""
    }));
  };

  const onSubmit = async event => {
    var _keyData$phoneNumber, _keyData$landlineNumb;

    // event.preventDefault();
    let LicensExpiry = moment__WEBPACK_IMPORTED_MODULE_10___default()(keyData.licenseExpiry).format("YYYY/MM/DD");
    let Dob = moment__WEBPACK_IMPORTED_MODULE_10___default()(keyData.dob).format("YYYY/MM/DD");
    let Pnumber = (_keyData$phoneNumber = keyData.phoneNumber) === null || _keyData$phoneNumber === void 0 ? void 0 : _keyData$phoneNumber.substring(keyData.country_Code.length - 1);
    let Lnumber = (_keyData$landlineNumb = keyData.landlineNumber) === null || _keyData$landlineNumb === void 0 ? void 0 : _keyData$landlineNumb.substring(keyData.landline_country_Code.length - 1);
    const formdata = new FormData();
    formdata.append("image", keyData.image);
    formdata.append("fullName", keyData.fullName);
    formdata.append("addBy", "businessOwner");
    formdata.append("role", keyData.role);
    formdata.append("roleId", keyData.addBy);
    formdata.append("expiryDate", keyData.expiryDate);
    formdata.append("licenseNo", keyData.licenseNo);
    formdata.append("phoneNumberCountryCode", keyData.country_Code);
    formdata.append("phoneNumber", Pnumber);
    formdata.append("lineNumberCountryCode", keyData.landline_country_Code);
    formdata.append("landlineNumber", Lnumber);
    formdata.append("email", keyData.email);
    keyData.country && formdata.append("country", keyData.country);
    keyData.country && formdata.append("address", keyData.address);
    formdata.append("activeDays", activeDays);
    formdata.append("startTime", keyData.startTime + " " + keyData.startTimeMdn);
    formdata.append("endTime", keyData.endTime + " " + keyData.endTimeMdn);
    formdata.append("timeZone", keyData.timeZone.value ? keyData.timeZone.value : keyData.timeZone);
    formdata.append("lat", keyData.lat);
    allAccess.length != 0 && formdata.append("acessRight", allAccess);
    link && formdata.append("link", link);
    formdata.append("joiningDate", keyData.joiningDate);
    formdata.append("long", keyData.long);
    formdata.append("city", keyData.city); // formdata.append("region", keyData.region)
    // *******************************************

    if (!keyData.addBy) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        addBy: "Please select role"
      }));
    } else if (!keyData.expiryDate) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        expiryDate: "Please select license expiry date"
      }));
    } else if (!keyData.joiningDate) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        joiningDate: "Please select joining date"
      }));
    } else if (!keyData.phoneNumber || keyData.phoneNumber.length < 10) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        phoneNo: "Please enter valid phone number"
      }));
    } else if (keyData.country == "Select Country" || keyData.country == '') {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        country: "Please select country"
      }));
    } else if (keyData.city == "Select Country" || keyData.city == '') {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        city: "Please select city"
      }));
    } else if (allAccess.length == 0) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        allAccess: "Please select access rights "
      }));
    } else if (activeDays.length == 0) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        activeDays: "Please select active days"
      }));
    } else if (!keyData.timeZone) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        timezone: "Please select timezone"
      }));
    } else if (!keyData.startTime) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        startTime: "Please select start time"
      }));
    } else if (!keyData.startTimeMdn) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        startTimeMdn: "Please select meridiem"
      }));
    } else if (!keyData.endTime) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        endTime: "Please select end time"
      }));
    } else if (!keyData.endTimeMdn) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        endTimeMdn: "Please select end meridiem"
      }));
    } else if (keyData.endTime) {
      // if ((keyData.startTimeMdn == "AM" && keyData.endTimeMdn == "AM") && addData.startTime + addData.startTimeMdn !== "12:00PM" ) {
      //     console.log("keyData",keyData.endTime < keyData.startTime)
      //     if (keyData.endTime <= keyData.startTime) {
      //     console.log("keyData")
      //         setErrors({ ...error, endTime: "Please select valid end time" })
      //     }
      //     else{
      //         setErrors({ ...error, endTime: "" })
      //     }
      // }
      // else if ((keyData.startTime + keyData.startTimeMdn == "12:00PM") && keyData.endTimeMdn !== "PM") {
      //     console.log("keyData")
      //     setErrors({ ...error, endTime: "Please select valid end time" })
      // }
      // else if (keyData.startTimeMdn == "PM" && keyData.endTimeMdn !== "PM") {
      //     console.log("keyData")
      //     setErrors({ ...error, endTime: "Please select valid end time" })
      // }
      // else {
      setIsLoading(true);
      let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .businees_owner_add_staff */ .qS)(formdata);

      if (response.code == 200) {
        setIsLoading(false);
        setOpen(true);
        setMessage("Staff Created Successfully");
      } else {
        setIsLoading(false);
        setErrors(_objectSpread(_objectSpread({}, error), {}, {
          responseMsg: response.message
        }));
        window.scrollTo(0, 0);
      } // }

    }
  };

  const onError = data => {// setIsLoading("");
  };

  let roleList = allRole === null || allRole === void 0 ? void 0 : allRole.map((li, i) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
      id: li.role,
      value: li._id,
      children: li.role === "liaAgent" ? "LIA Agent" : li.role == "manager" ? "Manager" : li.role == "worker" ? "Worker" : li.role
    }, i);
  });

  const closeModal = e => {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_11___default().push("/busines/owner/allStaffList");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().contentWrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: "container-fuild",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: "col-md-9 m-auto",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h3", {
              className: "",
              children: "Add New Staff"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().formArea),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("form", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "col-md-6 px-0",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h4", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("b", {
                        children: "Basic Details"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h4", {
                      className: "text-center",
                      style: {
                        color: "red"
                      },
                      children: [" ", ""]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().NameDetail),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        htmlFor: `photo`,
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("input", {
                          id: `photo`,
                          type: "file",
                          onChange: handleImageChange,
                          style: {
                            display: "none"
                          },
                          accept: ".pdf, .jpeg , .jpg ,.png"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().avatarUpload),
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h5", {
                            children: "  Profile Picture "
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                            className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().avatarPreview),
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                              onChange: handleImageChange,
                              src: keyData.demoImg ? keyData.demoImg : "/images/camera.svg"
                            })
                          })]
                        })]
                      })
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: `col-md-6 ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().staffMemberStatus)}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("h2", {
                      style: {
                        fontSize: "1.5rem",
                        color: "red"
                      },
                      children: error.responseMsg
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  class: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-12 px-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Full Name ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().required),
                          children: "*"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", (_errors$fullName = errors.fullName) === null || _errors$fullName === void 0 ? void 0 : _errors$fullName.message]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                        type_name: "fullName",
                        placeholder_name: "Your Name",
                        inputId: "fullName",
                        input_name: "fullName",
                        value: keyData.fullName.trim(),
                        register: register("fullName", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_3__/* .Register.Name */ .a.Name), {}, {
                          onChange: e => handleChange(e)
                        }))
                      })]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  class: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Role", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", error.addBy]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleRole(e);
                        },
                        value: keyData.addBy,
                        name: "addBy",
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "",
                          children: "Select "
                        }), roleList]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-6 pr-0",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Common_Modals_link_license_membership__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                        open: isOpen,
                        OpenModal: OpenModal,
                        closeModal: CloseModal,
                        link: link,
                        setLink: setLink,
                        style: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default())
                      })
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  class: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: [" Licence/Membership Number", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", (_errors$licenseNo = errors.licenseNo) === null || _errors$licenseNo === void 0 ? void 0 : _errors$licenseNo.message]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                        type_name: "text",
                        name: "licenseNo",
                        input_name: "licenseNo",
                        placeholder_name: " Enter Licence/Membership Number",
                        value: keyData.licenseNo,
                        register: register("licenseNo", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_3__/* .Register.licenseNo */ .a.licenseNo), {}, {
                          onChange: e => handleChange(e)
                        })),
                        maxLength: 9
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pr-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Licence Expiry Date", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", error.expiryDate]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_6___default()), {
                        className: "form-control",
                        name: "expiryDate",
                        selected: keyData.expiryDate ? new Date(keyData.expiryDate) : null,
                        dateFormat: "MM/dd/yyyy",
                        dropdownMode: "scroll",
                        minDate: new Date(),
                        dateFormatCalendar: "MMMM",
                        yearDropdownItemNumber: 15,
                        scrollableYearDropdown: true,
                        onChange: date => handleLicenseExpiry(date),
                        onChangeRaw: e => {
                          e.preventDefault();
                        },
                        autoComplete: "off",
                        value: keyData.expiryDate,
                        showYearDropdown: true
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                        src: "/images/calendar.svg",
                        alt: "email"
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  class: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)} ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroupPhone)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                        children: "Landline Number"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_8___default()), {
                        country: 'in',
                        value: keyData.landlineNumber,
                        name: "landlineNo",
                        placeholder: "Enter Landline Number ",
                        onChange: (phone, country_name, data, value) => {
                          handleOnchangeLandline(phone, country_name, data, value);
                        },
                        disableCountryCode: false,
                        copyNumbersOnly: false,
                        disableCountryGuess: true,
                        countryCodeEditable: false
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pr-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)} ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroupPhone)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Phone Number", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", error.phoneNo]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_8___default()), {
                        country: 'in',
                        value: keyData.phoneNumber,
                        placeholder: "Enter phone number",
                        name: "phoneNo",
                        onChange: (phone, country_name, data, value) => {
                          handleOnchangePhone(phone, country_name, data, value);
                        },
                        disableCountryCode: false,
                        copyNumbersOnly: false,
                        disableCountryGuess: true,
                        countryCodeEditable: false
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  class: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Date of Joining", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", error.joiningDate]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_6___default()), {
                        className: "form-control",
                        name: "joiningDate",
                        selected: keyData.joiningDate ? new Date(keyData.joiningDate) : null,
                        dateFormat: "MM/dd/yyyy",
                        dropdownMode: "scroll",
                        minDate: new Date(),
                        dateFormatCalendar: "MMMM",
                        yearDropdownItemNumber: 15,
                        scrollableYearDropdown: true,
                        onChange: date => {
                          setKeyData(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              joiningDate: date
                            });
                          });
                          setErrors(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              joiningDate: ""
                            });
                          });
                        },
                        onChangeRaw: e => {
                          e.preventDefault();
                        },
                        autoComplete: "off",
                        value: keyData.joiningDate,
                        showYearDropdown: true
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pr-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Email", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message]
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                        type_name: "text",
                        name: "email",
                        input_name: "email",
                        placeholder_name: "Email Address",
                        value: keyData.email,
                        register: register("email", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_3__/* .Register.Email */ .a.Email), {}, {
                          onChange: e => handleChange(e)
                        }))
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  class: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h4", {
                    className: "col-md-12 pl-0",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("b", {
                      children: " Office Address "
                    }), " "]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Country", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", error.country]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleChange(e);
                        },
                        value: keyData.country,
                        name: "country",
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: null,
                          children: " Select Country "
                        }), countryList === null || countryList === void 0 ? void 0 : countryList.map((li, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: li === null || li === void 0 ? void 0 : li._id,
                          children: li === null || li === void 0 ? void 0 : li.countryName
                        }, index))]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-6 pr-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["City", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", error.city]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleChange(e);
                        },
                        value: keyData.city,
                        name: "city",
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          children: " Select City"
                        }), cityList === null || cityList === void 0 ? void 0 : cityList.map(data => data === null || data === void 0 ? void 0 : data.map((li, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: li._id,
                          children: li.cityName
                        }, index)))]
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  className: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-12 pr-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                        children: ["Address", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", (_errors$address = errors.address) === null || _errors$address === void 0 ? void 0 : _errors$address.message]
                        }), " "]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                        type_name: "text",
                        name: "address",
                        input_name: "address",
                        placeholder_name: "Enter Address",
                        value: keyData.address.trim(),
                        register: register("address", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_3__/* .Register.Address */ .a.Address), {}, {
                          onChange: e => handleChange(e)
                        }))
                      }), searchingList]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    class: "row",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      className: "col-md-12 px-0",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                        className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h6", {
                          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("b", {
                            children: " Access Rights"
                          })]
                        }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                          children: [" ", allAccess.length == 0 ? error.allAccess : ""]
                        })]
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    class: "row",
                    children: accessRightsList === null || accessRightsList === void 0 ? void 0 : accessRightsList.map((li, i) => {
                      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                        className: "col-md-3 px-1",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                          className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                            className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().CheckBox),
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("input", {
                              id: li.id,
                              checked: li.status ? li.name : "",
                              onChange: () => {
                                onCheckAccess(li);
                              },
                              name: li.name,
                              type: "checkbox"
                            }, i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("label", {
                              for: li.id,
                              className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().checkboxLabel),
                              style: {
                                color: "#0c101a"
                              },
                              children: [li.name, " "]
                            })]
                          })
                        })
                      });
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  class: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-12 px-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("h6", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("b", {
                          children: " Active Days "
                        }), " "]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                        children: [" ", activeDays.length == 0 ? error.activeDays : ""]
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                  class: "row",
                  children: allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.map((li, i) => {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                      className: "col-md-3 px-1",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                        className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().CheckBox),
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("input", {
                            id: li.id,
                            checked: li.status ? li.name : "",
                            onChange: () => {
                              onCheckDays(li);
                            },
                            name: li.name,
                            type: "checkbox"
                          }, i), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                            for: li.id,
                            className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().checkboxLabel),
                            style: {
                              color: "#0c101a"
                            },
                            children: li.name
                          })]
                        })
                      })
                    });
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  class: "row mt-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-2 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                        children: "Starting From"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleChange(e);
                          setErrors(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              endTime: "",
                              startTime: "",
                              startTimeMdn: "",
                              endTimeMdn: ""
                            });
                          });
                        },
                        name: "startTime",
                        value: keyData.startTime,
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "",
                          children: "Start Time"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "01:00",
                          children: "01:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "02:00",
                          children: "02:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "03:00",
                          children: "03:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "04:00",
                          children: "04:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "05:00",
                          children: "05:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "06:00",
                          children: "06:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "07:00",
                          children: "07:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "08:00",
                          children: "08:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "09:00",
                          children: "09:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "10:00",
                          children: "10:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "11:00",
                          children: "11:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "11:59",
                          children: "12:00"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                        children: [" ", error.startTime]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-2 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                        style: {
                          height: "16px"
                        },
                        children: " "
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleChange(e);
                          setErrors(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              endTime: "",
                              startTime: "",
                              startTimeMdn: "",
                              endTimeMdn: ""
                            });
                          });
                        },
                        name: "startTimeMdn",
                        value: keyData.startTimeMdn,
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "",
                          children: "Select"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "AM",
                          children: "AM"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "PM",
                          children: "PM"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                        children: [" ", error.startTimeMdn]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                        children: "Till"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleChange(e);
                          setErrors(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              endTime: "",
                              startTime: "",
                              startTimeMdn: "",
                              endTimeMdn: ""
                            });
                          });
                        },
                        name: "endTime",
                        value: keyData.endTime,
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "",
                          children: "End Time"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "01:00",
                          children: "01:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "02:00",
                          children: "02:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "03:00",
                          children: "03:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "04:00",
                          children: "04:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "05:00",
                          children: "05:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "06:00",
                          children: "06:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "07:00",
                          children: "07:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "08:00",
                          children: "08:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "09:00",
                          children: "09:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "10:00",
                          children: "10:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "11:00",
                          children: "11:00"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "11:59",
                          children: "11:59"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                        children: [" ", error.endTime]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-2 pl-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                        style: {
                          height: "16px"
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("select", {
                        class: "form-control",
                        onChange: e => {
                          handleChange(e);
                          setErrors(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              endTime: "",
                              startTime: "",
                              startTimeMdn: "",
                              endTimeMdn: ""
                            });
                          });
                        },
                        name: "endTimeMdn",
                        value: keyData.endTimeMdn,
                        size: "0",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "",
                          children: "Select"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "AM",
                          children: "AM"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("option", {
                          value: "PM",
                          children: "PM"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                        children: [" ", !keyData.endTimeMdn ? error.endTimeMdn : ""]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().fromGroup)}`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("label", {
                        children: "Timezone"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((react_timezone_select__WEBPACK_IMPORTED_MODULE_9___default()), {
                        name: "timezone",
                        value: keyData.timeZone,
                        onChange: val => {
                          setKeyData(prev => {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                              timeZone: val
                            });
                          });
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().errorMsg),
                        children: [" ", !keyData.timeZone ? error.timezone : ""]
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: "col-md-3"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                    className: `col-md-9 ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().ButtonGroup)}`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                        className: "col-md-4"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                        className: "col-md-4",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
                          onClick: () => {
                            route.push("/busines/owner/dashboard");
                          },
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().SaveBtn),
                          children: "Cancel"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
                        className: "col-md-4 pr-0",
                        children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("button", {
                          disabled: true,
                          type: "submit",
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().SandBtn),
                          children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
                            children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("i", {
                              class: "fa fa-refresh fa-spin"
                            }), "  Loading "]
                          }), "  "]
                        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
                          type: "submit",
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_16___default().SandBtn),
                          onClick: handleSubmit(onSubmit, onError),
                          children: "Save "
                        })
                      })]
                    })
                  })]
                })]
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_Common_Modals_success_modal__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
      open: open,
      message: message,
      closeModal: closeModal
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddLiaStaff);

/***/ })

};
;