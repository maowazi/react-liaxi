import React from 'react';
import List from "./components/list";
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
                    <List />
                </div>
            </Provider>
        )
    }
}
export default App;
