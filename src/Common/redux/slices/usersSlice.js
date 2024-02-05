import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  tokenHEADER
} from "../../Url/ServerConfig";
import { authHeader } from "../../../Common/Route/ConfigRoute";
export const createUser = createAsyncThunk('users/createUser', async (userData, { dispatch }) => {
  try {
    const end = userData.endPoint;
    let head;  // Define head variable outside the conditional blocks

    if (end === '') {
      head = {
        Authorization: '',
        Custom: authHeader(),
      }
    } else {
      head = tokenHEADER;
    }

    const response = await axios.post(end, userData.payload, {
      headers: head,
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
});

export const fetchUserProfiles = createAsyncThunk('users/fetchUserProfiles', async (/* parameters */) => {
  // Your API call logic here
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    profilesData: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    clearUserData: (state) => {
      state.data = [];
      state.profilesData = [];
      state.accessRes = [];
      state.loading = "idle";
      state.error = null;
      state.reset = [];
    },
    // reset: (state) => {
    //   state = initialState;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      })
      .addCase(fetchUserProfiles.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.profilesData = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message;
      });
  },
});
export const { reset, clearUserData } = usersSlice.actions;
export default usersSlice.reducer;
