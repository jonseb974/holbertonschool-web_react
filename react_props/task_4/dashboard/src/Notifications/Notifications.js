import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import propTypes from 'prop-types';


const Notification = ({ displayDrawer }) => {
  const closeNotification = () => {
    console.log('Close button has been clicked');
  };

  return (
  <>
    <div className="menuItem">
      <p>Your notifications</p>
    </div>
    {displayDrawer && (
    <div className="Notifications">
      <button style={{
        position: "absolute",
        background: "transparent",
        border: "none",
        right: "20px",
        cursor:'pointer'
      }}
      aria-label="close"
      onClick= {() => {
        console.log('Close button has been clicked\n');
      }}
      >x</button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="urgent" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
    )}
    </>
  );
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
};

export default Notifications;