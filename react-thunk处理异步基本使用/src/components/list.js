import React from "react";
import { connect } from "react-redux";
import {getMoveAction } from "../action/action";
class List extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul>
                    
                    <li>
                        <button onClick = {this.props.handdata.bind(this)}>点击获取数据</button>
                    </li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    movelist: state.defaultList
})
const mapDispatchToProps = (dispatch) => ({
    handdata() {
        
        dispatch(getMoveAction())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);