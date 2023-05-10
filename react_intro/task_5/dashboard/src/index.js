import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>  
);