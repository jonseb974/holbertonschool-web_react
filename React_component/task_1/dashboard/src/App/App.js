import React, { Component } from 'react';
import Enzyme from 'enzyme';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { render, fireEvent } from '@testing-library/react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out')
        this.props.logOut()
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (e) => {});
  }
  
  render() {
    const { isLoggedIn } = this.props;

  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];

  const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3,  type: 'urgent', html: {__html: getLatestNotification()}},
];

return (
  <div className="App">
    <Notifications displayDrawer={true} />
    <Header />
    <div className='App-body'>
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
    <div className='App-footer'>
      <Footer />
    </div>   
  </div>
  );
}
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};



export default App;
