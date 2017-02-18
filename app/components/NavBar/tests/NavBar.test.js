import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../NavBar';
import Hamburger from '../../Hamburger/Hamburger';

describe('<NavBar />', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });
  it('exists', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('nav')).toBePresent();
  });

  it('renders a Hamburger', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toContainReact(<Hamburger />);
  });

  it('renders title', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('h1')).toBePresent(); 
    expect(wrapper.find('h1')).toHaveText('Swoleciety');
  });
});
