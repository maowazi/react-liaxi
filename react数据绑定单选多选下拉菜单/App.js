import React from 'react';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            a: 0,
            redou: "男",
            checkboxval: [],
            selectcheckd:"1902"
        }
        this.handChang = this.handChang.bind(this);
        this.checkChenge = this.checkChenge.bind(this);
        this.selectChenge = this.selectChenge.bind(this);
    }
    render() {
        let { redou, checkboxval, selectcheckd } = this.state;

        return (
            <div>
                <h1>app</h1>
                {this.state.a}
                <hr/>
                <label>
                    男 <input type='radio' value='男' checked={redou === "男"} onChange={this.handChang}/>
                </label>
                <label>
                    女 <input type='radio' value='女' checked={redou === "女"} onChange={this.handChang}/>
                </label>
                <div>你的择是：{redou}</div>
                <hr/>
                <label>
                    <input type="checkbox" value="喝酒" onChange={this.checkChenge}/>喝酒
                </label>
                <label>
                    <input type="checkbox" value="烫头" onChange={this.checkChenge} />烫头
                </label>
                <label>
                    <input type="checkbox" value="抽烟" onChange={this.checkChenge} />抽烟
                </label>
                <label>
                    <input type="checkbox" value="大保健" onChange={this.checkChenge} />大保健
                </label>
                <div>
                    <p>你的爱好是：</p>
                    <ul>
                        {
                            checkboxval.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <hr />
                <select value={selectcheckd} onChange={this.selectChenge}>
                    <option value="1902">1902</option>
                    <option value="1903">1903</option>
                    <option value="1904">1904</option>
                    <option value="1905">1905</option>
                    <option value="1906">1906</option>
                    <option value="1907">1907</option>
                </select>
                <p>你的班级是：{selectcheckd}</p>
            </div>
        )
    }
    componentDidMount() {
        this.setState({ a: this.state.a + 1 });
        this.setState({ a: this.state.a + 2 });
        this.setState({ a: this.state.a + 3 });
        setTimeout(() => {
            this.setState({ a: this.state.a + 2 })
        }, 0);
        this.setState({ a: this.state.a + 6 });
    }
    handChang(e) {
        let val = e.target.value;
        this.setState(() => ({
            redou:val
        }))
    }
    checkChenge(e) {
        let val = e.target.value;
        let arr = this.state.checkboxval;
        let flag = arr.includes(val);
        if (flag) {
            let index = arr.indexOf(val);
            arr.splice(index, 1);
        } else { 
            arr.push(val);
        }
        this.setState({
            checkboxval:arr
        })
        console.log(val)
    }
    selectChenge(e) {
        let val = e.target.value;
        this.setState({
            selectcheckd:val
        });
    }
}

export default App;
