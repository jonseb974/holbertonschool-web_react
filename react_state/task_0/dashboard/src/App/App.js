import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {getLatestNotification} from '../utils/utils';

import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

const App = (props) => {
    const [ displayDrawer, setDisplayDrawer ] = useState(false);

    const handleKeyDown = (event) => {
        // Check if user pressed [Ctr + h]
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            alert('Logging you out');  // Display alert + call logOut function
            this.props.logOut(); // from  props
        }
    }

    const handleDisplayDrawer =  () => {
        // Update state to display the drawer
        this.setState({ displayDrawer: true});
    }

    const handleHideDrawer =  () => {
        // Update state to hide the drawer
        this.setState({ displayDrawer: false});
    }

    const isLoggedIn = this.props.isLoggedIn;

    const listCourses = [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40},
    ];

    const listNotifications = [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
    ];
    
    return (
        <>
            <Notifications
                displayDrawer={this.state.displayDrawer} // Pass displayDrawer prop using local state
                handleDrawer={this.handleDisplayDrawer} // Pass handleDisplayDrawer function
                handleHideDrawer={this.handleHideDrawer} // Pass handleHideDrawer function
                listNotifications={listNotifications}
            />
            <div className={"App"}>
                <Header />
                <div className={"App-body"}>
                    {isLoggedIn === true && (
                        <BodySectionWithMarginBottom title={"Course list"}>
                            <CourseList listCourses={listCourses}/>
                        </BodySectionWithMarginBottom>
                        )}
                        {isLoggedIn === false && (
                            <BodySectionWithMarginBottom title={"Log in to continue"}>
                                <Login/>
                            </BodySectionWithMarginBottom>
                        )}
                        <BodySection title={"News from the School"}>
                            <p>Hello World!</p>
                        </BodySection>
                    </div>
                    <Footer />
                </div>
            </>
        );
    };

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
};

export default App;

