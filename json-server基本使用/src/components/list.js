import React from "react";
import { fetch as fetchData } from "whatwg-fetch";
import axios from "axios";
class List extends React.Component{
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <ol>
                
            </ol>
        )
    }
    componentDidMount() {
        // 使用json-server时用axios好用,fetch有些功能用不了
        axios({
            url:"http://localhost:5000/user", 
            method: "get",
            data: {
                name: "大丽莉"
                    
                }
                
            })
            .then((data) => {
            console.log(data.data)
        })
    }
}
export default List;