import React from 'react';
import List from "./components/list"; 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
                <div>
                    <List />
                </div>
        )
    }
}
export default App;
