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
    : ENV_FILE === "PRODUCTION_DIRECT"
    ? ""
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
    : ENV_FILE === "PRODUCTION_DIRECT"
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
    : ENV_FILE === "PRODUCTION_DIRECT"
    ? ""
    : "";
// "d2cportal/1.0.0/";
export const LOGIN_API =
  "";

export const USER_GET_URL =
  BASE_API_URL + COMMON_URL + "/ADMIN/Master/User/SelectAll";


const BASE_API_URL_ = "";
export const MOBILE_GET_URL = BASE_API_URL_ + "/PPL_BASIC_POSITION_DTL";

export const DEALER_GET_URL = "l";

export const CREATE_GET_URL = "";

const BASE_EL_API_URL = "";

export const ADD_AGENT_URL = BASE_EL_API_URL + "agent/user/create";

export const ADD_AGENT_SEARCH_URL = BASE_EL_API_URL + "agent/user/search";
