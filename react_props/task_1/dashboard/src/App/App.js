// import React, { Component } from 'react'
import React from 'react';
//import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../App/App';

function App () {
    return (
    <>
      <Notifications />
    <div className="App">
      <Header />
        <img src="" className="" alt="" />
        <h1>School dashboard</h1>
      <body className='App-body'>
        <Login />
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
        <Footer />
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
    </>
    );
  }
export default App;
