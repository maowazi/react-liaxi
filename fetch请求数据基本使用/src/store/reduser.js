/**
 * redux规则
 * 1.必须定义默认state值
 * 2.必须返回一个纯函数 每次返回一个新的state
 * 3.state只可读不可修改
 */
import { addType, ListAddType, sendStatusType,UpdateStatusType } from "../action/actionType";
const deafultState = {
    inputVal: "",
    defaultList: [],
    status: "all"
}
let id = 1;
const reduser = (state = deafultState, action) => {
    switch (action.type) {
        case addType:
            return {
                ...state,
                inputVal: action.val
            }
        case ListAddType:
            let obj = {
                id: id++,
                val: state.inputVal,
                info: "over"
            }
            return {
                ...state,
                defaultList: [...state.defaultList, obj],
                inputVal: ""
            }
        case sendStatusType:
            return {
                ...state,
                defaultList: state.defaultList.map(item => {
                    return item.id === action.id ? {
                        ...item,
                        info: "ko"
                    } : item
                })
            }
        case UpdateStatusType:
            return {
                ...state,
                status:action.status
            }
        default:
            return state;
    }
}
export default reduser;