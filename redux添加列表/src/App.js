import React from 'react';
import Input from "./components/input";
import List from "./components/list";
import Tool from "./components/tool";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }     
    }
    render() {
        return (
            <div>
                <Input />
                <List />
                <Tool />
            </div>
        )
    }
}
export default App;
