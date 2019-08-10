import React from "react";
import {connect } from "react-redux";
import { addAction,ListAddAction } from "../action/action";

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.addList = props.addList.bind(this)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.val} onChange={this.props.inputChange.bind(this)}/>
                <button onClick={this.addList}>添加</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    val: state.inputVal
})
const mapDispatchToProps = (dispatch) => ({
    inputChange(event) {
        dispatch(addAction(event.target.value))
    },
    addList() {
        dispatch(ListAddAction)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Input);