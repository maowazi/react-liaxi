import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise-middleware";
import defalultState from "./reduser";
const Reduser = combineReducers({
    defalultState
})
const store = createStore(Reduser,applyMiddleware(reduxPromise));
export default store;