import { getmove_type } from "./actionType";
import { fetch as fetchData } from "whatwg-fetch";
import {getmoveApi } from "../api";
const getMoveAction = () => ({
    type: getmove_type,
    payload: new Promise((resolve,reject) => {
        fetchData(getmoveApi)
            .then((res) => res.json())
            .then((data) => {
            resolve(data)
        })
    })
})
export {
    getMoveAction
}