/**
 * redux规则
 * 1.必须定义默认state值
 * 2.必须返回一个纯函数 每次返回一个新的state
 * 3.state只可读不可修改
 */
const deafultState = {
    inputVal:"",
    defaultList: [],
    status:"all"
}
let id = 1;
const reduser = (state = deafultState, action) => {
    
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
                ...state,
                inputVal:action.val
           }
            break;
        case "ADD_LIST":
            let obj = {
                val: action.val,
                info: "over",
                id:id++
            }
            return {
                ...state,
                inputVal:"",
                defaultList:[...state.defaultList,obj]
            }
        case "CLICK_OK":
            return {
                ...state,
                defaultList: state.defaultList.map((item) => {
                    return item.id === action.id ? {
                        ...item,
                        info: "ko"
                    } : item 
                })
            }
        case "SEND_STATE":
            return {
                ...state,
                status:action.sta
            }
        default:
            break;
    }
    return state;
}
export default reduser;