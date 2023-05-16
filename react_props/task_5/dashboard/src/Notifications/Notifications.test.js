import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		shallow(<NotificationItem />);
	})

	it('Passes dummy `type` prop and checks for correct HTML rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	});

	it('tests `value`that check renders HTML items', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	})

	it('tests `html` prop for correct HTML rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHTML' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHTML');
	})
});
