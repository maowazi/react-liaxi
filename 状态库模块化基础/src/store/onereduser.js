/**
 * redux定义规则
 * 1.必须定义默认的state
 * 2.必须返回一个纯函数
 * 3.state是只可读不可写的
 */
const defaultstate = {
    m:1
}
const onereduser = (state = defaultstate, action) => {
    switch (action.type) {
        case "ONE_ADD":
            return {
                m:++state.m
            }
    
        default:
            return state
    }
}
export default onereduser;