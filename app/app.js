import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'; 
import WeekViewContainer from './components/WeekViewContainer/WeekViewContainer';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';

require('./style/base.scss');
require('./app.scss');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={WeekViewContainer} />
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
