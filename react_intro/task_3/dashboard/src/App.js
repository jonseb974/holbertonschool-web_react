//import React, { Component } from 'react'
import React from 'react';
//import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils'

//import './App.css';

function App () {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
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
        <button style={{ marginLeft: '10px'}}>  OK </button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
    );
  }
export default function();



