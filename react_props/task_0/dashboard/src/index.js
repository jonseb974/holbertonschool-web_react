import React from 'react';
import { createRoot } from 'react-dom'; // 'react-dom/client';
import App from './App/App';


createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>,
);

