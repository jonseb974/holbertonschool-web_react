import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
//import Adapter from 'enzyme-adapter-react-16';
//import '@testing-library/jest-dom';
//import expect from 'expect';
//import '@testing-library/jest-dom/extend-expect';


//Enzyme.configure({ adapter: new Adapter() })

describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		shallow(<Notifications />);
	})

	it('Passes dummy `type` prop and checks for correct HTML rendering', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	});

	it('tests `value`that check renders HTML items', () => {
		const wrapper = shallow(<Notifications type="default" value="test" />);
		expect(wrapper.find('li').text()).toBe('test');
	})

	it('tests `html` prop for correct HTML rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHTML' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHTML');
	})
});
