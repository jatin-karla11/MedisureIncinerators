import React, { useContext, useEffect } from 'react'
import './Client.css';
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService'
function Client() {
  const { user, setIsAuth } = useContext(AuthContext);
  useEffect(() => {

    ServerService.client().then(result => {
      setIsAuth(result.data.status)
    }).catch(err => console.log(err, "err in /client"))

  }, [])


  return (
    user && (
      <div className='client'>
        <div className='client_header'>
          <div className='client_header_title'>Welcome, {user.estbName}</div>
          <div className='client_header_content'>
            <div className='row' style={{ width: "100%" }}>
              <div className='col-3 client_header_content_div'>
                HCF Category : {user.hcf}
              </div>
              <div className='col-3 client_header_content_div'>
                Ownership Type : {user.ownership}
              </div>
              <div className='col-3 client_header_content_div'>
                Number Of Beds : {user.numberOfBeds}
              </div>
              <div className='col-3 client_header_content_div'>
                City : {user.city}
              </div>
            </div>

            <div className="client_header_content_buttons">
              <button>EDIT PROFILE</button>
              <button>LOGOUT</button>
            </div>
          </div>
        </div>
        <div className='client-body'>
          <table>
            <th>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>

            </th>
          </table>
        </div>
        <div className='client-footer'>
          <div className='row' style={{ width: "100%" }}>
            <div className='client-footer_title'>Authorized person details : </div>
            <div className='col-3 client_header_content_div'>
              Name : {user.personName}
            </div>
            <div className='col-3 client_header_content_div'>
              Contact : {user.personContact}
            </div>
            <div className='col-3 client_header_content_div'>
              Designation : {user.personDesignation}
            </div>
            <div className='col-3 client_header_content_div'>
              Email : {user.email}
            </div>
          </div>
        </div>
        {/* <h1>Client Page</h1>
            <p>Email : {user.email}</p>
            <p>city : {user.city}</p>
            <p>estbName: {user.estbName}</p> */}
      </div>
    )
  );
}

export default Client
