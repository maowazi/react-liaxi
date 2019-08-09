import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./tabar.css";
class Tabar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.children
                }
                <ul>
                    <li>
                        <NavLink to = "/home">
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
            </Fragment>
        )
    }
}
export default Tabar;