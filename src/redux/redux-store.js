import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./moviesReducer.js";

const reducers = combineReducers({
    moviesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;