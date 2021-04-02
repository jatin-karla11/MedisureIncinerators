import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { Link } from 'react-scroll';
import bm from './layout images/bm.png'
import { AuthContext } from '../Context/AuthContext'
import ServerService from '../ServerService'
import { useHistory } from 'react-router-dom'


function Header() {

  const { isAuth, setIsAuth, user } = useContext(AuthContext)
  const history = useHistory()

  // var user1="/"+user.role;
  const logout = () => {
    ServerService.logout(user.role).then(result => {
      setIsAuth(result.data.status);
      history.push("/")
    }).catch(err => {
      console.log("error while logging out ", err)
    })

  }

  return (
    <div className="header" id="headerid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" style={{ cursor: "pointer" }} to="homeid">
            <img className="medisurelogo" src={bm} alt="" />
            <span className="medisure-brand">Medisure Incinerators</span>

          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" activeClassName="menu_active" aria-current="page" to="/">Home</NavLink>
              </li>

              {
                isAuth ?
                  user &&
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="menu_active" to={user.role === 'client' ? '/client' : user.role === 'admin' ? '/admin' : '/pcb'}>Dashboard</NavLink>
                    </li>
                    < li onClick={logout} className="nav-item">LogOut</li>

                  </> :
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" offset={-70} activeClassName="menu_active" to="aboutid">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" offset={-70} activeClassName="menu_active" to="serviceid">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" offset={-70} activeClassName="menu_active" to="documentid">Documents</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" offset={-70} activeClassName="menu_active" to="contactid">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" offset={-70} activeClassName="menu_active" to="/signin">Sign-In</NavLink>
                    </li>
                  </>
              }

            </ul>

          </div>
        </div>
      </nav >
    </div >
  )
}

export default Header
