import React,{useState,useEffect} from "react";
const One = () => {
    useEffect(() => {
        //此方法相当于以下两个生命周期 挂载和更新时会执行此处的代码
        //componentDidMont 挂载完成
        //componentDidUpdate 更新完成
        //此处的代码会在更新后执行
        return () => {
            //此方法相当于以下两个生命周期
            //componentWillUnmont 销毁 组件销毁时也会执行此处的代码 
            //此处的代码会在更新前执行
        }
    }, []);//此中括号里填写state的键名，检测此键名对应的值是否修改 如果修改了就会重新更新组件 相当于性能优化函数

    return (
        <div>
            <h1>one</h1>
        </div>
    )
}
export default One;