"use strict";
exports.id = 7846;
exports.ids = [7846];
exports.modules = {

/***/ 7846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9892);
/* harmony import */ var _styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2253);
/* harmony import */ var _MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4878);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4885);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const AllStaff = ({
  type
}) => {
  const {
    0: allStaff,
    1: setStafflist
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    setEmail,
    setStaffId,
    setTpe
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_4__/* .IdContext */ .B);
  const {
    0: totalLiaStaff,
    1: setTotalLiaStaff
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: otherStaff,
    1: setOtherStaff
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: isLoading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getAllStaff();
  }, []);
  const {
    0: pagination,
    1: setPagination
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    page: 1,
    per_page: 10,
    hashMore: true
  });

  const getAllStaff = async () => {
    setLoading(true);
    const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_3__/* .list_of_staff_service */ .Qf)(pagination.page, pagination.per_page, localStorage.role, search);

    if (response.code == 200) {
      setStafflist(response.result);
      setTotalLiaStaff(response.result1.allLia);
      setOtherStaff(response.result1.otherStaff);
      setLoading(false);
    } else if (response.code == 400) {// setMsg(response.message)
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const fetchMoreData = async () => {
    const res = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_3__/* .list_of_staff_service */ .Qf)(pagination.page + 1, pagination.per_page);

    if (res.code === 200) {
      const newPosts = res.result;
      setStafflist(prev => {
        return [...prev, ...newPosts];
      });

      if (res.result.length == 0) {
        setPagination(prev => {
          return _objectSpread(_objectSpread({}, prev), {}, {
            hashMore: false
          });
        });
      } else {
        setTimeout(() => {
          setStafflist(prev => {
            return [...prev, ...newPosts];
          });
        }, 1500);
      }
    }
  };

  const handlePageChanges = () => {
    setPagination(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        page: pagination.page + 1
      });
    });
  };

  const viewStaff = async id => {
    setStaffId(id);
    setTpe(type);

    if (id) {
      route.push(`/busines/owner/editLia`);
    }
  };

  const getStaffData = staffId => {//    route.push("/busines/owner/editLia")
  };

  let staffData = allStaff === null || allStaff === void 0 ? void 0 : allStaff.filter(flterData => {
    var _flterData$fullName, _flterData$internalId;

    if (search == "") {
      return flterData;
    } else if (flterData !== null && flterData !== void 0 && (_flterData$fullName = flterData.fullName) !== null && _flterData$fullName !== void 0 && _flterData$fullName.toLowerCase().includes(search === null || search === void 0 ? void 0 : search.toLowerCase()) || flterData !== null && flterData !== void 0 && (_flterData$internalId = flterData.internalId) !== null && _flterData$internalId !== void 0 && _flterData$internalId.toLowerCase().includes(search === null || search === void 0 ? void 0 : search.toLowerCase())) {
      return flterData;
    }
  }).map((data, index) => {
    var _data$roleId, _data$roleId2;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
        scope: "row",
        children: data.internalId
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
        children: ((_data$roleId = data.roleId) === null || _data$roleId === void 0 ? void 0 : _data$roleId.role) == "liaAgent" ? "LIA Agent" : (_data$roleId2 = data.roleId) === null || _data$roleId2 === void 0 ? void 0 : _data$roleId2.role
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
          onClick: () => {
            setEmail(data._id);
            getStaffData();
          },
          children: [data.fullName, " "]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
        children: [" ", data.phoneNumberCountryCode, " ", data.phoneNumber, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
          onClick: () => {
            setEmail(data._id);
          },
          children: data.email
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
        children: moment__WEBPACK_IMPORTED_MODULE_5___default()(data.dob).format("Do MMM YYYY")
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
        children: data.isActive ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          style: {
            color: "#05CE84"
          },
          children: "Active "
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          style: {
            color: "red"
          },
          children: [data.liveStatus, " "]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
          className: `${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Btn1)} ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().BtnWithoutImg)}`,
          onClick: () => {
            viewStaff(data._id);
          },
          children: "View"
        })
      })]
    });
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contentWrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "container-fuild",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
              children: "All Staffs"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: `col-12 ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().clientStatus)}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: ["LIA Staffs ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: totalLiaStaff
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: ["Other Staffs ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: otherStaff
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: "col-sm-7",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchSection),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("form", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: "col-md-7 pl-0",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                        className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchSection),
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("form", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                            className: "input-group",
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Auth_Common_input_filed__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                              type_name: "text",
                              placeholder_name: "Search by name, id",
                              inputId: "",
                              input_name: "",
                              class_name: "form-control",
                              value: search,
                              onChange: handleSearch
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                              className: "input-group-append",
                              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                                className: "btn btn-secondary",
                                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
                                  onClick: e => {
                                    e.preventDefault();
                                  },
                                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                                    className: "fa fa-search"
                                  })
                                })
                              })
                            })]
                          })
                        })
                      })
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: `col-sm-5 ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buttonGroup)}`,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
                  children: "Print"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
                  onClick: () => {
                    route.push("/busines/owner/addLia");
                  },
                  children: "+ Add Staff"
                })]
              }), allStaff.length == 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().noDataSection),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: (_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().staffImage),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
                    src: "/images/nostaff.svg"
                  })
                })
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: `col-12 ${(_styles_query_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tableArea)}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "table-responsive ",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_6___default()), {
                    dataLength: allStaff.length,
                    next: () => {
                      fetchMoreData();
                      handlePageChanges();
                    },
                    hasMore: pagination.hashMore,
                    endMessage: pagination.hashMore == false ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {}) : "",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
                      class: "table table-striped",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("thead", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                            children: "#ID"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                            children: "Role"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                            children: "Full Name"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("th", {
                            children: ["Mobile", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), "Email"]
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                            children: "DOB"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                            children: "Status"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                            children: "Action"
                          })]
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("tbody", {
                        children: staffData
                      })]
                    })
                  })
                })
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllStaff);

/***/ })

};
;