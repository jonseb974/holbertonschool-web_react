import React from 'react';
import { createRoot } from 'react-dom';

import './App.css';
import App from './src/App/App';
import reportWebVitals from './src/reportWebVitals';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="">
    </div>
    <App />
  </React.StrictMode>  
);

reportWebVitals();
