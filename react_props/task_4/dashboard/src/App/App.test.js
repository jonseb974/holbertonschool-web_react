import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('Tests that App renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	})
	
	it('Tests that App renders a <div> with class "App-body"', () => {
		expect(wrapper.find('.App-body').length).toBe(1);
	})

	it('Tests that App renders a <div> with class "App-footer"', () => {
		expect(wrapper.find('.App-footer').length).toBe(1);
	})
	it('contain the Notifications component', () => {
		expect(wrapper.contains(<Notifications />)).toBe(true);
	});
	
	it('contain the Header component', () => {
		expect(wrapper.contains(<Header />)).toBe(true);
	});
	
	it('contain the Login component', () => {
		expect(wrapper.contains(<Login />)).toBe(true);
	});
	
	it('contain the Footer component', () => {
		expect(wrapper.contains(<Footer />)).toBe(true);
	});

	it('does not contain the CourseList component when isLoggedIn is false', () => {
		expect(wrapper.contains(<CourseList />)).toBe(false);
	});
	
	describe('when isLoggedIn is true', () => {
		beforeEach(() => {
			wrapper.setProps({ isLoggedIn: true });
		});
		
		it('does not contain the Login component', () => {
			expect(wrapper.contains(<Login />)).toBe(false);
		});
		
		it('contains the CourseList component', () => {
			expect(wrapper.contains(<CourseList />)).toBe(true);
		});
	});
});
