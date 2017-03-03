import React from 'react';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';

require('./AddEditExerciseFormContainer.scss');

class AddEditExerciseFormContainer extends React.Component {

  constructor() {
    super();
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.state = {

    }
  }

  handleOnBlur(e) {
    /*
      Newly focused AddEdit isn't focused as the blur event occurs
      This solution solves this issue:
      https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
     */
    const currentTarget = e.currentTarget;
//    console.log(currentTarget);
 //   console.log(document.activeElement);
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.props.onBlur(false);
      }
    }, 0);
  }

  handleOnDataChange(e) {
    console.log(e.target);
    
  }

  handleOnSave() {

  }

  handleOnCancel() {
    this.props.onBlur(false);
  }

  render() {
    return (
      <div>
        <AddEditExerciseForm
          exerciseDetails={this.props.selectedExercise}          
          onOutsideClick={this.handleOnBlur}
          onSave={this.handleOnSave}
          onCancel={this.handleOnCancel}
          onDataChange={this.handleOnDataChange}
        />
      </div>
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
