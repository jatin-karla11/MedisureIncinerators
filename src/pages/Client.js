import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Client.css';
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService'
import { Button, Card } from 'react-bootstrap';
import Signin from './Signin';
import Signup from './Signup';


function Client() {
  const { user, setIsAuth, setUser } = useContext(AuthContext);
  const history = useHistory()

  const [year, setYear] = useState("");
  const [downloadUrl, setDownloadUrl] = useState({
    reportCertificatePath: "",
    registrationCertificatePath: ""
  })

  useEffect(() => {

    ServerService.client().then(result => {
      setIsAuth(result.data.status);
      setUser(result.data.user)
    }).catch(err => {
      console.log(err, "err in /client")
      history.push('/')
    })

  }, [])

  const logout = () => {
    ServerService.logout(user.role).then(response => {
      setIsAuth(false);
      history.push("/")
    }).catch(err => {
      alert("error while logging out ");
    })
  }
  var years = [];
  var currentYear = (new Date()).getFullYear();

  var earliestYear = currentYear - 10;
  while (earliestYear <= currentYear) {

    years.push(currentYear);
    currentYear -= 1;
  }

  function handleChange(e) {
    setYear(e.target.value);

    let url1 = user.reportCertificatePath.filter(ele => ele.includes(e.target.value))
    let url2 = user.registrationCertificatePath.filter(ele => ele.includes(e.target.value))

    setDownloadUrl({
      reportCertificatePath: url1[0],
      registrationCertificatePath: url2[0]
    })
  }


  return (
    user &&
      user.role === "client" ?
      <div className='client'>
        <div className="container client_header_title" style={{ fontFamily: "Pacifico, cursive" }}><span className="welcome"> Welcome , </span><strong style={{ color: "#006400", fontWeight: "1000" }}>{user.estbName} </strong> </div>
        <div className="container">
          <div className="card" >
            <div className="card-body">
              <div className=' client_header_content'>
                <h3 style={{ color: "#006400", padding: "10px", textDecoration: "underline" }}> Organization details  :</h3>
                <div className="row col-lg-12 mx-auto" style={{ fontFamily: "Lato, cursive" }}>
                  <div className='col-lg-6'>
                    <strong>HCF Category : </strong>{user.hcf}
                  </div>
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong> Ownership Type : </strong>  {user.ownership}
                  </div>
                </div>
                <div className="row col-lg-12 mx-auto" style={{ fontFamily: "Lato, cursive" }} >
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong>Number Of Beds : </strong> {user.numberOfBeds}
                  </div>
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong>  City : </strong> {user.city}

                  </div>
                </div>

              </div>
            </div>
            <div className="container client_header_content_buttons">
              <Link to="/auth/editprofile">
                <button className="btn btnc" style={{ background: "#006400", color: "whitesmoke", height: "35px", fontSize: "medium" }}>EDIT PROFILE</button>
              </Link>
              <button onClick={logout} className="btn btnc" style={{ background: "#006400", color: "whitesmoke", height: "35px", fontSize: "medium" }}>LOGOUT</button>
            </div>
          </div>

          <div className='container'>
            <div className="row">

              {
                year && downloadUrl.registrationCertificatePath ?
                  <a className="btn btn-2 col-lg-4"
                    href={`${process.env.REACT_APP_BACKEND_URL}/api/${downloadUrl.registrationCertificatePath}`} download target="_blank"
                    style={{ background: "#006400", color: "whitesmoke" }}
                  >
                    <strong>Download Registration</strong>
                  </a> :
                  <button disabled className="btn btn-2 col-lg-4"
                    style={{ background: "#006400", color: "whitesmoke" }}>
                    <strong>Download Registration</strong>
                  </button>
              }


              <select className="choose2 col-lg-3" id="ddlYears" onChange={handleChange}>
                <option value=" ">Select Year</option>
                {years.map(allYears => {
                  return <option key={allYears} value={allYears}>{allYears}</option>
                })}
              </select>
              {
                year && downloadUrl.reportCertificatePath ?
                  <a className="btn btn-2 col-lg-4"
                    href={`${process.env.REACT_APP_BACKEND_URL}/api/${downloadUrl.reportCertificatePath}`} download target="_blank"
                    style={year ?
                      { background: "#006400", color: "whitesmoke" } :
                      { cursor: "not-allowed" }
                    }>
                    <strong>Download Annual Report</strong>
                  </a> :
                  <button disabled className=" btn btn-2 col-lg-4"
                    style={{ background: "#006400", color: "whitesmoke" }}>
                    <strong>Download Annual Report</strong>
                  </button>
              }

            </div>

          </div>

          <div className="card" >
            <div className="card-body">
              <div className=' client_header_content'>
                <h3 style={{ color: "#006400", padding: "10px", textDecoration: "underline" }}>Authorized person details :</h3>
                <div className="row col-lg-12 mx-auto" style={{ fontFamily: "Lato, cursive" }}>
                  <div className='col-lg-6'>
                    <strong> Name : </strong>{user.personName}
                  </div>

                  <div className='col-lg-6'>
                    <strong> Contact :  </strong>  {user.personContact}
                  </div>
                </div>
                <div className="row col-lg-12 mx-auto" style={{ fontFamily: "Lato, cursive" }} >
                  <div className='col-lg-6'>
                    <strong>Email : </strong> <strong style={{ fontSize: "15px" }}>  {user.email}</strong>
                  </div>
                  <div className='col-lg-6'>
                    <strong>Designation :</strong>  {user.personDesignation}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* certificate download btn  
        {
          user.certificatePath &&
          <a href={`${process.env.REACT_APP_BACKEND_URL}/api/resume_${user.certificatePath}`} download target="_blank"  >Download certificate</a>
        }
       */}
      </div > :
      <h1>You do have access to this page  </h1>
  );
}

export default Client