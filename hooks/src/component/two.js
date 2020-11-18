import React,{useState} from "react";
const Two = () => {
    // let [massage, setmassage] = useState("jjj");
    // function fn() {
    //     setmassage("hhh");
    // }
    /**
     * 上面的代码解释
     * 函数式组件定义state的值是使用useState方法 此方法会返回一个数组 massage是定义state的字段名 jjj是定义state的默认值
     * setmassage是修改massage值得方法 在hhh会替换掉jjj
     */



    let [massage, setmassage] = useState({
        name:'xiaoming'
    });
    function fn() {
        setmassage({...massage,name : "mm"})
    }
    /**
     * 上面是修改对象类型的代码
     */
    return (
        <div>
            <h1>Two</h1>
            <p>{massage.name}</p>
            <button onClick={fn}>点击</button>
        </div>
    )
}
export default Two;