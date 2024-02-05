import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenHEADER } from "../../Url/ServerConfig";


console.log("tokenHEADER",tokenHEADER)
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
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
          return user.DATA;
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

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
