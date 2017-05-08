import React from 'react';
import PropTypes from 'prop-types';

require('./ExerciseDetail.scss');


ExerciseDetail.defaultProps = {
  type: '',
  value: 0,
  units: '',
};

ExerciseDetail.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
  units: PropTypes.string,
};


function ExerciseDetail(props) {
  return (
    <div className="exercise-detail">
      <h2 className="type">{props.type}</h2>
      <h3 className="value">
        {props.value}
        <span className="units">{props.units}</span>
      </h3>
    </div>
  );
};

export default ExerciseDetail;
