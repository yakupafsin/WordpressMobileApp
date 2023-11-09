import { combineReducers } from "redux";

import postReducer from "./posts"; 

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
