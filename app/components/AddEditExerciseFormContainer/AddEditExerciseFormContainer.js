import React from 'react';
import PropTypes from 'prop-types';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';
import UserService from '../../services/users.service';
import AuthService from '../../services/auth.service';
import DateService from '../../services/date.service';

require('./AddEditExerciseFormContainer.scss');

class AddEditExerciseFormContainer extends React.Component {

  static defaultProps = {
    onBlur: () => { },
    selectedExercise: {},
    isEditting: false
  };

  static propTypes = {
    onBlur: PropTypes.func,
    selectedExercise: PropTypes.object,
    isEditting: PropTypes.bool
  };

  handleOnBlur = (e) => {
    this.setState({});
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

  handleOnDataChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnNewEntryChange = (e) => {
    const newEntry = (this.state.newEntry) ? this.state.newEntry : {};
    newEntry[e.target.name] = e.target.value;
    this.setState({
      newEntry: newEntry,
    });
  }

  handleOnSave = () => {
    const day = this.props.match.params.day;
    const key = this.props.selectedExercise.details.key;
    const modifiedExercise = {};
    modifiedExercise[this.state.newEntry.field] = this.state.newEntry.value;

    AuthService.getCurrentlySignedInUser((user) => {
      if (this.props.selectedExercise.details) {
        UserService.updateExerciseByKey(user.uid, day, key, modifiedExercise);
      } else {
        UserService.addExercise(user.uid, day, {
          name: this.props.selectedExercise.details.name,
          [this.state.newEntry.field.toLowerCase()]: this.state.newEntry.value,
        });
      }
    });
  }

  handleOnCancel = () => {
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


export default AddEditExerciseFormContainer;
