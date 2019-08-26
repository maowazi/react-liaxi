import React, { Component } from 'react';
import {connect } from "react-redux";
class Two extends Component {
    render() {
        return (
            <div>
                two
                <h1>two状态库数据{this.props.n}</h1>
                <button onClick={this.props.twoadd.bind(this)}>点击加加</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    n: state.tworeduser.n
})
const mapDispatchToProps = (dispatch) => ({
    twoadd() {
        let twoaction = {
            type:"TWO_ADD"
        }
        dispatch(twoaction)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Two)