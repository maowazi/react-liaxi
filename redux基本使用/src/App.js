import React from 'react';
import Store from "./store/store";
class App extends React.Component {
    constructor() {
        super();
        this.state = Store.getState();               //state要的是一个对象Store.getState()返回的也是一个对象
        this.addAction = this.addAction.bind(this);
        // Store.subscribe(this.add.bind(this));老师的
    }
    render() {
        let { n} = this.state
        return (
            <div>
                <h1>{n}</h1>
                <button onClick={this.addAction}>点击加加</button>
            </div>
        )
    }
    addAction() {
        let action = {
            type : "ADDNUM"
        };
        Store.dispatch(action);
        this.setState(Store.getState());//自己用的方法
    }
    // add() {    老师用的方法          
    //     this.setState(Store.getState());
    // }
}
export default App;
