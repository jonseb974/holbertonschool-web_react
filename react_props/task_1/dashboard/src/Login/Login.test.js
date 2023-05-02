import React from 'react';
import { shallow }from 'enzyme';
import Login from './Login';


describe('<Login/>', () => {
    It('Tests Login renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    })

    It('Verify the components renders 2 <input> & 2<label> tag', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    })

});