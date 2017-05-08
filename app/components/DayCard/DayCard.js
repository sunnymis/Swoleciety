import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

require('./daycard.scss');

DayCard.defaultProps = {
};

DayCard.propTypes = {
  day: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  formattedDate: PropTypes.string,
};


function DayCard(props) {
  return (
    <Link to={`/exercises/${props.formattedDate}`}>
      <div className="day-card">
        <div className="day-title">
          <h1>{props.day}</h1>
          <p className="title">{props.title}</p>
        </div>
        <div className="date-container">
          <p className="month">{props.date.month}</p>
          <p className="day">{props.date.day}</p>
        </div>
      </div>
    </Link>
  );
};



export default DayCard;
