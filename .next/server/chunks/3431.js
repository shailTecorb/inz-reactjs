"use strict";
exports.id = 3431;
exports.ids = [3431];
exports.modules = {

/***/ 3431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_lia_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7018);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2827);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











const LinkTag = ({
  title,
  as,
  href,
  iconPath,
  activeClass,
  iconAlt,
  onClick,
  name
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
      onClick: onClick,
      className: `${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navItem)} `,
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: title,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        as: as,
        href: href,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
          className: `nav-link ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navLink)} ${activeClass}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
            src: iconPath,
            alt: iconAlt,
            className: "mr-2"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "nav-link-text",
            children: name
          })]
        })
      })
    })
  });
};

const Header = () => {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    0: role,
    1: setRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: fullName,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: accessRight,
    1: setAccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    setname
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_MyContext_IdDetailsContext__WEBPACK_IMPORTED_MODULE_5__/* .IdContext */ .B);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setRole(localStorage.role);
    get_lia_agent_data();
  }, []);

  const get_lia_agent_data = async () => {
    const response = await (0,_helpers_lia_services__WEBPACK_IMPORTED_MODULE_1__/* .getLiaAgent */ .oS)();

    if (response.code == 200) {
      setName(response.result.fullName);
      setname(response.result.fullName);
      setAccess(response.result.acessRight);
    }
  };

  let {
    pathname,
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  let dashboard = pathname === _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.dashboard.as */ .Z.Lia.dashboard.as;
  let LIA_Workplace = pathname === _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.workplace.as */ .Z.Lia.workplace.as;
  let allClients = pathname === _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.allClient.as */ .Z.Lia.allClient.as;
  let reports = pathname === _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Business_Owner.reports.as */ .Z.Business_Owner.reports.as;
  let settings = pathname === _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Settings.as */ .Z.Settings.as;
  let LIA_dashboard = pathname === _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.dashboard.as */ .Z.Lia.dashboard.as;

  const handleLogout = async () => {
    const response = await (0,_helpers_lia_services__WEBPACK_IMPORTED_MODULE_1__/* .lia_logout */ .yN)();

    if (response.code == 200) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
      className: `navbar navbar-expand-lg navbar-dark fixed-top ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mainNav)} ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().mainNavFixedTop)}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        style: {
          color: "white"
        },
        className: `navbar-brand  ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbarBrand)}`,
        children: "ImmiTech"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
        className: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarResponsive",
        "aria-controls": "navbarResponsive",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `collapse navbar-collapse ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navCollapse)}`,
        id: "navbarResponsive",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
          className: `navbar-nav navbar-sidenav ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbarSidenav)}`,
          id: "exampleAccordion",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
            as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.workplace.as */ .Z.Lia.workplace.as,
            href: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.workplace.href */ .Z.Lia.workplace.href,
            iconPath: LIA_Workplace ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg",
            iconAlt: "Workplace",
            activeClass: LIA_Workplace ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeClass) : "",
            name: `Workplace`
          }), accessRight.map((item, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [item == "Dashboard" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
                as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.dashboard.as */ .Z.Lia.dashboard.as,
                href: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.dashboard.href */ .Z.Lia.dashboard.href,
                iconPath: dashboard ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg",
                iconAlt: "Dashboard",
                activeClass: dashboard ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeClass) : "",
                name: `${item}`
              }), item == "client" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
                as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.allClient.as */ .Z.Lia.allClient.as,
                href: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Lia.allClient.href */ .Z.Lia.allClient.href,
                iconPath: allClients ? "/images/selectedallclients.svg" : "/images/unselectedallclients.svg",
                iconAlt: "All Clients",
                activeClass: allClients ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeClass) : "",
                title: "All Clients",
                name: `${item == "View Clients" ? "Client" : item}`
              }), item == "Reports" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
                as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Business_Owner.reports.as */ .Z.Business_Owner.reports.as,
                href: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Business_Owner.reports.href */ .Z.Business_Owner.reports.href,
                iconPath: reports ? "/images/selectedreports.svg" : "/images/unselectedreports.svg",
                iconAlt: "Reports",
                title: "Link",
                activeClass: reports ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeClass) : "",
                name: "Reports"
              }), item == "Settings" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
                as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Settings.as */ .Z.Settings.as,
                href: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Settings.href */ .Z.Settings.href,
                iconPath: settings ? "/images/selectedsetting.svg" : "/images/unselectedsetting.svg",
                iconAlt: "Setting",
                title: "Link",
                activeClass: settings ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeClass) : "",
                name: "Setting"
              }), item == "dashboard" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
                as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Business_Owner.dashboard.as */ .Z.Business_Owner.dashboard.as,
                href: "",
                iconPath: "/images/unselectedlogout.svg",
                iconAlt: "Logout",
                title: "Link",
                name: "Logout",
                onClick: e => {
                  handleLogout(e);
                }
              }), item == "dashboard" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LinkTag, {
                as: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Business_Owner.accounts.as */ .Z.Business_Owner.accounts.as,
                href: _Common_routes__WEBPACK_IMPORTED_MODULE_3__/* .default.Business_Owner.accounts.href */ .Z.Business_Owner.accounts.href,
                iconPath: accounts ? "/images/selectedaccounts.svg" : "/images/unselectedaccounts.svg",
                iconAlt: "Account",
                title: "Link",
                activeClass: accounts ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().activeClass) : "",
                name: "Account"
              })]
            });
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
          className: `navbar-nav sidenav-toggler ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sidenavToggler)}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
            className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navItem),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
              className: "nav-link text-center",
              id: "sidenavToggler",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                className: "fa fa-fw fa-angle-left"
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
          className: `navbar-nav ml-auto ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navbarNav)}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: `nav-item dropdown ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navItem)} ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navDropdown)}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              className: `nav-link dropdown-toggle mr-lg-2 ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navLink)}`,
              id: "messagesDropdown",
              href: "#",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "./images/sms.svg",
                width: "20px"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "d-lg-none",
                children: ["Messages", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "badge badge-pill badge-primary",
                  children: "12 New"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                className: `text-primary d-none d-lg-block ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().indicator)}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                  className: "fa fa-fw fa-circle"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: `dropdown-menu ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenu)}`,
              "aria-labelledby": "messagesDropdown",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
                className: "dropdown-header",
                children: "New Messages:"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                href: "#",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("strong", {
                    children: "David Miller"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                    className: "small float-right text-muted",
                    children: "11:21 AM"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: `dropdown-message small ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownMessage)}`,
                  children: "Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                href: "#",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("strong", {
                    children: "David Miller"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                    className: "small float-right text-muted",
                    children: "11:21 AM"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: `dropdown-message small ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownMessage)}`,
                  children: "I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                href: "#",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("strong", {
                    children: "David Miller"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                    className: "small float-right text-muted",
                    children: "11:21 AM"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: `dropdown-message small ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownMessage)}`,
                  children: "I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution."
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-message small ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownViewAll)}`,
                href: "#",
                children: "View all messages"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: `nav-item dropdown ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navItem)} ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navDropdown)}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              className: `nav-link dropdown-toggle mr-lg-2 ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navLink)}`,
              id: "alertsDropdown",
              href: "#",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                src: "./images/notification.svg",
                width: "18px"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "d-lg-none",
                children: ["Alerts", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "badge badge-pill badge-warning",
                  children: "6 New"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                className: `text-warning d-none d-lg-block ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().indicator)}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                  className: "fa fa-fw fa-circle"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: `dropdown-menu ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenu)}`,
              "aria-labelledby": "alertsDropdown",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
                className: "dropdown-header",
                children: "New Alerts:"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "text-success",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                      className: "fa fa-long-arrow-up fa-fw"
                    }), "Status Update"]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "small float-right text-muted",
                  children: "11:21 AM"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "dropdown-message small",
                  children: "This is an automated server response message. All systems are online."
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "text-danger",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                      className: "fa fa-long-arrow-down fa-fw"
                    }), "Status Update"]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "small float-right text-muted",
                  children: "11:21 AM"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "dropdown-message small",
                  children: "This is an automated server response message. All systems are online."
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "text-success",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("i", {
                      className: "fa fa-long-arrow-up fa-fw"
                    }), "Status Update"]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "small float-right text-muted",
                  children: "11:21 AM"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: "dropdown-message small",
                  children: "This is an automated server response message. All systems are online."
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "dropdown-divider"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: "dropdown-item small",
                href: "#",
                children: "View all alerts"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
            className: `nav-item dropdown ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navItem)} ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navProfileDropdown)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
              className: `nav-link dropdown-toggle mr-lg-2 ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navLink)}`,
              id: "exampleModal",
              href: "#",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().profileSec),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().profileImg),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
                    alt: "",
                    src: "/images/clients.svg"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  style: {
                    color: "blueviolet"
                  },
                  className: "px-2 text-name",
                  children: fullName
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: `dropdown-menu ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownMenu)}`,
              "aria-labelledby": "exampleModal",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  route.push("/LIA/setup");
                },
                children: "Profile"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  route.push("/busines/owner/template");
                },
                children: "Template"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  route.push("/LIA/country");
                },
                children: "Country List"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  route.push("/LIA/visaList");
                },
                children: "Visa List"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  route.push("/Faq");
                },
                children: "FAQ & Support"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                className: `dropdown-item ${(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdownItem)}`,
                style: {
                  cursor: "pointer"
                },
                onClick: handleLogout,
                children: "Logout"
              })]
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ })

};
;