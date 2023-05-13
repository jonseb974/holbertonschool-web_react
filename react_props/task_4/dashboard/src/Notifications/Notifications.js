import React from 'react'
import './Notifications.css'
//import close_icon from './close-icon.png'
import { getLatestNotification } from '../utils/utils'

function Notifications() {
  return (
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
        <li data-priority="urgent">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent"dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  )
}

export default Notifications;