import { combineReducers } from "redux";

import sampleReducer from "./sampleReducer"; // Import your reducers

const rootReducer = combineReducers({
  sampleReducer, // Add your reducers here
});

export default rootReducer;
