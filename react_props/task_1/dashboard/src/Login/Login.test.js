import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Login from './Login.test.js';
import Adapter from 'enzyme-adapter-react-16';
//import '@testing-library/jest-dom';
//import expect from 'expect';
//import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() })

describe('<Login />', () => {
	it('tests that Login renders without crashing', () => {
		shallow(<Login />);
	})

	it('tests that Login renders two checks', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
	});
});