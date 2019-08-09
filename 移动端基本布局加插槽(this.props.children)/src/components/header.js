import React from "react";
class Header extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {
                    this.props.children
                }
                <h1 style={{textAlign:"center"}}>头部</h1>
            </div>
        )
    }
}
export default Header;