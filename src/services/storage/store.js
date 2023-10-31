import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Create reducers in the next step
import thunk from 'redux-thunk'; // Use for handling asynchronous actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
