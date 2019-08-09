import React from 'react';
import Input from "./components/input";
import List from "./components/list";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            defaultarr:[],
            listdata:[]
        }
    }
    render() {
        let {listdata} = this.state
        return (
            <div id="app">
                <Input hand={this.handadd.bind(this)} />
                <List listdata={listdata} handchange={this.handchange.bind(this)} filte={this.filte.bind(this)}/>
            </div>
        )
    }
    handadd(val) {
        let obj = {
            value: val,
            info:"no"
        }
        let arr = this.state.defaultarr;
        arr.push(obj)
        this.setState({
            listdata:arr
        })
    }
    handchange(index) {
        let arr = this.state.defaultarr;
        arr.splice(index, 1, { ...arr[index], info: "ko" });
        this.setState({
            listdata:arr
        })
    }
    filte(params) {
        let arr = this.state.defaultarr;
        switch (params) {
            case "all":
                this.setState({
                    listdata:arr
                })
                break;
            case "ko":
                this.setState({
                    listdata: arr.filter((item) => item.info === params)
                })
                break;
            default:
                this.setState({
                    listdata: arr.filter((item) => item.info === params)
                })
                break;
        }
    }
}
export default App;
