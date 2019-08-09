import React from "react";
export default class Input extends React.Component{
    constructor() {
        super();
        this.state = {
            value:""
        }
    }
    render() {
        let { value } = this.state;
        return (
            <div>
                <input type="text" value={value} onChange={this.Inputchange.bind(this)} />
                <button onClick={this.handadd.bind(this)}>添加</button>
            </div>
        )
    }
    Inputchange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handadd() {
        this.props.hand(this.state.value)
        this.setState({
            value:""
        })
    }
}