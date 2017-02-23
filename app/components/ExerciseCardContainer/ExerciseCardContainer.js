import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

require('./ExerciseCardContainer.scss');

const ExerciseCardContainer = () => {
  return (
    <div>
      <ExerciseCard
        title="Deadlift"
      />
    </div>
  );
};

ExerciseCardContainer.defaultProps = {
};

ExerciseCardContainer.propTypes = {
};

export default ExerciseCardContainer;
