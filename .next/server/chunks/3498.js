exports.id = 3498;
exports.ids = [3498];
exports.modules = {

/***/ 3498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3486);
/* harmony import */ var _styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5994);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9199);
/* harmony import */ var _helpers_api_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7869);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5592);
/* harmony import */ var react_country_region_selector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_country_region_selector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_timezone_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3273);
/* harmony import */ var react_timezone_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_timezone_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4878);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2253);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














 //import DateDetails from "../Common/dateFormate";




const AddLiaStaff = () => {
  const {
    email
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_10__/* .IdContext */ .B);
  const id = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)().query.id;
  const {
    0: addData,
    1: setAddData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    fullName: "",
    email: "",
    role: "supervisor",
    membershipNumber: "",
    licenseExpiry: "",
    landlineNo: "",
    phoneNo: "",
    gender: "",
    country: "",
    address: "",
    activeday: "",
    timezone: ""
  }); // ***************************************

  const {
    0: startTime,
    1: setStartTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date());
  const {
    0: endDate,
    1: setEndDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date());
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const {
    0: activeDays,
    1: setActiveDays
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: isAllDaysChecked,
    1: setIsAllDaysChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: isAllSelectedDay,
    1: setIsAllSelectedDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    0: checkBox,
    1: setCheckBox
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  });
  const {
    0: allDaysList,
    1: setAllDaysList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    name: "Monday",
    id: 0,
    status: false
  }, {
    name: "Tuesday",
    id: 1,
    status: false
  }, {
    name: "Wednesday",
    id: 2,
    status: false
  }, {
    name: "Thursday",
    id: 3,
    status: false
  }, {
    name: "Friday",
    id: 4,
    status: false
  }, {
    name: "Saturday",
    id: 5,
    status: false
  }, {
    name: "Sunday",
    id: 6,
    status: false
  }]);
  const {
    0: accessRightsList,
    1: setAccessRightsList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    name: "Client",
    id: 11,
    status: false
  }, {
    name: "ViewClients",
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
    name: "Dashboard",
    id: 17,
    status: false
  }, {
    name: "ClientVisa",
    id: 18,
    status: false
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    get_staff_data();
  }, [id]);

  const get_staff_data = async () => {
    const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_11__/* .get_staff_data_services */ .T7)(id);

    if (response.code == 200) {
      var _response$result;

      let licenseExpiryDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(response === null || response === void 0 ? void 0 : (_response$result = response.result) === null || _response$result === void 0 ? void 0 : _response$result.expiryDate).format("L");
      setAddData(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          fullName: response.result.fullName,
          email: response.result.email,
          role: response.result.role,
          licenseExpiry: licenseExpiryDate,
          phoneNo: response.result.phoneNumber,
          activeday: response.result.activeDays
        });
      }); // let newWeek = response.result.activeDays.map((item,index)=>{
      //     return({ })
      // })

      setAllDaysList(prev => {
        return [...prev.map(itm => {
          return _objectSpread(_objectSpread({}, itm), {}, {
            status: response.result.activeDays.includes(itm.name) ? true : false
          });
        })];
      });
    }

    console.log(response.result.activeDays);
  };

  console.log(allDaysList, "allDaysList");
  const {
    0: isError,
    1: set_isError
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    fullNameErrorMsg: "",
    EmailErrorMsg: "",
    isDisabledfullName: false,
    isDisabledEmail: false
  });

  const handleChange = event => {
    const {
      name,
      value
    } = event.target;
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      [name]: value
    }), validForm(name, value));
  };

  const handleImageChange = e => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const validForm = (fieldName, Value) => {
    let FullNameErrorMsg = isError.fullNameErrorMsg;
    let isDisabledFullName = isError.isDisabledfullName;
    let EmailErrorMsg = isError.EmailErrorMsg;
    let isDisableEmail = isError.isDisabledEmail;

    switch (fieldName) {
      case "fullName":
        FullNameErrorMsg = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_4__/* .validateName */ .Ol)(Value).error;
        isDisabledFullName = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_4__/* .validateName */ .Ol)(Value).isDisabled;
        break;

      case "email":
        EmailErrorMsg = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_4__/* .validateEmail */ .oH)(Value).error;
        isDisableEmail = (0,_Common_validation__WEBPACK_IMPORTED_MODULE_4__/* .validateEmail */ .oH)(Value).isDisabled;
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

  const handleSave = async event => {
    event.preventDefault(); // ****** Push activeday's **********

    let checkArray = [];

    for (var key in checkBox) {
      console.log(checkBox[key]);

      if (checkBox[key] === true) {
        checkArray.push(key);
      }

      console.log(checkArray, "checkArray");
    }

    let checkData = {
      checkbox: checkArray.toString()
    };
    console.log(checkBox); //"****************"

    const formdata = new FormData(); // formdata.append("image", image)

    formdata.append("image", image);
    formdata.append("fullName", addData.fullName);
    formdata.append("addBy", "businessOwner");
    formdata.append("role", addData.role);
    formdata.append("expiryDate", addData.licenseExpiry);
    formdata.append("membershipNumber", addData.membershipNumber);
    formdata.append("phoneNumber", addData.phoneNo);
    formdata.append("landlineNumber", addData.landlineNo);
    formdata.append("email", addData.email);
    formdata.append("country", addData.country);
    formdata.append("gender", addData.gender);
    formdata.append("address", addData.address);
    formdata.append("activeday", addData.activeday);
    formdata.append("startDate", startTime);
    formdata.append("endDate", endDate);
    formdata.append("timezone", addData.timezone.value); // formdata.append("draftPage2", addData)
    // *******************************************

    if (!addData.fullName) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          fullNameErrorMsg: "Please enter fullName",
          isDisabledfullName: false
        });
      });
    } else if (!addData.email) {
      set_isError(prev => {
        return _objectSpread(_objectSpread({}, prev), {}, {
          EmailErrorMsg: "Please enter email",
          isDisabledEmail: false
        });
      });
    } else {
      let res = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(_helpers_api_url__WEBPACK_IMPORTED_MODULE_5__/* .BASE_URL */ ._n + _helpers_api_url__WEBPACK_IMPORTED_MODULE_5__/* .API_URL.BUSINESS_OWNER_ADD_STAFF */ .T5.BUSINESS_OWNER_ADD_STAFF, formdata, {
        headers: {
          "Content-Type": "application/json",
          "deviceType": "web",
          "x-auth": localStorage.token
        }
      });

      try {
        let response = res.data;

        if (response.code === 403) {
          localStorage.clear();
          window.location.href = "/";
        } else if (response.code === 200) {
          localStorage.clear();
          window.location.href = '/busines/owner/allStaffList';
        }

        return response;
      } catch (error) {
        return error;
      }
    }

    console.log(startTime);
    console.log(endDate);
  };

  const handleDobResponse = licenseExpiry => {
    let name = "licenseExpiry";
    setAddData(_objectSpread(_objectSpread({}, addData), {}, {
      [name]: licenseExpiry
    }));
  };

  const onCheckSelectAllDays = e => {
    setIsAllSelectedDay(!isAllSelectedDay);
    let allData = allDaysList;
    allData.map((item, index) => {
      item.status = isAllSelectedDay;
    });
    setIsAllDaysChecked(isAllSelectedDay); //  setAllDaysList([...allData])

    let tempdata = allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.reduce((acc, curr) => {
      if (curr.status) {
        acc.push(curr.name);
      }

      return acc;
    }, []);
    setActiveDays(tempdata);
  };

  const onCheckDays = data => {
    let allData = allDaysList;
    allData.map((item, index) => {
      if (item.id == data.id) {
        item.status = !item.status;
      }
    }); //  setAllDaysList([...allData])

    let tempdata = allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.reduce((acc, curr) => {
      if (curr.status) {
        acc.push(curr.name);
      }

      return acc;
    }, []);
    setActiveDays(tempdata); // console.log('1111',tempdata)

    if (allDaysList.length == tempdata.length) {
      setIsAllDaysChecked(true);
    } else {
      setIsAllDaysChecked(false);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
    className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().contentWrapper),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: "container-fuild",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "col-md-9 m-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h3", {
            className: "",
            children: "Edit Staff"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
            className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().formArea),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h4", {
                    children: "Basic Details"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: `col-md-6 ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().staffMemberStatus)}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("a", {
                    href: "#",
                    children: "Disabled Staff Member"
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().NameDetail),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
                    htmlFor: `photo`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("input", {
                      id: `photo`,
                      type: "file",
                      onChange: handleImageChange,
                      style: {
                        display: "none"
                      },
                      accept: ".pdf, .jpeg , .jpg ,.png"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().avatarUpload),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h5", {
                        children: "  Profile Picture "
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().avatarPreview),
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("img", {
                          onChange: handleImageChange,
                          src: image ? image : "/images/camera.svg"
                        })
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                class: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
                      children: ["Full Name ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().required),
                        children: "*"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      placeholder_name: "Your Name",
                      inputId: "fullName",
                      value: addData.fullName,
                      input_name: "fullName",
                      class_name: isError.fullNameErrorMsg !== "" && (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().errorMsg),
                      onChange: e => {
                        handleChange(e);
                      }
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Role "
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("select", {
                      class: "form-control",
                      onChange: handleChange,
                      name: "role",
                      value: addData.role,
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("option", {
                        value: "LIA",
                        children: "LIA"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("option", {
                        value: "supervisor",
                        children: "supervisor"
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Link license/membership"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      name: "membershipNumber",
                      input_name: "membershipNumber",
                      placeholder_name: "Link license/membershipNUmber",
                      value: addData.membershipNumber,
                      onChange: e => {
                        handleChange(e);
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                class: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "License Expiry Date"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
                      className: "form-control",
                      name: "licenseExpiry",
                      selected: addData.licenseExpiry ? new Date(addData.licenseExpiry) : null,
                      dateFormat: "MM/dd/yyyy",
                      dropdownMode: "scroll",
                      minDate: new Date(),
                      dateFormatCalendar: "MMMM",
                      yearDropdownItemNumber: 15,
                      scrollableYearDropdown: true,
                      onChange: date => handleDobResponse(date),
                      autoComplete: "off",
                      value: addData.licenseExpiry
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("img", {
                      src: "/images/calendar.svg",
                      alt: "email"
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Landline Number"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      type: "tel",
                      placeholder_name: "Landline Number",
                      inputId: "Mobile",
                      value: addData.landlineNo,
                      input_name: "landlineNo",
                      onChange: e => {
                        handleChange(e);
                      }
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Phone Number"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      type: "tel",
                      placeholder_name: "Phone Number",
                      inputId: "Mobile",
                      value: addData.phoneNo,
                      input_name: "phoneNo",
                      onChange: e => {
                        handleChange(e);
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Gender"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("select", {
                      class: "form-control",
                      onChange: e => {
                        handleChange(e);
                      },
                      name: "gender",
                      value: addData.gender,
                      size: "0",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("option", {
                        onChange: e => {
                          handleChange(e);
                        },
                        value: "male",
                        children: "Male"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("option", {
                        onChange: e => {
                          handleChange(e);
                        },
                        value: "female",
                        children: "Female"
                      })]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Email"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "email",
                      placeholder_name: "Email Address",
                      inputId: "Email",
                      value: addData.email,
                      readOnly: true,
                      input_name: "email",
                      class_name: isError.EmailErrorMsg !== "" && (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().errorMsg),
                      onChange: e => {
                        handleChange(e);
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("h6", {
                children: " Office Address "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                class: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Country"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_country_region_selector__WEBPACK_IMPORTED_MODULE_7__.CountryDropdown, {
                      class: "form-control",
                      name: "country",
                      size: "0",
                      value: addData.country,
                      onChange: val => {
                        setAddData(prev => {
                          return _objectSpread(_objectSpread({}, prev), {}, {
                            country: val
                          });
                        });
                        validForm("country", addData.country);
                      }
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Address   "
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                      type_name: "text",
                      type: "tel",
                      placeholder_name: "",
                      inputId: "Mobile",
                      value: addData.address,
                      input_name: "address",
                      onChange: e => {
                        handleChange(e);
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                class: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-3 px-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h6", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("b", {
                        children: " Active Days "
                      }), " "]
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                class: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-3 px-1",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                      className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().CheckBox),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("input", {
                        id: "selectAllDays",
                        checked: isAllDaysChecked,
                        onChange: e => {
                          onCheckSelectAllDays(e);
                        },
                        name: "selectAllDays",
                        type: "checkbox"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                        for: "selectAllDays",
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().checkboxLabel),
                        style: {
                          color: "#0c101a"
                        },
                        children: "Select All "
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                class: "row",
                children: allDaysList === null || allDaysList === void 0 ? void 0 : allDaysList.map((li, i) => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                    className: "col-md-3 px-1",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().CheckBox),
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("input", {
                          id: li.id,
                          checked: li.status ? li.name : "",
                          onChange: () => {
                            onCheckDays(li);
                          },
                          name: li.name,
                          type: "checkbox"
                        }, i), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                          for: li.id,
                          className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().checkboxLabel),
                          style: {
                            color: "#0c101a"
                          },
                          children: li.name
                        })]
                      })
                    })
                  });
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                class: "row mt-2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: "col-md-12",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                        className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                          children: "Starting From"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
                          selected: startTime,
                          onChange: time => setStartTime(time),
                          showTimeSelect: true,
                          name: "startDate",
                          input_name: "startDate",
                          value: startTime,
                          showTimeSelectOnly: true,
                          timeIntervals: 15,
                          timeCaption: "Time",
                          dateFormat: "h:mm aa"
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: "col-md-12",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                        className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                          children: "Till"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_datepicker__WEBPACK_IMPORTED_MODULE_1___default()), {
                          selected: endDate,
                          onChange: time => setEndDate(time),
                          showTimeSelect: true,
                          name: "endDate",
                          input_name: "endDate",
                          value: endDate,
                          showTimeSelectOnly: true,
                          timeIntervals: 15,
                          timeCaption: "Time",
                          dateFormat: "h:mm aa"
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: `form-group ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().fromGroup)}`,
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
                      children: "Timezone"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_timezone_select__WEBPACK_IMPORTED_MODULE_9___default()) //   className={styles.CustomeTimeZone}
                    , {
                      name: "timezone",
                      value: addData.timezone //onChange={setSelectedTimezone}
                      ,
                      onChange: val => {
                        setAddData(prev => {
                          return _objectSpread(_objectSpread({}, prev), {}, {
                            timezone: val
                          });
                        });
                        validForm("timezone", addData.timezone);
                      }
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: "col-md-3"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                  className: `col-md-9 ${(_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().ButtonGroup)}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                    className: "row",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: "col-md-4"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: "col-md-4",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("button", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().SaveBtn),
                        children: "Cancel"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: "col-md-4",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("button", {
                        className: (_styles_form_module_scss__WEBPACK_IMPORTED_MODULE_14___default().SandBtn),
                        onClick: handleSave,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddLiaStaff);

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;