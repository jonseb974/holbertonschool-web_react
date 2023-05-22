import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import './Notifications.css';


const Notifications = ({ displayDrawer, listNotifications }) => {
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
        {listNotifications.length === 0 ? (
            <p>No new notification for now </p>
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem
            key={notification.id}
            id={notification.id}
            html={notification.html} 
            type={notification.type}
            value={notification.value} 
            />
          ))
        )}
      </ul>
    </div>
    )}
    </>
  );
};

Notifications.defaultProps = { 
  displayDrawer: false,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  //displayDrawer: PropTypes.bool.isRequired,
  //0listNotifications: PropTypes.arrayOf(PropTypes.string).isRequired
  //listNotifications: PropTypes.arrayOf(PropTypes.string),
  //listNotifications: PropTypes.arrayOf(NotificationItem.propTypes),
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;