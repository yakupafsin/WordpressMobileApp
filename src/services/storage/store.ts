import rootReducer, { RootState } from "@storage/reducers";
import { createStore, applyMiddleware, Store } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";

// Define the store type
export type AppStore = Store<RootState>;

// Define the dispatch type
export type AppDispatch = ThunkDispatch<RootState, void, any>;

const store: AppStore = createStore(rootReducer, applyMiddleware(thunk));

export default store;
