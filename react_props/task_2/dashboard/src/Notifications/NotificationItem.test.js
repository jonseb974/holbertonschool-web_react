import React from 'react';
import { shallow } from 'enzyme';
//import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component tests', () => {
    it('Test if renders without crashing', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders correct HTML with type and value props', () => {
      const wrapper = shallow(<NotificationItem type="default" value="test" />);
      const liItem = wrapper.find('li');
      expect(liItem).toHaveLength(1);
      expect(liItem.prop('data-notification-type')).toEqual('default');
      expect(liItem.text()).toEqual('test');
    });
  
    it('renders correct HTML with html prop', () => {
      const wrapper = shallow(<NotificationItem  html={{ __html: '<u>test</u>' }}/>);
      const liItem = wrapper.find('li');
      expect(liItem).toHaveLength(1);
      expect(liItem.html()).toEqual('<li><u>test</u></li>');
    });
  });
