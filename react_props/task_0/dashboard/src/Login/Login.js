import React from 'react'
//import logo from './logo.jpg';
//import { getFullYear, getFooterCopy } from './utils'
import './Login.css';

export default function Login () {
  return (
  <>
    <div className="App">
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" onClick={() => {
          document.getElementById('password').focus();
        }}>Email:  </label>
        <input type="email" id="email"/>
        <label htmlFor="password" onClick={() => {
          document.getElementById('password').focus();
        }}>  Password:  </label>
        <input type="password" id="password"/>
        <button>  OK </button>
      </body>      
    </div>
   </>
  );
} 
