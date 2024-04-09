import { useContract } from "wagmi";
import { INFURA_IPFS_BASE_URL, NFT_ABI,NFT_MARKET_PLACE_ABI } from "./constants";

export const removeLastChar = (str, operatorChar = "", additionChar = "") => {
    if (typeof str === "string") {
        str = str.trim();
        const length = str.length;
        for (let i = 0; i < length; i++) {
            const lastChar = str.charAt(str.length - 1);
            if (lastChar === operatorChar) {
                str = str.slice(0, -1);
            } else {
                break;
            }
        }
        str = `${str}${additionChar}`;
    }
    return str;
}

export const setCookie = (key, value, expiry) => {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

export const getCookie = (key) => {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

export const eraseCookie = (key) => {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}

export const toCaptalize = (str) => {
    if (str) { return str.charAt(0).toUpperCase() + str.slice(1) }
    return "";
}

export const IsJsonString = (str) => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}

export const formatSolidityError = (str) => {
    let message = "Something went wrong!";
    if (!str.trim()) return { message }
    if (typeof IsJsonString(str) === "object") return IsJsonString(str);

    var errorObjKeys = [];
    let errorObj = {};

    let firstIndexOfSimpleBrace = str.indexOf("(");
    let lastIndexOfSimpleBrace = str.indexOf(")");

    if (firstIndexOfSimpleBrace >= 0 && lastIndexOfSimpleBrace >= 0) {
        str = str.slice(firstIndexOfSimpleBrace + 1, lastIndexOfSimpleBrace);
        str = str.replace(/(\w+=)|(\w+ =)/g, function (matchedStr) {
            matchedStr = matchedStr.trim().slice(0, -1);
            errorObjKeys.push(matchedStr)
            return matchedStr.substring(0, matchedStr.length) + ":";
        });

        let splitTxt = str;
        for (let i = 0; i <= errorObjKeys.length; i++) {
            let key = errorObjKeys[i];
            if (typeof splitTxt !== "undefined") {
                let splitData = splitTxt.split(`${key}:`);
                if (i > 0) {
                    let data = splitData[0].trim() || "";
                    if (data.charAt(0) !== "{") {
                        data = data.slice(-1) === "," ? data.slice(0, -1) : data;
                    } else {
                        let splitText = data.slice(data.lastIndexOf("}") + 1).trim();
                        splitData[0] = splitText.charAt(0) === "," ? splitText.slice(1).trim() : splitText;
                        data = data.slice(0, data.lastIndexOf("}") + 1);
                    }
                    errorObj[errorObjKeys[i - 1]] = IsJsonString(data);
                }
                splitData = splitData.filter(data => data);
                splitTxt = i > 0 ? splitData[0] : splitData[splitData.length - 1];
            }
        }
        if (errorObj.hasOwnProperty("error") && typeof errorObj.error === "object") {
            let error = errorObj.error;
            error.message = error.message || message;
            delete errorObj.error;
            errorObj = {
                ...errorObj,
                ...error
            }
        }
        errorObj.message = errorObj.message || message;
    } else {
        errorObj.message = str;
    }
    if (errorObj.code === "ACTION_REJECTED") {
        errorObj.message = "You have reject the action!";
    }
    message = errorObj.message;
    message = message.replace("MetaMask Message Signature:", "")?.trim();
    message = message.replace("execution reverted:", "")?.trim();

    return {
        ...errorObj,
        message
    };
}

export const getKeyByValue = (value, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
}

export const followStepError = (slug, message, defaultModal) => {
    var newModal = {};
    var count = 0;
    for (const key in defaultModal) {
        if (Object.prototype.hasOwnProperty.call(defaultModal, key)) {
            var modalValue = defaultModal[key];
            if (slug === key) {
                modalValue = {
                    ...modalValue,
                    isError: true,
                    errorMessage: message || "Something went wrong!"
                };
            } else {
                const slugKey = getKeyByValue(slug, Object.keys(defaultModal)) || 0;
                if (count < slugKey) {
                    modalValue = {
                        ...modalValue,
                        isComplete: true
                    }
                }
            }
            newModal[key] = modalValue;
        }
        count++;
    }
    return newModal;
}

export const getIPFSBaseUrl = (url = "") => {
    if (!url) return "";
    const ipfsBaseUrl = INFURA_IPFS_BASE_URL.slice(-1) === "/" ? INFURA_IPFS_BASE_URL.slice(0, -1) : INFURA_IPFS_BASE_URL.trim();
    return `${ipfsBaseUrl}/${url}`;
}

export const GetNftMarketContract = () => {
    return useContract("0x844490F3A13F03f643e061e203381643bb1148a9", NFT_MARKET_PLACE_ABI);
};