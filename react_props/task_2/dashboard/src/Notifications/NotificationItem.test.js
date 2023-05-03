import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';


// shallow render NotificationItem component
describe('<NotificationItem />', () => {
    it('Tests that NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    })

    it('Passes `type` prop and checks for correct html rendering', () => {
        const wrapper = shallow(<NotificationItem type="urgent" />);
        expect(wrapper.html()).toContain("urgent");
    })

    it('Passes  `value` prop and checks for correct html rendering', () => {
        const wrapper = shallow(<NotificationItem value="This is a success notification" />);
        expect(wrapper.find('li').text()).toBe('This is a success notification');
    })

    it('Passes `html` prop and checks for correct html rendering', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: 'test' }} />);
        expect(wrapper.html()).toContain('test');
    })
  })