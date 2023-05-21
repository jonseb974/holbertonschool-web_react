import React from 'react';
import './Login.css';
import { getFullYear, getFooterCopy } from '../utils/utils'


const Login = () => {
    return (
    <>
      <p className={"login"}>Login to access the full dashboard</p>
  
      <div className={'App-body'}>

        <label htmlFor="email" onClick={() => {
          document.getElementById('password').focus();
        }}>Email:  </label><input type="email" id="email"/>
        
        <label htmlFor="password" onClick={() => {
          document.getElementById('password').focus();
        }}>  Password:  </label><input type="password" id="password"/>

        <button style={{ marginLeft: '10px'}}>  OK </button>

      </div>
    </>
    );
  }
export default Login;