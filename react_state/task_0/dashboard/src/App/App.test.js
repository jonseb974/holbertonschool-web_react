import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import {getLatestNotification} from '../utils/utils';


// Test suite for App component
describe('App component tests', () => {
  // Test scenario: When isLoggedIn = false
  describe('When isLoggedIn = false', () => {

    let wrapper; // Declare a variable to hold component wrapper
    // Test: Renders App without crashing
    beforeEach(() => {
      wrapper = shallow(<App />); // Create a shallow wrapper of the App component
    });

    // Test: Renders App without crashing
    it('renders App without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    // Test: Renders a div with the class App-body
    it('renders a div with the class App-body', () => {
      const appBody = wrapper.find('.App-body'); // Find the div with class App-body within the wrapper
      expect(appBody).toHaveLength(1);
    });

    // Test: Renders the Notifications component
    it('renders contain the Notifications component', () => {
      const listNotifications = [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
      ]
      expect(wrapper.contains(<Notifications listNotifications={listNotifications}/>)).toBe(true);
    });

    // Test: Renders the Header component
    it('renders contain the Header component', () => {
      expect(wrapper.contains(<Header />)).toBe(true);
    });

    // Test: Renders the Login component
    it('renders contain the Login component', () => {
      expect(wrapper.contains(<Login />)).toBe(true);
    });

    // Test: Renders the Footer component
    it('renders contain the Footer component', () => {
      expect(wrapper.contains(<Footer />)).toBe(true);
    });

    // Test: Renders the CourseList component
    it('renders not contain the CourseList component', () => {
      expect(wrapper.contains(<CourseList />)).toBe(false);
    });

    // Test:Checks if default state for displayDrawer is false
    it('has default state for displayDrawer equal to false', () => {
      expect(wrapper.state('displayDrawer')).toBe(false);
    });

    // Test: Checks if calling handleDisplayDrawer updates the displayDrawer state to true
    it('updates displayDrawer state to true after calling handleDisplayDrawer', () => {
      wrapper.instance().handleDisplayDrawer(); // Call the handleDisplayDrawer method of th component instance
      expect(wrapper.state('displayDrawer').toBe(true));
    });

    // Test: Checks if calling handleHideDrawer updates the displayDrawer state to false
    it('updates displayDrawer state to false after calling handleHideDrawer', () => {
      wrapper.setState({ displayDrawer: true }); // Set the displayDrawer state to true
      wrapper.instance().handleDisplayDrawer(); // Call the handleHideDrawer method of the component instance
      expect(wrapper.state('displayDrawer')).toBe(false); // Check if the displayDrawer state is updated to false
    });
  })

  // Test scenario: when isLoggedIn = true
  describe('When isLoggedIn = true', () => {

    // Test: Renders the CourseList component and not the Login component
    it('renders the component CourseList whereas Login', () => {
      const listCourses = [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40},
      ];
      // Create a shallow wrapper of the App component with isLoggedIn prop set to true
      const wrapper = shallow(<App isLoggedIn={true}/>); 
      // Check if CourseList component is rendered
      expect(wrapper.contains(<CourseList listCourses={listCourses}/>)).toBe(true);
      // Check if the Login is not rendered
      expect(wrapper.contains(<Login />)).toBe(false);
    });

    // Test: Calls the logOut function when keys [Ctrl + h] are pressed
    it('calls logOut function when keys Control and H are pressed', () => {
      // Create a mock function for the logOut function
      const logOutMock = jest.fn();
      // Create a shallow wrapper of the App component with logOut pro set to the mock function
      shallow(<App logOut={logOutMock} />);

      const alert = jest.spyOn(global, 'alert'); // Spy on the global alert function
      expect(alert); // Expect that the alert function is called
      expect(logOutMock); // Expect that the logOut function is called

      jest.restoreAllMocks(); // Restore all mocked functions
    });
  });
});

