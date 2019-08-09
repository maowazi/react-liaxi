import React from "react";
import "./css/list.css";
export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        let { listdata } = this.props;
        return (
            <ul>
                {
                    listdata.map((item,index) => (
                        <li
                            key={item.value}
                            className={item.info === "ko"?"active":''}
                        >
                            {item.value}
                            <button onClick={this.handClick.bind(this, index)} style={{display:item.info === "ko"?"none":""}}>完成</button>
                        </li>
                    ))
                }
                <button onClick={this.handall.bind(this)}>全部</button><button onClick={this.handok.bind(this)}>完成</button><button onClick={this.handno.bind(this)}>未完成</button>
            </ul>
        )
    }
    handClick(index) {
        this.props.handchange(index)
    }
    handall() {
        this.props.filte("all")
    }
    handok() {
        this.props.filte("ko")
    }
    handno() {
        this.props.filte("no")
    }
}