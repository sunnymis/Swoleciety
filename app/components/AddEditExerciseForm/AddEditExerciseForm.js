import React from 'react';
import Input from '../Input/Input';

require('./AddEditExerciseForm.scss');

const AddEditExerciseForm = (props) => {
  return (
    <div className="add-edit-form">
      <div className="title-container">
        <Input value={props.title} />
      </div>
      <div className="details-row">
        <h2>Set</h2>
        <Input value={props.set} />
      </div>
      <div className="details-row">
        <h2>Reps</h2>
        <Input value={props.reps} />
      </div>
      <div className="details-row">
        <h2>Weight</h2>
        <Input value={props.weight} />
      </div>
      <div className="buttons-row">
        <button className="save">SAVE</button>
        <button className="cancel">CANCEL</button>
      </div>
    </div>
  );
};

AddEditExerciseForm.defaultProps = {
  title: '',
  set: 0,
  reps: 0,
  weight: 0,
};

AddEditExerciseForm.propTypes = {
  title: React.PropTypes.string,
  set: React.PropTypes.number,
  reps: React.PropTypes.number,
  weight: React.PropTypes.number,
};

export default AddEditExerciseForm;
