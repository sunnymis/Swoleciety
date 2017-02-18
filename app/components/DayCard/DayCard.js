import React, { PropTypes } from 'react';

require('./daycard.scss');


const DayCard = () => {
  return (
    <div className="day-card">
      <h1>Monday</h1>
    </div>
  );
};

DayCard.defaultProps = {
};

DayCard.propTypes = {
};


export default DayCard;