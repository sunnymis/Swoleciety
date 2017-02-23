import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import ExerciseCardContainer from '../ExerciseCardContainer';

describe('<ExerciseCardContainer />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<ExerciseCardContainer />);
    expect(wrapper.find('div')).toBePresent();
  });

});
