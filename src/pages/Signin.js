import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

function Signin() {
  return (
    <div className='signin'>
      <div className='signin_container'>
        <div className='signin_container_div_title'>
          Choose the preferred option :
          </div>
        {/* <div className='signin_container_div'>
          <Link to={{
            pathname: "/login",
            whichLogin: "admin"
          }}
          ><button className="signin_container_div_button">Admin Login</button></Link>
        </div>
        <div className='signin_container_div'>
          <Link to={{
            pathname: "/login",
            whichLogin: "pcb"
          }}><button className="signin_container_div_button">PCB Login</button></Link>
        </div> */}
        <div className='signin_container_div'>
          <Link to={{
            pathname: "/login",
            whichLogin: "customer"
          }}><button className="signin_container_div_button">Department Login</button></Link>
        </div>
        {/* <div className='signin_container_div'>
          <Link to="/signup"><button className="signin_container_div_buttonsignup">Don't have an account? Register here!</button></Link>
        </div> */}
      </div>
    </div>
  );
}

export default Signin
