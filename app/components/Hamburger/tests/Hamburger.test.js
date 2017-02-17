import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Hamburger from '../Hamburger';

describe('<Hamburger />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });
  it('should see this test', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper.find('div')).toBePresent();
  });
});

