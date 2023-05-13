import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Notifications from './Notifications';
import Adapter from 'enzyme-adapter-react-16';
//import '@testing-library/jest-dom';
//import expect from 'expect';
//import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() })

describe('<Notifications />', () => {
	it('tests that Notifications renders without crashing', () => {
		shallow(<Notifications />);
	})

	it('tests that Notifications renders three list items', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('li').length).toBe(3);
	})

	it('tests that Notifications renders the text "Here is the list of notifications"', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
	})
});
