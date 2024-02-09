import { authHeader } from "../../Common/Route/ConfigRoute";
//ENV_FILE Value From ENV
export const ENV_FILE = process.env?.REACT_APP_BASE_ENV;

//based on condition BASE_API_URL Will  change
export const BASE_API_URL =
  ENV_FILE === "PRODUCTION_WSO2"
    ? ""
    : ENV_FILE === "UAT_WSO2"
    ? ""
    : ENV_FILE === "DEVELOPMENT_WSO2"
    ? ""
    : ENV_FILE === "UAT_DIRECT"
    ? ""
    : ENV_FILE === "DEVELOPMENT_DIRECT"
    ? ""
    : ENV_FILE === "IP_URL"
    ? "http://votertrends.tech:3001/"
    : "";

//based on condition Token Will  change
export const TOKEN =
  ENV_FILE === "PRODUCTION_WSO2"
    ? // ? ""

      ""
    : ENV_FILE === "UAT_WSO2"
    ? ""
    : ENV_FILE === "DEVELOPMENT_WSO2"
    ? ""
    : ENV_FILE === "UAT_DIRECT"
    ? ""
    : ENV_FILE === "DEVELOPMENT_DIRECT"
    ? ""
    : ENV_FILE === "IP_URL"
    ? ""
    : "";

//based on condition Token Will  change
export const tokenHEADER =
  TOKEN === ""
    ? {
        Authorization: TOKEN,
      }
    : {
        Authorization: TOKEN,
        // Custom: authHeader(),
      };

export const COMMON_URL =
  ENV_FILE === "PRODUCTION_WSO2"
    ? "HRAPI/1.0.0/api/v1"
    : ENV_FILE === "UAT_WSO2"
    ? "HRAPI/1.0.0/api/v1"
    : ENV_FILE === "DEVELOPMENT_WSO2"
    ? "HRAPI/1.0.0/api/v1"
    : ENV_FILE === "UAT_DIRECT"
    ? "HRAPI/1.0.0/api/v1/"
    : ENV_FILE === "DEVELOPMENT_DIRECT"
    ? ""
    : ENV_FILE === "IP_URL"
    ? ""
    : "";
// "d2cportal/1.0.0/";


export const USER_GET_URL =
  BASE_API_URL + COMMON_URL + "/ADMIN/Master/User/SelectAll";


const BASE_API_URL_ = "";
export const MOBILE_GET_URL = BASE_API_URL_ + "/PPL_BASIC_POSITION_DTL";

export const DEALER_GET_URL = "l";

export const CREATE_GET_URL = "";

const BASE_EL_API_URL = "";

export const ADD_AGENT_URL = BASE_API_URL + "agent/user/create";

export const ADD_AGENT_SEARCH_URL = BASE_EL_API_URL + "agent/user/search";

export const LOGIN_AUTH_URL = BASE_API_URL + "auth/login";

export const VERIFY_AUTH_URL = BASE_API_URL + "auth/verify/otp";

export const SAVEPASSWORD_AUTH_URL = BASE_API_URL + "auth/save/password";

export const LOGIN_API =BASE_API_URL + "auth/login";

export const BOOTH_API = BASE_API_URL + "booth/search/level";

export const ROLE_SEARCH_API = BASE_API_URL + "role/search";

export const MAPPING_CREATE_API = BASE_API_URL + "mapping/create";



