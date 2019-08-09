import React from 'react';
import { HashRouter as HRouter, BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import Mine from "./components/mine"; 
import "./components/css/app.css";
class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return ( 
                <div>
                    <Home />
                    <List />
                    <Mine />
                </div> 
        )
    }
    
}
export default App;
