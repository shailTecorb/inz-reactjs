import { ErrorMessage } from "../Constants/ErrorMessage";

export const Register = {
  Name: {
    required: {
      value: true,
      message: ErrorMessage.Name.NameEmptyError,
    },
    pattern: {
      value: /^[a-zA-Z ]+$/,
      message: ErrorMessage.Name.NameError,
    },
  },
  Address: {
    required: {
      value: true,
      message: ErrorMessage.Address.AddressEmptyError,
    },
  },
  licenseNo: {
    required: {
      value: true,
      message: ErrorMessage.LicenseNo.LicenseError,
    },
    minLength:{
      value:9,
      message: ErrorMessage.LicenseNo.LisenceValidateError,

    }
  },

  NZBN_Number: {
    required: {
      value: true,
      message: ErrorMessage.NZBN.NZBNEmptyError,
    },
    maxLength: {
      value: 13,
      message: ErrorMessage.NZBN.NZBNErrorWithLength,
    },
    // pattern: {
    //     value: /^[a-zA-Z ]+$/,
    //     message: ErrorMessage.Name.NameError
    // },
  },
  PhoneNumber: {
    required: {
      value: true,
      message: ErrorMessage.Phone.PhoneError,
    },
    // maxLength: {
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
      message: ErrorMessage.CompanyName.CompanyNameEmptyError,
    },
    // maxLength: {
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
      message: ErrorMessage.Email.EmailEmptyError,
    },
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      message: ErrorMessage.Email.EmailAddressValidErrors,
    },
  },
  SecondaryEmail: {
    required: {
      value: false,
      message: ErrorMessage.Email.EmailEmptyError,
    },
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      message: ErrorMessage.Email.EmailAddressValidErrors,
    },
  },
  Password: {
    required: {
      value: true,
      message: ErrorMessage.Password.PasswordError,
    },
    pattern: {
      value:
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,
      message: ErrorMessage.Password.PasswordUppercaseError,
    },
  },
  New_Password: {
    required: {
      value: true,
      message: ErrorMessage.Password.NewPasswordError,
    },
    pattern: {
      value:
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,
      message: ErrorMessage.Password.NewPasswordUppercaseError,
    },
  },
  Confirm_New_Password: {
    required: {
      value: true,
      message: ErrorMessage.Password.ConfirmNewPasswordError,
    },
    pattern: {
      value:
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/,
      message: ErrorMessage.Password.ConfirmNewPasswordUppercaseError,
    },
  },

  Common: {
    required: {
      value: true,
      message: ErrorMessage.Password.ConfirmNewPasswordError,
    },
  },
  Address: {
    required: {
      value: true,
      message: ErrorMessage.Address.AddressEmptyError,
    },
  },
};
