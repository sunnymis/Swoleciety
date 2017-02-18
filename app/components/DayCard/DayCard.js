import React, { PropTypes } from 'react';

require('./daycard.scss');


const DayCard = (props) => {
  return (
    <div className="day-card">
      <h1>{props.day}</h1>
      <p className="title">{props.title}</p>
      <div className="date-container">
        <p className="month">{props.date.month}</p>
        <p className="day">{props.date.day}</p>
      </div>
    </div>
  );
};

DayCard.defaultProps = {
};

DayCard.propTypes = {
  day: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  dateObj: React.PropTypes.object.isRequired,
};


export default DayCard;