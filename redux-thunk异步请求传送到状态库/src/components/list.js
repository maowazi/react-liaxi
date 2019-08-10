import React from "react";
import { connect } from "react-redux";
import { getMoveAction } from "../action/action";
class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.props.dispatch(getMoveAction())
        // 在此生命周期里触发请求和在componentDidMount里触发都可以,原则越早越好,getMoveAction只需要执行就好了,因为action已经在那边加入了
    }
    render() {
        return (
            <ol>
                {
                    this.props.list.map((item,index) => (
                        <li key={index}>{item.nm}</li>
                    ))
                }
            </ol>
        )
    }
    // componentDidMount() {
    //     this.props.dispatch(getMoveAction())
    // }
}
// 要想让数据进入状态库就必须用connect数据会发送到状态库,但不能写maoDispatchToProps参数和函数(有了它上面的dispatch就不能用了)
const mapStateToProps = (state) => ({
    list:state.defalultState.defaultList 
})
export default connect(mapStateToProps)(List);