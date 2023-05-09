import React from 'react';
import { createRoot } from 'react-dom/client';

//import './App.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
///reportWebVitals();

export default Notifications;