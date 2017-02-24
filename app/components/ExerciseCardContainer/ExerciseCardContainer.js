import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';
import 'whatwg-fetch';

require('./ExerciseCardContainer.scss');

export default class ExerciseCardContainer extends React.Component {

  constructor() {
    super();
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.renderExercises = this.renderExercises.bind(this);
    this.state = {
      showExerciseEdit: false,
      dailyExercises: {
        name: '',
        title: '',
        date: {},
        exercises: [],
      },
      selectedExercise: {
        name: '',
        set: 0,
        reps: 0,
        weight: 0,
      }
    };
  }

  componentDidMount() {
    fetch('/test.json')
      .then((response) => {        
        return response.json();
      }).then((json) => {
        json.week.forEach((weekday) => {
          if (weekday.day === this.props.params.day) {
            this.setState({
              dailyExercises: weekday,
            }, () => console.log(this.state.dailyExercises));
          }
        });
      }).catch((ex) => {
        console.error('parsing failed', ex);
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
    return this.state.dailyExercises.exercises.map((ex) => {
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
      )
    })
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
