import React from "react";
import ReactDom from "react-dom";
class Model extends React.Component{
    el = document.createElement('div')
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return ReactDom.createPortal((
            <div>
                <h1>model</h1>
                <button onClick={this.props.onClos}>隐藏</button>
            </div>
        ),
            this.el
        )
    }
    componentDidMount() {
        document.querySelector("#bpp").appendChild(this.el)
    }
    componentWillUnmount() {
        document.querySelector("#bpp").removeChild(this.el)
    }
}
export default Model;
/**
 * Protals基本使用:
 * 正常情况下组件写在哪里就会显示在哪里,如果想让组件显示在另外的地方就要用到此方法
 * 首先必须要有ReactDom 然后在组件创建一个div标签,
 * 本组件return时return创建一个(createPortal) ReactDom.createPortal((Dom元素),创建的div),
 * 此方法的意思是把你写的这个dom元素放到创建的div里面拎走,
 * 然后在本组件挂载时给它找一个地方放着document.querySelector("#bpp").appendChild(this.el),
 * #bpp是在index.HTML里另外添加的一个元素,意思就是把它放到这个元素里,
 * 在本组件销毁时再把它给删除了
 */