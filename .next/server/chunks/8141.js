"use strict";
exports.id = 8141;
exports.ids = [8141];
exports.modules = {

/***/ 8141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3486);
/* harmony import */ var _styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2253);
/* harmony import */ var _Common_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9199);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_timezone_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3273);
/* harmony import */ var react_timezone_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_timezone_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Common_Modals_link_license_membership__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6908);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5183);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4878);
/* harmony import */ var _Common_validation_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5027);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _helpers_api_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7869);
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(604);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const EditLiaStaff = () => {
  var _errors$fullName, _errors$licenseNo, _errors$email, _errors$address;

  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    StaffId,
    type
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_12__/* .IdContext */ .B);
  const {
    0: countryList,
    1: setCountryList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  const {
    0: cityList,
    1: setAllCity
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: addData,
    1: setAddData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    fullName: "",
    email: "",
    addBy: "",
    role: "",
    licenseNo: "",
    expiryDate: "",
    landlineNumber: "",
    landline_country_Code: "+1",
    phoneNumber: "",
    country_Code: "",
    gender: "",
    country: "",
    city: "",
    address: "",
    lat: "",
    long: "",
    dob: "",
    joiningDate: "",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    startTime: "",
    startTimeMdn: "",
    endTime: "",
    endTimeMdn: ""
  });
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setError,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_14__.useForm)();
  const {
    0: error,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    role: "businessOwner",
    roleId: "",
    membershipNumber: "",
    licenseExpiry: "",
    gender: "",
    country: "",
    address: "",
    dob: "",
    timezone: "",
    startTime: "",
    startTimeMdn: "",
    endTime: "",
    endTimeMdn: "",
    joiningDate: ""
  }); // ***************************************

  const {
    0: allRole,
    1: setAllRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: link,
    1: setLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    0: demoImg,
    1: setImageDomo
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    0: isAllDaysChecked,
    1: setIsAllDaysChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isAllAccessChecked,
    1: setIsAllAccessChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isAllSelected,
    1: setIsAllSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    0: isAllSelectedDay,
    1: setIsAllSelectedDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    0: activeDays,
    1: setActiveDays
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: allAccess,
    1: setAllAccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: getAllActiveDays,
    1: setGetAllActiveDays
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: getAllActiveAccess,
    1: setGetAllActiveAccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: suggestion,
    1: setSuggestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: allDaysList,
    1: setAllDaysList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
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
  const {
    0: accessRightsList,
    1: setAccessRightsList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
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

  const updateState = data => setAddData(state => _objectSpread(_objectSpread({}, state), data)); // view staff 


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    edit_staff();
  }, [StaffId]);

  const edit_staff = async () => {
    const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .business_owner_view_staff */ .iZ)(StaffId);

    if (response.code == 200) {
      var _response$result, _response$result2, _response$result3, _response$result4, _response$result5, _response$result6, _response$result7, _response$result8, _response$result9, _response$result10, _response$result11;

      let licenseExpiryDate = moment__WEBPACK_IMPORTED_MODULE_7___default()(response === null || response === void 0 ? void 0 : (_response$result = response.result) === null || _response$result === void 0 ? void 0 : _response$result.expiryDate).format("L");
      let joiningDate = new Date(response === null || response === void 0 ? void 0 : (_response$result2 = response.result) === null || _response$result2 === void 0 ? void 0 : _response$result2.joiningDate);
      let strTime = response.result.startTime;
      let EndTime = response.result.endTime;
      let time = strTime === null || strTime === void 0 ? void 0 : strTime.replace('AM', '');
      let Etime = EndTime === null || EndTime === void 0 ? void 0 : EndTime.replace('AM', '');
      let StrMdn = strTime === null || strTime === void 0 ? void 0 : strTime.slice(strTime.length - 2, strTime.length);
      let EndMdn = EndTime === null || EndTime === void 0 ? void 0 : EndTime.slice(strTime.length - 2, strTime.length);
      setAddData(state => {
        var _response$result$loc, _response$result$loc2;

        return _objectSpread(_objectSpread(_objectSpread({}, state), response === null || response === void 0 ? void 0 : response.result), {}, {
          expiryDate: licenseExpiryDate,
          startTime: time === null || time === void 0 ? void 0 : time.replace('PM', ''),
          addBy: response.result.roleId._id,
          startTimeMdn: StrMdn,
          endTime: Etime === null || Etime === void 0 ? void 0 : Etime.replace('PM', ''),
          endTimeMdn: EndMdn,
          role: response.result.roleId.role,
          phoneNumber: String(response.result.phoneNumberCountryCode) + String(response.result.phoneNumber),
          landlineNumber: String(response.result.lineNumberCountryCode) + String(response.result.landlineNumber),
          country_Code: response.result.phoneNumberCountryCode,
          lat: (_response$result$loc = response.result.loc) === null || _response$result$loc === void 0 ? void 0 : _response$result$loc.coordinates[0],
          long: (_response$result$loc2 = response.result.loc) === null || _response$result$loc2 === void 0 ? void 0 : _response$result$loc2.coordinates[1] // joiningDate:joiningDate ? joiningDate: null

        });
      });
      setImageDomo((_response$result3 = response.result) === null || _response$result3 === void 0 ? void 0 : _response$result3.image);
      setGetAllActiveAccess((_response$result4 = response.result) === null || _response$result4 === void 0 ? void 0 : _response$result4.acessRight);
      setGetAllActiveDays((_response$result5 = response.result) === null || _response$result5 === void 0 ? void 0 : _response$result5.activeDays);
      let getData = accessRightsList;
      let getAccessRights = (_response$result6 = response.result) === null || _response$result6 === void 0 ? void 0 : _response$result6.acessRight;
      getData.map(accessData => {
        getAccessRights === null || getAccessRights === void 0 ? void 0 : getAccessRights.map(newData => {
          if (accessData.name == newData) {
            accessData.status = true;
          }
        });
      });
      setValue('fullName', response === null || response === void 0 ? void 0 : (_response$result7 = response.result) === null || _response$result7 === void 0 ? void 0 : _response$result7.fullName);
      setValue('licenseNo', response === null || response === void 0 ? void 0 : (_response$result8 = response.result) === null || _response$result8 === void 0 ? void 0 : _response$result8.licenseNo);
      setValue('email', response === null || response === void 0 ? void 0 : (_response$result9 = response.result) === null || _response$result9 === void 0 ? void 0 : _response$result9.email);
      setValue('address', response === null || response === void 0 ? void 0 : (_response$result10 = response.result) === null || _response$result10 === void 0 ? void 0 : _response$result10.address);
      allCity(response.result.country);
      setAccessRightsList([...getData]);

      if (accessRightsList.length == getAccessRights.length) {
        setIsAllAccessChecked(true);
      }

      let AllDays = allDaysList;
      let getAllDays = (_response$result11 = response.result) === null || _response$result11 === void 0 ? void 0 : _response$result11.activeDays;
      AllDays.map(accessData => {
        getAllDays === null || getAllDays === void 0 ? void 0 : getAllDays.map(newData => {
          if (accessData.name == newData) {
            accessData.status = true;
          }
        });
      });
      setAllDaysList([...AllDays]); // if (allDaysList.length == getAllDays.length) {
      //     setIsAllDaysChecked(true)
      // }
    } else if (response.code == 400) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/busines/owner/allStaffList");
    }
  };

  const OpenModal = e => {
    e.preventDefault();
    setIsOpen(true);
  };

  const CloseModal = e => {
    // e.preventDefault();
    setIsOpen(false);
  };

  const handleOnchangePhone = (phone, country) => {
    let country_code = `+${country.dialCode}`;
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      phoneNumber: phone,
      country_Code: country_code
    }));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      phoneNo: ""
    }));
  };

  const handleOnchangeLandline = (phone, country, e, data, value) => {
    let name = "phoneNo";
    let country_code = `+${country.dialCode}`;
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      landlineNumber: phone,
      landline_country_Code: country_code
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    GetCountryList();
    getGeoInfo();
  }, []);

  const GetCountryList = async () => {
    let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .admin_allCountry_list */ .zI)();
    setCountryList(response.result);
  };

  const handleChange = async event => {
    const {
      name,
      value
    } = event.target;
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      [name]: value
    }), validForm(name, value));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      [name]: ""
    }));

    if (event.target.name == "address") {
      let payload = {
        input: value,
        location: {
          lat: "28.6508353",
          lng: "77.267595"
        },
        key: _helpers_api_url__WEBPACK_IMPORTED_MODULE_15__/* .Location_key */ .UE,
        radius: '100'
      };

      if (value.length >= 3) {
        let getValue = await (0,_geolocation__WEBPACK_IMPORTED_MODULE_16__/* .placeAutoComplete */ .B9)(payload);
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

  const allCity = async country => {
    let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .get_all_cities */ .TL)(country);

    if (response.code == 200) {
      setAllCity(response.result);
    }
  };

  const handleImageChange = e => {
    setImageDomo(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const onClickItem = async item => {
    setSuggestion([]);
    setAddData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        address: item.description
      });
    });
    let payload = {
      key: _helpers_api_url__WEBPACK_IMPORTED_MODULE_15__/* .Location_key */ .UE,
      place_id: item.place_id
    };
    let getLATLong = await (0,_geolocation__WEBPACK_IMPORTED_MODULE_16__/* .placeDetails */ .FG)(payload);
    setAddData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        lat: getLATLong.geometry.location.lat,
        long: getLATLong.geometry.location.lng
      });
    });
  };

  let searchingList = suggestion.map((item, index) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("ul", {
      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().searchingList),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
        style: {
          cursor: "pointer"
        },
        onClick: () => {
          onClickItem(item);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          children: item === null || item === void 0 ? void 0 : item.description
        })
      })
    });
  });

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
    setActiveDays(tempdata);

    if (allDaysList.length == tempdata.length) {
      setIsAllDaysChecked(true);
    } else {
      setIsAllDaysChecked(false);
    }
  }; //:::::::::::::::::::::::; access rights////////////////////////// 


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
    setAllAccess(tempdata);

    if (accessRightsList.length == tempdata.length) {
      setIsAllAccessChecked(true);
    } else {
      setIsAllAccessChecked(false);
    }
  }; //:::::::::::::::::::::::::::::::::::::::::::::::::::::select all days //////////////////////////////


  const onCheckSelectAllDays = e => {
    setIsAllSelectedDay(!isAllSelectedDay);
    let allData = allDaysList;
    allData.map((item, index) => {
      item.status = isAllSelectedDay;
    });
    setIsAllDaysChecked(isAllSelectedDay);
    setAllDaysList([...allData]);
    let tempdata = allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.reduce((acc, curr) => {
      if (curr.status) {
        acc.push(curr.name);
      }

      return acc;
    }, []);
    setActiveDays(tempdata);
  }; ////////////////////////////////////////////////////////////////////////////////////////


  const onCheckSelectAllAccess = e => {
    setIsAllSelected(!isAllSelected);
    let allData = accessRightsList;
    allData.map((item, index) => {
      item.status = isAllSelected;
    });
    setIsAllAccessChecked(isAllSelected);
    setAccessRightsList([...allData]);
    let tempdata = accessRightsList === null || accessRightsList === void 0 ? void 0 : accessRightsList.reduce((acc, curr) => {
      if (curr.status) {
        acc.push(curr.name);
      }

      return acc;
    }, []);
    setAllAccess(tempdata);
  };

  const validForm = (fieldName, Value) => {
    let FullNameErrorMsg = isError.fullNameErrorMsg;
    let isDisabledFullName = isError.isDisabledfullName;
    let EmailErrorMsg = isError.EmailErrorMsg;
    let isDisableEmail = isError.isDisabledEmail;

    switch (fieldName) {
      case "fullName":
        FullNameErrorMsg = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_6__/* .validateName */ .Ol)(Value).error;
        isDisabledFullName = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_6__/* .validateName */ .Ol)(Value).isDisabled;
        break;

      case "email":
        EmailErrorMsg = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_6__/* .validateEmail */ .oH)(Value).error;
        isDisableEmail = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_6__/* .validateEmail */ .oH)(Value).isDisabled;
        break;

      default:
        break;
    }

    set_isError(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        fullNameErrorMsg: FullNameErrorMsg,
        isDisabledfullName: isDisabledFullName,
        EmailErrorMsg: EmailErrorMsg,
        isDisabledEmail: isDisableEmail
      });
    });
  };

  const {
    0: isError,
    1: set_isError
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    fullNameErrorMsg: "",
    EmailErrorMsg: "",
    //  imageErrorMsg: "",
    roleIdError: "",
    membershipNumberErrMsg: "",
    licenseExpiryErrMsg: "",
    landlineNoErrMsg: "",
    phoneNoErrMsg: "",
    genderErrMsg: "",
    countryErrMsg: "",
    addressErrMsg: "",
    activedayErrMsg: "",
    dobErrMsg: "",
    isDisabledfullName: false,
    isDisabledEmail: false,
    isDisableroleId: false,
    isDisablemembershipNumber: false,
    isDisablelicenseExpiry: false,
    isDisablelandlineNo: false,
    isDisablephoneNo: false,
    isDisablegender: false,
    isDisablecountry: false,
    isDisableaddress: false,
    isDisableactiveday: false,
    isDisabletimezone: false,
    isDisabledob: false
  });

  const handleSave = async get => {
    var _phone_number, _addData$landline_cou, _phoneL_number;

    let count = addData.country_Code.length;
    let phone_number = addData.phoneNumber;
    phone_number = (_phone_number = phone_number) === null || _phone_number === void 0 ? void 0 : _phone_number.substring(count);
    let allDays = allDaysList.filter(data => data.status).map(item => item.name);
    let accessRight = accessRightsList.filter(data => data.status).map(item => item.name);
    let countL = (_addData$landline_cou = addData.landline_country_Code) === null || _addData$landline_cou === void 0 ? void 0 : _addData$landline_cou.length;
    let phoneL_number = addData.landlineNumber;
    phoneL_number = (_phoneL_number = phoneL_number) === null || _phoneL_number === void 0 ? void 0 : _phoneL_number.substring(countL);
    let LicensExpiry = moment__WEBPACK_IMPORTED_MODULE_7___default()(addData.expiryDate).format("YYYY/MM/DD");
    const formdata = new FormData();
    formdata.append("staffId", StaffId);
    formdata.append("image", image);
    formdata.append("fullName", addData.fullName);
    formdata.append("addBy", "businessOwner");
    formdata.append("role", addData.role);
    formdata.append("roleId", addData.addBy);
    formdata.append("expiryDate", LicensExpiry);
    formdata.append("licenseNo", addData.licenseNo);
    formdata.append("phoneNumberCountryCode", addData.country_Code);
    formdata.append("phoneNumber", phone_number);
    formdata.append("lineNumberCountryCode", addData.landline_country_Code);
    formdata.append("landlineNumber", addData.landlineNumber == '91null' ? 0 : phoneL_number);
    formdata.append("email", addData.email);
    formdata.append("country", addData.country);
    formdata.append("address", addData.address);
    formdata.append("activeDays", allDays);
    formdata.append("startTime", addData.startTime + " " + addData.startTimeMdn);
    formdata.append("endTime", addData.endTime + " " + addData.endTimeMdn);
    formdata.append("timeZone", addData.timeZone.value ? addData.timeZone.value : addData.timeZone);
    formdata.append("acessRight", accessRight);
    formdata.append("link", link);
    formdata.append("joiningDate", addData.joiningDate);
    formdata.append("lat", addData.lat);
    formdata.append("long", addData.long); // // *******************************************

    const phoneReg = /^[0-9\b]+$/;

    if (!addData.addBy) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        roleId: "Please select role"
      }));
    } else if (!addData.expiryDate) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        licenseExpiry: "Please select license expiry date"
      }));
    } else if (!addData.phoneNumber || addData.phoneNumber.length < 10) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        phoneNo: "Please enter valid phone number"
      }));
    } else if (!addData.joiningDate) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        joiningDate: "Please select joining date"
      }));
    } else if (addData.role != "liaAgent" && (addData.country == "Select Country" || addData.country == '')) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        country: "Please select country"
      }));
    } else if (addData.role == "liaAgent" && accessRight.length == 0) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        allAccess: "Please select access rights "
      }));
    } else if (!activeDays) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        activeDay: "Please select active days"
      }));
    } else if (!addData.timeZone) {
      setErrors(_objectSpread(_objectSpread({}, error), {}, {
        timezone: "Please select timezone"
      }));
    } else if (addData.endTime) {
      // if ((addData.startTimeMdn == "AM" && addData.endTimeMdn == "AM") && addData.startTime + addData.startTimeMdn !== "12:00PM") {
      //     console.log("hit")
      //     if (addData.endTime < addData.startTime) {
      //     console.log("hit")
      //         setErrors({ ...error, endTime: "Please select valid end time" })
      //     }
      // }else if ((addData.startTime + addData.startTimeMdn == "12:00PM") && addData.endTimeMdn !== "PM") {
      //     setErrors({ ...error, endTime: "Please select valid end time" })
      // }
      // else if (addData.startTimeMdn == "PM" && addData.endTimeMdn !== "PM") {
      //     setErrors({ ...error, endTime: "Please select valid end time" })
      // }
      // else {
      let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .businees_owner_update_staff */ .x_)(formdata);

      if (response.code == 200) {
        if (type == "lia") {
          route.push("/busines/owner/lia's");
        } else {
          route.push("/busines/owner/allStaffList");
        }
      } else {
        setErrorMsg(response.message);
      } // }

    }
  };

  const handleCancel = () => {
    if (type == "lia") {
      route.push("/busines/owner/lia's");
    } else {
      route.push("/busines/owner/allStaffList");
    }
  };

  const getGeoInfo = () => {
    axios__WEBPACK_IMPORTED_MODULE_8___default().get('https://ipapi.co/json/').then(response => {
      let data = response.data;
      setAddData(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          countryCode: data.country_code
        });
      });
      undefined.setState({
        countryName: data.country_code,
        countryCode: data.country_calling_code
      });
    }).catch(error => {// //consolee.log(error);
    });
  };

  const handleLicenseExpiry = licenseExpiry => {
    let name = "licenseExpiry";
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      [name]: licenseExpiry
    }));
  };

  const handleDob = dob => {
    let name = "dob";
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      [name]: dob
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    roleListing();
  }, []);

  const roleListing = async () => {
    let perPage = 10;
    let page = 1;
    let response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_5__/* .businees_owner_role_listing */ .Sn)(perPage, page);

    if (response.code == 200) {
      setAllRole(response.result); // var roleList = response.result
    }
  };

  const handleRole = e => {
    let index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const optionElementId = optionElement.getAttribute('id');
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      role: optionElementId,
      addBy: e.target.value
    }));
    setErrors(_objectSpread(_objectSpread({}, error), {}, {
      addBy: ""
    }));
  };

  let roleList = allRole === null || allRole === void 0 ? void 0 : allRole.map((li, i) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
      id: li.role,
      value: li._id,
      children: li.role === "liaAgent" ? "LIA Agent" : li.role == "manager" ? "Manager" : li.role == "worker" ? "Worker" : li.role
    }, i);
  });

  const onError = () => {
    setAllAccess("");
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
    className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().contentWrapper),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "container-fuild",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "col-md-9 m-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h3", {
            className: "",
            children: "Edit LIA"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().formArea),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "col-md-6",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h4", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("b", {
                      children: "Basic Details"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h4", {
                    className: "text-center",
                    style: {
                      color: "red"
                    },
                    children: [" ", errorMsg]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                    className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().NameDetail),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      htmlFor: `photo`,
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                        id: `photo`,
                        type: "file",
                        onChange: handleImageChange,
                        style: {
                          display: "none"
                        },
                        accept: ".pdf, .jpeg , .jpg ,.png"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().avatarUpload),
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h5", {
                          children: "  Profile Picture "
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().avatarPreview),
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
                            onChange: handleImageChange,
                            src: demoImg ? demoImg : "/images/camera.svg"
                          })
                        })]
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: `col-md-6 ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().staffMemberStatus)}`
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                class: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Full Name ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().required),
                        children: "*"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", (_errors$fullName = errors.fullName) === null || _errors$fullName === void 0 ? void 0 : _errors$fullName.message]
                      })]
                    }), console.log(addData.fullName), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "fullName",
                      placeholder_name: "Your Name",
                      inputId: "fullName",
                      input_name: "fullName",
                      value: addData.fullName.trim(),
                      register: register("fullName", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_13__/* .Register.Name */ .a.Name), {}, {
                        onChange: e => handleChange(e)
                      }))
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-5",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Role", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", !addData.addBy ? error.roleId : ""]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
                      class: "form-control",
                      onChange: e => {
                        handleRole(e);
                      },
                      value: addData.addBy,
                      name: "addBy",
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "",
                        children: "Select "
                      }), roleList]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-6",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Common_Modals_link_license_membership__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                      open: isOpen,
                      OpenModal: OpenModal,
                      closeModal: CloseModal,
                      link: link,
                      setLink: setLink,
                      style: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default())
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: [" Licence/Membership Number", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", (_errors$licenseNo = errors.licenseNo) === null || _errors$licenseNo === void 0 ? void 0 : _errors$licenseNo.message]
                      }), console.log(errors.licenseNo)]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      name: "licenseNo",
                      input_name: "licenseNo",
                      placeholder_name: " Enter Licence/Membership Number",
                      value: addData.licenseNo,
                      register: register("licenseNo", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_13__/* .Register.licenseNo */ .a.licenseNo), {}, {
                        onChange: e => handleChange(e)
                      })),
                      maxLength: 9
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["License Expiry Date", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", !addData.licenseExpiry ? error.licenseExpiry : ""]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
                      className: "form-control",
                      name: "expiryDate",
                      selected: addData.expiryDate ? new Date(addData.expiryDate) : null,
                      dateFormat: "MM/dd/yyyy",
                      dropdownMode: "scroll",
                      minDate: new Date(),
                      dateFormatCalendar: "MMMM",
                      yearDropdownItemNumber: 15,
                      scrollableYearDropdown: true,
                      onChange: date => handleLicenseExpiry(date),
                      autoComplete: "off",
                      value: addData.expiryDate
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("img", {
                      src: "/images/calendar.svg",
                      alt: "email"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)} ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroupPhone)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                      children: "Landline Number"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_11___default()), {
                      country: 'in',
                      value: addData.landlineNumber,
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
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)} ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroupPhone)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Phone Number", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", !addData.phoneNo ? error.phoneNo : ""]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_11___default()), {
                      country: 'in',
                      value: addData.phoneNumber,
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Date of Joining", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", error.joiningDate]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
                      className: "form-control",
                      name: "joiningDate",
                      selected: addData.joiningDate ? new Date(addData.joiningDate) : null,
                      dateFormat: "MM/dd/yyyy",
                      dropdownMode: "scroll",
                      minDate: new Date(),
                      dateFormatCalendar: "MMMM",
                      yearDropdownItemNumber: 15,
                      scrollableYearDropdown: true,
                      onChange: date => {
                        setAddData(prev => {
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
                      value: addData.joiningDate,
                      showYearDropdown: true
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Email", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      name: "email",
                      input_name: "email",
                      placeholder_name: "Email Address",
                      value: addData.email,
                      register: register("email", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_13__/* .Register.Email */ .a.Email), {}, {
                        onChange: e => handleChange(e)
                      }))
                    })]
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h6", {
                children: " Office Address "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Country", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", !addData.country ? error.country : ""]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
                      class: "form-control",
                      onChange: e => {
                        handleChange(e);
                      },
                      value: addData.country,
                      name: "country",
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: null,
                        children: " Select Country "
                      }), countryList === null || countryList === void 0 ? void 0 : countryList.map((li, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: li === null || li === void 0 ? void 0 : li._id,
                        children: li === null || li === void 0 ? void 0 : li.countryName
                      }, index))]
                    })]
                  })
                }), console.log(addData.city), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["City", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", error.city]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
                      class: "form-control",
                      onChange: e => {
                        setAddData(prev => {
                          return _objectSpread(_objectSpread({}, prev), {}, {
                            city: e.target.value
                          });
                        });
                      },
                      value: addData.city,
                      name: "city",
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "",
                        children: addData.city ? addData.city : "Select City"
                      }), cityList === null || cityList === void 0 ? void 0 : cityList.map(data => data === null || data === void 0 ? void 0 : data.map((li, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: li._id,
                        children: li.cityName
                      }, index)))]
                    })]
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      children: ["Address", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", (_errors$address = errors.address) === null || _errors$address === void 0 ? void 0 : _errors$address.message]
                      }), " "]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      name: "address",
                      input_name: "address",
                      placeholder_name: "Enter Address",
                      value: addData.address.trim(),
                      register: register("address", _objectSpread(_objectSpread({}, _Common_validation_index__WEBPACK_IMPORTED_MODULE_13__/* .Register.Address */ .a.Address), {}, {
                        onChange: e => handleChange(e)
                      }))
                    }), searchingList]
                  })
                })
              }), addData.role == "liaAgent" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  class: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                    className: "col-md-3 px-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                        children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("b", {
                          children: " Access Rights"
                        })]
                      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                        children: [" ", allAccess.length == 0 ? error.allAccess : ""]
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  class: "row",
                  children: accessRightsList === null || accessRightsList === void 0 ? void 0 : accessRightsList.map((li, i) => {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                      className: "col-md-3 px-1",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                        className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().CheckBox),
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                            id: li.id,
                            checked: li.status ? li.name : "",
                            onChange: () => {
                              onCheckAccess(li);
                            },
                            name: li.name,
                            type: "checkbox"
                          }, i), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                            for: li.id,
                            className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().checkboxLabel),
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
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                class: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-3 px-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("h6", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("b", {
                        children: " Active Days "
                      }), " "]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                      children: [" ", activeDays.length == 0 ? error.activeDays : ""]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                class: "row",
                children: allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.map((li, i) => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                    className: "col-md-3 px-1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().CheckBox),
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("input", {
                          id: li.id,
                          checked: li.status ? li.name : "",
                          onChange: () => {
                            onCheckDays(li);
                          },
                          name: li.name,
                          type: "checkbox"
                        }, i), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                          for: li.id,
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().checkboxLabel),
                          style: {
                            color: "#0c101a"
                          },
                          children: li.name
                        })]
                      })
                    })
                  });
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                class: "row mt-2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-2 pl-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                      style: {
                        height: "16px"
                      },
                      children: "Starting From"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
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
                      value: addData.startTime,
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        children: addData.startTime
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "01:00",
                        children: "01:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "02:00",
                        children: "02:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "03:00",
                        children: "03:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "04:00",
                        children: "04:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "05:00",
                        children: "05:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "06:00",
                        children: "06:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "07:00",
                        children: "07:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "08:00",
                        children: "08:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "09:00",
                        children: "09:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "10:00",
                        children: "10:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "11:00",
                        children: "11:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "11:59",
                        children: "12:00"
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-2 pl-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                      style: {
                        height: "16px"
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
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
                      value: addData.startTimeMdn,
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        children: addData.startTimeMdn ? addData.startTimeMdn : "Select"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "AM",
                        children: "AM"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "PM",
                        children: "PM"
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-2 pl-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                      style: {
                        height: "16px"
                      },
                      children: "Till"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
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
                      value: addData.endTime,
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        children: addData.endTime
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "01:00",
                        children: "01:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "02:00",
                        children: "02:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "03:00",
                        children: "03:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "04:00",
                        children: "04:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "05:00",
                        children: "05:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "06:00",
                        children: "06:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "07:00",
                        children: "07:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "08:00",
                        children: "08:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "09:00",
                        children: "09:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "10:00",
                        children: "10:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "11:00",
                        children: "11:00"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "11:59",
                        children: "12:00"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
                      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().errorMsg),
                      children: [" ", error.endTime]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-2 pl-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                      style: {
                        height: "16px"
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("select", {
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
                      value: addData.endTimeMdn,
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        children: "Select"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "AM",
                        children: "AM"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("option", {
                        value: "PM",
                        children: "PM"
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("label", {
                      children: "Timezone"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((react_timezone_select__WEBPACK_IMPORTED_MODULE_9___default()), {
                      name: "timezone",
                      value: addData.timeZone //onChange={setSelectedTimezone}
                      ,
                      onChange: val => {
                        setAddData(prev => {
                          return _objectSpread(_objectSpread({}, prev), {}, {
                            timeZone: val
                          });
                        });
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: "col-md-3"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                  className: `col-md-9 ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().ButtonGroup)}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "row",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                      className: "col-md-4"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                      className: "col-md-4",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
                        onClick: e => {
                          handleCancel(e, false);
                        },
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().SaveBtn),
                        children: "Cancel"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
                      className: "col-md-4",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("button", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_18___default().SandBtn),
                        onClick: handleSubmit(() => handleSave("save"), onError),
                        children: "Update "
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
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditLiaStaff);

/***/ })

};
;