import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import AddButton from '../AddButton';

describe('<AddButton />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<AddButton />);
    expect(wrapper.find('div')).toBePresent();
  });

});
