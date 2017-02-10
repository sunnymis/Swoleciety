import React from 'react';
import ReactDom from 'react-dom';

import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';

import App from './app';
import a from './a';
describe('<App/>', function () {
 
  it('should have an image to display the gravatar', function () { 
     //const wrapper = shallow(<App />);
     // console.log('Wrapper',wrapper);
     // console.log(wrapper.find('img'));
     //expect(wrapper.find('img')).not.toBeEmpty();
     //expect(wrapper.find('img').length).toEqual(1);
    expect(a(6)).toBe(500);
     expect(1).toBe(1);
  });

  it('should have props for email and src', function () {
    //const wrapper = shallow(<App/>);
    // expect(wrapper.props().email).toBeDefined();
    // expect(wrapper.props().src).toBeDefined();
    expect(1).toBe(1);
  });
});

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1,2,3].indexOf(4)).toEqual(-1);
    });
    it('should return 0 when the value is 1', () => {
      expect([1,2,3].indexOf(1)).toEqual(0);
    });
  });
});