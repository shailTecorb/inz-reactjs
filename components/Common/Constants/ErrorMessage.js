const ErrorSec = ({ style, errorMsg }) => {
    return (
        <div className={style.ErrorMsg} >
            <span>{errorMsg}</span>
        </div>
    )
}
export default ErrorSec



export const ErrorMessage = {
    Email: {
        EmailEmptyError: "Please enter email",
        EmailAddressErrors: "An email address must contain a single @ ",
        EmailAddressValidErrors: "Please enter valid email. ",

        EmailInvalidErrors: "The domain portion of the email address is invalid",
    },
    Phone: {
        PhoneError: "Please enter number",
        PhoneNumberError: "Phone number must be numbers only",
        PhoneInvalidError: "It is invalid phone number",
    },
    Name: {
        NameEmptyError: "Please enter the name",
        NameError: "Please provide valid name.",
        NameErrorWithNumber: "Name must contain alpha characters only."
    },
    Address:{
        AddressEmptyError: "Please enter the addess",
        // NameError: "Please provide valid name.",
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
        NZBNErrorWithLength:  "Too Many Numbers."
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
        ConfirmNewPasswordUppercaseError: "Confirm new password must be more than 6 characters with 1 uppercase & 1 number.",

    },
    Passcode: {
        PasscodeError: "Please enter the password",
        PasscodeLengthError: "Your password must be between 4 and 30 characters",
        // PasswordUppercaseError: " Your password must contain at least one uppercase, number digit",
        // PasswordNotMatchOne: "Your password and confirm password do not match.",
        // PasswordNotMatch: "Your New password and confirm New password do not match."

    },
    Common: {
        PasscodeError: "Please ",
        PasscodeLengthError: "Your password must be between 4 and 30 characters",
 
    },
    LicenseNo: {
        LicenseError: "Please enter the license",
        LisenceValidateError: "Your License No. must be 9 digits",
        // PasswordUppercaseError: " Your password must contain at least one uppercase, number digit",
        // PasswordNotMatchOne: "Your password and confirm password do not match.",
        // PasswordNotMatch: "Your New password and confirm New password do not match."

    },
}
