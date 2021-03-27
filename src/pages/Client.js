import React, { useContext, useEffect } from 'react'
import './Client.css';
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService'
import { Button,Card } from 'react-bootstrap';
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
    <div className="container client_header_title"><span className="welcome"> Welcome , </span><strong style={{color:"#006400",fontWeight:"1000"}}>{user.estbName} </strong> </div>
  <div className="container">
  <div className="card" >
      <div className="card-body">
        <div className=' client_header_content'>
        <h3 style={{color:"#006400",padding:"10px",textDecoration:"underline"}}> Organization details  :</h3>
          <div className="row col-lg-12 mx-auto">
            <div className='col-lg-6'>
         <strong>HCF Category : </strong>{user.hcf}
            </div>
            <hr style={{marginTop:"20px"}} />
            <div className='col-lg-6'>
           <strong> Ownership Type : </strong>  {user.ownership}
            </div>
            </div>
            <div className="row col-lg-12 mx-auto">
              <hr style={{marginTop:"20px"}} />
            <div className='col-lg-6'>
            <strong>Number Of Beds : </strong> {user.numberOfBeds}
            </div>
            <hr style={{marginTop:"20px"}} />
            <div className='col-lg-6'>
           <strong>  City : </strong> {user.city}
           
            </div>
            </div>
          
          </div>
          </div>
          <div className="container client_header_content_buttons">
            <button className="btn " style={{background:"#006400",color:"whitesmoke"}}>EDIT PROFILE</button>
            <button className="btn" style={{background:"#006400",color:"whitesmoke"}}>LOGOUT</button>
            </div>
        </div>
        </div>
        <div className='container client-body'>
          <table>
            <th>
              <td>xx</td>
              <td>xx</td>
              <td>xx</td>

            </th>
          </table>
        </div>
        <div className="container">
  <div className="card" >
      <div className="card-body">
        <div className=' client_header_content'>
          <h3 style={{color:"#006400",padding:"10px",textDecoration:"underline"}}>Authorized person details :</h3>
          <div className="row col-lg-12 mx-auto">
            <div className='col-lg-6'>
         <strong> Name : </strong>{user.personName}
            </div>
          
            <div className='col-lg-6'>
           <strong> Contact :  </strong>  {user.personContact}
            </div>
            </div>
            <div className="row col-lg-12 mx-auto">
             
            <div className='col-lg-6'>
            <strong>Email : </strong> <strong style={{fontSize:"17px"}}>  {user.email}</strong>
            </div>
            <div className='col-lg-6'>
           <strong>Designation :</strong>  {user.personDesignation}
           </div>
            </div>
           
          </div>
      
          </div>
          </div>
          </div>
        
          </div>
          
          
  )
);
}

export default Client