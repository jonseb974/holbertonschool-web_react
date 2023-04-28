import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow } from 'enzyme';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//create 4 tests
//test that App renders without crashing
//verify that App renders a div with the class App-header
//verify that App renders a div with the class App-body
//verify that App renders a div with the class App-footer

describe('<App />', () => {
	it('Test that App renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Test that App renders a di> with class "App-header"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-header').length).toBe(1);
	})

	it('Test that App renders a div with class "App-body"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-body').length).toBe(1);
	})

	it('Test that App renders a div with class "App-footer"', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-footer').length).toBe(1);
	})
});
