import React, { Component } from 'react';
import {connect } from "react-redux";
class One extends Component {
    render() {
        return (
            <div> 
                one 

                <h1>one状态库的数据{this.props.n}</h1>
                <button onClick = {this.props.add.bind(this)}>点击加加</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    n: state.onereduser.m
})
const mapDispatchToProps = (dispatch) => ({
    add() {
        let oneaction = {
            type:"ONE_ADD"
        }
        dispatch(oneaction)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(One)
