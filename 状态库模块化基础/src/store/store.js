import onereduser from "./onereduser";
import tworeduser from "./tworeduser";
import { createStore, combineReducers } from "redux";
const Reduser = combineReducers({
    onereduser,
    tworeduser
})
const store = createStore(Reduser);
export default store;
/**
 * combineReducers是合并状态库
 * createStore是创建状态库
 */