import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
//import { getLatestNotification } from '../utils/utils';


const NotificationItem = ({ type, html, value, markAsRead }) => {
  const liProps = {
    'data-notification-type': type,
    onClick: () => markAsRead(id),
  };
  
  if (html) liProps.dangerouslySetInnerHTML=  html;
  return <li {...liProps}>{value}</li>;   
  };
  
  NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string, }),
    value: PropTypes.string,
    markAsRead: PropTypes.func.isRequired,
  };

  NotificationItem.defaultProps = {
    type: 'default',
  };

export default NotificationItem;