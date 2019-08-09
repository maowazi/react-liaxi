import React from "react";
import { connect } from "react-redux";
import { UpdateStatusAction} from "../action/action";
class Tool extends React.Component{
    constructor() {
        super();
        this.state = {
            btnlist: [
                { title: "全部", sta: "all" },
                { title: "完成", sta: "ko" },
                { title: "未完成", sta: "over" },
            ]
            
        }
    }
    render() {
        let { btnlist } = this.state;
        return (
            <div>
                {
                    btnlist.map((item) => (
                        <button
                            key={item.sta}
                            onClick={this.props.sendState.bind(this, item.sta)}
                        >
                            {item.title}
                        </button>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    
})
const mapDispatchToProps = (dispatch) => ({
    sendState(status) {
        dispatch(UpdateStatusAction(status))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Tool); 