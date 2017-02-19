import ReactDOM from 'react-dom';
import React from 'react';
import WeekViewContainer from './components/WeekViewContainer/WeekViewContainer';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';

require('./style/base.scss');
require('./app.scss');

ReactDOM.render(
  <div className="app-container">
    <Login />
  </div>,
  document.getElementById('root'),
);

/*
<div className="overlay"></div>
<NavBar />
<WeekViewContainer />
 */
