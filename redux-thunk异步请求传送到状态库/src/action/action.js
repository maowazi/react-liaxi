import { getmove_type } from "./actionType";
import { fetch as fetchData } from "whatwg-fetch";
import {getmoveApi } from "../api";
const getMoveAction = () => {
    let action = (val) => ({
        type: getmove_type,
        val:val
    })
    return (dispatch) => {
        fetchData(getmoveApi)
            .then((res) => res.json())
            .then((data) => {
            dispatch(action(data))
        })
    }
}
export {
    getMoveAction
}