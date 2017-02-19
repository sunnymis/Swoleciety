import React from 'react';
import DayCard from '../DayCard/DayCard';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import AddEditExerciseForm from '../AddEditExerciseForm/AddEditExerciseForm';

require('./WeekViewContainer.scss');


const WeekViewContainer = () => {
  return (
    <div className="week-view-container">
      <DayCard
        day="Monday"
        title="Chest"
        date={{
          month: 'JAN',
          day: '01',
        }}
      />
      <ExerciseCard title="Deadlift" />
      <AddEditExerciseForm 
        title="Deadlift"
        set={1}
        reps={10}
        weight={135}
      />
    </div>
  );
};

WeekViewContainer.defaultProps = {
};

WeekViewContainer.propTypes = {
};


export default WeekViewContainer;
