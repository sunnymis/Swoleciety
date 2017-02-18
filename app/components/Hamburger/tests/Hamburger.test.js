import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Hamburger from '../Hamburger';

describe('<Hamburger />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });
  it('exists', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper.find('span')).toBePresent();
    expect(wrapper.find('span.hamburger')).toBePresent();
  });
});

