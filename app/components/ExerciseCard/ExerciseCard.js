import React from 'react';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

require('./ExerciseCard.scss');

const ExerciseCard = (props) => {
  return (
    <div className="exercise-card">
      <h1 className="name">{props.details.name}</h1>
      <div className="icons">
        <span onClick={() => props.onEdit(props)}><i className="material-icons">mode_edit</i></span>
        <span><i className="material-icons">delete</i></span>
      </div>

      <ExerciseDetail
        type="Set"
        value={props.details.set}
      />
      <ExerciseDetail
        type="Reps"
        value={props.details.reps}
      />
      <ExerciseDetail
        type="Weight"
        value={props.details.weight}
        units="lbs"
      />
    </div>
  );
};

ExerciseCard.defaultProps = {
  details: {},
  onEdit: () => {},
};

ExerciseCard.propTypes = {
  details: React.PropTypes.object,
  onEdit: React.PropTypes.func,
};

export default ExerciseCard;
