import React from 'react';

require('./ExerciseDetail.scss');

const ExerciseDetail = (props) => {
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

ExerciseDetail.defaultProps = {
  type: '',
  value: 0,
  units: '',
};

ExerciseDetail.propTypes = {
  type: React.PropTypes.string,
  value: React.PropTypes.number,
  units: React.PropTypes.string,
};

export default ExerciseDetail;
