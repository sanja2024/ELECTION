// reducers/index.js
import { combineReducers } from "redux";
import postsReducer from "../slices/postsSlice";
import usersReducer from "../slices/usersSlice";
import geoReducer from "../slices/geoSlice";
import agentReducer from "../slices/agentSlice";

// import commentsReducer from '../slices/commentsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  geo: geoReducer,
  agent: agentReducer,
  // comments: commentsReducer,
});

export default rootReducer;
