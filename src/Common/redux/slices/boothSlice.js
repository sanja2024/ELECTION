import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenHEADER } from "../../Url/ServerConfig";
import { toast } from "react-toastify";

export const getBoothStatusList = createAsyncThunk(
    "booth/getBoothStatusList",
    async (reqParamData, { rejectWithValue }) => {
        try {

            const response = await axios.post(reqParamData?.endpoint, reqParamData?.payload, {
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



const initialState = {
    boothData: [],


};

const boothSlice = createSlice({
    name: "booth",
    initialState,

    reducers: {
        clearUserPullData: (state) => {
            state.boothData = [];



        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getBoothStatusList.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getBoothStatusList.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.boothData = action.payload;
            })
            .addCase(getBoothStatusList.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.error.message;
            })





    },
});
export const { reset, clearUserPullData } = boothSlice.actions;
export default boothSlice.reducer;
