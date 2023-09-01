exports.id = 3393;
exports.ids = [3393];
exports.modules = {

/***/ 2312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const ErrorModal = ({
  open,
  closeModal,
  message,
  pathname
}) => {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().customeAccountModal)}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalHeader),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          class: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            class: "col-10"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().genrateLink),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().genrateLinkSec)} text-center`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              class: "row text-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                class: "col-12 text-center mb-2",
                children: "Error!!"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                children: message
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                class: "col-12 text-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sendBtn),
                  onClick: closeModal,
                  style: {
                    float: "unset"
                  },
                  children: "OK"
                })
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorModal);

/***/ }),

/***/ 2266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export GlobleInfo */
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1273);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2253);
/* harmony import */ var _helpers_lia_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7018);
/* harmony import */ var _validation_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5027);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const GlobleInfo = /*#__PURE__*/(/* unused pure expression or super */ null && (createContext()));

const TemaplateModal = ({
  openModa,
  closeModal,
  mode,
  templateId,
  selectedData,
  setTemplateList,
  templateList,
  updateTemplate
}) => {
  var _errors$templateType, _errors$tittle, _errors$content;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    setError,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
  const {
    0: perPage,
    1: setPerPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: businessOwner,
    1: setBusinessOwner
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("businessOwner");
  const {
    0: keyData,
    1: setKeyData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    templateType: "",
    tittle: "",
    content: "" // hash: "",

  });
  const {
    0: list,
    1: setList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: listOfAttribute,
    1: setListOfAttribute
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: error,
    1: setErrors
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: selected,
    1: setSelected
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    templateTypeData();
    mode !== "view" && listOfKeyAttribut();

    if (selectedData) {
      setKeyData(keyData => _objectSpread(_objectSpread({}, keyData), {}, {
        templateId: selectedData._id,
        templateType: selectedData.templateType,
        tittle: selectedData.tittle,
        content: selectedData.content
      }));
      setValue("templateId", selectedData._id);
      setValue("templateType", selectedData.templateType);
      setValue("tittle", selectedData.tittle);
      setValue("content", selectedData.content);
    }
  }, []);

  const handleAttribute = attr => {
    let arr = selected;
    let values = [...arr, attr];
    setSelected([...arr, attr]);
    let contentString = values.join(" ");
    let messageValue = keyData.content + contentString;
    setKeyData(keyData => _objectSpread(_objectSpread({}, keyData), {}, {
      content: messageValue
    }));
    contentString = "";
    setSelected([]);
  };

  const onSubmit = async () => {
    keyData.addBy = localStorage.role;
    setIsLoading(true);
    const response = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_4__/* .addUpdateTemplateService */ .zC)(keyData);
    let newTemplateList = [];

    if (response.code == 200) {
      setIsLoading(false);
      closeModal();

      if (mode === "update") {
        updateTemplate(response.result);
      } else {
        newTemplateList.push(...templateList, mode === "update" ? keyData : response.result);
        setTemplateList(newTemplateList);
      }
    } else {}
  };

  const onError = async data => {
    console.log("ERROR!", data);
  };

  const templateTypeData = async () => {
    const response = await (0,_helpers_lia_services__WEBPACK_IMPORTED_MODULE_5__/* .template_type_list */ .um)(perPage, page);

    if (response.code == 200) {
      setList(response.result);
    } else {}
  };

  const handleOnchange = event => {
    event.persist();
    setKeyData(keyData => _objectSpread(_objectSpread({}, keyData), {}, {
      [event.target.name]: event.target.value
    }));
  };

  const listOfKeyAttribut = async () => {
    let listKeyData = {
      page: "1",
      perPage: "20"
    };
    let respList = await (0,_helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_4__/* .listOfKeyAttributeService */ .bO)(listKeyData);

    if (respList.code === 200) {
      setListOfAttribute(respList.result);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customeTemplateModal)}  ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customeAccountModal)}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().modalHeader),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          class: "row mx-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            class: "col-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h4", {
              children: [mode === "update" && "Update Template", mode === "view" && `View Template`, mode === "add" && "Add New Template", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                style: {
                  color: "red"
                },
                children: error
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            class: "col-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().closeBtn),
              onClick: closeModal,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
                src: "/images/popupcross.svg"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {})]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        class: "row mx-0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          class: "col-8",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().genrateLink),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().genrateLinkSec),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customeFormGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
                    children: ["Template Type", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
                      className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ErrorMsg),
                      children: (_errors$templateType = errors.templateType) === null || _errors$templateType === void 0 ? void 0 : _errors$templateType.message
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("select", _objectSpread(_objectSpread({
                    class: "form-control",
                    name: "templateType",
                    size: "0",
                    value: keyData.templateType,
                    disabled: mode === "view" //   onChange={(e) => handleOnchange(e)}

                  }, register("templateType", {
                    // ...Register.Common,
                    required: {
                      value: true,
                      message: "Please select template type."
                    },
                    onChange: e => handleOnchange(e)
                  })), {}, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("option", {
                      value: "",
                      children: " Select"
                    }), list.map(data => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("option", {
                      value: data.typeName,
                      children: data.typeName
                    }, data.id))]
                  }))]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customeFormGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
                    children: ["Template Title", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
                      className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ErrorMsg),
                      children: (_errors$tittle = errors.tittle) === null || _errors$tittle === void 0 ? void 0 : _errors$tittle.message
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", _objectSpread(_objectSpread({
                    type: "text",
                    id: "contact",
                    name: "tittle",
                    value: keyData.tittle,
                    readOnly: mode === "view" //   onChange={(e) => handleOnchange(e)}

                  }, register("tittle", {
                    // ...Register.Common,
                    required: {
                      value: true,
                      message: "Please enter title."
                    },
                    onChange: e => handleOnchange(e)
                  })), {}, {
                    placeholder: "Title",
                    autoComplete: "off",
                    className: `form-control ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stepbarInput)}`
                  }))]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customeFormGroup)}`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
                    children: ["Content", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("small", {
                      className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ErrorMsg),
                      children: (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("textarea", _objectSpread(_objectSpread({
                    type: "text",
                    id: "content",
                    name: "content",
                    readOnly: mode === "view",
                    value: keyData.content
                  }, register("content", {
                    required: {
                      value: true,
                      message: "Please enter content."
                    },
                    onChange: e => handleOnchange(e)
                  })), {}, {
                    placeholder: "Write here",
                    className: `form-control ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stepbarInput)}`
                  }))]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  class: "row",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                    class: "col-12",
                    children: mode === "view" ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                      className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sendBtn) //   onClick={saveApiData}
                      ,
                      onClick: handleSubmit(onSubmit, onError),
                      children: [isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                        className: "fa fa-spinner fa-spin",
                        style: {
                          marginRight: "5px"
                        }
                      }), isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                        children: "Wait"
                      }), !isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                        children: mode === "update" ? "Update" : "Save"
                      })]
                    })
                  })
                })]
              })
            })
          })
        }), mode !== "view" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "col-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().templateSec),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h4", {
              children: "Agreements/Templates"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_8___default().templateList),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: "row mx-0",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  className: "col-12",
                  children: listOfAttribute.map((item, index) => {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                      onClick: () => handleAttribute(item.name),
                      style: {
                        cursor: "pointer"
                      },
                      children: item.name
                    }, index);
                  })
                })
              })
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemaplateModal);

/***/ }),

/***/ 9147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_business_owner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const ConfirmationModal = ({
  open,
  isLoading,
  closeModal,
  handleClick
}) => {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().customeAccountModal)}`,
      isOpen: open,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalHeader),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          class: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            class: "col-10"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().genrateLink),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().genrateLinkSec)} text-center`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
              className: "row text-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                class: "col-12 text-center mb-2",
                children: "Are you sure you want to make a duplicate tempate?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              class: "row text-center mt-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                class: "col-6 text-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sendBtn),
                  onClick: e => {
                    handleClick(e);
                    e.preventDefault();
                  },
                  style: {
                    float: "left"
                  },
                  children: [isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                    className: "fa fa-spinner fa-spin",
                    style: {
                      marginRight: "5px"
                    }
                  }), isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Wait"
                  }), !isLoading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    children: "Yes"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                class: "col-6 text-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sendBtn),
                  onClick: closeModal,
                  style: {
                    float: "right"
                  },
                  children: "No"
                })
              })]
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);

/***/ }),

/***/ 7602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3686);
/* harmony import */ var _styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const VisaStatusModal = ({}) => {
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: countryId,
    1: setCountryData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: status,
    1: setStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: msg,
    1: setMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const onChangeCountry = e => {
    setCountryData(e.target.value);
  }; //************************************ getting country list whose select status is true **************************************************************** */
  //************************************ on submit function  ******************************************************* */


  const handleSubmit = async e => {
    e.preventDefault();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      onClick: () => {
        setIsModalOpen(true);
      },
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().SandBtn)} mt-0 mb-0`,
      children: "Add Visa Type"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: `${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customeModal)} ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customeMoneyModal)}  ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customeAccountModal)}`,
      isOpen: isModalOpen,
      style: {
        overflowY: "scroll"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        class: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modalHeader),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          class: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            class: "col-10",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
              children: "Add New VISA Status"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              style: {
                color: "red",
                textAlign: "center"
              },
              children: msg
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            class: "col-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
              style: {
                cursor: "pointer"
              },
              className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeBtn),
              onClick: () => {
                setIsModalOpen(false);
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                src: "/images/popupcross.svg"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("br", {})]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().genrateLink),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().genrateLinkSec),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
                class: "form-control",
                name: "country",
                size: "0",
                value: countryId,
                onChange: e => {
                  onChangeCountry(e);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                  value: "select",
                  children: "Submitted Status "
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                  value: "select",
                  children: "Working Status "
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("option", {
                  value: "select",
                  children: "Completed Status "
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: `form-group px-0 ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().customeFormGroup)}`,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                children: "VISA Status Title"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                type: "text",
                id: "title",
                name: "title",
                value: title,
                onChange: e => {
                  setTitle(e.target.value);
                },
                placeholder: "Visa Type",
                className: `form-control ${(_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().stepbarInput)}`
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              class: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                class: "col-12",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                  onClick: handleSubmit,
                  className: (_styles_customeModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sendBtn),
                  children: "Save"
                })
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisaStatusModal);

/***/ }),

/***/ 4966:
/***/ ((module) => {

// Exports
module.exports = {
	"DashboardpageWrap": "setup_DashboardpageWrap__5wlQ4",
	"pageWrap": "setup_pageWrap__LdixT",
	"contentWrapper": "setup_contentWrapper__2nUm3",
	"tableArea": "setup_tableArea__1kaWc",
	"Btn1": "setup_Btn1__2wiO7",
	"Btn2": "setup_Btn2__3JlG1",
	"Btn3": "setup_Btn3__1fXp9",
	"Btn4": "setup_Btn4__2GOPR",
	"Btn5": "setup_Btn5__K2Lsl",
	"BtnWithoutImg": "setup_BtnWithoutImg__343Og",
	"Nodata": "setup_Nodata__2Gzrg",
	"searchSection": "setup_searchSection__3ykMZ",
	"BtnGroup": "setup_BtnGroup__1sjT6",
	"btnBox": "setup_btnBox__1ztz4",
	"dropDown": "setup_dropDown__2VGF_",
	"dropDownBtn": "setup_dropDownBtn__2DN4F",
	"Arrow": "setup_Arrow__1C4pj",
	"dropDown1": "setup_dropDown1__2P_Sc",
	"pageDetailArea": "setup_pageDetailArea__3i8Br",
	"TopMenu": "setup_TopMenu__3RJOu",
	"active": "setup_active__2icmp",
	"rightPageDetail": "setup_rightPageDetail__a2pvU",
	"rightBox": "setup_rightBox__2r1RV",
	"ButtonGroup": "setup_ButtonGroup__Kl-bS",
	"SaveBtn": "setup_SaveBtn__20L83",
	"SandBtn": "setup_SandBtn__3nJpT",
	"templateBtnGroup": "setup_templateBtnGroup__3OVUl",
	"formArea": "setup_formArea__RDPre",
	"staffMemberStatus": "setup_staffMemberStatus__3mEAq",
	"titleSec": "setup_titleSec__3z8LR",
	"NameSec": "setup_NameSec__3HGnO",
	"profileImg": "setup_profileImg__2jbRB",
	"avatarUpload": "setup_avatarUpload__1eZbV",
	"avatarPreview": "setup_avatarPreview__2Cbrf",
	"NameDetail": "setup_NameDetail__3_Vg1",
	"fromGroup": "setup_fromGroup__2EATO",
	"required": "setup_required__20W-Q",
	"errorMsg": "setup_errorMsg__GG0LR",
	"CustomeTimeZone": "setup_CustomeTimeZone__K09ag",
	"fromGroupPhone": "setup_fromGroupPhone__7Q8uO",
	"visaStatus": "setup_visaStatus__3KLZA",
	"clientStatus": "setup_clientStatus__35g8f",
	"visaStatusDiv": "setup_visaStatusDiv__1TQk0",
	"CheckBox": "setup_CheckBox__2XHR4",
	"checkboxLabel": "setup_checkboxLabel__3rO8E",
	"submitBtn": "setup_submitBtn__1N-EX",
	"buttonGroup": "setup_buttonGroup__2fNdO",
	"searchingList": "setup_searchingList__22y-d"
};


/***/ })

};
;