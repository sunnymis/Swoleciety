import ReactDOM from 'react-dom';
import React from 'react';
import WeekViewContainer from './components/WeekViewContainer/WeekViewContainer';
import ExerciseCardContainer from './components/ExerciseCardContainer/ExerciseCardContainer';
import App from './components/App/App';


require('./style/base.scss');
require('./app.scss');

ReactDOM.render((
  <App />
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
