import axios from "axios";
import { BASE_URL } from "./api_url";

const ISSERVER = typeof window === "undefined";
// let SECURITY_TOKEN
let GUEST_TOKEN = ""
let SESSION_TOKEN = ""
if (!ISSERVER) {
    // SECURITY_TOKEN = localStorage.getItem("token")
    GUEST_TOKEN = localStorage.g_token,
        SESSION_TOKEN = localStorage.token
}
let GUEST_TOKEN_UNDEFINED = GUEST_TOKEN === "undefined" ? "" : GUEST_TOKEN
let SESSION_TOKEN_UNDEFINED = SESSION_TOKEN === "undefined" ? "" : SESSION_TOKEN


import jstz from 'jstz';
const timezone = jstz.determine();



export const Token = ({
    WITH_TOKEN: axios.create({
        baseURL: BASE_URL,
        method: "no-cors",
        headers: {
            // "sessionToken": SESSION_TOKEN_UNDEFINED,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "guestToken": GUEST_TOKEN_UNDEFINED,
            "deviceType": "web",
            "Access-Control-Allow-Headers": "Content-type",
            "Access-Control-Allow-Credentials": true,
            "timeZone": timezone.name()
        }
    }),

    WITH_TOKEN_TEST: axios.create({
        baseURL: BASE_URL,
        // baseURL:  BASE_URLBASE_URL,
        method: "no-cors",
        headers: {
            "sessionToken": SESSION_TOKEN_UNDEFINED,
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest',
            "Access-Control-Allow-Origin": "*",
            "guestToken": GUEST_TOKEN_UNDEFINED,
            "deviceType": "web",
            "timeZone": timezone.name()
            // "Access-Control-Allow-Headers": "Content-type",
            // "Access-Control-Allow-Credentials": true
        }
    }),
});

