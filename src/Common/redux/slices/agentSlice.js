import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenHEADER } from "../../Url/ServerConfig";
import { toast } from "react-toastify";

export const createAgent = createAsyncThunk(
  "agent/createAgent",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData;
      const response = await axios.post(end?.endPoint, end?.payload, {
        // headers: tokenHEADER,
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
      // if (error.response?.data?.error) {
      //   toast.error(error.response?.data?.error, {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      // }
      //  if (
      //   error?.response?.status === 401 &&
      //   error.response.data.message == "Unauthorized"
      // ) {
      //   localStorage.clear();
      //   window.location.reload();
      // }
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      } else {
        // console.log(error?.response?.data,'sdsdsdsdsd')
        return rejectWithValue(error?.response?.data);
      }
      throw error;
    }
  }
);

export const agentSearch = createAsyncThunk(
  "agent/agentSearch",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData;

      let getApiUrl = end?.endPoint;

      const objString =
        "?" +
        new URLSearchParams(end?.payload).toString();
      getApiUrl += objString;

      const response = await axios.get(getApiUrl);

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
      // if (error.response?.data?.error) {
      //   toast.error(error.response?.data?.error, {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      // }
      //  if (
      //   error?.response?.status === 401 &&
      //   error.response.data.message == "Unauthorized"
      // ) {
      //   localStorage.clear();
      //   window.location.reload();
      // }
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      } else {
        // console.log(error?.response?.data,'sdsdsdsdsd')
        return rejectWithValue(error?.response?.data);
      }
      throw error;
    }
  }
);

export const getVisitor = createAsyncThunk(
  "agent/getVisitor",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData;

      let getApiUrl = end?.endpoint;

      const objString =
        "?" +
        new URLSearchParams(end?.payload).toString();
      getApiUrl += objString;

      const response = await axios.get(getApiUrl);

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
      // if (error.response?.data?.error) {
      //   toast.error(error.response?.data?.error, {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      // }
      //  if (
      //   error?.response?.status === 401 &&
      //   error.response.data.message == "Unauthorized"
      // ) {
      //   localStorage.clear();
      //   window.location.reload();
      // }
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      } else {
        // console.log(error?.response?.data,'sdsdsdsdsd')
        return rejectWithValue(error?.response?.data);
      }
      throw error;
    }
  }
);


const initialState = {
  agentCreateData: [],
  agentSearchData: [],
  visitorData: [],


};

const agentSlice = createSlice({
  name: "agent",
  initialState,

  reducers: {
    clearUserPullData: (state) => {
      state.agentCreateData = [];
      state.agentSearchData = [];
      state.visitorData = [];


    },
  },

  extraReducers: (builder) => {
    builder
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

      .addCase(agentSearch.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(agentSearch.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.agentSearchData = action.payload;
      })
      .addCase(agentSearch.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(getVisitor.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getVisitor.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.visitorData = action.payload;
      })
      .addCase(getVisitor.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      });


  },
});
export const { reset, clearUserPullData } = agentSlice.actions;
export default agentSlice.reducer;
