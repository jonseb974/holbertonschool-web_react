import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

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
