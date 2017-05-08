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
    this.state = {
      weekData: [],
    };
  }

  static defaultProps = {};
  static propTypes = {};

  componentDidMount() {
    //  AuthService.signin('test@sunnystestabc.com', '123456');
    AuthService.getCurrentlySignedInUser((user) => {
      const weekArray = [];
      UserService.getSingleWeek(user.uid, DateService.getCurrentWeek(), (weekObject) => {
        // There is data in database for this week so add an empty week
        if (weekObject === null) {
          UserService.addWeekForUser(user.uid, DateService.getCurrentWeek());
          return;
        }
        // Retrieve information from each day
        Object.keys(weekObject).forEach((key) => {
          weekArray.push({
            day: key,
            name: weekObject[key],
          });
        });
        this.setState({
          weekData: weekArray,
        });
      });
    });
  }

  renderDays = () => {
    return this.state.weekData.map((weekday, index) => {
      return (
        <DayCard
          key={index}
          formattedDate={weekday.day}
          day={DateService.getDayFromFormattedDate(weekday.day)}
          title={weekday.name}
          date={{
            month: DateService.getMonthFromFormattedDate(weekday.day).substr(0, 3),
            day: weekday.day.substr(2, 2),
          }}
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
