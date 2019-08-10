import React from "react";
import { connect } from "react-redux";
import {sendStatusAction } from "../action/action";
const List = (props)=> {
        let { status, list } = props
        list = list.filter((item) => {
            return status === "all" ? true : item.info === status; 
        })
        return (
            <div>
                <ul>
                    {
                        list.map((item) => (
                            <li
                                key={item.id}
                            >
                                {item.val}
                                {item.info === "over" && <button onClick={props.handKo.bind(this,item.id)}>玩成</button>}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
const mapStateToProps = (state) => ({
    list: state.defaultList,
    status:state.status
})
const mapDispatchToProps = (dispatch) => ({
    handKo(id) {
        dispatch(sendStatusAction(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);