import React from 'react'
import './Login.css'

function Login() {
    return (
      <div className='login'>
        <div className='login_container'>
          <div className='login_container_title'>
            Enter your credentials for signing in :
          </div>
          <br></br>
          <div className='login_container_input'>
            <label style={{ width: "80px", fontWeight: "500" }}>Email : </label>
            <input type="text"></input>
          </div>
          <div className='login_container_input'>
            <label style={{ width: "80px", fontWeight: "500" }}>
              Password :{" "}
            </label>
            <input type="password"></input>
          </div>
        </div>
      </div>
    );
}

export default Login
