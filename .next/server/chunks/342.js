exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ newDashborad)
});

// EXTERNAL MODULE: ./styles/dashboard.module.scss
var dashboard_module = __webpack_require__(6777);
var dashboard_module_default = /*#__PURE__*/__webpack_require__.n(dashboard_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "chart.js"
var external_chart_js_ = __webpack_require__(712);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(8182);
// EXTERNAL MODULE: external "faker"
var external_faker_ = __webpack_require__(8898);
// EXTERNAL MODULE: ./components/helpers/business_owner_service.jsx
var business_owner_service = __webpack_require__(2253);
;// CONCATENATED MODULE: ./components/Auth/Common/methods.js
const formattedDate = CDate => {
  console.log("Date", CDate);
  let current_datetime = new Date(CDate);
  let formatted_date = current_datetime.getFullYear() + "-" + ("0" + (current_datetime.getMonth() + 1)).slice(-2) + "-" + ("0" + current_datetime.getDate()).slice(-2);
  return formatted_date; // function format(inputDate) {
  //   var date = new Date(inputDate);
  //   if (!isNaN(date.getTime())) {
  //     // Months use 0 index.
  //     return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
  //   }
  // }
};
const getLongMonthName = function (date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return monthNames[date.getMonth()];
};
const getLongWeekName = function (date) {
  const weekNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return weekNames[date.getDay()];
};
const convertToInternationalCurrencySystem = labelValue => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9 ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B" // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6 ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M" // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3 ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K" : Math.abs(Number(labelValue));
};
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Business_Owner/newDashborad/bar.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











external_chart_js_.Chart.register(external_chart_js_.CategoryScale, external_chart_js_.LinearScale, external_chart_js_.BarElement, external_chart_js_.Title, external_chart_js_.Tooltip, external_chart_js_.Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false
    },
    title: {
      display: false // text: "Chart.js Bar Chart"

    }
  }
};
let Type = {
  Application: "application",
  Client: "client",
  Revenue: "revenue"
};
let Filter_Type = {
  Weekly: "weekly",
  Monthly: "monthly",
  Annualy: "annual"
};

const BarSec = ({
  styles
}) => {
  const {
    0: keyData,
    1: setKeyData
  } = (0,external_react_.useState)({
    type: Type.Application,
    //
    filter_type: Filter_Type.Annualy
  });
  const {
    0: results,
    1: setResults
  } = (0,external_react_.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    getGraphDetails();
  }, [keyData]);

  const getGraphDetails = async () => {
    setIsLoading(true);
    console.log("Key Data", keyData);
    let {
      type,
      filter_type
    } = keyData;
    let data = {
      type,
      filter_type
    };
    const response = await (0,business_owner_service/* businesOwnerDashboardGraph */.s0)(data);

    if (response.code === 200) {
      setResults(response.result);
      setIsLoading(false);
    }
  };

  const getLabels = () => {
    let setLabel;

    switch (keyData.filter_type) {
      case Filter_Type.Annualy:
        let getMonthName = results.map(data => getLongMonthName(new Date(data.date)));
        console.log("GetMonth", getMonthName);
        setLabel = getMonthName;
        break;

      case Filter_Type.Weekly:
        let getWeekName = results.map(data => getLongWeekName(new Date(data.date)));
        console.log("GetWeek", getWeekName);
        setLabel = getWeekName;
        break;

      case Filter_Type.Monthly:
        let getDate = results.map(data => external_moment_default()(data.date).format("D MMM, YY"));
        console.log("GetDate", getDate);
        setLabel = getDate;
        break;

      default:
        // setLabel = getMonthName
        break;
    }

    return setLabel;
  };

  const data = {
    labels: !isLoading && getLabels(),
    datasets: [(keyData.type === Type.Application && {
      label: "Submitted",
      data: results === null || results === void 0 ? void 0 : results.map(data => data.submitApp),
      backgroundColor: "#f39321"
    }, {
      label: "Declined",
      data: results === null || results === void 0 ? void 0 : results.map(data => data.declineApp),
      backgroundColor: "#66dfa3"
    }, {
      label: "Approved",
      data: results === null || results === void 0 ? void 0 : results.map(data => data.approveApp),
      backgroundColor: "#fb7878"
    }), keyData.type === Type.Client && {
      label: "Total Client",
      data: results === null || results === void 0 ? void 0 : results.map(data => data.count),
      backgroundColor: "#f39321"
    }, keyData.type === Type.Revenue && {
      label: "Total Revenue",
      data: results === null || results === void 0 ? void 0 : results.map(data => data.count),
      backgroundColor: "#66dfa3"
    }]
  };

  const filterType = e => {
    setKeyData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        type: e.target.value
      });
    });
  };

  const filterByType = filter_type => {
    setKeyData(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        filter_type
      });
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-md-6 pr-0",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Status"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${styles.radioSec} mt-3`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: styles.radio,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "radio",
            name: "radio",
            value: Type.Application,
            onChange: filterType,
            checked: keyData.type === Type.Application
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: " Application "
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: styles.radio,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "radio",
            name: "radio",
            value: Type.Client,
            onChange: filterType,
            checked: keyData.type === Type.Client
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: " Client "
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: styles.radio,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "radio",
            name: "radio",
            value: Type.Revenue,
            onChange: filterType,
            checked: keyData.type === Type.Revenue
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: " Revenue "
          })]
        })]
      }), keyData.type === Type.Application && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: styles.graphColor,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.colorBox} ${styles.colorBox1}`
          }), "Submitted"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.colorBox} ${styles.colorBox3}`
          }), "Declined"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.colorBox} ${styles.colorBox2}`
          }), "Approved"]
        })]
      }), keyData.type === Type.Client && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: styles.graphColor,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.colorBox} ${styles.colorBox1}`
          }), "Total Client"]
        })
      }), keyData.type === Type.Revenue && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: styles.graphColor,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.colorBox} ${styles.colorBox2}`
          }), "Total Revenue"]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "col-md-6 px-0 text-right",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => filterByType(Filter_Type.Weekly),
        className: Filter_Type.Weekly === keyData.filter_type && styles.active,
        children: "Week"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => filterByType(Filter_Type.Monthly),
        className: Filter_Type.Monthly === keyData.filter_type && styles.active,
        children: "Month"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => filterByType(Filter_Type.Annualy),
        className: Filter_Type.Annualy === keyData.filter_type && styles.active,
        children: "Annual"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_.Bar, {
        options: options,
        data: data
      })
    })]
  });
};

/* harmony default export */ const bar = (BarSec);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
;// CONCATENATED MODULE: ./components/Business_Owner/newDashborad/leftSection.jsx
function leftSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function leftSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { leftSection_ownKeys(Object(source), true).forEach(function (key) { leftSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { leftSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function leftSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const LeftSection = ({
  styles
}) => {
  const {
    0: details,
    1: setDetails
  } = (0,external_react_.useState)({
    // Idle Application
    allIdleApplication: 0,
    IdleAppPer: 0,
    // All clients
    allClient: 0,
    clientPer: 0,
    // All PPI's
    allPpi: 0,
    ppiPer: 0,
    // All complaints
    complaintsPer: 0,
    allComplaints: 0,
    // Revenue
    revenue: 0,
    revenuePer: 0,
    // Application  ** Percenatge Remaining **
    allApplication: 0,
    // Submitted
    allApplicationPer: 0,
    applicationApp: 0,
    // Approved
    applicationAppPer: 0,
    applicationDec: 0,
    // Declined
    applicationDecPer: 0,
    //  All Queries  ** Percenatge Remaining **
    allQueries: 0,
    // Total
    allQueriesPer: 0,
    queriesAns: 0,
    // Answered
    queriesAnsPer: 0,
    queriesUnAns: 0,
    // Unanswered
    queriesUnAnsPer: 0,
    // All Reviews
    allreview: 0,
    reviewPer: 0
  });
  (0,external_react_.useEffect)(() => {
    dashboarddetails();
  }, []);

  const dashboarddetails = async () => {
    const response = await (0,business_owner_service/* businesOwnerDashboard */._2)();

    let data = leftSection_objectSpread({}, response.result);

    if (response.code === 200) {
      setDetails(prev => {
        return leftSection_objectSpread(leftSection_objectSpread({}, prev), data);
      });
    }
  };

  const checkNullabilty = (data, per) => {
    return data <= 0 ? /*#__PURE__*/jsx_runtime_.jsx("h4", {
      children: "NIL"
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
        children: [data, "\xA0", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [per, "%"]
        }), " ", per !== 0 && /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: per < 0 ? "/images/downarrow.svg" : "/images/uparrow.svg"
        })]
      })
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "col-lg-8 px-2 pt-5 custome_small_padding",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row mx-2 custome_small_margin",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "col-md-12 custome_small_padding",
        children: "Dashboard"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-5 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box7}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/revenue.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "Revenue"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-5 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Total Revenue"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                children: [details.revenue === 0 ? "NIL" : `${convertToInternationalCurrencySystem(details.revenue)}`, " "]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-7 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box8}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/allapplication.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "All Application"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row mt-4",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-4 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Submitted"
              }), checkNullabilty(details.allApplication, details.allApplicationPer)]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-4 px-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Declined"
              }), checkNullabilty(details.applicationApp, details.applicationAppPer)]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-4 px-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Approved"
              }), " ", checkNullabilty(details.applicationDec, details.applicationDecPer)]
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row mx-2 custome_small_margin",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-7 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box9}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/allqueries.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "All Queries"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row mt-4",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-4 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Total"
              }), checkNullabilty(details.allQueries, details.allQueriesPer)]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-4 px-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Answered"
              }), checkNullabilty(details.queriesAns, details.queriesAnsPer)]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-4 px-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Unanswered"
              }), checkNullabilty(details.queriesUnAns, details.queriesUnAnsPer)]
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-5 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box10}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/idleapplication.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "Idle Applications"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-5 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Applications"
              }), checkNullabilty(details.allIdleApplication, details.IdleAppPer)]
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row mx-2 custome_small_margin",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-6 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box11}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/allclients.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "All Clients"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-5 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Total"
              }), checkNullabilty(details.allClient, details.clientPer)]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-6 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box12}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/allppi.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "AIl PPI"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-5 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Received"
              }), checkNullabilty(details.allPpi, details.ppiPer)]
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row mx-2 custome_small_margin",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-6 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box13}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/allreviews.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "All Reviews"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-5 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Reviews"
              }), checkNullabilty(details.allreview, details.reviewPer)]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-6 px-2 custome_small_padding",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${styles.DashboardBox} ${styles.Box14}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-9 pr-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.ImgSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/dashboard/allcomplaints.svg"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.contentSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: "All Complaints"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-3 pl-0 pr-1",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.viewAllSec,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "View All"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-5 pr-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Received"
              }), checkNullabilty(details.allComplaints, details.complaintsPer)]
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row mx-2 custome_small_margin",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `col-12 px-2  custome_small_padding`,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${styles.invoiceSection}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/jsx_runtime_.jsx(bar, {
              styles: styles
            })
          })
        })
      })
    })]
  });
};

/* harmony default export */ const leftSection = (LeftSection);
// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__(9008);
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./styles/customeModal.module.scss
var customeModal_module = __webpack_require__(3686);
var customeModal_module_default = /*#__PURE__*/__webpack_require__.n(customeModal_module);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/Common/Modals/addTaskModal.jsx
function addTaskModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function addTaskModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { addTaskModal_ownKeys(Object(source), true).forEach(function (key) { addTaskModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { addTaskModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function addTaskModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const AddNewTaskModal = ({
  open,
  openModal,
  closeModal,
  isTaskModalOpen,
  dashboarddetails,
  setSelectedDate,
  taskDetails
}) => {
  const {
    0: date,
    1: setDate
  } = (0,external_react_.useState)("");
  const {
    0: startTime,
    1: setStartTime
  } = (0,external_react_.useState)("");
  const {
    0: endTime,
    1: setEndTime
  } = (0,external_react_.useState)("");
  const {
    0: title,
    1: setTitle
  } = (0,external_react_.useState)("");
  const {
    0: description,
    1: setDescription
  } = (0,external_react_.useState)("");
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)("");
  const {
    0: followers,
    1: setfollowers
  } = (0,external_react_.useState)([]);
  const {
    0: followeList,
    1: setFolloweList
  } = (0,external_react_.useState)([]);
  const {
    0: followersData,
    1: setFollowersData
  } = (0,external_react_.useState)({
    page: 1,
    perPage: 12,
    search: "",
    searchBy: "",
    id: ""
  });

  const clearFields = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
    setTitle("");
    setDescription("");
    setError("");
  };

  (0,external_react_.useEffect)(async () => {
    const response = await (0,business_owner_service/* addFollowersService */.x4)();

    if (response.code == 200) {
      let labelData = [];
      const newData = response.result.map(data => labelData.push(addTaskModal_objectSpread(addTaskModal_objectSpread({}, data), {}, {
        label: data.fullName,
        value: data._id
      })));
      setfollowers([...labelData]);
    }
  }, []);

  const add_new_task = async e => {
    e.preventDefault();
    let DATE = external_moment_default()(date).format("L");
    let StartTime = external_moment_default()(startTime).format("hh:mm A");
    let EndTime = external_moment_default()(endTime).format("hh:mm A");
    let businessId = localStorage.BoId;
    let data = {
      date: DATE,
      startTime: StartTime,
      dueTime: EndTime,
      tittle: title,
      description: description,
      businessId,
      taskFollowers: followersData.id,
      taskId: taskDetails._id ? taskDetails._id : null
    };

    if (businessId) {
      if (!date) {
        setError("Please enter date");
      } else if (!startTime) {
        setError("Please enter start time");
      } else if (!endTime) {
        setError("Please enter end time");
      } else if (!title) {
        setError("Please enter title");
      } else if (!description) {
        setError("Please enter description"); // } else if (!followersData.id) {
        //   setError("Please select followes");
      } else {
        setIsLoading(true);

        if (taskDetails.length !== 0) {
          const response = await (0,business_owner_service/* update_task_api */.yM)(data);

          if (response.code == 200) {
            dashboarddetails(date);
            setSelectedDate(date);
            setIsLoading(false);
            closeModal();
            clearFields();
          } else {
            setError(response.message);
            setIsLoading(false);
          }
        } else {
          const response = await (0,business_owner_service/* addTaskDashboardBO */.nl)(data);

          if (response.code == 200) {
            dashboarddetails(date);
            setSelectedDate(date);
            setIsLoading(false);
            closeModal();
            clearFields();
          } else {
            setError(response.message);
            setIsLoading(false);
          }
        }
      }
    }
  };

  const handleChange = item => {
    let newData = item.map(data => data._id);
    setFollowersData(addTaskModal_objectSpread(addTaskModal_objectSpread({}, followersData), {}, {
      id: newData
    }));
  };

  (0,external_react_.useEffect)(() => {
    if (taskDetails) {
      getDetails(taskDetails);
    }
  }, [taskDetails]);

  const getDetails = data => {
    var _data$taskFollowers, _data$taskFollowers2;

    let newDate = new Date(data.date); // let StartTime = data.startTime ? data.startTime : new Date()
    // let EndTime = taskDetails?.dueTime

    let Title = taskDetails === null || taskDetails === void 0 ? void 0 : taskDetails.tittle;
    let Des = taskDetails === null || taskDetails === void 0 ? void 0 : taskDetails.description;
    setDate(newDate); // setStartTime(StartTime);
    // setEndTime(EndTime);

    setTitle(Title);
    setDescription(Des);
    let labelData = [];
    data === null || data === void 0 ? void 0 : (_data$taskFollowers = data.taskFollowers) === null || _data$taskFollowers === void 0 ? void 0 : _data$taskFollowers.map(item => labelData.push(addTaskModal_objectSpread(addTaskModal_objectSpread({}, item), {}, {
      fullName: item.fullName,
      label: item.fullName,
      value: item._id,
      _id: item._id
    })));
    setFolloweList([...labelData]);
    let newData = data === null || data === void 0 ? void 0 : (_data$taskFollowers2 = data.taskFollowers) === null || _data$taskFollowers2 === void 0 ? void 0 : _data$taskFollowers2.map(it => it._id);
    setFollowersData(addTaskModal_objectSpread(addTaskModal_objectSpread({}, followersData), {}, {
      id: newData
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: openModal,
      className: "mx-0",
      children: "Add"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_modal_default()), {
      className: `${(customeModal_module_default()).customeModal} ${(customeModal_module_default()).customeMoneyModal}  ${(customeModal_module_default()).customeAccountModal}`,
      isOpen: isTaskModalOpen,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: (customeModal_module_default()).modalHeader,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "col-10",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              children: "Add New Task"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              style: {
                color: "red"
              },
              children: [" ", error, " "]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "col-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: (customeModal_module_default()).closeBtn,
              onClick: closeModal,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/popupcross.svg"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (customeModal_module_default()).genrateLink,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (customeModal_module_default()).genrateLinkSec,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `form-group px-0 ${(customeModal_module_default()).customeFormGroup}`,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "col-6",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Select Date"
                  }), /*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
                    className: "form-control",
                    name: "licenseExpiry",
                    selected: date,
                    dateFormat: "MM/dd/yyyy",
                    dropdownMode: "scroll",
                    minDate: new Date(),
                    dateFormatCalendar: "MMMM",
                    yearDropdownItemNumber: 15,
                    scrollableYearDropdown: true,
                    onChange: date => {
                      setDate(date);
                      setError("");
                    },
                    autoComplete: "off",
                    value: date
                  }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/calendar.svg",
                    alt: "date"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "col-6",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: " Start Time"
                  }), /*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
                    selected: startTime,
                    onChange: time => setStartTime(time),
                    showTimeSelect: true,
                    name: "startDate",
                    input_name: "startDate",
                    value: startTime,
                    showTimeSelectOnly: true,
                    timeIntervals: 15,
                    timeFormat: "hh : mm aa",
                    timeCaption: "Time",
                    dateFormat: "h:mm aa"
                  }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/calendar.svg",
                    alt: "email"
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-6",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  children: " End Time"
                }), /*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
                  selected: endTime,
                  onChange: time => setEndTime(time),
                  showTimeSelect: true,
                  name: "endTime",
                  input_name: "endTime",
                  value: endTime,
                  showTimeSelectOnly: true,
                  timeIntervals: 15,
                  timeFormat: "hh : mm aa",
                  timeCaption: "Time",
                  dateFormat: "h:mm aa"
                }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/calendar.svg",
                  alt: "email"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `form-group px-0 ${(customeModal_module_default()).customeFormGroup}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: " Task Details "
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "Title"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                id: "contact",
                autoComplete: "off",
                onChange: e => {
                  setTitle(e.target.value);
                },
                value: title,
                name: "contact",
                className: `form-control ${(customeModal_module_default()).stepbarInput}`
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `form-group px-0 ${(customeModal_module_default()).customeFormGroup}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "Description"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                name: "contact",
                onChange: e => {
                  setDescription(e.target.value);
                },
                value: description,
                className: `form-control ${(customeModal_module_default()).stepbarInput}`
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `form-group px-0 ${(customeModal_module_default()).customeFormGroup}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "Add Followers"
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
                options: followers,
                defaultValue: followeList,
                isMulti: true,
                onChange: e => {
                  handleChange(e);
                }
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "row",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: "col-12",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                  disabled: isLoading,
                  className: (customeModal_module_default()).sendBtn,
                  onClick: add_new_task,
                  children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-spinner fa-spin",
                    style: {
                      marginRight: "5px"
                    }
                  }), isLoading && /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Saving"
                  }), !isLoading && /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "Save"
                  })]
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const addTaskModal = (/*#__PURE__*/external_react_default().memo(AddNewTaskModal));
;// CONCATENATED MODULE: ./components/Business_Owner/newDashborad/TaskList.jsx









const TaskList = ({
  styles
}) => {
  const {
    0: selectedDate,
    1: setSelectedDate
  } = (0,external_react_.useState)(new Date());
  const {
    0: taskList,
    1: setTaskList
  } = (0,external_react_.useState)([]);
  const {
    0: colorCode,
    1: setColorCode
  } = (0,external_react_.useState)(["blueDiv", "purpleDiv", ""]);
  const {
    0: openTaskModal,
    1: setOpenTaskModal
  } = (0,external_react_.useState)(false);
  const {
    0: taskDetails,
    1: setTaskDetails
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    dashboarddetails(selectedDate);
  }, []);

  const onChange = dates => {
    setSelectedDate(dates);
    dashboarddetails(dates);
  };

  const dashboarddetails = async selDate => {
    let keyData = {
      page: 1,
      perPage: 10,
      date: formattedDate(selDate)
    };
    const response = await (0,business_owner_service/* businesOwnerDashboardTaskList */.c9)(keyData);

    if (response.code === 200) {
      let list = response.result;
      setTaskList(list);
    }
  }; //   let index = Math.floor(Math.random()* colorCode.length)
  //   console.log( (Math.random()* colorCode.length),"Task", colorCode[index]);


  var endDate = new Date();
  var numberOfDaysToAdd = 13;
  const daysHighlighted = new Array(numberOfDaysToAdd).fill(endDate);

  const openModal = () => {
    setOpenTaskModal(true);
  };

  const closeModal = () => {
    setOpenTaskModal(false);
  }; //***************************** Edit task ***************************************************** */


  const handleEditTast = (0,external_react_.useCallback)(async id => {
    let keyData = {
      taskId: id
    };
    const response = await (0,business_owner_service/* get_task_api */.xt)(keyData);

    if (response.code == 200) {
      setTaskDetails(response.result);
    }

    openModal();
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-lg-4 bg-white pt-5",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "calendar-area",
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
        selected: selectedDate,
        onChange: onChange,
        inline: true // highlightDates={[
        //   {
        //     "highlighted-class": daysHighlighted.map((day, index) => {
        //       day.setDate(day.getDate() + index);
        //       return new Date(day);
        //     }),
        //   },
        // ]}

      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "interview_schedule",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
            className: "col-sm-9",
            children: ["My Task | ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: external_moment_default()(selectedDate).format("D MMM, YYYY")
            }), " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-sm-3 text-right pl-0",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "addBtn",
              children: /*#__PURE__*/jsx_runtime_.jsx(addTaskModal, {
                openModal: openModal,
                closeModal: closeModal,
                isTaskModalOpen: openTaskModal,
                dashboarddetails: dashboarddetails,
                setSelectedDate: setSelectedDate,
                taskDetails: taskDetails
              })
            })
          })]
        }), taskList === null || taskList === void 0 ? void 0 : taskList.map((data, index) => {
          let {
            dueTime,
            startTime,
            tittle,
            description
          } = data;
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `boxDiv ${Math.random() >= Math.random() ? "blueDiv" : "purpleDiv"}`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
              children: ["Interview: ", tittle]
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: description
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [startTime, " to ", dueTime]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "col-sm-12 text-right pl-0",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  marginRight: "10px"
                },
                children: [" ", /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/graycheck.svg"
                }), " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  handleEditTast(data._id);
                },
                children: [" ", /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/edit.svg"
                }), " "]
              })]
            })]
          }, index);
        })]
      })]
    })
  });
};

/* harmony default export */ const newDashborad_TaskList = (TaskList);
;// CONCATENATED MODULE: ./components/Business_Owner/newDashborad/index.jsx








const NewBoDashboard = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (dashboard_module_default()).contentWrapper,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid  custome_small_padding",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row mx-0 ",
        children: [/*#__PURE__*/jsx_runtime_.jsx(leftSection, {
          styles: (dashboard_module_default())
        }), /*#__PURE__*/jsx_runtime_.jsx(newDashborad_TaskList, {
          styles: (dashboard_module_default())
        })]
      })
    })
  });
};

/* harmony default export */ const newDashborad = (NewBoDashboard);

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ })

};
;