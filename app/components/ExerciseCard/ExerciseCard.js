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
        value={1}
      />
      <ExerciseDetail
        type="Reps"
        value={10}
      />
      <ExerciseDetail
        type="Weight"
        value={135}
        units="lbs"
      />
    </div>
  );
};

ExerciseCard.defaultProps = {
  title: '',
  onEdit: () => {},
};

ExerciseCard.propTypes = {
  title: React.PropTypes.string,
  onEdit: React.PropTypes.func,
};

export default ExerciseCard;
