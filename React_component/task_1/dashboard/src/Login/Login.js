import React from 'react';
import './Login.css';
import { getFullYear, getFooterCopy } from '../utils/utils'


const Login = () => {
    return (
    <>
      <p className={"login"}>Login to access the full dashboard</p>
  
      <body className='App-body'>
        <label htmlFor="email" onClick={() => {
          document.getElementById('password').focus();
        }}>Email:  </label>
        <input type="email" id="email"/>
        <label htmlFor="password" onClick={() => {
          document.getElementById('password').focus();
        }}>  Password:  </label>
        <input type="password" id="password"/>
        <button style={{ marginLeft: '10px'}}>  OK </button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
    );
  }
export default Login;