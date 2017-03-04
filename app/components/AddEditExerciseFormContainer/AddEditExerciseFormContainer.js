import React from 'react';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';
import UserService from '../../services/users.service';
import AuthService from '../../services/auth.service';
import DateService from '../../services/date.service';

require('./AddEditExerciseFormContainer.scss');

class AddEditExerciseFormContainer extends React.Component {

  constructor() {
    super();
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnDataChange = this.handleOnDataChange.bind(this);
    this.handleOnNewEntryChange = this.handleOnNewEntryChange.bind(this);
    this.state = {

    }
  }

  handleOnBlur(e) {
    this.setState({});
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
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnNewEntryChange(e) {
    const newEntry = (this.state.newEntry) ? this.state.newEntry : {};
    newEntry[e.target.name] = e.target.value;
    this.setState({
      newEntry: newEntry,
    });
  }

  handleOnSave() {
    const paths = window.location.hash.split('/');
    const day = paths[paths.length - 1];
    const key = this.props.selectedExercise.details.key;
    const modifiedExercise = this.state;
    AuthService.getCurrentlySignedInUser((user) => {
      if (this.state.newEntry) {
        UserService.addExercise(user.uid, day, {
          name: this.state.name,
          [this.state.newEntry.field.toLowerCase()]: this.state.newEntry.value,
        });
      } else {
        UserService.updateExerciseByKey(user.uid, day, key, modifiedExercise);
      }
    });
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
          onNewEntryChange={this.handleOnNewEntryChange}
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
