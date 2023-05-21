import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Footer from './Footer';
import Adapter from 'enzyme-adapter-react-16';
import { beforeEach } from 'node:test';
//import '@testing-library/jest-dom';
//import expect from 'expect';
//import '@testing-library/jest-dom/extend-expect';


Enzyme.configure({ adapter: new Adapter() })

describe('<Footer/>', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});

	it('tests that Footer renders without crashing', () => {
		shallow(<Footer />);
	});

	it('renders Footer without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a div with the class App-footer', () => {
        const appFooter = wrapper.find('.App-footer');
        expect(appFooter).toHaveLength(1);
    });

	it('tests that Footer renders the text "Copyright"', () => {
		const copyright = wrapper.find('p');
		expect(copyright.text()).toContain('Copyright');
	});
});