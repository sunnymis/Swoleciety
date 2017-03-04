import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseFormContainer from '../AddEditExerciseFormContainer/AddEditExerciseFormContainer';
import AddButton from '../AddButton/AddButton';
import AuthService from '../../services/auth.service';
import UserService from '../../services/users.service';
import DateService from '../../services/date.service';
import 'whatwg-fetch';

require('./ExerciseCardContainer.scss');

export default class ExerciseCardContainer extends React.Component {

  constructor() {
    super();
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.renderExercises = this.renderExercises.bind(this);
    this.state = {
      showExerciseEdit: false,
      dailyExercises: [],
      selectedExercise: {
        name: '',
        set: 0,
        reps: 0,
        weight: 0,
      },
    };
  }

  componentDidMount() {
    AuthService.getCurrentlySignedInUser((user) => {
      UserService.getExercises(user.uid, this.props.params.day, (exercises) => {
        const dailyExercisesArray = [];
        Object.keys(exercises).forEach((ex) => {
          const exerciseObject = Object.assign({}, exercises[ex], { key: ex });
          dailyExercisesArray.push(exerciseObject);
        });
        this.setState({
          dailyExercises: dailyExercisesArray,
        });
      });
    });
  }

  handleOnEdit(exerciseDetails) {
    this.setState({
      showExerciseEdit: !this.state.showExerciseEdit,
      selectedExercise: exerciseDetails,
      // selectedExercise: {
      //   name: exerciseDetails.name,
      //   set: exerciseDetails.set,
      //   reps: exerciseDetails.reps,
      //   weight: exerciseDetails.weight,
      // },
    });
  }

  handleOnDelete(exerciseDetails) {
    AuthService.getCurrentlySignedInUser((user) => {
      const paths = window.location.hash.split('/');
      const day = paths[paths.length - 1];
      const key = exerciseDetails.details.key;
      UserService.deleteExercise(user.uid, day, key);
    });
  }

  handleOnBlur(open) {
    if (open === false) {
      this.setState({
        showExerciseEdit: false,
      });
    }
  }

  renderExercises() {
    return this.state.dailyExercises.map((ex) => {
      return (
        <div>
          <ExerciseCard
            details={ex}
            onEdit={this.handleOnEdit}
            onDelete={this.handleOnDelete}
          />
        </div>
      );
    });
  }

  render() {
    const exercises = this.renderExercises();
    return (
      <div>
        {exercises}
        {this.state.showExerciseEdit ?
          <AddEditExerciseFormContainer
            onBlur={this.handleOnBlur}
            selectedExercise={this.state.selectedExercise}
          /> :
          null
        }
        <AddButton onClick={this.handleOnEdit} />
      </div>

    );
  }
}

ExerciseCardContainer.defaultProps = {
};

ExerciseCardContainer.propTypes = {
};
/*

 */
