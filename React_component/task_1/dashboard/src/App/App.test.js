import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
//import { render, fireEvent } from '@testing-library/react';
import { mount } from 'enzyme';

import PropTypes from 'prop-types';



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
		expect(wrapper.contains(<Notifications displayDrawer={true} />)).toBe(true);
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
	
});

describe('when isLoggedIn is true', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<App isLoggedIn={false} />);
	});
	
	it('does not contain the Login component', () => {
		expect(wrapper.contains(<Login />)).toBe(false);
	});
	
	it('contains the CourseList component', () => {
		expect(wrapper.contains(<CourseList />)).toBe(true);
	});

	//new tests

	it('When ctrl & h are pressed this alert is call', () => {
		const AlertSpy = jest.spyOn(window, 'alert');
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler({ keycode: 72, ctrlKey: true });
		expect(AlertSpy).toHaveBeenCallWidth('Logging you out');
		wrapper.unmount();
	});

	// new tests
	it('When ctrl & h are pressed check that logOur function is called', () => {
		const ConsoleSpy = jest.spyOn(global.console, 'log');
		const wrapper = mount(<App isLoggedIn />);
		wrapper.instance().keyDownHandler({ keycode: 72, ctrlKey: true });
		expect(ConsoleSpy).toHaveBeenCallWidth('logOut function console log for testing');
		wrapper.unmount();
	});		
});
