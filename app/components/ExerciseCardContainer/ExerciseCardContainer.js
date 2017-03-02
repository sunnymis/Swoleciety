import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';
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
          dailyExercisesArray.push(exercises[ex]);
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
      selectedExercise: {
        name: exerciseDetails.title,
        set: exerciseDetails.set,
        reps: exerciseDetails.reps,
        weight: exerciseDetails.weight,
      },
    });
  }

  renderExercises() {
    return this.state.dailyExercises.map((ex) => {
      return (
        <div>
          <ExerciseCard
            title={ex.name}
            set={ex.set}
            reps={ex.reps}
            weight={ex.weight}
            onEdit={this.handleOnEdit}
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
          <AddEditExerciseForm
            title={this.state.selectedExercise.name}
            set={this.state.selectedExercise.set}
            reps={this.state.selectedExercise.reps}
            weight={this.state.selectedExercise.weight}
            onOutsideClick={this.handleOnEdit}
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
