import React from "react";
import Store from "../store/store";
class Tool extends React.Component{
    constructor() {
        super();
        this.state = {
            btnlist: [
                { title: "全部", sta: "all" },
                { title: "完成", sta: "ko" },
                { title: "未完成", sta: "over" },
            ],
            status:Store.getState().status
        }
    }
    render() {
        let { btnlist, status } = this.state;
        return (
            <div>
                {
                    btnlist.map((item) => (
                        <button
                            key={item.sta}
                            onClick={this.sendState.bind(this, item.sta)}
                        >
                            {item.title}
                        </button>
                    ))
                }
            </div>
        )
    }
    sendState(sta) {
        let action = {
            type: "SEND_STATE",
            sta:sta
        }
        Store.dispatch(action);
    }
}
export default Tool; 