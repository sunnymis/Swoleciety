import React from 'react';
import Input from '../Input/Input';

require('./AddEditExerciseForm.scss');

const AddEditExerciseForm = () => {
  return (
    <div className="add-edit-form">
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

AddEditExerciseForm.defaultProps = {
};

AddEditExerciseForm.propTypes = {
};

export default AddEditExerciseForm;
