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
    const wrapper = shallow(<AddEditExerciseForm title="Deadlift"/>);
    expect(wrapper.find('Input').length).toBe(4);
  });

});
