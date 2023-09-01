"use strict";
exports.id = 4865;
exports.ids = [4865];
exports.modules = {

/***/ 4865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Owner_Sidenavbar)
});

// EXTERNAL MODULE: ./styles/header.module.scss
var header_module = __webpack_require__(6652);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Common/routes/index.js
var routes = __webpack_require__(2827);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./components/helpers/business_owner_service.jsx
var business_owner_service = __webpack_require__(2253);
// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__(7069);
// EXTERNAL MODULE: external "nanoid"
var external_nanoid_ = __webpack_require__(324);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Common/Modals/permission_to_view_lia.jsx








const permission_to_view_lia_PermissionNotification = ({
  open,
  setOpen,
  setChat,
  closeModal
}) => {
  const router = useRouter();

  const handleChange = async status => {
    // e.preventDefault()
    const response = await permission_to_view_lia(status);

    if (response.code == 200) {
      setChat("");
      setOpen(false);
    }
  };

  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsxs(ReactModal, {
      className: `${styles.customeModal} ${styles.customeAccountModal}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/_jsx("div", {
        class: styles.modalHeader,
        children: /*#__PURE__*/_jsx("div", {
          class: "row",
          children: /*#__PURE__*/_jsx("div", {
            class: "col-10"
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: styles.genrateLink,
        children: /*#__PURE__*/_jsx("div", {
          className: `${styles.genrateLinkSec} text-center`,
          children: /*#__PURE__*/_jsx("form", {
            children: /*#__PURE__*/_jsxs("div", {
              class: "row",
              children: [/*#__PURE__*/_jsx("h3", {
                class: "col-11 text-center mb-2",
                children: " Admin want to view Details of LIA "
              }), /*#__PURE__*/_jsxs("div", {
                class: "col-12 text-center",
                children: [/*#__PURE__*/_jsx("button", {
                  onClick: () => {
                    handleChange(false);
                  },
                  className: styles.sendBtn,
                  style: {
                    float: "unset"
                  },
                  children: "Cancle"
                }), /*#__PURE__*/_jsx("span", {
                  style: {
                    marginLeft: "50px"
                  },
                  children: /*#__PURE__*/_jsx("button", {
                    onClick: () => {
                      handleChange(true);
                    },
                    className: styles.sendBtn,
                    style: {
                      float: "unset"
                    },
                    children: "Allow"
                  })
                })]
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const Modals_permission_to_view_lia = ((/* unused pure expression or super */ null && (permission_to_view_lia_PermissionNotification)));
;// CONCATENATED MODULE: ./components/Header/NotificationBySocket.jsx










let socket;

const NotificationBySocket = ({
  BoId
}) => {
  const CON_PORT = "https://inz-visa.herokuapp.com/inzVisa";
  const {
    0: chat,
    1: setChat
  } = useState("");
  const {
    0: open,
    1: setOpen
  } = useState(false);
  useEffect(() => {
    socket = io(CON_PORT);
  }, [CON_PORT]);
  useEffect(() => {
    if (BoId) {
      socket.emit("join_room", {
        BO: BoId
      }); // chatHandler()
    }
  }, []);
  useEffect(() => {
    socket.on("chat_message1", function (payload) {
      // setChat({...chat, payload})
      if (payload) {
        setChat(payload.message);
        setOpen(true);
      }

      console.log("heeeelooooo", payload);
    });
  }, []); // console.log(chat,"chat")
  // console.log(socket)

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(PermissionNotification, {
      open: open,
      setOpen: setOpen,
      setChat: setChat
    }), /*#__PURE__*/_jsxs("div", {
      className: `dropdown-menu ${styles.dropdownMenu}`,
      "aria-labelledby": "alertsDropdown",
      children: [/*#__PURE__*/_jsx("h6", {
        className: "dropdown-header",
        children: "New Alerts:"
      }), /*#__PURE__*/_jsx("div", {
        className: "dropdown-divider"
      }), /*#__PURE__*/_jsxs("a", {
        className: `dropdown-item ${styles.dropdownItem}`,
        href: "#",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("span", {
            className: "text-success",
            children: /*#__PURE__*/_jsxs("strong", {
              children: [/*#__PURE__*/_jsx("i", {
                className: "fa fa-long-arrow-up fa-fw"
              }), chat]
            })
          }), /*#__PURE__*/_jsx("span", {
            className: "small float-right text-muted",
            children: "11:21 AM"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "dropdown-message small",
          children: "This is an automated server response message. All systems are online."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "dropdown-divider"
      }), /*#__PURE__*/_jsxs("a", {
        className: `dropdown-item ${styles.dropdownItem}`,
        href: "#",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("span", {
            className: "text-danger",
            children: /*#__PURE__*/_jsxs("strong", {
              children: [/*#__PURE__*/_jsx("i", {
                className: "fa fa-long-arrow-down fa-fw"
              }), "Status Update"]
            })
          }), /*#__PURE__*/_jsx("span", {
            className: "small float-right text-muted",
            children: "11:21 AM"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "dropdown-message small",
          children: "This is an automated server response message. All systems are online."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "dropdown-divider"
      }), /*#__PURE__*/_jsxs("a", {
        className: `dropdown-item ${styles.dropdownItem}`,
        href: "#",
        children: [/*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("span", {
            className: "text-success",
            children: /*#__PURE__*/_jsxs("strong", {
              children: [/*#__PURE__*/_jsx("i", {
                className: "fa fa-long-arrow-up fa-fw"
              }), "Status Update"]
            })
          }), /*#__PURE__*/_jsx("span", {
            className: "small float-right text-muted",
            children: "11:21 AM"
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "dropdown-message small",
          children: "This is an automated server response message. All systems are online."
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "dropdown-divider"
      }), /*#__PURE__*/_jsx("a", {
        className: `dropdown-message small ${styles.dropdownViewAll}`,
        href: "",
        children: /*#__PURE__*/_jsx("h6", {
          children: "View all alerts"
        })
      })]
    })]
  });
};

/* harmony default export */ const Header_NotificationBySocket = ((/* unused pure expression or super */ null && (NotificationBySocket)));
;// CONCATENATED MODULE: ./components/Header/Owner_Sidenavbar.jsx










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
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("li", {
      onClick: onClick,
      className: `${(header_module_default()).navItem} `,
      "data-toggle": "tooltip",
      "data-placement": "right",
      title: title,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        as: as,
        href: href,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: `nav-link ${(header_module_default()).navLink} ${activeClass}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: iconPath,
            alt: iconAlt,
            className: "mr-2"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "nav-link-text",
            children: name
          })]
        })
      })
    })
  });
};

const BusinessSideNavBar = () => {
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)("");
  const {
    0: image,
    1: setImage
  } = (0,external_react_.useState)("");
  const {
    0: BoId,
    1: setBoId
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    getBusinessOwner();
  }, []);

  const getBusinessOwner = async () => {
    const response = await (0,business_owner_service/* get_business_owner */.aO)();

    if (response.code == 200) {
      var _response$result;

      localStorage.profileDetails = response.result.profileDetails;

      if (response !== null && response !== void 0 && (_response$result = response.result) !== null && _response$result !== void 0 && _response$result.ownerName) {
        var _response$result2;

        setName(response === null || response === void 0 ? void 0 : (_response$result2 = response.result) === null || _response$result2 === void 0 ? void 0 : _response$result2.ownerName);
        setBoId(response.result._id);
        setImage(response.result.image);
        localStorage.BoId = response.result._id;
      }
    }
  };

  let {
    pathname,
    query
  } = (0,router_.useRouter)();
  let dashboard = pathname === routes/* default.Business_Owner.dashboard.as */.Z.Business_Owner.dashboard.as;
  let allClients = pathname === routes/* default.Business_Owner.clientDetails.as */.Z.Business_Owner.clientDetails.as;
  let allStaff = pathname === routes/* default.Business_Owner.allStaff.as */.Z.Business_Owner.allStaff.as;
  let allLIA = pathname === routes/* default.Business_Owner.LIA.as */.Z.Business_Owner.LIA.as;
  let reports = pathname === routes/* default.Business_Owner.reports.as */.Z.Business_Owner.reports.as;
  let accounts = pathname === routes/* default.Business_Owner.accounts.as */.Z.Business_Owner.accounts.as;
  let settings = pathname === routes/* default.Settings.as */.Z.Settings.as;
  let Business_setup = pathname === routes/* default.Business_Owner.Business_setup */.Z.Business_Owner.Business_setup;
  let employer = pathname === routes/* default.Business_Owner.employers.as */.Z.Business_Owner.employers.as;
  let route = (0,router_.useRouter)();

  const handleLogout = async e => {
    e.preventDefault();
    let response = await (0,business_owner_service/* business_owner_logout */.Vg)();

    if (response.code == 200) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (header_module_default()).header,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: `navbar navbar-expand-lg navbar-dark fixed-top ${(header_module_default()).mainNav} ${(header_module_default()).mainNavFixedTop}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: `navbar-brand  ${(header_module_default()).navbarBrand}`,
        children: "ImmiTech"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarResponsive",
        "aria-controls": "navbarResponsive",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `collapse navbar-collapse ${(header_module_default()).navCollapse}`,
        id: "navbarResponsive",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: `navbar-nav navbar-sidenav ${(header_module_default()).navbarSidenav}`,
          id: "exampleAccordion",
          children: [/*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.dashboard.as */.Z.Business_Owner.dashboard.as,
            href: routes/* default.Business_Owner.dashboard.href */.Z.Business_Owner.dashboard.href,
            iconPath: dashboard ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg",
            iconAlt: "Dashboard",
            activeClass: dashboard ? (header_module_default()).activeClass : "",
            name: "Dashboard"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.Business_setup.as */.Z.Business_Owner.Business_setup.as,
            href: routes/* default.Business_Owner.Business_setup.href */.Z.Business_Owner.Business_setup.href,
            iconPath: Business_setup ? "/images/selecteddashboard.svg" : "/images/unselecteddashboard.svg",
            iconAlt: "Dashboard",
            activeClass: Business_setup ? (header_module_default()).activeClass : "",
            name: "Business Setup"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.allStaff.as */.Z.Business_Owner.allStaff.as,
            href: routes/* default.Business_Owner.allStaff.href */.Z.Business_Owner.allStaff.href,
            iconPath: allStaff ? "/images/selectedstaff.svg" : "/images/unselectedstaffs.svg",
            iconAlt: "All Staffs",
            activeClass: allStaff ? (header_module_default()).activeClass : "",
            title: "Charts",
            name: "All Staffs"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.LIA.as */.Z.Business_Owner.LIA.as,
            href: routes/* default.Business_Owner.LIA.href */.Z.Business_Owner.LIA.href,
            iconPath: allLIA ? "/images/selectedlias.svg" : "/images/unselectedlia.svg",
            iconAlt: "LIA's",
            title: "Tables",
            activeClass: allLIA ? (header_module_default()).activeClass : "",
            name: "LIA's"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.employers.as */.Z.Business_Owner.employers.as,
            href: routes/* default.Business_Owner.employers.href */.Z.Business_Owner.employers.href,
            iconPath: employer ? "/images/selectedstaff.svg" : "/images/unselectedstaffs.svg",
            iconAlt: "Employers",
            title: "Tables",
            activeClass: employer ? (header_module_default()).activeClass : "",
            name: "Employers"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.clientDetails.as */.Z.Business_Owner.clientDetails.as,
            href: routes/* default.Business_Owner.clientDetails.href */.Z.Business_Owner.clientDetails.href,
            iconPath: allClients ? "/images/selectedallclients.svg" : "/images/unselectedallclients.svg",
            iconAlt: "All Clients",
            title: "Link",
            activeClass: allClients ? (header_module_default()).activeClass : "",
            name: "All Clients"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.reports.as */.Z.Business_Owner.reports.as,
            href: routes/* default.Business_Owner.reports.href */.Z.Business_Owner.reports.href,
            iconPath: reports ? "/images/selectedreports.svg" : "/images/unselectedreports.svg",
            iconAlt: "Reports",
            title: "Link",
            activeClass: reports ? (header_module_default()).activeClass : "",
            name: "Reports"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.accounts.as */.Z.Business_Owner.accounts.as,
            href: routes/* default.Business_Owner.accounts.href */.Z.Business_Owner.accounts.href,
            iconPath: accounts ? "/images/selectedaccounts.svg" : "/images/unselectedaccounts.svg",
            iconAlt: "Account",
            title: "Link",
            activeClass: accounts ? (header_module_default()).activeClass : "",
            name: "Account"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Settings.as */.Z.Settings.as,
            href: routes/* default.Settings.href */.Z.Settings.href,
            iconPath: settings ? "/images/selectedsetting.svg" : "/images/unselectedsetting.svg",
            iconAlt: "Setting",
            title: "Link",
            activeClass: settings ? (header_module_default()).activeClass : "",
            name: "Setting"
          }), /*#__PURE__*/jsx_runtime_.jsx(LinkTag, {
            as: routes/* default.Business_Owner.dashboard.as */.Z.Business_Owner.dashboard.as,
            href: "",
            iconPath: "/images/unselectedlogout.svg",
            iconAlt: "Logout",
            title: "Link",
            name: "Logout",
            onClick: e => {
              handleLogout(e);
            }
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: `navbar-nav sidenav-toggler ${(header_module_default()).sidenavToggler}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (header_module_default()).navItem,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link text-center",
              id: "sidenavToggler",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fa fa-fw fa-angle-left"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: `navbar-nav ml-auto ${(header_module_default()).navbarNav}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: `nav-item dropdown ${(header_module_default()).navItem} ${(header_module_default()).navProfileDropdown}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `nav-link dropdown-toggle mr-lg-2 ${(header_module_default()).navLink}`,
              id: "exampleModal",
              href: "#",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).profileSec,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (header_module_default()).profileImg,
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    alt: "",
                    src: image ? image : "/images/profile.svg"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    color: "blueviolet"
                  },
                  className: "px-2 text-name",
                  children: name
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `dropdown-menu ${(header_module_default()).dropdownMenu}`,
              "aria-labelledby": "exampleModal",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `dropdown-item ${(header_module_default()).dropdownItem}`,
                style: {
                  cursor: "pointer"
                },
                onClick: () => {
                  route.push("/Faq");
                },
                children: "FAQ & Support"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `dropdown-item ${(header_module_default()).dropdownItem}`,
                style: {
                  cursor: "pointer"
                },
                onClick: e => {
                  handleLogout(e);
                },
                children: "Logout"
              })]
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const Owner_Sidenavbar = (BusinessSideNavBar);

/***/ })

};
;