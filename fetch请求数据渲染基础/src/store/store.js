import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import defalultState from "./reduser";
const Reduser = combineReducers({
    defalultState
})
const store = createStore(Reduser, applyMiddleware(reduxThunk));
export default store;