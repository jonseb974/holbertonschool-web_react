import React from 'react';

import './App.css';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      // Display 
      alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    // Add event listener when component is mounted
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove event listener when component is unmounted
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
    
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3,  type: 'urgent', html: {__html: getLatestNotification() }},
    ]

    const { isLoggedIn } = this.props;
    
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={'App'}>
          <Header />
          <div className={'App-body'}>
            {
            isLoggedIn ?
            (
            <BodySectionWithMarginBottom title={'Course list'}>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
            ) :
            (
            <BodySectionWithMarginBottom title={'Log in to continue'}>
              <Login />
            </BodySectionWithMarginBottom>
            )
            }
            <BodySection title={'News from the School'}>
              <p>Paragraph with some random text.</p>
            </BodySection>
          </div>
            <Footer />
        </div>
      </>
    );
  };
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
