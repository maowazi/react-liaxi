import React from 'react';
import One from "./component/one";
import Two from "./component/two";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            a:1
        }
    }
    
    render() {
        console.log("app render.....");
        let { a } = this.state;
        return (
            <div>
                <h1>app</h1>
                <p>{a}</p>
                <button onClick={this.handadd}>点击添加</button>
                <One />
                <Two/>
            </div>
        )
    }
    handadd = () => {
        this.setState({
            a:++this.state.a
        })
    }
}

export default App;
