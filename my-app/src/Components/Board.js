import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Square from './Square';
class Board extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'666',
        }
    }
    render(){
        return (
            <div aa={this.state.value}>
                {this.state.value}
                <Square/>
            </div>
        )
    }
}
export default Board;