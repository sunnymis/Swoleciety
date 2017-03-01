import React from 'react';
import DayCard from '../DayCard/DayCard';
import UserService from '../../services/users.service';
import AuthService from '../../services/auth.service';
import DateService from '../../services/date.service';
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
    console.log('Current Week:', DateService.getCurrentWeek());
    console.log('Coverted from 010117:', DateService.convertFormattedDateToRealDate('010117'));
    console.log('Next Week:', DateService.getNextWeek(DateService.getCurrentWeek()));
    console.log('Prev Week:', DateService.getPreviousWeek(DateService.getCurrentWeek()));
    console.log('Converted from Now:', DateService.convertRealDateToFormattedDate(new Date(Date.now())));
    console.log('WeekStartForToday:', DateService.getWeekStartForDay(new Date(Date.now())));
    console.log('WeekStartForTodayLastYear:', DateService.getWeekStartForDay(new Date(2016, 1, 28)));
    DateService.getWeekStartForDay(1234);
    //  AuthService.signin('test@sunnystestabc.com', '123456');
    //  console.log(AuthService.getCurrentUser());
    AuthService.getCurrentlySignedInUser((user) => {
      const weekArray = [];
      UserService.getSingleWeek(user.uid, '022617', (weekObject) => {
        Object.keys(weekObject).forEach((key) => {
          weekArray.push({
            day: [key],
            name: weekObject[key],
          });
        });
        this.setState({
          weekData: weekArray,
        });
      });
    });
  }

  renderDays() {
    return this.state.weekData.map((day) => {
      return (
        <DayCard
          Link to="/exercise"
          day={day.day}
          title={day.name}
          date={day.day}
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
