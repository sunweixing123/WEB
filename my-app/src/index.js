import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Board from './Components/Board';
import Square from './Components/Square';
import Nav from './Components/Nav';
import Timer from './Components/Timer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <Router>
        <div>
            <Timer/>
            <Nav />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route path="/board" component={Board} />
            <Route path="/square" component={Square} />
        </div>
    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();
