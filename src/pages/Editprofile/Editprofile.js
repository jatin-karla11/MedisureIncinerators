import React, { useContext, useEffect, useState } from 'react'
import ServerService from '../../ServerService'
import { AuthContext } from '../../Context/AuthContext'

function Editprofile() {
    const { user, setIsAuth, setUser } = useContext(AuthContext);

    const [data, setData] = useState({
        estbName: "",
        estbAddress: "",
        hcf: "",
        ownership: "",
        personContact: "",
        personDesignation: "",
        personName: "",
        numberOfBeds: "",
        estbPresence: "",
        estbDate: "",
        city: "",
      })
    
      useEffect(() => {
    
        ServerService.client().then(result => {
          setIsAuth(result.data.status);
          setUser(result.data.user)
        }).catch(err => console.log(err, "err in /client"))
      }, [])
    
    
      const handleChange = (e) => {
        setData(prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      }
    

    const saveProfile = (e) => {
        e.preventDefault()
        ServerService.editProfile(data).then(result => {
            setUser(result.data.user);
            alert("updated")
        }).catch(err => {

        })
    }
    return (
        <div style={{ padding: "80px" }}>
            <h1>Editprofile</h1>

            <form onSubmit={saveProfile}>
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
                <br></br>
                <center><button className="signup_button">Save</button></center>
            </form>
        </div>
    )
}

export default Editprofile