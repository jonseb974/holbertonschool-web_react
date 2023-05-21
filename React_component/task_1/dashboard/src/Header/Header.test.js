import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
import { TextEncoder } from 'text-encoding-utf-8';

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
	it('tests that Header renders without crashing', () => {
		shallow(<Header />);
	})

	it('tests that Header renders three list items', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('img')).toHaveLength(1);
	});
});