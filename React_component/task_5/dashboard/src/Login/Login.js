import React from 'react';
import './Login.css';


const Login =  () => {
    return (
        <>
            <p className={"login-p"}>Login to access the full dashboard</p>
            <div className={"App-form"}>
              <label htmlFor={"email"}>Email:</label>
              <input type={"email"} id={"email"} name={"email"}></input>
              <label htmlFor={"password"}>Password:</label>
              <input type={"password"} id={"password"} name={"password"}></input>
              <button style={"submit"}>OK</button>
            </div>
        </>
    );
  }


export default Login;