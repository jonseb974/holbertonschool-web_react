import React from 'react'
import './Notifications.css'
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils'
import NotificationItemShape from './NotificationItemShape'
import propTypes from 'prop-types'


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
          <li>
            <p>No notification available yet</p>
          </li>
        ): (
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
  displayDrawer: false
}

Notifications.propTypes = {
  displayDrawer: propTypes.bool.isRequired,
  listNotifications: propTypes.arrayOf(NotificationItem.propTypes),
};

export default Notifications;