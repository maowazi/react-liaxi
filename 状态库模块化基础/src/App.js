import React from 'react';
import { Provider } from "react-redux";
import store from "./store/store";
import One from "./components/one";
import Two from "./components/two";
class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <One />
                    <Two/>
                </div>
            </Provider>
        )
    }
}
export default App;
