import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Errde from "./components/err";                //错误页面

ReactDOM.render(
                    //所有组件页面都不处理错误时,错误会从下面抛到app再到错误组件
    <Errde>                  
        <App />
    </Errde>,
    document.getElementById('root'),
    () => {
        console.log("挂载成功!!")
    }
);

