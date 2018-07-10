import React,{Component} from 'react';
class Timer extends Component {
    testClick(){
        console.log('123');
    }
    render(){
        return(
            <div onClick={this.testClick}>123</div>
        )
    }
}
export default Timer;