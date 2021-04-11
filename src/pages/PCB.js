import './PCB.css'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import ServerService from '../ServerService'
import { useHistory, Link } from 'react-router-dom'

function PCB() {
  const { user, setIsAuth, setUser } = useContext(AuthContext);
  const history = useHistory()

  useEffect(() => {
    ServerService.pcb().then(result => {
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
      history.push("/");
    }

    ).catch(err => alert("error while logging out "))
  }

  return (
    user &&
      user.role === "pcb" ?
      <div className='pcb'>
        <div className="container pcb_header_title" style={{ fontFamily: "Pacifico, cursive" }}><span className="welcome"> Welcome ,</span><strong style={{ color: "#006400", fontWeight: "1000" }}>{user.personName} Your PCB login is Successful !! </strong>  </div>
        <div className="container">
          <div className="card" >
            <div className="card-body">
              <div className='pcb_header_content'>
                <h3 style={{ color: "#006400", padding: "10px", textDecoration: "underline", fontFamily: "Fjalla One, sans-serif" }}> PCB Details :</h3>
                <div className="row col-lg-12 mx-auto" style={{ fontFamily: "Lato, cursive" }}>
                  <div className='col-lg-6'>
                    <strong>Name : </strong>{user.personName}
                  </div>
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong>Email : </strong> <strong style={{ fontSize: "15px" }}>  {user.email}</strong>
                  </div>
                </div>
                <div className="row col-lg-12 mx-auto" style={{ fontFamily: "Lato, cursive" }} >
                  <hr style={{ marginTop: "20px" }} />
                  <div className='col-lg-6'>
                    <strong>Contact No : </strong> {user.personContact}
                  </div>
                </div>
              </div>
            </div>
            <div className="container pcb_header_content_buttons">
              <Link to="/auth/pcb/clients"><button className="btn btnp" style={{ background: "#006400", color: "whitesmoke", float: "left", alignItems: "left", height: "35px", padding: "5px", fontSize: "medium" }}>Medisure Incinerators clients</button></Link>
              <button onClick={logout} className="btn btnp" style={{ background: "#006400", color: "whitesmoke", float: "right", height: "35px", padding: "5px" }}>LOGOUT</button>
            </div>
          </div>
        </div>

        {/* <div className="pcb_header">
                <div className="pcb_header_title">{user.name}</div>
            </div>
            <div className="pcb_body"></div>
            <div className="pcb_footer"></div> */}
      </div> :
      <h1>You do have access to this page  </h1>

  )
}

export default PCB


