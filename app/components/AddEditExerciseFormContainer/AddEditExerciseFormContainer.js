import React from 'react';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';

require('./AddEditExerciseFormContainer.scss');

class AddEditExerciseFormContainer extends React.Component {

  constructor() {
    super();
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(e) {
    /*
      Newly focused AddEdit isn't focused as the blur event occurs
      This solution solves this issue:
      https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
     */
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.props.onBlur(false);
      }
    }, 0);
  }

  render() {
    return (
      <AddEditExerciseForm
        name={this.props.selectedExercise.name}
        set={this.props.selectedExercise.set}
        reps={this.props.selectedExercise.reps}
        weight={this.props.selectedExercise.weight}
        onOutsideClick={this.handleOnBlur}
        onSave={this.handleOnSave}
      />
    );
  }
}

AddEditExerciseFormContainer.defaultProps = {
  onBlur: () => {},
  selectedExercise: {},
};

AddEditExerciseFormContainer.propTypes = {
  onBlur: React.PropTypes.func,
  selectedExercise: React.PropTypes.Object,
};

export default AddEditExerciseFormContainer;
