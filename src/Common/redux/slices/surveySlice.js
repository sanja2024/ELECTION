import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenHEADER } from "../../Url/ServerConfig";
import { toast } from "react-toastify";

export const getTopic = createAsyncThunk(
    "survey/getTopic",
    async (reqParamData, { rejectWithValue }) => {
        try {

            const response = await axios.get(reqParamData?.endpoint, reqParamData?.payload, {
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

export const saveAnswer = createAsyncThunk(
    "survey/saveAnswer",
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
    topicData: [],
    answerRespData: [],

};

const surveySlice = createSlice({
    name: "survey",
    initialState,

    reducers: {
        clearUserPullData: (state) => {
            state.topicData = [];
            state.answerRespData = [];


        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTopic.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(getTopic.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.topicData = action.payload;
            })
            .addCase(getTopic.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.error.message;
            })
            .addCase(saveAnswer.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(saveAnswer.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.answerRespData = action.payload;
            })
            .addCase(saveAnswer.rejected, (state, action) => {
                state.loading = "rejected";
                state.error = action.error.message;
            })




    },
});
export const { reset, clearUserPullData } = surveySlice.actions;
export default surveySlice.reducer;
