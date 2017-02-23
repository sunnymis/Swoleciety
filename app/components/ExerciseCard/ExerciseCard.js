import React from 'react';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';

require('./ExerciseCard.scss');

const ExerciseCard = (props) => {
  return (
    <div className="exercise-card">
      <h1 className="title">{props.title}</h1>
      <div className="icons">
        <span onClick={props.onEdit}><i className="material-icons">mode_edit</i></span>
        <span><i className="material-icons">delete</i></span>
      </div>

      <ExerciseDetail
        type="Set"
        value={props.set}
      />
      <ExerciseDetail
        type="Reps"
        value={props.reps}
      />
      <ExerciseDetail
        type="Weight"
        value={props.weight}
        units="lbs"
      />
    </div>
  );
};

ExerciseCard.defaultProps = {
  title: '',
  set: 0,
  reps: 0,
  weight: 0,
  onEdit: () => {},
};

ExerciseCard.propTypes = {
  title: React.PropTypes.string,
  onEdit: React.PropTypes.func,
  set: React.PropTypes.number,
  reps: React.PropTypes.number,
  weight: React.PropTypes.number,
};

export default ExerciseCard;
