import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('<App />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toBePresent();
  });
});
