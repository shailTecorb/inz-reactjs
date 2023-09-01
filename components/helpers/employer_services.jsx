import axios from "axios";
import { API_URL,BASE_URL } from "./api_url";
const ISSERVER = typeof window === "undefined";
let GUEST_TOKEN = "";
let SESSION_TOKEN = "";
if (!ISSERVER) {
  // SECURITY_TOKEN = localStorage.getItem("token")
  // GUEST_TOKEN = localStorage.g_token,
  SESSION_TOKEN = localStorage.token;
}

export const list_of_employers = async (data) => {
    let res = await axios.post(
      BASE_URL + API_URL.EMPLOYERS_LIST,
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
      if (response.code === 403) {
        localStorage.clear()
        window.location.href = "/";
      } else {
      }
      return response;
    } catch (error) {
      console.log("Error", error);
      return error;
    }
  };