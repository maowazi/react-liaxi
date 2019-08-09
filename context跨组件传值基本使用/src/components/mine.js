import React from "react";
import { Consumer } from "../context";
class Mine extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Consumer>
                {
                    (value) => {
                        return (
                            <div>
                                <h1>mine</h1>
                                <p>{value.a}</p>
                            </div> 
                        )
                    }
                }
                
            </Consumer>
        )
    }
}
export default Mine;