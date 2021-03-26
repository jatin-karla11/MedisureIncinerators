import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import {Link} from 'react-scroll';
import bm from './layout images/bm.png'

function Header() {
    return (
        <div className="header" id="headerid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" style={{cursor:"pointer"}} to="homeid">
      <img className="medisurelogo" src={bm} alt=""/>  
      <span className="medisure-brand">Medisure Incinerators</span>
      
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName="menu_active" aria-current="page" to="homeid">Home</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" offset={-70} activeClassName="menu_active" to="aboutid">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" offset={-70} activeClassName="menu_active" to="serviceid">Services</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" activeClassName="menu_active" to="galleryid">Gallery</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" offset={-70} activeClassName="menu_active" to="documentid">Documents</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" offset={-70} activeClassName="menu_active" to="contactid">Contact</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" offset={-70} activeClassName="menu_active" to="/signin">Sign-In</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header