import AES from 'crypto-js/aes'; // npm i crypto-js
import CryptoJS from "crypto-js"
import sign from "jwt-encode"
import jwt_decode from "jwt-decode";
const secret = 'INZLiveBO';

export const encryptJS = (dataString) => {
    if (!isNaN(dataString))
        dataString = (dataString.toString())
    var result
    try {
        result = AES.encrypt(dataString, 'INZLiveBO').toString().replace('+', 'aFaFa').replace('+', 'aFaFa').replace('+', 'aFaFa').replace('/', 'bFbFb').replace('=', 'cFcFc').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('/', 'bFbFb').replace('+', 'aFaFa').replace('+', 'aFaFa').replace('+', 'aFaFa');
        // console.log("Encrypted Done");
    } catch {
        result = false;
    }
    return result;
}

export const decryptJs = (dataString) => {
    console.log("DataString", dataString);
    var plaintext
    try {
        var str = dataString.toString().replace('aFaFa', '+').replace('aFaFa', '+').replace('aFaFa', '+').replace('bFbFb', '/').replace('cFcFc', '=').replace('bFbFb', '/').replace('bFbFb', '/').replace('bFbFb', '/').replace('bFbFb', '/').replace('bFbFb', '/').replace('aFaFa', '+').replace('aFaFa', '+').replace('aFaFa', '+');
        var bytes = AES.decrypt(str, 'INZLiveBO');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8)
        // console.log("Decryption Done");

    } catch {
        plaintext = false;
        // try {
        //     useRouter().replace("/Error_404")
        // } catch {
        //     plaintext = false;
        // }
    }

    return plaintext;
}




export const jwtEncode = (data) => {
    const jwt = sign(data, secret);
    console.log(jwt);
    return jwt;
}
export const jwtDecode= (token) => {
    var decoded = jwt_decode(token);

    console.log(decoded);
    return decoded;
}