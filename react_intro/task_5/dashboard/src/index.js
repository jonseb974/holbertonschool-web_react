import React from 'react';
import ReactDOM from 'react-dom/client';

import './App/App.css';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>  
);