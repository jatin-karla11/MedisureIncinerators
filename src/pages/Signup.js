import React from 'react'
import './Signup.css'

function Signup() {
    return (
      <div className='signup'>
        <div className='signup_container'>
          <form>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Establishment Name :</label>
              <input type="text"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Address :</label>
              <input type="text"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Select HCF Category :</label>
              <input type="text"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Select Ownership type :</label>
              <input></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Select Establishment Starting :</label>
              <input></input>
            </div>
            <div className='signup_container_div'>Details Of Authorised Person From HCF</div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Number Of Beds :</label>
              <input></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">City :</label>
              <input></input>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Signup
