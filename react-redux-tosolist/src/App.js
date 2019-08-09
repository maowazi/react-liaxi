import React from 'react';
import Input from "./components/input";
import List from "./components/list";
import Tool from "./components/tool";
import Store from "./store/store";
import { Provider } from "react-redux";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <Provider store={Store}>
                <div>
                    <Input />
                    <List />
                    <Tool />
                </div>
            </Provider>
        )
    }
}
export default App;
