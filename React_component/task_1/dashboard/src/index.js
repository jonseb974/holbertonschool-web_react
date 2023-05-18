import React from 'react';
import ReactDOM from 'react-dom/client';
import Notifications from './Notifications/Notifications'; 
import './App/App.css';
import App from './App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Notifications />
  </React.StrictMode>  
);
