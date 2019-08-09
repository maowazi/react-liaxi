import React, { Fragment} from "react";
import Header from "./header";
class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Fragment>
                <Header>
                    <p>&lt;</p>
                </Header>
                <h1>home</h1>
            </Fragment>
        )
    }
}
export default Home;