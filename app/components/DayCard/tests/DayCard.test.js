import jasmineEnzyme from 'jasmine-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import DayCard from '../DayCard';

describe('<DayCard />', () => {
  
  const minProps = {
    day: '',
    title: '',
    date: {
      month: '',
      day: '',
    },
  };

  beforeEach(() => {
    jasmineEnzyme();
  });

  it('exists', () => {
    const wrapper = shallow(<DayCard {...minProps} />);
    expect(wrapper.find('div')).toBePresent();
  });

  it('renders a header for the day', () => {
    const wrapper = shallow(<DayCard {...minProps} />);
    expect(wrapper.find('h1')).toBePresent();
  });

  it('renders correct day header from prop', () => {
    const wrapper = shallow(<DayCard {...minProps} day="Monday" />);
    expect(wrapper.find('h1')).toHaveText("Monday");
  });

  it('renders a subheader', () => {
    const wrapper = shallow(<DayCard {...minProps} />);
    expect(wrapper.find('p')).toBePresent();
  });

  it('renders correct title from title prop', () => {
    const wrapper = shallow(<DayCard {...minProps} title="Chest" />);
    expect(wrapper.find('p.title')).toHaveText("Chest");
  })

  it('renders a date container', () => {
    const wrapper = shallow(<DayCard {...minProps} />);
    expect(wrapper.find('.date-container')).toBePresent();
  });

  it('renders correct date from date prop ', () => {
    let dateProp = {
      month: "JAN", 
      day: "01"
    }; 
    const wrapper = shallow(<DayCard {...minProps} date={dateProp} />);
    expect(wrapper.find('.month')).toBePresent();
    expect(wrapper.find('.month')).toHaveText("JAN");
    expect(wrapper.find('.day')).toHaveText("01");
  });

  


});

