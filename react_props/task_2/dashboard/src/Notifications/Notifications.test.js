import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';


describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('tests that Notifications renders Notification items', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('tests that Notifications renders html text', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.html()).toContain('test');
	})
});