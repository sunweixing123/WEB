import React from 'react';
import ReactDOM from 'react-dom';

export default class Demo {
    constructor(props) {
        super(props)
        this.state = {
            name = 'zhangsan',
        }
    }

    componentWillMount() {

    }

    render() {
        const a = b;
        return (
            <div>
                {this.state.a}
                <Demo2>
                    {/* <...> */}
                </Demo2>
            </div>
        )
    }
}