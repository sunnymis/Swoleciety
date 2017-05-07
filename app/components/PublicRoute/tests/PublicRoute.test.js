import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import PublicRoute from '../PublicRoute';

describe('<PublicRoute />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<PublicRoute />);
    expect(wrapper.find('div')).toBePresent();
  });

});
