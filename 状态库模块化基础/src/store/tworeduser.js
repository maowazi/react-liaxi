/**
 * redux定义规则
 * 1.必须定义默认的state
 * 2.必须是一个纯函数
 * 3.state是只可读不可改的
 */
const defaulestate = {
    n:1
}
const tworeduser = (state = defaulestate, action) => {
    switch (action.type) {
        case "TWO_ADD":
            return {
                n:++state.n
            }
    
        default:
            return state
    }
}
export default tworeduser;
