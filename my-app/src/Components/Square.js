import React,{Component} from 'react';
import ReactDom from 'react-dom';
class Square extends Component {
    render(){
        return (
            <button onClick={()=>{alert(666)}}>
                点击{this.props.aa}
            </button>
        )
    }
}
export default Square;