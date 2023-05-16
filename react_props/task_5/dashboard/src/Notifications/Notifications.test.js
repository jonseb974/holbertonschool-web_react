import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types'


describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Check first Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('p').first().text()).toEqual('Your notifications');
	});

	it('Tests menuItem rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').exists()).toBe(true);
	});

	it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.Notifications').exists()).toBe(false);
	});
	
	it('Tests menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		expect(wrapper.find('.menuItem').exists()).toBe(true);
	});

	it('Tests the div Notifications is not rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		wrapper.update();
		expect(wrapper.find('.Notifications').exists()).toBe(true);
	});

	it('tests passing empty array', () => {
		const wrapper = shallow(<Notifications listNotifications={[]} />);
		expect(wrapper.find(NotificationItem).exist()).toBe(false);
	});

	it('tests when not passing listNotifications prop', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find(NotificationItem).exists()).toBe(false);
	});
});