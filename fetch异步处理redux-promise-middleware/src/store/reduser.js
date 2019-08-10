/**
 * redux规则
 * 1.必须定义默认state值
 * 2.必须返回一个纯函数 每次返回一个新的state
 * 3.state只可读不可修改
 */
import {  } from "../action/actionType";
const deafultState = {
    defaultList: []
}
const reduser = (state = deafultState, action) => {
    console.log(action)
    switch (action.type) {
        case "GET_MOVE_FULFILLED":
            return {
                ...state,
                defaultList: action.payload.movieList
            }
        default:
            return state;
    }
}
export default reduser;