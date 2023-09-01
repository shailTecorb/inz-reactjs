import axios from "axios"
import { API_URL, BASE_URL } from "./api_url"

const ISSERVER = typeof window !== undefined;
let GUEST_TOKEN = ""
let SESSION_TOKEN = ""
if (!ISSERVER) {
    // SECURITY_TOKEN = localStorage.getItem("token")
    GUEST_TOKEN = localStorage.g_token,
        SESSION_TOKEN = localStorage.token
}

// VIEW CLIENT VIEW_LIA_CLIENT
export const view_client_service = async (clientId) => {
    let res = await axios.post(BASE_URL + API_URL.VIEW_LIA_CLIENT, {
        "clientId":clientId,
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token

        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            // localStorage.clear()
            // window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error
    }
}


export const add_client_service = async (clientId, fname,mname,lname,email, title,country_Code,Pnumber,country,state,houseNo,street,saveasDraft,lat,long,address,permanentStreet,permanentHouseNo,permanentCountry,permanentState,permanantAddSameAsCurrent) => {
    let res = await axios.post(BASE_URL + API_URL.ADD_CLIENT, {
        "clientId":clientId,
        "firstName": fname,
        "middleName": mname,
        "lastName": lname,
        "email": email,
        "title": title,
        "phoneCountryCode":country_Code,
        "phone": Pnumber,
        "country": country,
        "state": state,
        "houseNo": houseNo,
        "street": street,
        "saveAsDraft": saveasDraft,
        "lat":lat,
        "long":long,
        "address":address,
        "permanentStreetAddress":permanentStreet,
        "permanentHouseNo":permanentHouseNo,
        "permanentCountry":permanentCountry,
        "permanentState":permanentState,
        "permanantAddSameAsCurrent":permanantAddSameAsCurrent,
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token

        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error
    }
}

export const genrateLink_client_service = async (clientId) => {
    let res = await axios.post(BASE_URL + API_URL.GENRATE_LINK, {
        "clientId":clientId,
        "type":"generateLink"
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token

        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error
    }
}

//   SEND LINK TO EMAIL

export const send_link_client_service = async (email,cc) => {
    let res = await axios.post(BASE_URL + API_URL.SEND_LINK_TO_EMAIL, {
        "email":email,
        "cc":cc,
        // "message":message
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token

        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error
    }
}
export const client_visaDetail_service = async ( visaCountry,visaType,visaExpiryDate,passportNumber,passportVisaExpiryDate,passportCountry,inzClientNo,saveAsDraft,permanentAddSameAsCurrent,clientId) => {
    let res = await axios.post(BASE_URL + API_URL.CLIENT_VISA_DETAILS, {
        "visaCountry": visaCountry,
        "visaType": visaType,
        "visaExpiryDate":visaExpiryDate,
        "passportNumber":passportNumber,  
        "passportExpiryDate":passportVisaExpiryDate,
        "passportCountry":passportCountry,
        "inzClientNumber": inzClientNo,
        // "familyMemberId":familyID,
        "draftPage":saveAsDraft,
        "permanentAddSameAsCurrent":permanentAddSameAsCurrent,
        "clientId":clientId
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error
    }
}
export const genrate_link = async (email,type) => {
    let res = await axios.post(BASE_URL + API_URL.GENRATE_LINK_FOR_CLIENT, {
        "email":email,
         "type":""
        //  liaAgent
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

export const client_setPassword_service = async (userId,password) => {
    let res = await axios.post(BASE_URL + API_URL.CLIENT_SET_PASSWORD, {
        "userId":userId,
         "password":password
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}
// ***************** add client basic details ***********************

export const lia_profile_update_service = async ( fname,mname,lname,email, title,phone,country,state,houseNo,street,) => {
    let res = await axios.post(BASE_URL + API_URL.ADD_CLIENT, {
        "firstName": fname,
        "middleName": mname,
        "lastName": lname,
        "email": email,
        "title": title,
        "phone": phone,
        "country": country,
        "state": state,
        "houseNo": houseNo,
        "street": street,
        "draftPage1": "true"
    }, {
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// *************************** add Client profile details ********************

export const add_client_profile_details = async (formdata) => {
    let res = await axios.post(BASE_URL + API_URL.CLIENT_PROFILE_DETAILS,formdata, {
    
        headers: {
            "Content-Type": "application/json",
            "deviceType": "web",
            "x-auth" : localStorage.token
        }
    })
    try {
        let response = res.data
        if (response.code === 401) {
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    } catch (error) {
        console.log("Error", error)
        return error

    }
}

// ******************************* LIST OF PARTNER   *********************************************

export const list_of_partner = async () =>{
    const res = await axios.post(BASE_URL + API_URL.LIST_OF_PARTNER,{
        "page":1,
        "perPage":20
    },{
        headers:{
            "Content-Type": "application/json",
            // "timeZone": timezone.name(),
            "deviceType": "web",
            "x-auth": localStorage.token   
        }
    })
    try{
        let response = res.data
        if(response.code === 403){
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    }catch (error){
        console.log(error, "error")
        return error
    }
}


// ******************************************   type of conviction  ***********************************************

export const typeOfConviction = async () =>{
    const res = await axios.post(BASE_URL + API_URL.TYPE_OF_CONVICTION_LIST,{
        "page":1,
        "perPage":20  
        
    }, {
        headers:{
            "Content-Type": "application/json",
            // "timeZone": timezone.name(),
            "deviceType": "web",
            "x-auth": SESSION_TOKEN   
        }
    })
    try{
        let response = res.data
        if(response.code === 403){
            localStorage.clear()
            window.location.href = "/"
        }
        return response
    }catch (error){
        console.log(error, "error")
        return error
    }
}
