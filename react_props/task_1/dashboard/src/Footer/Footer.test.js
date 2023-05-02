import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';


describe('<Footer />', () => {
    It('Test Footer render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists().toBe(true));
    })

    It('Verify the last test renders text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    })
});