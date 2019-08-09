import React from "react"; 
class Mine extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        // "123".push(4)             //此处有错误不做处理,错误会一层层的向外抛出
        return (
            <div>
                <h1>mine</h1> 
            </div>
        )
    }
}
export default Mine;