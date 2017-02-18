import React from 'react';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

require('./ExerciseCard.scss');

const ExerciseCard = (props) => {
  return (
    <div className="exercise-card">
      <h1 className="title">{props.title}</h1>
      <div className="icons">
        <i className="material-icons">mode_edit</i>
        <i className="material-icons">delete</i>
      </div>

      <ExerciseDetail />
      <ExerciseDetail />
      <ExerciseDetail />
    </div>
  );
};

ExerciseCard.defaultProps = {
  title: '',
};

ExerciseCard.propTypes = {
  title: React.PropTypes.string,
};

export default ExerciseCard;
