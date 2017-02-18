import React from 'react';
import DayCard from '../DayCard/DayCard';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

require('./WeekViewContainer.scss');


const WeekViewContainer = () => {
  return (
    <div className="week-view-container">
      <DayCard 
        day = "Monday"
        title = "Chest"
        date = {{
          month: "JAN",
          day: "01",
        }}
      />
      <ExerciseCard title="Deadlift" />
    </div>
  );
};

WeekViewContainer.defaultProps = {
};

WeekViewContainer.propTypes = {
};


export default WeekViewContainer;