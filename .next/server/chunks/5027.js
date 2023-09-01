"use strict";
exports.id = 5027;
exports.ids = [5027];
exports.modules = {

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ Register)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Common/Constants/ErrorMessage.js


const ErrorSec = ({
  style,
  errorMsg
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: style.ErrorMsg,
    children: /*#__PURE__*/_jsx("span", {
      children: errorMsg
    })
  });
};

/* harmony default export */ const ErrorMessage = ((/* unused pure expression or super */ null && (ErrorSec)));
const ErrorMessage_ErrorMessage = {
  Email: {
    EmailEmptyError: "Please enter email",
    EmailAddressErrors: "An email address must contain a single @ ",
    EmailAddressValidErrors: "Please enter valid email. ",
    EmailInvalidErrors: "The domain portion of the email address is invalid"
  },
  Phone: {
    PhoneError: "Please enter number",
    PhoneNumberError: "Phone number must be numbers only",
    PhoneInvalidError: "It is invalid phone number"
  },
  Name: {
    NameEmptyError: "Please enter the name",
    NameError: "Please provide valid name.",
    NameErrorWithNumber: "Name must contain alpha characters only."
  },
  Address: {
    AddressEmptyError: "Please enter the addess" // NameError: "Please provide valid name.",
    // NameErrorWithNumber: "Name must contain alpha characters only."

  },
  CompanyName: {
    CompanyNameEmptyError: "Please enter the company name",
    CompanyNameError: "Please provide valid company name.",
    CompanyNameErrorWithNumber: "Name must contain alpha characters only."
  },
  NZBN: {
    NZBNEmptyError: "Please enter the NZBN or ABN number",
    NZBNError: "Please provide valid name.",
    NZBNErrorWithLength: "Too Many Numbers."
  },
  Password: {
    PasswordError: "Please enter the password",
    PasswordLengthError: "Your password must be between 8 and 30 characters",
    PasswordUppercaseError: " Password must be more than 6 characters with 1 uppercase & 1 number.",
    PasswordNotMatchOne: "Your password and confirm password do not match.",
    PasswordNotMatch: "Your New password and confirm New password do not match.",
    NewPasswordError: "Please enter the new password",
    NewPasswordUppercaseError: "New password must be more than 6 characters with 1 uppercase & 1 number.",
    ConfirmNewPasswordError: "Please enter the confirm password",
    ConfirmNewPasswordUppercaseError: "Confirm new password must be more than 6 characters with 1 uppercase & 1 number."
  },
  Passcode: {
    PasscodeError: "Please enter the password",
    PasscodeLengthError: "Your password must be between 4 and 30 characters" // PasswordUppercaseError: " Your password must contain at least one uppercase, number digit",
    // PasswordNotMatchOne: "Your password and confirm password do not match.",
    // PasswordNotMatch: "Your New password and confirm New password do not match."

  },
  Common: {
    PasscodeError: "Please ",
    PasscodeLengthError: "Your password must be between 4 and 30 characters"
  },
  LicenseNo: {
    LicenseError: "Please enter the license",
    LisenceValidateError: "Your License No. must be 9 digits" // PasswordUppercaseError: " Your password must contain at least one uppercase, number digit",
    // PasswordNotMatchOne: "Your password and confirm password do not match.",
    // PasswordNotMatch: "Your New password and confirm New password do not match."

  }
};
;// CONCATENATED MODULE: ./components/Common/validation/index.js

const Register = {
  Name: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Name.NameEmptyError
    },
    pattern: {
      value: /^[a-zA-Z ]+$/,
      message: ErrorMessage_ErrorMessage.Name.NameError
    }
  },
  Address: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Address.AddressEmptyError
    }
  },
  licenseNo: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.LicenseNo.LicenseError
    },
    minLength: {
      value: 9,
      message: ErrorMessage_ErrorMessage.LicenseNo.LisenceValidateError
    }
  },
  NZBN_Number: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.NZBN.NZBNEmptyError
    },
    maxLength: {
      value: 13,
      message: ErrorMessage_ErrorMessage.NZBN.NZBNErrorWithLength
    } // pattern: {
    //     value: /^[a-zA-Z ]+$/,
    //     message: ErrorMessage.Name.NameError
    // },

  },
  PhoneNumber: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Phone.PhoneError
    } // maxLength: {
    //     value: 13,
    //     message: ErrorMessage.Phone.PhoneError
    //   },
    // pattern: {
    //     value: /^[a-zA-Z ]+$/,
    //     message: ErrorMessage.Name.NameError
    // },

  },
  CompanyName: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.CompanyName.CompanyNameEmptyError
    } // maxLength: {
    //     value: 13,
    //     message: ErrorMessage.CompanyName.CompanyNameError
    //   },
    // pattern: {
    //     value: /^[a-zA-Z ]+$/,
    //     message: ErrorMessage.Name.NameError
    // },

  },
  Email: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Email.EmailEmptyError
    },
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      message: ErrorMessage_ErrorMessage.Email.EmailAddressValidErrors
    }
  },
  SecondaryEmail: {
    required: {
      value: false,
      message: ErrorMessage_ErrorMessage.Email.EmailEmptyError
    },
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      message: ErrorMessage_ErrorMessage.Email.EmailAddressValidErrors
    }
  },
  Password: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Password.PasswordError
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,
      message: ErrorMessage_ErrorMessage.Password.PasswordUppercaseError
    }
  },
  New_Password: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Password.NewPasswordError
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,
      message: ErrorMessage_ErrorMessage.Password.NewPasswordUppercaseError
    }
  },
  Confirm_New_Password: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Password.ConfirmNewPasswordError
    },
    pattern: {
      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,
      message: ErrorMessage_ErrorMessage.Password.ConfirmNewPasswordUppercaseError
    }
  },
  Common: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Password.ConfirmNewPasswordError
    }
  },
  Address: {
    required: {
      value: true,
      message: ErrorMessage_ErrorMessage.Address.AddressEmptyError
    }
  }
};

/***/ })

};
;