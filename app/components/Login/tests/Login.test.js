import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Login from '../Login';

describe('<Login />', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div')).toBePresent();
  });

  it('displays the logo', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('img').contains(
      <img src="../../img/Swoleciety-Logo-1x-White.png" alt="logo"/>)).toBe(true);
  });

  it('displays two Input components', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Input').length).toBe(2);
  });

  it('has a username Input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Input').at(0).props().type).toBe('text');
  });

  it('has a username Input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Input').at(1).props().type).toBe('password');
  });

  it('has a sign in button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button')).toBePresent();
    expect(wrapper.find('button')).toHaveText('Sign In');
  });

  it('has a sign up text', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('p').contains(<p className="signup">Don&#39;t have an account?<span>Sign up!</span></p>)).toBe(true);
  });
});
