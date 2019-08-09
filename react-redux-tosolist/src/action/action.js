import { addType, ListAddType, sendStatusType, UpdateStatusType } from "./actionType";
const addAction = (val) => ({
    type: addType,
    val:val
})
const ListAddAction = {
    type: ListAddType
}
const sendStatusAction =(id)=>({
    type: sendStatusType,
    id:id
})
const UpdateStatusAction = (status) => ({
    type: UpdateStatusType,
    status:status
})
export {
    addAction,
    ListAddAction,
    sendStatusAction,
    UpdateStatusAction
}