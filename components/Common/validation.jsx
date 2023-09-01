import React from "react";

const style = ({
    // paddingTop: "6px",
    // paddingBottom: "6px",
    // padding:"0px",
    // fontSize: "12px"
    
})
const style_newsletter = ({
    paddingTop: "3px",
    paddingBottom: "3px",
    fontSize: "12px"
})
const alert = "alert alert-login"

export const validateName = (name) => {
    let nameRegex = /^[a-zA-Z ]+$/;
    // name = name?.trim();
    if (name === "" || name === undefined || name === null) {
        return { status: false, isDisabled: false, error: <div className={alert}>Please enter your Name. </div> };
    }
    else if (!nameRegex.test(name)) {
        return { status: false, isDisabled: false, error: <div className={alert}>Please provide valid name</div> };
    }
    else if (name.length < 2) {
        return { status: false, isDisabled: false, error: <div className={alert}>Please provide valid name</div> }
    }
    else {
        return { status: true, isDisabled: true, error: '' };
    }
}

// **************************************************




export const validateAddress = (name) => {
    let nameRegex = /^[a-zA-Z ]+$/;
    // name = name?.trim();
    if (name === "" || name === undefined || name === null) {
        return { status: false, isDisabled: false, error: <div className={alert}>Please enter your Address. </div> };
    }
    else if (!nameRegex.test(name)) {
        return { status: false, isDisabled: false, error: <div className={alert}>Please provide valid Address</div> };
    }
    else if (name.length < 5) {
        return { status: false, isDisabled: false, error: <div className={alert}>Please provide valid Address</div> }
    }
    else {
        return { status: true, isDisabled: true, error: '' };
    }
}


// ***************************************

export const validateEmail = (email) => {
    let emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;

    
    if (email === "" || email === undefined || email === null) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter Email ID.</div> };
    }
    else if (!emailRegex.test(email)) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid Email Address.</div> };
    }
   
    else {
        return { status: true, isDisabled: true, error: '' };
    }
}
export const validatePassword = (password) => {
    let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@^#$%&*? "])[a-zA-Z0-9^!@#$*%&?]{6,20}$/


    if (password === "" || password === undefined || password === null) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid password.</div> }
    }
    else if (!passwordRegex.test(password)) {
        return { isDisabled: false, error: "Password must be more than 6 characters with 1 uppercase & 1 number." };
    }
    else if (password.length < 6) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Password must contain 6 or more than 6 characters.</div> };
    }
    else {
        return { status: true, isDisabled: true, error: '' }
    }
}

export const validateNumber = (number) => {
    // let numberRegex = /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;

    // let numberRegex = /^[1-9][0-9]{9,12}$/;
    number = number.trim();
    if (number === "" || number === undefined || number === null) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter Phone number.</div> };
    }
    // else if (!numberRegex.test(number)) {
    //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid Phone Number.</div> };
    // }
    else {
        return { status: true, isDisabled: true, error: '' };
    }
}


export const validateDescription = (description) => {
    description = description.trim();
    if (description === "" || description === undefined || description === null) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Field is not Empty.</div> };
    }
    else if (description.length >= 1000) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Description must contain maximum 1000 characters.</div> };
    }
    else {
        return { status: true, isDisabled: true, error: '' };
    }
}

export const UnAuthorizedAccess = (code) => {
    // code = license.trim();
    if (code === 404) {
        return {
            status: false, error: <div className={alert} style={{ paddingBottom: "6px", paddingTop: "6px", fontSize: "12px" }}>
                User does not access
        </div>
        }
    }
    else {
        return { status: true, error: '' }
    }
}


export const validateDatepicker = (date) => {
    // let passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    // date = date.trim();

    if (date === "" || date === undefined || date === null) {
        return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid date.</div> }
    }
    // else if (!passwordRegex.test(password)) {
    //     return { status: false, error: "Please enter valid password." };
    // }
    // else if (password.length < 6) {
    //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Password must contain 6 or more than 6 characters.</div> };
    // }
    else {
        return { status: true, isDisabled: true, error: '' }
    }
}
export const validatePhone = (phone) => {
    // let passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    // date = date.trim();
        
        const phoneReg =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9/d{10}]*$/

        if(!phoneReg.test(phone) || phone.length <8 ){
            return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid Phone Number.</div> }
        }

    // if (phone === "" || phone === undefined || phone === null) {
    //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Please enter valid Phone Number.</div> }
    // }
    // else if (!passwordRegex.test(password)) {
    //     return { status: false, error: "Please enter valid password." };
    // }
    // else if (password.length < 6) {
    //     return { status: false, isDisabled: false, error: <div className={alert} style={style}>Password must contain 6 or more than 6 characters.</div> };
    // }
    // else if (  phone !== Number){
    //     return { status : false, isDisabled:false, error: <div className={alert} style={style}>  Number must contain 10 characters</div>}
    // }
    else {
        return { status: true, isDisabled: true, error: '' }
    }
}
export const validateLink = (phone) => {
    
}


