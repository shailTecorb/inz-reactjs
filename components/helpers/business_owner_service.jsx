import axios from "axios";
import { API_URL, BASE_URL } from "./api_url";

const ISSERVER = typeof window === "undefined";
let GUEST_TOKEN = "";
let SESSION_TOKEN = "";
if (!ISSERVER) {
  // SECURITY_TOKEN = localStorage.getItem("token")
  // GUEST_TOKEN = localStorage.g_token,
  SESSION_TOKEN = localStorage.token;
}
const Access_Control_Allow_Origin_url = "https://immitech.herokuapp.com/api/v1";
export const business_addNewStaff_service = async (
  passportNumber,
  passportCountry,
  passportExpireyDate,
  visaCountry,
  visaType,
  visaExpiryDate,
  clientNumber,
  saveasDraft
) => {
  let res = await axios.post(
    BASE_URL + API_URL.CLIENT_VISA_DETAILS,
    {
      permanantAddSameAsCurrent: "true",
      passportDetail: [
        {
          passportNumber: passportNumber,
          passportCountry: passportCountry,
          passportIssuedate: "passportIssuedate",
          passportExpireyDate: passportExpireyDate,
        },
      ],
      visaCountry: visaCountry,
      visaType: visaType,
      visaExpiryDate: visaExpiryDate,
      inzClientNumber: clientNumber,
      saveAsDraft: saveasDraft,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
export const business_addCountry = async (countryId) => {
  let res = await axios.post(BASE_URL + API_URL.ADD_COUNTRY,
    {
      countryId,
    },
     {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// COUNTRY LIST

export const business_allCountry_list = async (search) => {
  let res = await axios.get(BASE_URL + API_URL.ALL_COUNTRY, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ADMIN LIST OF COUNTRIES

export const admin_allCountry_list = async (search) => {
  let res = await axios.post(
    BASE_URL + API_URL.ADMIN_ALL_COUNTRY,
    {
      page: 1,
      perPage: 199,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// COUNTRY LIST  FOR LIA

export const lia_allCountry_list = async (search) => {
  let res = await axios.post(BASE_URL + API_URL.LIA_ALL_COUNTRY, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// Country Add

export const business_UpdateCountry = async (countries) => {
  let res = await axios.post(
    BASE_URL + API_URL.UPDATE_COUNTRY,
    {
      countries: countries,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//  ALL VISA LIST
``;
export const business_allvisalist_service = async () => {
  let res = await axios.get(BASE_URL + API_URL.BO_VISA_LIST, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403 || response.code === 400) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//  LIA VISA LIST

export const lia_allvisalist_service = async (countryId) => {
  let res = await axios.post(
    BASE_URL + API_URL.ALL_VISA_LIST,
    {
      countryId: countryId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403 || response.code === 400) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ******************* visa type for particular lia ********************

export const visalist_for_particular_lia = async () => {
  let res = await axios.get(
    BASE_URL + API_URL.BUSINESSOWNER_GET_ALL_ADD_VISA,
    {
      // "countryId": countryId,
      // "search": search,
      // "perPage": perPage,
      // "page": page
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": localStorage.token,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ADD VISA TYPE

export const business_add_visa_type = async (visaList) => {
  let res = await axios.post(
    BASE_URL + API_URL.UPDATE_VISA_TYPE,
    {
      visaTypes: visaList,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ADD VISA TYPE BY MODAL

export const business_add_visa_type_by_modal = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_ADD_VISA_BY_MODAL,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//  LIST OF ALL STAFFS
export const list_of_staff_service = async (page, perPage, role, search) => {
  let res = await axios.post(
    BASE_URL + API_URL.LIST_OF_ALL_STAFF,
    {
      pageNo: page,
      perPage: perPage,
      role: role,
      search: search,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// BUSINESSOWNER ADD STAFF

export const businees_owner_add_staff = async (formdata) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_ADD_STAFF,
    formdata,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,

        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
      // transformRequest: [function (data, headers) {
      //     return data;
      // }],
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// *********************BUSINESSOWNER UPDATE STAFF *********************************
//
export const businees_owner_update_staff = async (formdata) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_UPDATE_STAFF,
    formdata,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,

        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// LIST OF ROLE IN BUSINESS OWNER ADD STAFF

export const businees_owner_role_listing = async (perPage, page) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESSOWNER_ADD_STAFF_ROLELIST,
    {
      perPage: perPage,
      page: page,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": Access_Control_Allow_Origin_url,

        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//************************** FIRST TIME LIST OF APPOINTMENT *************************************

export const list_of_appointment = async () => {
  let res = await axios.post(
    BASE_URL + API_URL.LIST_OF_APPOINTMENT,
    {
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": localStorage.token,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//*************************************************************************** */

export const secondTimeAppointmentList = async () => {
  let res = await axios.get(
    BASE_URL + API_URL.SECOND_TIME_LIST_OF_APPOINTMENT,

    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": localStorage.token,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//  GET STAFF DATA

export const get_staff_data_services = async (staffId) => {
  let res = await axios.post(
    BASE_URL + API_URL.GET_STAFF_DATA,
    {
      staffId: staffId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const appointment_booking_mode = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.APPOINTMENT_BOOKING_MODE,
    {...data},
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// SIGN UP

export const business_owner_signup = async (data) => {
  delete data.captcha;
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_SIGNUP,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// VERIFY NZBN

// SIGN UP

export const verify_NZBN = async (NZBNumber) => {
  let res = await axios.post(
    BASE_URL + API_URL.VERIFY_NZBN,
    {
      NZBNumber: NZBNumber,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        // "x-auth": SESSION_TOKEN
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// OTP VERIFICATION

export const business_owner_otp_verification = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_OTP_VERIFICATION,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// RESEND OTP

export const business_owner_resend_otp = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.RESEND_OTP,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// Business Owner Logout

export const business_owner_logout = async () => {
  let res = await axios.get(BASE_URL + API_URL.BUSINESS_OWNER_LOGOUT, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// update password for business owner

export const business_owner_setPassword_service = async (userId, password) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_SET_PASSWORD,
    {
      userId: userId,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        // "x-auth" : SESSION_TOKEN
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// BUSINESS OWNER SIGN UP FORM

export const business_owner_sign_up_form = async (formdata) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_ADD_BUSINESS_SIGN_UP_FORM,
    formdata,
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//BUSINESS_OWNER_VIEW_STAFF

export const business_owner_view_staff = async (id) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_VIEW_STAFF,
    {
      staffId: id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// BUSINESS OWNER DASHBORD ALL LIST COUNTING

export const business_owner_dashbord_all_count = async (type, count) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_DASHBORD_ALL_COUNT,
    {
      type: type,
      count: count,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// Business Owner View Query

export const business_owner_view_all_query = async (status) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_DASHBORD_ALL_QUERY,
    {
      status: status,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// BUSINESS OWNER DASHBORD ALL PPI LIST

export const business_owner_view_all_ppi_list = async (perPage, page) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_DASHBORD_ALL_PPI_LIST,
    {
      perPage: perPage,
      page: page,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// Visa Status Notification ....

export const visa_status_notification = async (role) => {
  let res = await axios.post(
    BASE_URL + API_URL.VISA_STATUS_NOTIFICATION,
    {
      addBy: role,
      perPage: 3,
      page: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// visa status update notification

export const visa_status_notification_update = async (
  title,
  status,
  description,
  role,
  id
) => {
  let res = await axios.post(
    BASE_URL + API_URL.VISA_STATUS_NOTIFICATION_UPDATE,
    {
      title: title,
      visaStatus: status,
      description: description,
      addBy: role,
      statusNotificationId: id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// VISA STATUS LISTING API

export const visa_status_listing_api = async (id) => {
  let res = await axios.post(
    BASE_URL + API_URL.VISA_STATUS_NOTIFICATION_LIST_OF_VISA_STATUS,
    {
      visaTypeId: id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// visa status remove notification

export const visa_status_remove_notification = async (id, role) => {
  let res = await axios.post(
    BASE_URL + API_URL.VISA_STATUS_REMOVE_NOTIFICATION,
    {
      statusNotificationId: id,
      addBy: role,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// FOR REPORT AN ISSUE

export const report_an_issue = async (
  title,
  description,
  role,
  saveAsDraft
) => {
  let res = await axios.post(
    BASE_URL + API_URL.REPORT_AN_ISSUE,
    {
      title: title,
      description: description,
      createdBy: role,
      saveAsDraft: saveAsDraft,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// VIEW ALL REPORT

export const view_all_reports = async (reportId) => {
  let res = await axios.post(
    BASE_URL + API_URL.REPORT_VIEW,
    {
      reportId: reportId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// LIST  OF Reports and issues for lia

export const lia_reports_issues = async (status, inputData, page, perPage) => {
  let res = await axios.post(
    BASE_URL + API_URL.LIA_REPORTS_AND_ISSUES,
    {
      status: status,
      search: inputData,
      page: page,
      perPage: perPage,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// LIST  OF Reports and issues for business owner

export const business_owner_reports_issues = async (
  status,
  inputData,
  page,
  perPage
) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_REPORTS_AND_ISSUES,
    {
      status: status,
      search: inputData,
      page: page,
      perPage: perPage,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// FAQ FOR ALL

export const faq_for_all = async (page, perPage, role, inputData) => {
  let res = await axios.post(
    BASE_URL + API_URL.FAQ_FOR_ALL,
    {
      page: page,
      perPage: perPage,
      role: role,
      search: inputData,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// Business owener all client list
export const business_owner_all_client_list = async (page, perPage, search) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_ALL_CLIENT_LIST,
    {
      page: page,
      perPage: perPage,
      search: search,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// BUSINESS OWNER DASHBORD ALL LIA LISTV
export const business_owner_all_lia_list = async (perPage, page, search) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_ALL_LIA_LIST,
    {
      perPage: perPage,
      pageNo: page,
      search: search,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//GET  BUSINESS OWNER ALL INFORMATION

export const get_business_owner = async () => {
  let res = await axios.post(
    BASE_URL + API_URL.GET_BUSINESS_OWNER,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ******************* GET  ALL CiTIES ***********************

export const get_all_cities = async (countryId) => {
  let res = await axios.post(
    BASE_URL + API_URL.ALL_CITIES,
    {
      countryId: countryId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      // localStorage.clear()
      // window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ********* list of STATE for profile details client page *************
export const state_list = async (country) => {
  let res = await axios.post(
    BASE_URL + API_URL.LIST_OF_STATE,
    {
      countryId: country,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// ********* FORGOT PASSWORD FOR BUSINESS OWNER AND LIA  *************
export const forgot_password = async (id, password) => {
  let res = await axios.post(
    BASE_URL + API_URL.FORGOT_PASSWORD,
    {
      userId: id,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ********* SUBSCRIPTION LIST FOR BUSINESS OWNER  *************
export const subscription_list = async (perPage, page) => {
  let res = await axios.post(
    BASE_URL + API_URL.LIST_OF_SUBSCRIPTION,
    {
      perPage: perPage,
      page: page,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// ********* REPORT REASON FOR REPORT AND ISSUES   *************
export const booking_reason_list = async (perPage, page) => {
  let res = await axios.post(
    BASE_URL + API_URL.BOOKING_REASON,
    {
      perPage: perPage,
      page: page,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// :::::::::: PERMISSION TO ADMIN TO VIEW LIA DETAILS ::::::::::::::::::::

export const permission_to_view_lia = async (permission) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_PERMISSION_TO_VIEW_LIA,
    {
      permission: permission,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// :::::::::: BUSINESS owner  business type for signup form ::::::::::::::::::::

export const business_type = async (permission) => {
  let res = await axios.post(BASE_URL + API_URL.BUSINESS_OWNER_BUSINESS_TYPE, {
    headers: {
      "Content-Type": "application/json",
      // "timeZone": timezone.name(),
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 401) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerDashboard = async () => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_DASHBORD,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerDashboardGraph = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_DASHBORD_GRAPH,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerDashboardTaskList = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_DASHBORD_TASK_LIST,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesTypeList = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_TYPE_LIST,
    // { ...data },
    {
      perPage: 20,
      page: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerProfileDetails = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_GET_PROFILE,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerUpdateProfile = async (formdata) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_UPDATE_PROFILE,
    formdata,
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerCountryList = async (data) => {
  let res = await axios.get(BASE_URL + API_URL.BUSINESS_OWNER_COUNTRY_LIST, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerUpdateCountryList = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_UPDATE_COUNTRY_LIST,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerVisaList = async (data) => {
  // console.log(data,"dddddddddddda")

  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_VISA_TYPE_LIST, {
    "countryId": data
  }, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const businesOwnerUpdateVisaType = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_UPDATE_VISA_TYPE,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// ********************************** GET ADMIN APPOINTMENT MODE LIST *******************************************************************
export const adminAppointmentModeList = async (data) => {
  let res = await axios.post(BASE_URL + API_URL.ADMIN_LIST_OF_APPOINTMENT_MODE,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": localStorage.token,
      },
    });
  try {
    let response = res.data;
    if (response.code === 403) {
      // localStorage.clear();
      // window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// ********************************** GET APPOINTMENT MODE LIST *******************************************************************
export const businesOwnerAppointmentModeList = async (data) => {
  let res = await axios.get(BASE_URL + API_URL.BUSINESS_OWNER_APPOINTMENT_MODE_LIST, {
    headers: {
      "Content-Type": "application/json",
      deviceType: "web",
      "x-auth": SESSION_TOKEN,
    },
  });
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// ********************************** UPDATE APPOINTMENT MODE LIST *******************************************************************
export const businesOwnerUpdateAppointmentModeList = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_UPDATE_APPOINTMENT_MODE,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
// *********************************************************************************************************************
export const verifyNZBN = async (data) => {
  delete data.captcha
  let res = await axios.post(
    BASE_URL + API_URL.VERIFY_NZBN,
    { ...data },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        // "x-auth": SESSION_TOKEN
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //   localStorage.clear();
      //   window.location.href = "/";
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const addTaskDashboardBO = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.ADD_NEW_TASK_LIA_WORKPLACE,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      localStorage.clear()
      window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const addFollowersService = async (searchBy) => {
  let res = await axios.post(
    BASE_URL + API_URL.ADD_FOLLOWERS,
    {
      page: 1,
      perPage: 12,
      search: "",
      searchBy: searchBy
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      localStorage.clear()
      window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const BONotificatioStatusUpdate = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_UPDATE,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": localStorage.token,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //localStorage.clear()
      //window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const BONotificatioStatus = async () => {
  let res = await axios.get(
    BASE_URL + API_URL.BUSINEES_OWNER_DASHBORD_NOTIFICATION_SETTING_STATUS,
    {
      headers: {
        "Content-Type": "application/json",
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      //localStorage.clear()
      //window.location.href = "/"
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};


export const changePasswordService = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_CHANGE_PASSWORD,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};


// ____________________ Temaplate ___________________

export const getTemplateService = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_TEMPLATE_LIST,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
export const viewTemplateService = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_VIEW_TEMPLATE,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
export const addUpdateTemplateService = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_ADD_UPDATE_TEMPLATE,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
export const addDuplicateTemplateService = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_ADD_DUPLICATE_TEMPLATE,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const listOfKeyAttributeService = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINEES_OWNER_LIST_OF_KEY_ATTRIBUTE,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
//******************************************  UPDATE TASK API FOR BO AND LIA BOTH *********************************************** */

export const update_task_api = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.EDIT_TASK_FOR_BO_AND_LIA,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

//******************************************  GET TASK API FOR BO AND LIA BOTH *********************************************** */

export const get_task_api = async (data) => {
  let res = await axios.post(
    BASE_URL + API_URL.GET_PARTICULAR_TASK_FOR_BO_AND_LIA,
    {
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
        "x-auth": SESSION_TOKEN,
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      //   window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};