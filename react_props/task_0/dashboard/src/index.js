import React from 'react';
import ReactDOM from 'react-dom/client';

import './App/App.css';
import App from './App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>  
);

const notifications = ReactDOM.createRoot(document.getElementById());
notifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>  
);