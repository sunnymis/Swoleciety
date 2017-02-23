import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'; 
import WeekViewContainer from './components/WeekViewContainer/WeekViewContainer';
import App from './components/App/App';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';

require('./style/base.scss');
require('./app.scss');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WeekViewContainer}/>
    </Route>
  </Router>
  ),
  document.getElementById('root'),
);
/*
<div className="app-container">
  <div className="overlay" />
  <NavBar />
  <WeekViewContainer />
</div>
 */
