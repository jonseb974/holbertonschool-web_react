import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseListRow';

test('renders CourseList component without crashing', () => {
  render(<CourseList />);
});

test('renders the 5 different rows', () => {
  const { getByText } = render(<CourseList />);

  // Check if the rows with specific text content are rendered
  expect(getByText('Available courses')).toBeInTheDocument();
  expect(getByText('Course name')).toBeInTheDocument();
  expect(getByText('ES6')).toBeInTheDocument();
  expect(getByText('Webpack')).toBeInTheDocument();
  expect(getByText('React')).toBeInTheDocument();
});
