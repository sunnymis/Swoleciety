import ReactDOM from 'react-dom';
import React from 'react';
import WeekViewContainer from './components/WeekViewContainer/WeekViewContainer';
import NavBar from './components/NavBar/NavBar';

require('./style/base.scss');
require('./app.scss');

ReactDOM.render(
  <div className="app-container">
    <div className="overlay"></div>
    <NavBar />
    <WeekViewContainer />
  </div>,

  document.getElementById('root'),
);
