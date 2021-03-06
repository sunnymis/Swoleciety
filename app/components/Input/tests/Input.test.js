import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Input from '../Input';

describe('<Input />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input')).toBePresent();
    expect(wrapper.find('input').length).toBe(1);
  });

  it('renders a password input field from type prop', () => {
    const wrapper = shallow(<Input type="password" />);
    expect(wrapper.find('input').matchesElement(
      <input type="password" />)).toBe(true);
  });

});
