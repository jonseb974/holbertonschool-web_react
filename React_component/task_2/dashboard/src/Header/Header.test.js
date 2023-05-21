import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';



describe('<Header />', () => {

	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Header />);
	});

	it('tests that Header renders without crashing', () => {
		expect(wrapper.exists()).toBe(true);
	});
	it('tests renders class App-header', () => {
		const appHeader = wrapper.find('.App-header');
		expect(appHeader).toHaveLength(1);
	});

	it('tests that Header renders the img', () => {
		const appHeader = wrapper.find('img');
		expect(appHeader).toHaveLength(1);
	});

	it('render tag h1', () => {
		const appHeader = wrapper.find('h1');
		expect(appHeader).toHaveLength(1);
	});
});