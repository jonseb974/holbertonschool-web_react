import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';
//import '@testing-library/jest-dom';
//import expect from 'expect';
//import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() })

describe('<Footer/>', () => {
	it('tests that Footer renders without crashing', () => {
		shallow(<Footer />);
	});
});

describe('<Footer/>', () => {
	it('tests that Footer renders the text "Copyright"', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.text()).toContain('Copyright');
	});
});