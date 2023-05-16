import React from 'react';
import { shallow } from 'enzyme';
//import CourseList from '../CourseList/CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it(`When isHeader is true,renders one cell with colSpan=2 when textSecondCell does not exist`, () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
      expect(wrapper.find('th').exists()).toBe(true);
      expect(wrapper.find('th').prop('colSpan')).toBe(2);
      expect(wrapper.find('th').text()).toBe('test');
  });

  it(`When isHeader is true,renders one cells when textSecondCell exist`, () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
      expect(wrapper.find('th').length).toBe(2);
      expect(wrapper.find('th').at(0).text()).toBe('test');
      expect(wrapper.find('th').at(1).text()).toBe('test2');
  });

  it(`When isHeader is false,renders two td within a tr`, () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
      expect(wrapper.find('tr').length).toBe(1);
      expect(wrapper.find('td').length).toBe(2);
      expect(wrapper.find('td').at(0).text()).toBe('test');
      expect(wrapper.find('td').at(1).text()).toBe('test2');
  });
});
