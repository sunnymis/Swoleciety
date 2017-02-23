import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import ExerciseCard from '../ExerciseCard';

describe('<ExerciseCard />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<ExerciseCard />);
    expect(wrapper.find('div')).toBePresent();
  });

  it('renders a title', () => {
    const wrapper = shallow(<ExerciseCard title="Deadlift"/>);
    expect(wrapper.find('.title')).toBePresent();
    expect(wrapper.find('.title')).toHaveText('Deadlift');
  });

  it('renders three ExerciseDetail components', () => {
    const wrapper = shallow(<ExerciseCard />);
    expect(wrapper.find('ExerciseDetail').length).toEqual(3);
  });

});
