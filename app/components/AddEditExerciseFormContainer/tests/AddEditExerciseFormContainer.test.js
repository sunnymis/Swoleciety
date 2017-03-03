import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import AddEditExerciseFormContainer from '../AddEditExerciseFormContainer';

describe('<AddEditExerciseFormContainer />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<AddEditExerciseFormContainer />);
    expect(wrapper.find('div')).toBePresent();
  });

});
