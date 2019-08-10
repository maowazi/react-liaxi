import React from "react";
import { connect } from "react-redux";
import { getMoveAction } from "../action/action";
class List extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        // let { list } = this.props;
        return (
            <div>
                <ul>
                    {/* {
                        list.map((item) => (
                            <li key={item.nm}>{item.nm}</li>
                        ))
                    } */}
                    <li>
                        <button onClick={this.props.getData.bind(this)}>点击获取数据</button>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount() {
        
        getMoveAction().payload
            .then((res) => {
                console.log(res)
            })
    }
}
const mapStateToProps = (state) => ({
    list: state.defaultList
})
const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getMoveAction())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);