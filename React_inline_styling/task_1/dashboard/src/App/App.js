import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

import {getLatestNotification} from '../utils/utils';


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#deb5b545',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderTop: '3px solid var(--holberton-red)',
  },
  footer: {
    backgroundColor: '#f5f5f5ab',
    position: 'absolute',
    bottom: 0,
    borderTop: '3px solid var(--holberton-red)',
    width: '100%',
  },
  footerText: {
    fontStyle: 'italic',
  },
});

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

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            alert('Logging you out');
            this.props.logOut();
        }
    }
    render() {
        const isLoggedIn = this.props.isLoggedIn;

        const listCourses = [
            {id: 1, name: "ES6", credit: 60},
            {id: 2, name: "Webpack", credit: 20},
            {id: 3, name: "React", credit: 40},
        ]

        const listNotifications = [
            {id: 1, type: "default", value: "New course available"},
            {id: 2, type: "urgent", value: "New resume available"},
            {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
        ]
        return (
            <React.Fragment>
                <Notifications listNotifications={listNotifications}/>
                <div className={css(styles.app)}>
                    <Header />
                    <div className={css(styles.body)}>
                        {
                            isLoggedIn === true &&
                            <BodySectionWithMarginBottom
                                title={"Course list"} 
                                className={css(styles.bodySection)}
                            >
                                <CourseList listCourses={listCourses} />
                            </BodySectionWithMarginBottom>
                        }
                        {
                            isLoggedIn === false &&
                            <BodySectionWithMarginBottom
                                title={"Log in to continue"} 
                                className={css(styles.bodySection)}
                            >
                                <Login/>
                            </BodySectionWithMarginBottom>
                        }
                        <BodySection title={"News from the School"}>
                            <p>Hello World!</p>
                        </BodySection>
                    </div>
                    <div className={css(styles.footer)}>
                        <Footer className={css(styles.footerText)} />
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
};

export default App;
