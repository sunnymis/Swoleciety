import React from 'react';
import DayCard from '../DayCard/DayCard';
import UserService from '../../services/users.service';
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
    // UserService.getAllUsers();
    // UserService.getUser('user1');
    // UserService.getSingleWeek('user1', '020517');
    // UserService.getAllWeeks('user1');
     // UserService.updateDay('user1', '020517', '021117', 'glutes');
     // UserService.addDay('user1','022617', '022817', 'shoulder');
      UserService.deleteDay('user1', '022617', '022817');
      // UserService.addExercise('user1','022517', {
      //   name: 'Farmers Walk',
      //   set: 999999,
      //   reps: 10000,
      //   weight: 304832
      // });
    // UserService.updateExercise('user1', '022517',
    // {
    //   name: 'deadlift',
    //   reps: 5,
    //   set: 5,
    //   weight: 495,
    // },
    // {
    //   name: 'OHP',
    //   reps: 1,
    //   set: 2,
    //   weight: 999,
    // });
    // UserService.deleteExercise('user1', '022517',
    // {
    //   name: 'OHP',
    //   reps: 1,
    //   set: 2,
    //   weight: 999,
    // });


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
