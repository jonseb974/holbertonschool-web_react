import React, { Component } from 'react'
import logo from './assets/logo.jpg';
import { getFullYear, getFooterCopy } from './utils'

//import './App.css';

export default class App extends Component {
  render() {
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
        <button>  OK </button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
    )
  }
} 
