// reducers/index.js
import { combineReducers } from "redux";
import postsReducer from "../slices/postsSlice";
import usersReducer from "../slices/usersSlice";
import geoReducer from "../slices/geoSlice";
import agentReducer from "../slices/agentSlice";
import surveyReducer from "../slices/surveySlice";
import boothReducer from "../slices/boothSlice";


// import commentsReducer from '../slices/commentsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  geo: geoReducer,
  agent: agentReducer,
  survey: surveyReducer,
  booth: boothReducer,



  // comments: commentsReducer,
});

export default rootReducer;
