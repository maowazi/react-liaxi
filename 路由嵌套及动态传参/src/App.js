import React from 'react';
import {HashRouter as HRouter,BrowserRouter,Route,Link,NavLink,Switch,Redirect } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import Detail from "./components/detail";
import Mine from "./components/mine";
import "./components/css/app.css"; 
class App extends React.Component{
    constructor() { 
        super();
        this.state = {
            
        }
    }
    render() {  
        return (
            <HRouter>
                <div id="app">
                    <Route path="/home" component={Home} />
                    <Route path="/list" exact component={List} />
                    <Route path="/list/detail/:id/:name" component={Detail}/>
                    <Route path="/mine" component={Mine} />
                    <Redirect from="/" to="/home" />
                    <Redirect from="**" to="/home" />
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home">
                                首页
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/list">
                                列表
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine">
                                我的
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </HRouter>
        )
    } 
}
export default App;
