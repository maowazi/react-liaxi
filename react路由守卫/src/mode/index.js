import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
// 渲染组件的函数
export const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />{/* 退出登录组件 */}
            <ul>
                <li><Link to="/public">Public Page</Link></li>
                <li><Link to="/protected">Protected Page</Link></li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />  {/*Protected是一个h3标签 */}
        </div>
    </Router>
);
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async  
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
const AuthButton = withRouter(  // withRouter是在组件没有被router包裹时使用它可以使用路由方法，它接收一个组件，所以传入一个函数返回一个组件
    ({ history }) => fakeAuth.isAuthenticated ? // 拿到history对象，判断isAuthenticated是true或者false
        (                                       // 因为是默认是false所以走冒号后面的 你还没有登录
            <p>Welcome!{" "}                    {/*当是true时证明已经登录，显示退出按钮 */} 
                <button onClick={               // 点击此按钮调用括号里面的函数
                    () => {
                        fakeAuth.signout(       // fakeAuth调用signout方法里传递的回调函数回到根路径，同时修改isAuthenticated为false，此时AuthButton会执行显示你没有登录，同时PrivateRoute也会执行渲染登录按钮
                            () => history.push("/")
                        );
                    }
                }> Sign out 退出登录</button>
            </p>) : (
            <p>You are not logged in.你没有登录</p>)
);

const PrivateRoute = ({ component: Component, ...rest }) => {
    /*component: Component给前面字段换个名字  rest是剩下的参数，path路径 path="/protected"*/
    return <Route {...rest} render={            // 渲染组件并传递路径 path="/protected render渲染方式返回一个组件"
        props => fakeAuth.isAuthenticated ? (   // 传递进来的props 是应为render渲染组件没有那三个属性，所以要传递
            <Component {...props} />) : (       // Component 是组件<h3>Protected</h3> 把那三个属性结构传递进去
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> // 
            )}
    />
};
/**
 * PrivateRoute 是用来判断渲染那个组件
 * ...rest 传递进来的是一个路径path="/protected" 当想访问Protected这个页面时应该渲染那个组件
 * 首先判断isAuthenticated是真是假，默认是false，所以渲染冒号后面的就是登陆组件"/login"
 */
const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;
class Login extends React.Component {
    state = {
        redirectToReferrer: false
    };
    login = () => {
        fakeAuth.authenticate(      // 调用fakeAuth里的authenticate方法，此方法会调用传递进去的函数
            () => {
                this.setState({ redirectToReferrer: true });
            });
    };
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };  // 拿到from参数，因为默认是渲染login组件，此组件有传递的参数state
        const { redirectToReferrer } = this.state; // 默认redirectToReferrer是false
        if (redirectToReferrer) {   // 判断redirectToReferrer是真是假，默认是假，所以走下面的return
            return <Redirect to={from} />;
        }
        return (
            <div>
                <p>你好，你必须登录才能访问受保护页面 {from.pathname}</p>
                <button onClick={this.login}>Log in 登陆</button>
                {/* 当点击登陆按钮后调用login函数，然后fakeAuth执行authenticate里的回调函数修改redirectToReferrer为true 
                同时isAuthenticated也修改为true，所以上面的PrivateRoute就会走冒号前面的，因为Component本身传递就是h3标签所以渲染Protected*/}
            </div>
        );
    }
}