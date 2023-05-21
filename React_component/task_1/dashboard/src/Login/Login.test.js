import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe('<Login />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login />);
		
		it('tests that Login renders without crashing', () => {
			expect(wrapper.exists()).toBe(true);			
		});
	
		it('tests that Login renders two checks', () => {
			const wrapper = shallow(<Login />);
			expect(wrapper.find('input')).toHaveLength(2);
			expect(wrapper.find('label')).toHaveLength(2);
		});
	})
	
});