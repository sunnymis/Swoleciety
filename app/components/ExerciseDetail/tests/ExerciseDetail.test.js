import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import ExerciseDetail from '../ExerciseDetail';

describe('<ExerciseDetail />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });
  
  it('exists', () => {
    const wrapper = shallow(<ExerciseDetail />);
    expect(wrapper.find('div')).toBePresent();
  });

  it('renders the detail type', () => {
    const wrapper = shallow(<ExerciseDetail type="Reps"/>);
    expect(wrapper.find('.type')).toHaveText('Reps');
  });

  it('renders the detail type value', () => {
    const wrapper = shallow(<ExerciseDetail value={5} />);
    expect(wrapper.find('.value')).toHaveText("5");
  });

  it('renders the units of the value', () => {
    const wrapper = shallow(<ExerciseDetail value={5} units="lbs" />);
    expect(wrapper.find('.units')).toHaveText("lbs");
  });
});
