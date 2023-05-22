import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
//import Notifications from './Notifications/Notifications';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown); 
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
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
