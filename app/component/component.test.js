import assert from 'assert';
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Avatar from './Avatar';

describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1,[1,2,3].indexOf(4));
    });
    it('should return 0 when the value is 1', () => {
      assert.equal(0,[1,2,3].indexOf(1));
    });
  });
});