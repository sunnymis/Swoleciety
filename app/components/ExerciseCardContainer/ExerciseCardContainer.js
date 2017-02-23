import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';

require('./ExerciseCardContainer.scss');

export default class ExerciseCardContainer extends React.Component {

  constructor() {
    super();
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.state = {
      showExerciseEdit: false,
    };
  }

  handleOnEdit() {
    this.setState({
      showExerciseEdit: !this.state.showExerciseEdit,
    });
  }

  render() {
    return (
      <div>
        <ExerciseCard
          title="Deadlift"
          set={1}
          reps={10}
          weight={135}
          onEdit={this.handleOnEdit}
        />
        {this.state.showExerciseEdit ?
          <AddEditExerciseForm
            title="Deadlift"
            set={1}
            reps={10}
            weight={135}
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
