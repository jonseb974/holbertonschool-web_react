import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

configure({ adapter: new Adapter() });



describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('Tests that App renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	})
	
	it('Tests that App renders a <div> with class "App-header"', () => {
        expect(wrapper.find('Header').length).toBe(1);
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
});
