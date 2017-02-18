import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import ExerciseDetail from '../ExerciseDetail';

describe('<ExerciseDetail />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });
  it('should exist', () => {
    const wrapper = shallow(<ExerciseDetail />);
    expect(wrapper.find('div')).toBePresent();
  });
});
