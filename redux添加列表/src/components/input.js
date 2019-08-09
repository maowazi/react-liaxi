import React from "react";
import Store from "../store/store";
class Input extends React.Component{
    constructor() {
        super();
        this.state = Store.getState();
        this.addList = this.addList.bind(this)
    }
    render() {
        let {inputVal } = this.state;
        return (
            <div>
                <input type="text" value={inputVal} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addList}>添加</button>
            </div>
        )
    }
    inputChange(event) {
        let action = {
            type: "INPUT_CHANGE",
            val:event.target.value
        }
        Store.dispatch(action);
        this.setState(Store.getState())
    }
    addList() {
        let { inputVal } = this.state;
        let action = {
            type: "ADD_LIST",
            val: inputVal
        }
        Store.dispatch(action);
        this.setState(Store.getState())
    }
}
export default Input;