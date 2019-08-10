import React from "react";
import { fetch as fetchData } from "whatwg-fetch";
import {getmoveApi } from "../api";
class List extends React.Component{
    constructor() {
        super();
        this.state = {
            list: [],
            isShow:true
        }
    }
    render() {
        if (this.state.isShow) {
            return <h1>玩儿命加载中...</h1>
        } else {
            return <ol>
                {
                    this.state.list.map((item,index) => (
                        <li key={index}>
                            {item.nm}
                        </li>
                    ))
                }
            </ol>
        }
    }
    componentDidMount() {
        let thit = this;
        fetchData(getmoveApi)
            .then(res => res.json())
            .then((data) => {
                thit.setState({
                    list: data.movieList,
                    isShow:false
                }, () => {
                    // 此处可以获取到更新后的数据
                    console.log(this.state.list)
            })
            })
            .catch((err) => {
            console.log(err)
        })
    }
}

export default List;