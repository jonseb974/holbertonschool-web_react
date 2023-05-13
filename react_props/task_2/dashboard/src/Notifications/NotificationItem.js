import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}>
            {value}
        </li>    
    );
  };

  NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };
  
  export default NotificationItem;