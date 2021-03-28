import React , {useContext , useEffect} from 'react'
import './Admin.css'
import { useHistory } from 'react-router-dom'
import {AuthContext} from '../Context/AuthContext'
import ServerService from '../ServerService'
function Admin() {
  const { user, setIsAuth  , setUser} = useContext(AuthContext);
 
  const history = useHistory()
  
  useEffect(() => {

    ServerService.admin().then(result => {
      setIsAuth(result.data.status);
      setUser(result.data.user)
    }).catch(err => console.log(err, "err in /client"))
  }, [])

  const logout = () => {
    ServerService.Logout().then(response => {
      history.push("/login")
    }).catch(err => {
      alert("error while logging out ");
    })
  }


    return (
        user && 
        <div className='admin'>
           <div className="container admin_header_title"><span className="welcome"> Welcome , </span><strong style={{ color: "#006400", fontWeight: "1000" }}>{user.personName} Your Admin login is Successful !! </strong>  </div>
           <div className="container">
        <div className="card" >
          <div className="card-body">
            <div className=' admin_header_content'>
            <h3 style={{ color: "#006400", padding: "10px", textDecoration: "underline" }}> Admin Details :</h3>
              <div className="row col-lg-12 mx-auto">
                <div className='col-lg-6'>
                  <strong>Name : </strong>{user.personName}
                </div>
                <hr style={{ marginTop: "20px" }} />
                <div className='col-lg-6'>
                  <strong>Email : </strong> <strong style={{ fontSize: "15px" }}>  {user.email}</strong>
                </div>
              </div>
              <div className="row col-lg-12 mx-auto">
                <hr style={{ marginTop: "20px" }} />
                <div className='col-lg-6'>
                  <strong>Contact No : </strong> {user.personContact}
                </div>
              </div>
            </div>
            </div>
            <div className="container admin_header_content_buttons">
            <button className="btn " style={{ background: "#006400", color: "whitesmoke" }}>EDIT PROFILE</button>
            <button onClick={logout} className="btn" style={{ background: "#006400", color: "whitesmoke" }}>LOGOUT</button>
          </div>
            </div>
            </div>
           

            {/* <div className="admin_header">
                <div className="admin_header_title">{user.name}</div>
            </div>
            <div className="admin_body"></div>
            <div className="admin_footer"></div> */}
        </div>
    )
}

export default Admin
