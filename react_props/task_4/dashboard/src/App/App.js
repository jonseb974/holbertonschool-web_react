import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import CourseListRow from '../CourseList/CourseListRow';

const App = ({ isLoggedIn }) => {
  return ( 
  <div className="App">
    <Notifications />
    <Header />
    <div className='App-body'>
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
    <div className='App-footer'>
      <Footer />
    </div>   
  </div>
  );
};

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
