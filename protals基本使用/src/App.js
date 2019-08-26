import React from 'react';
import Model from "./components/model";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            flag:false
        }
        this.handClick = this.handClick.bind(this)
    }
    render() {
        return (
            <div>
                <h1>app</h1>
                <button onClick = {this.handClick}>显示/隐藏</button>
                {this.state.flag && <Model onClos={() => {
                    this.setState({
                        flag:false
                    })
                }}></Model>}
                </div>
        )
    }
    handClick() {
        this.setState({
            flag: !this.state.flag
        })
    }
}
export default App;
