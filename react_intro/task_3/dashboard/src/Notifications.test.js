import {shallow} from 'enzyme';
import React from'react';
import App from './App';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('test that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})
  it('test if Notifications renders 3 items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.notification').length).toBe(3);
  });
  it('test if notification renders text "here is a list of Notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.notification').text()).toBe('here is a list of Notifications');
  });
});