import ReactDOM from 'react-dom';
import React from 'react';
import WeekViewContainer from './components/WeekViewContainer/WeekViewContainer';

require('./style/base.scss');

ReactDOM.render(
  <div className="app-container">
    <WeekViewContainer />
  </div>,

  document.getElementById('root'),
);
