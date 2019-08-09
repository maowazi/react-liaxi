import React from "react";
import {Link } from "react-router-dom";
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            goodslist: [
                { id: 1, goodsNmae: "香蕉", path: "list/detail" },
                { id: 2, goodsNmae: "苹果", path: "list/detail" },
                { id: 3, goodsNmae: "芒果", path: "list/detail" },
                { id: 4, goodsNmae: "荔枝", path: "list/detail" }
            ]
        }
    }
    render() {
        let { goodslist } = this.state;
        return (
            <div>
                <h1>选择你喜欢的水果:</h1>
                
            </div>
        )
    }
}
export default List;