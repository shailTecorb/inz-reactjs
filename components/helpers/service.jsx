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
const Access_Control_Allow_Origin_url = "https://inz-visa.herokuapp.com";
// import jstz from 'jstz';

// LOGIN SERVICES
export const login_service = async (email, password) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_LOGIN,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
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

// FORGOT SERVICES
export const forgot_password_service = async (email) => {
  let res = await axios.post(
    BASE_URL + API_URL.BUSINESS_OWNER_FORGOTPASSWORD,
    {
      email: email,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 403) {
      localStorage.clear();
      window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

// SIGNUP SERVICES

export const signup_service = async (email, password) => {
  let res = await axios.post(
    BASE_URL + API_URL.SIGNUP,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      localStorage.clear();
      window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const otp_service = async (email, otp) => {
  let res = await axios.post(
    BASE_URL + API_URL.OTP_VERIFY,
    {
      email: email,
      otp: otp,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // "timeZone": timezone.name(),
        deviceType: "web",
      },
    }
  );
  try {
    let response = res.data;
    if (response.code === 401) {
      // localStorage.clear()
      window.location.href = "/";
    } else {
    }
    return response;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};


