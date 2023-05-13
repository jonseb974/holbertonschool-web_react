import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component tests', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="" html="" value="" />);
  });

  it('renders correct HTML with type and value props', () => {
    const type = 'default';
    const value = 'test';
    const wrapper = shallow(<NotificationItem type={type} html="" value={value} />);
    expect(wrapper.prop('data-notification-type')).toBe(type);
    expect(wrapper.text()).toBe(value);
  });

  it('renders correct HTML with html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="" html={html} value="" />);
    expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
