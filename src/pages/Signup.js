import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './Signup.css'
import ServerService from '../ServerService'
function Signup() {

  const history = useHistory()
  const [data, setData] = useState({
    estbName: "",
    estbAddress: "",
    hcf: "",
    ownership: "",
    email: "",
    personContact: "",
    personDesignation: "",
    personName: "",
    numberOfBeds: "",
    estbPresence: "",
    estbDate: "",
    city: "",
    password : ""
  })
  const register = (e) => {
    e.preventDefault();
    ServerService.register(data).then(result=>{
      console.log(result);
      history.push('/login')
    }).catch(err=>{
      console.log(err , "erer")
    })

  }
  const handleChange = (e) => {
    setData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className='signup'>
      <div className='signup_container'>
        <div className="signup_container_title">SIGN UP FORM</div>
        <marquee>All the fields are mandatory for successfull registration..</marquee>
        <form onSubmit={register}>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Establishment Name :</label><br></br>
            <input required onChange={handleChange} value={data.estbName} type="text" name="estbName" className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Address :</label>
            <input required onChange={handleChange} value={data.estbAddress} type="text" name="estbAddress" className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Select HCF Category :</label>
            <input required onChange={handleChange} value={data.hcf} type="text" name="hcf" list="hcfcategories" className="signup_container_div_input"></input>
            <datalist id="hcfcategories">
              <option value="Hospital" />
              <option value="Blood Bank" />
              <option value="Dental Clinic" />
              <option value="Pathology Lab" />
              <option value="Pathology Lab with Histopathology" />
              <option value="Clinic" />
              <option value="Veterinary Hospital" />
              <option value="Veterinary Clinic" />
            </datalist>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Select Ownership type :</label>
            <input required onChange={handleChange} value={data.ownership} type="text" name="ownership" list="ownerships" className="signup_container_div_input"></input>
            <datalist id="ownerships">
              <option value="Individually Owned" />
              <option value="Partnership" />
              <option value="Private Limited Company" />
              <option value="Public Limited Company" />
              <option value="Semi-Government" />
              <option value="State Government" />
              <option value="Central Government" />
            </datalist>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Select Establishment Starting :</label>
            <input required onChange={handleChange} value={data.estbPresence} type="text" name="estbPresence" list="estbs" className="signup_container_div_input"></input>
            <datalist id="estbs">
              <option value="Already in existence" />
              <option value="To be started on" />
            </datalist>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Date of Establishment :</label>
            <input required onChange={handleChange} type="date" name="estbDate" value={data.estbDate} className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Number Of Beds :</label>
            <input required onChange={handleChange} name="numberOfBeds" type="number" value={data.numberOfBeds} className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">City :</label>
            <input required onChange={handleChange} name="city" type="text" className="signup_container_div_input" value={data.city}></input>
          </div>
          <div className='signup_container_div'>Details Of Authorised Person From HCF : </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Name :</label>
            <input required value={data.personName} onChange={handleChange} name="personName" type="text" className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Designation :</label>
            <input required onChange={handleChange} value={data.personDesignation} name="personDesignation" type="text" className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Contact :</label>
            <input required onChange={handleChange} value={data.personContact} name="personContact" type="text" className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Email :</label>
            <input required onChange={handleChange} name="email" value={data.email} type="email" className="signup_container_div_input"></input>
          </div>
          <div className='signup_container_div'>
            <label className="signup_container_div_label">Password :</label>
            <input required onChange={handleChange} name="password" value={data.password} type="password" className="signup_container_div_input"></input>
          </div>
          <br></br>
          <center><button className="signup_button">Register</button></center>
        </form>
      </div>
    </div>
  );
}

export default Signup