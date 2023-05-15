import React from 'react';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
//import CourseListRow from '../CourseList/CourseListRow';

describe('<CourseList />', () => {
  it(`Renders CourseList component without crashing`, () => {
      const wrapper = shallow(<CourseList textFirstCell="Dummy Value" />);
      expect(wrapper.exists()).toBe(true);
  })

  it(`Renders 5 CourseListRow components`, () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});
