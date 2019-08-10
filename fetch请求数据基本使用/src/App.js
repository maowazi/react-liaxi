import React from 'react';
import Input from "./components/input";
import List from "./components/list";
import Tool from "./components/tool";
import Store from "./store/store";
import { Provider } from "react-redux";
import { fetch as fetchPolyfill } from "whatwg-fetch";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <Provider store={Store}>
                <div>
                    <Input />
                    <List />
                    <Tool />
                </div>
            </Provider>
        )
    }
    //请求基本用法,但这样请求数据是异步的对渲染有影响
    componentDidMount() {
        fetchPolyfill("/ajax/movieOnInfoList?token=")
            .then((res) => res.json() )
            .then((data) => {
            console.log(data)
        })
    }
}
export default App;
//需要在package.json文件里配置 "proxy": "http://m.maoyan.com"
