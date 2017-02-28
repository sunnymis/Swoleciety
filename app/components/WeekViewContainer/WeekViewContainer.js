import React from 'react';
import DayCard from '../DayCard/DayCard';
import UserService from '../../services/users.service';
import AuthService from '../../services/auth.service';
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
    // AuthService.getCurrentlySignedInUser((user) => {
    //   console.log('user:', user);
    // });
    //  AuthService.signup('test@sunnystestabc.com', '123456');
    //  AuthService.signin('test@sunnystestabc.com', '123456');
    AuthService.getCurrentlySignedInUser((user) => {
      console.log('user:', user);
    });

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
        <DayCard
          Link to="/exercise"
          day={'Monday'}
          title={'Chest'}
          date={'02022017'}
        />
      </div>
    );
  }
}

WeekViewContainer.defaultProps = {
};

WeekViewContainer.propTypes = {

};
