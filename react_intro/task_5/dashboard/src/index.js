import React from 'react';
import ReactDOM from 'react-dom/client';

import './App/App.css';
import App from './App/App';
import Notifications from './Notifications/Notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="root">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>  
);