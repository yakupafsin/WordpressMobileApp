import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Use for handling asynchronous actions

import rootReducer from "./reducers"; // Create reducers in the next step

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
