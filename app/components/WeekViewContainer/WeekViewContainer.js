import React from 'react';
import DayCard from '../DayCard/DayCard';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';
import 'whatwg-fetch';

require('./WeekViewContainer.scss');


class WeekViewContainer extends React.Component {
  constructor() {
    super();
    this.renderDays = this.renderDays.bind(this);
    this.state = {
      weekData: [],
    };
  }
  componentDidMount() {
    fetch('/components/WeekViewContainer/test.json')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          weekData: json.week,
        });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  renderDays() {
    return this.state.weekData.map((day) => {
      return (
        <DayCard 
          day={day.day}
          title={day.title}
          date={day.date}
        />
      );
    });
  }
  render() {
    let days = this.renderDays(); 
    return (
      <div className="week-view-container">
        {days}
      </div>
    );
  }
}

WeekViewContainer.defaultProps = {
};

WeekViewContainer.propTypes = {

};


export default WeekViewContainer;
