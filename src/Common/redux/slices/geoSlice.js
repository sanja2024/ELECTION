import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenHEADER } from "../../Url/ServerConfig";
import { toast } from "react-toastify";

export const createAgent = createAsyncThunk(
  "geo/createAgent",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const fetchZone = createAsyncThunk(
  "geo/fetchZone",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchRegion = createAsyncThunk(
  "geoList/fetchRegion",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchArea = createAsyncThunk(
  "geoList/fetchArea",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchBranch = createAsyncThunk(
  "geoList/fetchBranch",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchstage = createAsyncThunk(
  "geo/fetchstage",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const fetchproduct = createAsyncThunk(
  "geo/fetchproduct",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchvault = createAsyncThunk(
  "geo/fetchvault",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const fetchvaultbarcode = createAsyncThunk(
  "geo/fetchvaultbarcode",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user?.data?.list;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchcasehistory = createAsyncThunk(
  "geo/fetchcasehistory",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const createZone = createAsyncThunk(
  "geo/createZone",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 400 &&
        error.response.data.message === "Error While Authenticating"
      ) {
        window.location.reload();
        localStorage.clear();
        window.location.replace("/session");
      }
      throw error;
    }
  }
);
export const createRegion = createAsyncThunk(
  "geo/createRegion",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const createArea = createAsyncThunk(
  "geo/createArea",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const createBranch = createAsyncThunk(
  "geo/createBranch",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const updateZone = createAsyncThunk(
  "geo/updateZone",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.put(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const updateRegion = createAsyncThunk(
  "geo/updateRegion",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.put(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const updateArea = createAsyncThunk(
  "geo/updateArea",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.put(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;

      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const updateBranch = createAsyncThunk(
  "geo/updateBranch",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.put(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;

      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

// export const userPullList = createAsyncThunk(
//   "geo/userPullList",
//   async (userData, { dispatch }) => {

export const userPullList = createAsyncThunk(
  "geo/userPullList",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }
      if (user.data) {
        return user;
      } else if (!user.data) {
        toast.error(user.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return (user.data = {});
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data);
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);
export const fetchpreviewProduct = createAsyncThunk(
  "geo/fetchpreviewProduct",
  async (userData, { dispatch }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user?.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const AddNewProduct = createAsyncThunk(
  "geo/AddNewProduct",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      console.log(user, "sdslkmdskldm");
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user?.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      return rejectWithValue(error?.response?.data);
      // console.log(error,'errorwrw')
      // if (
      //   error?.response?.status === 400 &&
      //   error.response.data.message === "Error While Authenticating"
      // ) {
      //   window.location.reload();
      //   localStorage.clear();
      //   window.location.replace("/session");
      // }
      // throw error;
    }
  }
);

export const SaveNewProduct = createAsyncThunk(
  "geo/SaveNewProduct",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
      }

      if (user) {
        return user?.data;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data);
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const fetchUserList = createAsyncThunk(
  "geo/fetchUserList",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

export const fetchTranxID = createAsyncThunk(
  "geoList/fetchTranxID",
  async (userData, { dispatch }) => {
    try {
      const end = userData;
      const response = await axios.get(end, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");

      if (currentToken !== loginToken) {
        // window.location.href = "/already-login";
      }

      if (user) {
        return user;
      }

      if (response.data.error === "authError") {
        window.location.href = "/session";
      } else {
        console.error("errorMsg");
      }
    } catch (error) {
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }
      throw error;
    }
  }
);

const initialState = {
  zoneData: [],
  areaData: [],
  regioneData: [],
  branchData: [],
  zoneList: [],
  areaList: [],
  regioneList: [],
  branchList: [],
  zoneUpdateList: [],
  regionUpdateList: [],
  areaUpdateList: [],
  branchUpdateList: [],
  loading: "idle",
  errorDetails: null,
  error: null,
  stagedata: [],
  productdata: [],
  vaultdata: [],
  vaultbarcode: [],
  previewProductList: [],
  saveNewProductList: [],
  UserListData: [],
  addNewProductList: [],
  caseHistory: [],
  pullList: {},
  agentCreateData: [],
  fetchTranxIDList: [],
  // masterProduct
};
console.log("initialData", initialState.zoneData);

const geoSlice = createSlice({
  name: "geo",
  initialState,

  reducers: {
    clearUserPullData: (state) => {
      state.zoneData = [];
      state.areaData = [];
      state.regioneData = [];
      state.branchData = [];
      state.zoneList = [];
      state.areaList = [];
      state.regioneList = [];
      state.branchList = [];
      state.zoneUpdateList = [];
      state.regionUpdateList = [];
      state.areaUpdateList = [];
      state.branchUpdateList = [];
      state.loading = "idle";
      state.errorDetails = null;
      state.error = null;
      state.stagedata = [];
      state.productdata = [];
      state.vaultdata = [];
      state.vaultbarcode = [];
      state.previewProductList = [];
      state.saveNewProductList = [];
      state.UserListData = [];
      state.addNewProductList = [];
      state.caseHistory = [];
      state.pullList = {};
      state.agentCreateData = [];
      state.fetchTranxIDList = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userPullList.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(userPullList.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.pullList = action.payload;
      })
      // .addCase(userPullList.rejected, (state, action) => {
      //   console.log(action,'tettststs1')
      //   state.loading = "rejected";
      //   state.error = action.error.message;
      // })
      // .addCase(userPullList.rejected, (state, action) => {
      //   state.loading = 'rejected';
      //   state.error = action.error.message;
      //   if (action.error.name === 'HttpError') {
      //     console.log(action.error.status,'lkamdslksmdms')
      //     // Assuming HttpError object contains status code information
      //     state.statusCode = action.error.status; // Store the HTTP status code
      //   } else {
      //     state.statusCode = null; // Reset status code if it's not an HttpError
      //   }
      // })
      .addCase(userPullList.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
        state.statusCode = action.error.status;

        if (action.payload && action.payload.error) {
          state.errorDetails = action.payload.error;
        }
      })

      .addCase(fetchcasehistory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchcasehistory.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        console.log(action, "fulfilled");
        state.caseHistory = action.payload;
      })
      .addCase(fetchcasehistory.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchvaultbarcode.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchvaultbarcode.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.vaultbarcode = action.payload;
      })
      .addCase(fetchvaultbarcode.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchvault.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchvault.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.vaultdata = action.payload;
      })
      .addCase(fetchvault.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchproduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchproduct.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.productdata = action.payload;
      })
      .addCase(fetchproduct.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchstage.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchstage.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.stagedata = action.payload;
      })
      .addCase(fetchstage.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(createAgent.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createAgent.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.agentCreateData = action.payload;
      })
      .addCase(createAgent.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(fetchZone.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchZone.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.zoneData = action.payload;
      })
      .addCase(fetchZone.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchRegion.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchRegion.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.regioneData = action.payload;
      })
      .addCase(fetchRegion.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchArea.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchArea.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.areaData = action.payload;
      })
      .addCase(fetchArea.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(fetchBranch.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchBranch.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.branchData = action.payload;
      })
      .addCase(fetchBranch.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(createZone.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createZone.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.zoneList = action.payload;
      })
      // .addCase(createZone.rejected, (state, action) => {
      //   state.loading = "rejected";
      //   state.error = action.error.message;
      // })
      .addCase(createZone.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
        state.statusCode = action.error.status;

        if (action.payload && action.payload.error) {
          state.errorDetails = action.payload.error;
        }
      })

      .addCase(createRegion.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createRegion.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.regioneList = action.payload;
      })
      .addCase(createRegion.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(createArea.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createArea.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.areaList = action.payload;
      })
      .addCase(createArea.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(createBranch.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createBranch.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.branchList = action.payload;
      })
      .addCase(createBranch.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateZone.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateZone.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.zoneUpdateList = action.payload;
      })
      .addCase(updateZone.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateRegion.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateRegion.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.regionUpdateList = action.payload;
      })
      .addCase(updateRegion.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateArea.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateArea.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.areaUpdateList = action.payload;
      })
      .addCase(updateArea.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(updateBranch.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(updateBranch.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.branchUpdateList = action.payload;
      })
      .addCase(updateBranch.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(fetchpreviewProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchpreviewProduct.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.previewProductList = action.payload;
      })
      .addCase(fetchpreviewProduct.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(AddNewProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(AddNewProduct.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.addNewProductList = action.payload;
      })
      .addCase(AddNewProduct.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
        state.statusCode = action.error.status;

        if (action.payload && action.payload.error) {
          state.errorDetails = action.payload.error;
        }
      })
      // .addCase(AddNewProduct.rejected, (state, action) => {
      //   state.loading = "rejected";
      //   state.error = action.error.message;
      // })

      .addCase(SaveNewProduct.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(SaveNewProduct.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.saveNewProductList = action.payload;
      })
      // .addCase(SaveNewProduct.rejected, (state, action) => {
      //   state.loading = "rejected";
      //   state.error = action.error.message;
      // })
      .addCase(SaveNewProduct.rejected, (state, action) => {
        // console.log(action.payload.message,'action.error.message;')
        state.loading = "rejected";
        state.error = action.error.message;
        state.statusCode = action.error.status;

        if (action.payload && action.payload.error) {
          console.log(action.payload.error, "action.payload.error");
          state.error = action.payload.error;
        }
      })

      .addCase(fetchUserList.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        console.log(action, state, "action.payload");
        state.UserListData = action.payload;
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(fetchTranxID.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchTranxID.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.fetchTranxIDList = action.payload;
      })

      .addCase(fetchTranxID.rejected, (state, action) => {
        // console.log(action.payload.message,'action.error.message;')
        state.loading = "rejected";
        state.error = action.error.message;
        state.statusCode = action.error.status;

        if (action.payload && action.payload.error) {
          console.log(action.payload.error, "action.payload.error");
          state.error = action.payload.error;
        }
      });

    // fetchTranxID
  },
});
export const { reset, clearUserPullData } = geoSlice.actions;
export default geoSlice.reducer;
