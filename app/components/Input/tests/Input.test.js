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

  it('displays a value from a value prop', () => {
    const wrapper = shallow(<Input value="Deadlift" />);
    expect(wrapper.find('input')).toHaveValue('Deadlift');
  });

});
