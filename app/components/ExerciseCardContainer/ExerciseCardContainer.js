import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseFormContainer from '../AddEditExerciseFormContainer/AddEditExerciseFormContainer';
import AddButton from '../AddButton/AddButton';
import AuthService from '../../services/auth.service';
import UserService from '../../services/users.service';
import DateService from '../../services/date.service';

require('./ExerciseCardContainer.scss');

export default class ExerciseCardContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      showExerciseEdit: false,
      dailyExercises: [],
      selectedExercise: {
        details: {}
      },
    };
  }

  static defaultProps = {};
  static propTypes = {};


  componentDidMount() {
    AuthService.getCurrentlySignedInUser((user) => {
      UserService.getExercises(user.uid, this.props.match.params.day, (exercises) => {
        if (exercises) {
          const dailyExercisesArray = [];
          Object.keys(exercises).forEach((ex) => {
            const exerciseObject = Object.assign({}, exercises[ex], { key: ex });
            dailyExercisesArray.push(exerciseObject);
          });
          this.setState({
            dailyExercises: dailyExercisesArray,
          });
        }
      });
    });
  }

  handleOnEdit = (exerciseDetails) => {
    this.setState({
      showExerciseEdit: !this.state.showExerciseEdit,
      selectedExercise: exerciseDetails,
    });
  }

  handleOnDelete = (exerciseDetails) => {
    AuthService.getCurrentlySignedInUser((user) => {
      const paths = window.location.hash.split('/');
      const day = paths[paths.length - 1];
      const key = exerciseDetails.details.key;
      UserService.deleteExercise(user.uid, day, key);
    });
  }

  handleOnBlur = (open) => {
    if (open === false) {
      this.setState({
        showExerciseEdit: false,
        selectedExercise: {
          details: {},
        },
      });
    }
  }

  handleOnAdd = () => {
    this.setState({
      showExerciseEdit: true,
    });
  }

  renderExercises = () => {
    return this.state.dailyExercises.map((ex, index) => {
      return (
        <div key={index}>
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
      <div className="exercise-card-container">
        {exercises}
        {this.state.showExerciseEdit ?
          <AddEditExerciseFormContainer
            {...this.props}
            onBlur={this.handleOnBlur}
            selectedExercise={this.state.selectedExercise}
          /> :
          null
        }
        <div className="add-button-container">
          <AddButton
            size="large"
            onClick={this.handleOnAdd} />
        </div>
      </div>

    );
  }
}
