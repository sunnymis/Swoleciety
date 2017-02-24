import React from 'react';
import DayCard from '../DayCard/DayCard';
import 'whatwg-fetch';

require('./WeekViewContainer.scss');


export default class WeekViewContainer extends React.Component {
  constructor() {
    super();
    this.renderDays = this.renderDays.bind(this);
    this.state = {
      weekData: [],
    };
  }
  componentDidMount() {
    fetch('/test.json')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          weekData: json.week,
        });
      }).catch((ex) => {
        console.error('parsing failed', ex);
      });
  }

  renderDays() {
    return this.state.weekData.map((day) => {
      return (
        <DayCard
          Link to="/exercise"
          day={day.day}
          title={day.title}
          date={day.date}
        />
      );
    });
  }
  render() {
    const days = this.renderDays();
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
