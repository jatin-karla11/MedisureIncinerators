import React from 'react'
import './Signup.css'

function Signup() {

    const register=(e)=>{
      e.preventDefault();

    }

    return (
      <div className='signup'>
        <div className='signup_container'>
          <div className="signup_container_title">SIGN UP FORM</div>
          <marquee>All the fields are mandatory for successfull registration..</marquee>
          <form onSubmit={register}>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Establishment Name :</label><br></br>
              <input required type="text" name="estbName" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Address :</label>
              <input required type="text" name="estbAddress" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Select HCF Category :</label>
              <input required type="text" name="hcf" list="hcfcategories" className="signup_container_div_input"></input>
              <datalist id="hcfcategories">
              <option value="Hospital"/>
              <option value="Blood Bank"/>
              <option value="Dental Clinic"/>
              <option value="Pathology Lab"/>
              <option value="Pathology Lab with Histopathology"/>
              <option value="Clinic"/>
              <option value="Veterinary Hospital"/>
              <option value="Veterinary Clinic"/>
              </datalist>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Select Ownership type :</label>
              <input required type="text" name="ownership" list="ownerships" className="signup_container_div_input"></input>
              <datalist id="ownerships">
                <option value="Individually Owned"/>
                <option value="Partnership"/>
                <option value="Private Limited Company"/>
                <option value="Public Limited Company"/>
                <option value="Semi-Government"/>
                <option value="State Government"/>
                <option value="Central Government"/>
              </datalist>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Select Establishment Starting :</label>
              <input required type="text" name="estbPresence" list="estbs" className="signup_container_div_input"></input>
              <datalist id="estbs">
                <option value="Already in existence"/>
                <option value="To be started on"/>
              </datalist>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Date of Establishment :</label>
              <input required type="date" name="estbDate" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Number Of Beds :</label>
              <input required name="numberOfBeds" type="number" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">City :</label>
              <input required name="city" type="text" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>Details Of Authorised Person From HCF : </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Name :</label>
              <input required name="personName" type="text" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Designation :</label>
              <input required name="personDesignation" type="text" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Contact :</label>
              <input required name="personContact" type="text" className="signup_container_div_input"></input>
            </div>
            <div className='signup_container_div'>
              <label className="signup_container_div_label">Email :</label>
              <input required name="personEmail" type="email" className="signup_container_div_input"></input>
            </div>
            <br></br>
            <center><button className="signup_button">Register</button></center>
          </form>
        </div>
      </div>
    );
}

export default Signup
