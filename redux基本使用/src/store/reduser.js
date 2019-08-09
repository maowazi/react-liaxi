/**
 * redux规则
 * 1.必须定义默认state值
 * 2.必须返回一个纯函数 每次返回一个新的state
 * 3.state只可读不可修改
 */
const deafultState = {
    n:9
}
const reduser = (state = deafultState, action) => {
    // let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "ADDNUM":
            return {        //此方法也是返回一个新的对象
                ...state,
                n:++state.n
            }
            break;
    
        default:
            break;
    }
    return state;
}
export default reduser;