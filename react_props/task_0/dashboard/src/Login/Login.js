import React, { Component } from 'react'
import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from './utils'
import Notifications from 'root-notifications'

//import './App.css';

export default class App extends Component {
  render() {
    return (
    <>
    <div className='root-notifications'>
            <div className="App">
                <header className="Header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>School dashboard</h1>
                </header>
                <body className='Login'>
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
                <footer className='Footer'>
                    <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                </footer>
            </div>
        </div>
        </>
    )
  }
}  
