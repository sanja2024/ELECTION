import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenHEADER } from "../../Url/ServerConfig";
import { toast } from "react-toastify";
export const createUser = createAsyncThunk(
  "users/createUser",
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
      }else{
        // console.log(error?.response?.data,'sdsdsdsdsd')
        return rejectWithValue(error?.response?.data);  
      }
      throw error;
    }
  }
);

export const fetchUserProfiles = createAsyncThunk(
  "users/fetchUserProfiles",
  async (userData, { dispatch }) => {
    // const end = userData;
    // const response = await axios.get(end);

    // return response.data;
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

export const Resetuserlogin = createAsyncThunk(
  "users/Resetuserlogin",
  async (userData, { dispatch }) => {
    // const end = userData;
    // const response = await axios.get(end);

    // return response.data;
    try {
      const end = userData.endPoint;
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

export const rolerightsaccess = createAsyncThunk(
  "users/rolerightsaccess",
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


const setStageData = createAsyncThunk('users/setStageData');
const setTopData = createAsyncThunk('users/setTopData');
const setCalenderData = createAsyncThunk('users/setCalenderData');

export const dashboardDetails = createAsyncThunk(
  'users/dashboardDetails',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const end = userData.endPoint;
      const endpoints = userData?.Types;
      const requests = endpoints.map((endpoint) =>
      axios.post(`${end}?type=${endpoint}`, userData.payload, {
          headers: tokenHEADER,
        })
      );

      const responses = await Promise.all(requests);

      const userDataArray = responses.map((response) => response.data);

      dispatch(setStageData(userDataArray[0]));
      dispatch(setTopData(userDataArray[1]));
      dispatch(setCalenderData(userDataArray[2]));

      // Return a combined result or some indicator of success
      return userDataArray;
    } catch (error) {
      // Handle errors
      // console.error('Error:', error);
      // return rejectWithValue(error?.response?.data);
      if (
        error?.response?.status === 401 &&
        error.response.data.message == "Unauthorized"
      ) {
        localStorage.clear();
        window.location.reload();
      }else{
        // console.log(error?.response?.data,'sdsdsdsdsd')
        // return rejectWithValue(error?.response?.data);
        if (
          error?.response?.status === 401 &&
          error.response.data.message == "Unauthorized"
        ) {
          localStorage.clear();
          window.location.reload();
        }else{
          // console.log(error?.response?.data,'sdsdsdsdsd')
          return rejectWithValue(error?.response?.data);  
        }
      }
      throw error;
    }
  }
);

export const callFileViewer = createAsyncThunk(
  "users/callFileViewer",
  async (userData, { rejectWithValue }) => {
    try {
      const end = userData.endPoint;
      const response = await axios.post(end, userData.payload, {
        headers: tokenHEADER,
      });

      const user = response.data;
      const currentToken = user.current_token;
      const loginToken = localStorage.getItem("CUSTOMTOKEN");
// console.log(user,'useruseree')
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
      }else{
        // console.log(error?.response?.data,'sdsdsdsdsd')
        return rejectWithValue(error?.response?.data);  
      }
      throw error;
    }
  }
);


const initialState = {
  data: [],
  profilesData: [],
  accessRes: [],
  loading: "idle",
  error: null,
  reset: [],
  dashboardResult:[],
  FileViewData:[],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.data = [];
      state.profilesData = [];
      state.accessRes = [];
      state.loading = "idle";
      state.error = null;
      state.reset = [];
      state.dashboardResult = [];
      // state.FileViewData=[];
    },
    // reset: (state) => {
    //   state = initialState;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Resetuserlogin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(Resetuserlogin.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.reset = action.payload;
      })
      .addCase(Resetuserlogin.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
        state.statusCode = action.error.status;
      
        if (action.payload && action.payload.error) {
          state.errorDetails = action.payload.error;
        }
      })
      // .addCase(createUser.rejected, (state, action) => {
      //   state.loading = "rejected";
      //   state.error = action.error.message;
      // })
      .addCase(fetchUserProfiles.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        console.log("state", action);
        state.loading = "fulfilled";
        state.profilesData = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(rolerightsaccess.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(rolerightsaccess.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.accessRes = action.payload;
      })
      .addCase(rolerightsaccess.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      .addCase(dashboardDetails.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(dashboardDetails.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        const [topData, stageData, calenderData] = action.payload;
        // Update your state properties accordingly
        state.topData = topData;
        state.stageData = stageData;
        state.calenderData = calenderData;
      })
      .addCase(dashboardDetails.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })


      .addCase(callFileViewer.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(callFileViewer.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.FileViewData = action.payload;
      })
      .addCase(callFileViewer.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      })

      // FileViewer
  },
});
export const { reset, clearUserData } = usersSlice.actions;
export default usersSlice.reducer;
