import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import AddEditExerciseForm from '../AddEditExerciseForm';

describe('<AddEditExerciseForm />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('should exist', () => {
    const wrapper = shallow(<AddEditExerciseForm />);
    expect(wrapper.find('div')).toBePresent();
  });

  it('renders four Input Components', () => {
    const wrapper = shallow(<AddEditExerciseForm name="Deadlift" />);
    expect(wrapper.find('Input').length).toBe(4);
  });

  it('sends name to first input', () => {
    const wrapper = shallow(
      <AddEditExerciseForm
        name="Deadlift"
      />);
    expect(wrapper.find('Input').at(0).props().value).toBe('Deadlift');
  });

  it('sends set to second input', () => {
    const wrapper = shallow(
      <AddEditExerciseForm
        name="Deadlift"
        set={2}
      />);
    expect(wrapper.find('Input').at(1).props().value).toBe(2);
  });

  it('sends reps to third input', () => {
    const wrapper = shallow(
      <AddEditExerciseForm
        name="Deadlift"
        reps={5}
      />);
    expect(wrapper.find('Input').at(2).props().value).toBe(5);
  });

  it('sends weight to fourth input', () => {
    const wrapper = shallow(
      <AddEditExerciseForm
        name="Deadlift"
        weight={500}
      />);
    expect(wrapper.find('Input').at(3).props().value).toBe(500);
  });

});
