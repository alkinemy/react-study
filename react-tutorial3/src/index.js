import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
 
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="articles" component={Articles} />
    </Router>, document.getElementById('root'));
