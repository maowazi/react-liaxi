import React from "react";
class Detail extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        let { id, name } = this.props.match.params;
        return (
            <div>
                <h1>你喜欢的水果是:</h1>
                <p>id是:{id}名字是:{name}</p>
            </div>
        )
    }
}
export default Detail;