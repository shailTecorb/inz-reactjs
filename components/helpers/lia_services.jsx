import axios from "axios"
import { API_URL, BASE_URL } from "./api_url"

const ISSERVER = typeof window === "undefined";
let GUEST_TOKEN = ""
let SESSION_TOKEN = ""
if (!ISSERVER) {
    // SECURITY_TOKEN = localStorage.getItem("token")
    GUEST_TOKEN = localStorage.g_token,
        SESSION_TOKEN = localStorage.token
}

export const manage_booking_service = async (title, country, visatype, meetingtype, paymentstatus, date, time, description) => {
    let res = await axios.post(BASE_URL + API_URL.CLIENT_VISA_DETAILS, {
        "title": title,
        "country": country,
        "visaType": visatype,
        "typeOfMeating": meetingtype,
        "paymentStatus": paymentstatus,
        "date": date,
        "time": time,
        "description": description
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error
    }
}

export const add_working_hour = async (day, startTime) => {
    let res = await axios.post(BASE_URL + API_URL.ADD_WORKING_HOUR, {
        "day": day,
        "startTime": startTime,
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

//  ADD NEW REMINDER 


export const add_reminder_service = async (date, time, user, title, description) => {
    let res = await axios.post(BASE_URL + API_URL.CLIENT_VISA_DETAILS, {
        "date": date,
        "time": time,
        "client": user,
        "title": title,
        "description": description
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}


export const add_template = async (templateTitle, role, content, templateType) => {
    let res = await axios.post(BASE_URL + API_URL.ADD_TEMPLATE, {
        "tittle": templateTitle,
        "addBy": role,
        "content": content,
        "templateType": templateType
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

export const template_type_list = async (perPage, page) => {
    let res = await axios.post(BASE_URL + API_URL.TEMPLATE_TYPE_LIST, {
        "perPage": perPage,
        "page": page
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}



export const edit_template_type = async (templateId, tempTitle, typeName) => {
    let res = await axios.post(BASE_URL + API_URL.EDIT_TEMPLATE_TYPE, {
        "templateTypeId": templateId,
        "title": tempTitle,
        "typeName": typeName
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// All  Template  List

export const all_template_list = async (perPage, page, addBy) => {
    let res = await axios.post(BASE_URL + API_URL.TEMPLATE_LIST, {
        "perPage": perPage,
        "page": page,
        "addBy": addBy
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

export const duplicate_template = async (role, templateId) => {
    let res = await axios.post(BASE_URL + API_URL.DUPLICATE_TEMPLATE, {
        "addBy": role,
        "templateId": templateId

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}


export const view_template = async (templateId, role) => {
    let res = await axios.post(BASE_URL + API_URL.VIEW_TEMPLATE, {
        "templateId": templateId,
        "addBy": role
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}


export const list_of_client_of_particular_lia = async ( perPage, page,search) => {
    let res = await axios.post(BASE_URL + API_URL.LIST_OF_CLIENT_OF_PARTICULAR_LIA, {
        "perPage":perPage,
        "page":page,
        "search":search
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}



export const advance_search = async (inputData, firstName, email, visaType, dob, perPage, page) => {
    let res = await axios.post(BASE_URL + API_URL.LIST_OF_CLIENT_OF_PARTICULAR_LIA, {
        "search": inputData,
        "firstName": firstName,
        "email": email,
        "visaType": visaType,
        "dob": dob,
        "perPage": perPage,
        "page": page,
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}


// set PassWord For LIA 


export const lia_set_password = async (id, password) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_SET_PASSWORD, {
        "userId": id,
        "password": password,


    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// LIST OF TASK  IN LIA WORKPLACE DATE WISE

export const lia_workplace_task_list = async (day,endDate) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_WORKPLACE_LIST_OF_TASK, {
        "type": day,
        "date":endDate

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// Lia Add New Task In workplace Page 


export const lia_workplace_add_new_task = async (date, startTime, endTime, title, description,taskFollowers) => {
    let res = await axios.post(BASE_URL + API_URL.ADD_NEW_TASK_LIA_WORKPLACE, {
        "date": date,
        "startTime": startTime,
        "dueTime": endTime,
        "tittle": title,
        "description": description,
        "taskFollowers":taskFollowers

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// LIA AGENT UPDATE PROFILE 

export const lia_agent_update_profile = async (image, name, email, gender, country_Code, phoneNo, country, landlineCountrycode, landlineNo, address, licenseNo, licenseExpiryDate, location, Profession, city, link,description) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_PROFILE_UPDATE, {
        "image": image,
        "fullName": name,
        "email": email,
        "expiryDate": licenseExpiryDate,
        "gender": gender,
        "phoneNumberCountryCode": country_Code,
        "phoneNumber": phoneNo,
        "country": country,
        "lineNumberCountryCode": landlineCountrycode,
        "landlineNumber": landlineNo,
        "address": address,
        "licenseNumber": licenseNo,

        "location": location,
        "myProfession": Profession,
        "city": city,
        "licenseNo": link,
        "about":description

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// All City Listing 


export const all_city_listing = async (countryId) => {
    let res = await axios.post(BASE_URL + API_URL.ALL_CITY_LIST, {
        "countryId": countryId
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// LIA SELECT ALL COUNTRY LIST 

export const country_list_for_lia = async (perPage, page) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_SELECT_COUNTRY_LIST, {
        "perPage": 250,
        "page": 1
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// UPDATE_COUNTRY_AFTER_LOGIN

export const country_update_for_lia = async () => {
    let res = await axios.get(BASE_URL + API_URL.UPDATE_COUNTRY_AFTER_LOGIN, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}


// UPDATE_VISATYPE_AFTER_LOGIN

export const visaTpe_update_for_lia = async () => {
    let res = await axios.get(BASE_URL + API_URL.UPDATE_VISATYPE_AFTER_LOGIN, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// LIA AGENT Add Country 

export const lia_agent_add_country = async (id) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_ADD_COUNTRY, {
        "countryId": id,

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}
// LIA AGENT LISTING OF VISA TYPE

export const lia_agent_list_of_visa_type = async (id) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_LIST_OF_VISATYPE, {
        "countryId": id,

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

//************************** */UPDATE LIA AGENT LISTING OF VISA TYPE*************************************8

export const update_lia_agent_list_of_visa_type = async (id) => {
    let res = await axios.post(BASE_URL + API_URL.NEW_LIA_AGENT_LIST_OF_VISATYPE, {
        "countryId": id,

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// LIA ADD VISA TYPE 
export const lia_agent_add_visa_type = async (visaList) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_ADD_VISA_TYPE, {
        "visaTypes":visaList

    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

//************************************* UPDATED  LIA ADD VISA TYPE  REQUEST ********************************
export const updated_lia_add_visa_request = async (data) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_AGENT_ADD_VISA_TYPE, 
        {...data}, 
        
        {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}
//********************* */ LIA LOGOUT ******************* 
export const lia_logout = async () => {
    let res = await axios.get(BASE_URL + API_URL.LIA_LOGOUT, {

        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            //localStorage.clear()
            //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

//*********************   get LIA AGENT ******************* 
export const getLiaAgent = async () => {
    let res = await axios.get(BASE_URL + API_URL.GET_LIA_AGENT, {

        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // //localStorage.clear()
            // //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

//*********************   GENERATE PDF FOR PRINT ******************* 
export const generatePdfForPrint = async () => {
    let res = await axios.post(BASE_URL + API_URL.GENERATE_PDF_FOR_PRINT, {

        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // //localStorage.clear()
            // //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}


//*********************  Working hour  slot timimg ******************* 
export const working_hour_slot_timimg = async (day,liaId) => {
    let res = await axios.post(BASE_URL + API_URL.WORKING_HOUR_SLOT, {
        "day":day,
        "liaAgentId":liaId,
        "date": new Date()
    },{
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // //localStorage.clear()
            // //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// COUNT API FOR LIA DASHBOARD

export const dashboard_count_services = async () => {
    let res = await axios.post(BASE_URL + API_URL.COUNT_FOR_DASHBOARD,{}, {

        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // //localStorage.clear()
            // //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// **********************************  LIA_SEND_EMAIL_TO_IMMITECH *************************************************************

export const send_email_to_emmitech = async (formData) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_SEND_EMAIL_TO_IMMITECH,formData, {

        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // //localStorage.clear()
            // //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

//******************************  LIA_SEND_BULK_EMAIL_TO_CLIENT  *********************************** */

export const send_bulk_email_to_client = async (formData) => {
    let res = await axios.post(BASE_URL + API_URL.LIA_SEND_BULK_EMAIL_TO_CLIENT,formData, {

        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth": SESSION_TOKEN
        }
    })
    try {
        let response = res.data
        if (response.code === 403) {
            // //localStorage.clear()
            // //window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}