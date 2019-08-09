import React from 'react';
import { HashRouter as HRouter, BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import Mine from "./components/mine";
import Layout from "./components/layout/tabar";
class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/list" component={List} />
                        <Route path="/mine" component={Mine} />
                        <Redirect from="**" to="/home" />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }

}
export default App;
