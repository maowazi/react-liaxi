import React from "react";
import Store from "../store/store";
class List extends React.Component{
    constructor() {
        super();
        this.state = {
            list: Store.getState().defaultList,
            status: Store.getState().status
        }
    }
    render() {
        let list = this.state.list.filter((item) => (
            this.state.status === "all" ? item : item.info === this.state.status
        ));
        return (
            <div>
                <ul>
                    {
                        list.map((item) => (
                            <li
                                key={item.id}
                            >
                                {item.val}
                                {item.info === "over" && <button onClick={this.clickOk.bind(this,item.id)}>完成</button>}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    clickOk(id) {
        let action = {
            type: "CLICK_OK",
            id: id
        };
        Store.dispatch(action);
    }
    componentDidMount() {
        this.subscribe = Store.subscribe(() => {
            this.setState({
                list: Store.getState().defaultList,
                status: Store.getState().status
            })
        })
    }
    componentWillUnmount() {
        this.subscribe();
    }
}
export default List;