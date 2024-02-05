import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index"; // Create this file with your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
