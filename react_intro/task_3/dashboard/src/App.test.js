import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });



describe('<App />', () => {
	it('Tests that App renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Tests that App renders a <div> with class "App-header"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-header').length).toBe(1);
	})

	it('Tests that App renders a <div> with class "App-body"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-body').length).toBe(1);
	})

	it('Tests that App renders a <div> with class "App-footer"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-footer').length).toBe(1);
	})
});
