"use strict";
exports.id = 2431;
exports.ids = [2431];
exports.modules = {

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9892);
/* harmony import */ var _styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_lia_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7018);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const UpdateVisaList = ({
  type
}) => {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: isSearching,
    1: setSearching
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: isVisaSearch,
    1: setIsVisaSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // for filter visa type

  const {
    0: countryList,
    1: setCountryList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: allVisaList,
    1: setAllVisaList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: isCountryList,
    1: setIsCountryList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // this is for showing country or visa type 

  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: totalCount,
    1: setTotalCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: visaCount,
    1: setVisaCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: totalVisaCount,
    1: setTotalVisaCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isResponse,
    1: setIsResponse
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isSelectAll,
    1: setIsSelectAll
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: isChecked,
    1: setIsChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    get_all_country_list();
  }, []); //************************************************ ON LIST CLICK *************************************************************88 */

  const handleList = async id => {
    setIsCountryList(true);
    setSelectedCountry(id);
    const response = await (0,_helpers_lia_services__WEBPACK_IMPORTED_MODULE_3__/* .update_lia_agent_list_of_visa_type */ .AG)(id);

    if (response.code == 200) {
      var _response$result, _response$result2, _response$result3;

      setAllVisaList(response.result);
      setTotalVisaCount(response.result.length);
      let checkselectAll = (_response$result = response.result) === null || _response$result === void 0 ? void 0 : _response$result.filter(item => item.select);

      if (checkselectAll.length == ((_response$result2 = response.result) === null || _response$result2 === void 0 ? void 0 : _response$result2.length)) {
        setIsChecked(true);
      } else if (checkselectAll.length == ((_response$result3 = response.result) === null || _response$result3 === void 0 ? void 0 : _response$result3.length)) {
        setIsChecked(false);
      }

      setVisaCount(checkselectAll.length);
    } else {}
  }; //******************************************** get all country list ************************************************************************ */


  const get_all_country_list = async () => {
    const response = await (0,_helpers_lia_services__WEBPACK_IMPORTED_MODULE_3__/* .country_update_for_lia */ .Cp)();

    if (response.code == 200) {
      var _response$result4;

      let newArr = (_response$result4 = response.result) === null || _response$result4 === void 0 ? void 0 : _response$result4.filter(item => item.select);
      setCountryList(newArr);
      setTotalCount(response.totalCountry);
      setCount(newArr.length);
    }
  }; //********************************************************* Visa Type *********************************************************** */


  let FilterVisaType = allVisaList === null || allVisaList === void 0 ? void 0 : allVisaList.filter(flterData => {
    var _flterData$visaTypeId, _flterData$visaTypeId2;

    console.log(flterData, "flterData");

    if (isVisaSearch == "") {
      return flterData;
    } else if (flterData !== null && flterData !== void 0 && (_flterData$visaTypeId = flterData.visaTypeId) !== null && _flterData$visaTypeId !== void 0 && (_flterData$visaTypeId2 = _flterData$visaTypeId.visaType) !== null && _flterData$visaTypeId2 !== void 0 && _flterData$visaTypeId2.toLowerCase().includes(isVisaSearch.toLowerCase())) {
      return flterData;
    }
  });
  let VisaList;

  if (FilterVisaType.length > 0) {
    VisaList = FilterVisaType === null || FilterVisaType === void 0 ? void 0 : FilterVisaType.map((item, index) => {
      var _item$visaTypeId, _item$visaTypeId2;

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: `form-group ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fromGroup)}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().selectinputBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
            id: index,
            name: "checkbox",
            type: "checkbox",
            checked: item.selected,
            value: (_item$visaTypeId = item.visaTypeId) === null || _item$visaTypeId === void 0 ? void 0 : _item$visaTypeId._id,
            onChange: e => {
              onSelectedVisaType(item);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
            for: index,
            className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkboxLabel),
            children: item === null || item === void 0 ? void 0 : (_item$visaTypeId2 = item.visaTypeId) === null || _item$visaTypeId2 === void 0 ? void 0 : _item$visaTypeId2.visaType
          })]
        })
      });
    });
  } else {
    VisaList = [];
  } //*********************************************SELECT ALL FUNCTION ********************************************************** */


  const onSelectAll = e => {
    setIsSelectAll(!isSelectAll);
    let allData = allVisaList.map(item => {
      return _objectSpread(_objectSpread({}, item), {}, {
        selected: isSelectAll
      });
    });
    setAllVisaList(allData);
    setIsChecked(isSelectAll);

    if (isSelectAll) {
      setVisaCount(allVisaList.length);
    } else {
      setVisaCount(0);
    }
  }; // *********************** ON CHANGE FUNCTION FOR SELECT VISA TYPE****************************************************************


  const onSelectedVisaType = async item => {
    let newArr = allVisaList === null || allVisaList === void 0 ? void 0 : allVisaList.reduce((acc, curr) => {
      var _curr$visaTypeId, _item$visaTypeId3;

      console.log(curr, "curr");

      if (((_curr$visaTypeId = curr.visaTypeId) === null || _curr$visaTypeId === void 0 ? void 0 : _curr$visaTypeId._id) == (item === null || item === void 0 ? void 0 : (_item$visaTypeId3 = item.visaTypeId) === null || _item$visaTypeId3 === void 0 ? void 0 : _item$visaTypeId3._id)) {
        curr.selected = !curr.selected;
      }

      acc.push(curr);
      return acc;
    }, []);
    setAllVisaList(newArr);
    let selectCheck = newArr.reduce((acc, curr) => {
      if (curr.selected) {
        acc.push(curr);
      }

      return acc;
    }, []);
    setVisaCount(selectCheck.length);

    if (selectCheck.length !== allVisaList.length) {
      setIsChecked(false);
    } else if (selectCheck.length == allVisaList.length) {
      setIsChecked(true);
    } // setErrorMsg("");

  }; // ************************************ON SUBMIT FUNCTION *******************************************************


  const addSelectedVisaType = async () => {
    let tempData = [];
    allVisaList === null || allVisaList === void 0 ? void 0 : allVisaList.map(li => {
      if (li.selected) {
        tempData.push(li.visaTypeId);
      }
    });
    let keyData = {
      visaTypes: [{
        "countryId": selectedCountry,
        "visaTypeId": tempData
      }]
    }; // // *************************** HERE PREVENT FROM EMPTY VISATYPE WHEN SUBMIT*********************************************

    if (tempData.length !== 0) {
      setIsLoading(true);
      const response = await (0,_helpers_lia_services__WEBPACK_IMPORTED_MODULE_3__/* .updated_lia_add_visa_request */ .rQ)(keyData);
      setIsLoading(false);

      if (response.code == 200) {
        false;
        setIsCountryList(false); // this is for open country list again 
      } else {
        setErrorMsg(response === null || response === void 0 ? void 0 : response.message);
      }
    } else {
      setErrorMsg("Please select at least one VISA type");
    }
  }; //************************************************ country list ************************************************************************* */


  let FilterValue = countryList === null || countryList === void 0 ? void 0 : countryList.filter(flterData => {
    if (isSearching == "") {
      return flterData;
    } else if (flterData.countryName.toLowerCase().includes(isSearching.toLowerCase())) {
      return flterData;
    }
  });
  let CountryList;

  if ((FilterValue === null || FilterValue === void 0 ? void 0 : FilterValue.length) > 0) {
    CountryList = FilterValue === null || FilterValue === void 0 ? void 0 : FilterValue.map((item, index) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: `form-group ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fromGroup)}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().selectinputBox),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
            style: {
              listStyle: "none"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              style: {
                cursor: "pointer"
              },
              onClick: () => {
                handleList(item._id);
              },
              children: [(item === null || item === void 0 ? void 0 : item.countryName) + " " + ">", " "]
            })
          })
        })
      });
    });
  } else {
    CountryList = [];
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contentWrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "container-fuild",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "col-md-9 m-auto",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
              className: "",
              children: " Countries "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().visaStatus),
              children: [CountryList.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: `col-md-8 m-auto  ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().clientStatus)}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                      children: !isCountryList ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                        children: [" Total Selected Countries ", count]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                        children: ["Total Selected Visa Type ", visaCount, " "]
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                      children: !isCountryList ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                        children: [" Not Selected Countries ", totalCount - count, " "]
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                        children: [" Total Not Selected Visa Type ", totalVisaCount - visaCount, " "]
                      })
                    })]
                  })
                })
              }) : "", !isCountryList ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "row mt-3",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "col-md-8 m-auto",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchSection),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: "input-group",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                          type_name: "",
                          placeholder_name: "Search by name, id, or internal",
                          inputId: "",
                          input_name: "",
                          class_name: "form-control",
                          value: isSearching,
                          onChange: e => {
                            setSearching(e.target.value);
                          }
                        })
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: `col-md-8 m-auto`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().visaStatusDiv),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: `form-group ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fromGroup)}`,
                        children: CountryList.length > 0 ? CountryList : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                          className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Nodata),
                          children: " No data found"
                        })
                      })
                    })
                  })
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                  className: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "col-md-7",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchSection),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
                          type_name: "",
                          placeholder_name: "Search by name, id, or internal",
                          inputId: "",
                          input_name: "",
                          class_name: "form-control",
                          value: isVisaSearch,
                          onChange: e => {
                            setIsVisaSearch(e.target.value);
                          }
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                          className: "input-group-append",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                            className: "btn btn-secondary",
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                              disabled: true,
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                                className: "fa fa-search"
                              })
                            })
                          })
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: `col-12`,
                    children: VisaList.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().visaStatusDiv),
                      children: [isVisaSearch.length == 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                        className: `form-group ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fromGroup)}`,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                          className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().selectinputBox),
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                            id: "allselect",
                            name: "allselect",
                            type: "checkbox",
                            checked: isChecked,
                            onChange: e => {
                              onSelectAll(e);
                            }
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
                            for: "allselect",
                            className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkboxLabel),
                            children: "Select All"
                          })]
                        })
                      }) : "", VisaList]
                    }) : (allVisaList === null || allVisaList === void 0 ? void 0 : allVisaList.length) !== 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                      style: {
                        color: "red"
                      },
                      children: "No Data Found.. "
                    }) : ""
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: `col-md-12 text-right ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonGroup)}`,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                      disabled: isLoading,
                      onClick: addSelectedVisaType,
                      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_5___default().SandBtn),
                      children: [isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                        className: "fa fa-spinner fa-spin",
                        style: {
                          marginRight: "5px"
                        }
                      }), isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                        children: "Wait"
                      }), !isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                        children: "Update"
                      })]
                    })
                  })]
                })]
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateVisaList);

/***/ })

};
;