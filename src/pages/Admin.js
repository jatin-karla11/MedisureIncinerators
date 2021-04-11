import React, { useContext, useEffect } from 'react'
import './Admin.css'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import ServerService from '../ServerService'
function Admin() {
  const { user, setIsAuth, setUser } = useContext(AuthContext);
  const history = useHistory()

  useEffect(() => {
    ServerService.admin().then(result => {
      setIsAuth(result.data.status);
      setUser(result.data.user)
    }).catch(err =>{
      history.push('/')
      console.log(err, "err in /client")
    })
  }, [])

  const logout = () => {
    ServerService.logout(user.role).then(response => {
      setIsAuth(false);
      localStorage.removeItem('token')

      history.push("/")
    }).catch(err => {
      alert("error while logging out ");
    })
  }

  return (
    user &&
    user.role === "admin" ?
      <div className='admin'>
        <div className="container admin_header_title"><span className="welcome" style={{fontFamily:"Pacifico, cursive"}}><strong>Welcome</strong>  , </span><strong style={{ color: "#006400", fontWeight: "1000" }}>{user.personName} Your Admin login is Successful !! </strong>  </div>
        <div className="container">
          <div className="card" >
            <div className="card-body">
              <div className=' admin_header_content'>
                <div className="admindetails" style={{fontFamily:"Fjalla One, sans-serif"}}>
                <h3  style={{ color: "#006400", padding: "10px", textDecoration: "underline",alignItems:"center" }}> <strong>Admin Details : </strong></h3></div>
                <div className="row col-lg-12 mx-auto"style={{fontFamily:"Lato, cursive"}}>
                  <div className='col-lg-6' >
                    <strong>Name : </strong>{user.personName}
                  </div>
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong>Email : </strong> <strong style={{ fontSize: "15px" }}>  {user.email}</strong>
                  </div>
                </div>
                <div className="row col-lg-12 mx-auto" style={{fontFamily:"Lato, cursive"}} >
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong>Contact No : </strong> {user.personContact}
                  </div>
                </div>
              </div>
            </div>
            
            <div className=" admin_header_content_buttons">
              <Link to = "/auth/admin/clients"><button   className="btn btn2" style={{ background: "#006400", color: "whitesmoke",float:"left",alignItems:"left",height:"35px",padding:"5px",fontSize:"medium" }}>Our clients</button></Link>
              <button onClick={logout} className="btn btn2" style={{ background: "#006400", color: "whitesmoke",height:"35px",padding:"5px",fontSize:"medium"  }}>LOGOUT</button>
            </div> 
            </div>
        </div>
      </div>
      :
      <h1>You do have access to this page  </h1>
  )
}

export default Admin
