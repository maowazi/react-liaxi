import React from "react";
const Err = () => (                  //定义一个错误页面组件
    <div>
        <h1>错误的蹦起来</h1>
    </div>
)
class Errde extends React.Component{    //错误组件
    constructor() {
        super();
        this.state = {
            flag:true
        }
    }
    render() {
        let {flag }  = this.state;
        return flag ? this.props.children : <Err />;            //return时如果没有错误就return子级(包裹在错误组件标签的app组件)
                                                                //没有用this.children可以用this.props.children拿到子级
                                                                //有错误就返回上面的错误页面
    }
    componentDidCatch() {                    //捕获错误的方法,有错误时让错误页面显示
        this.setState({
            flag:false
        })
    }
}
export default Errde;
/**
 * 正常情况下在开发阶段如果有错误,错误页面时显示不出来的会被脚手架报错页面给盖住,点击×关闭报错页面就可以看见自己写的错误页面了,同时要把捕获的错误发送给后台
 *  */