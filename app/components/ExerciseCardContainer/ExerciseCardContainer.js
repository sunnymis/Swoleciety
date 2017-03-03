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
        name: exerciseDetails.name,
        set: exerciseDetails.set,
        reps: exerciseDetails.reps,
        weight: exerciseDetails.weight,
      },
    });
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
        this.setState({
          showExerciseEdit: false,
        });
      }
    }, 0);
  }

  renderExercises() {
    return this.state.dailyExercises.map((ex) => {
      return (
        <div>
          <ExerciseCard
            name={ex.name}
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
            name={this.state.selectedExercise.name}
            set={this.state.selectedExercise.set}
            reps={this.state.selectedExercise.reps}
            weight={this.state.selectedExercise.weight}
            onOutsideClick={this.handleOnBlur}
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
