import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  const liProps = {
    'data-notification-type': type,
  };
    
    if (html) liProps.dangerouslySetInnerHTML= html;
    return (
      <li {...liProps}>{value}</li>   
    );
  }


  
  export default NotificationItem;