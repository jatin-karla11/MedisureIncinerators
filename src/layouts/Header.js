import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Link } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';

import bm from './layout images/bm.png';
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService';
import { useHistory } from 'react-router-dom';
import logo from './layout images/logo.png';

function Header() {
  const { isAuth, setIsAuth, user } = useContext(AuthContext);
  const history = useHistory();
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  console.log(location, 'location');
  // var user1="/"+user.role;
  const logout = () => {
    ServerService.logout(user.role)
      .then((result) => {
        setIsAuth(result.data.status);
        localStorage.removeItem('token');
        history.push('/');
      })
      .catch((err) => {
        console.log('error while logging out ', err);
      });
  };

  return (
    <div className='header' id='headerid'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <NavLink
            className='navbar-brand'
            style={{ cursor: 'pointer', display: 'flex' }}
            // to="homeid"
            to='/'
          >
            <img className='medisurelogo' src={logo} alt='' />
            <div className='medisure-brand'>Medisure Incinerators</div>
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                {location === '' ? (
                  <Link
                    className='nav-link'
                    offset={-70}
                    activeClass='menu_active'
                    to='homeid'
                    spy
                  >
                    Home
                  </Link>
                ) : (
                  <NavLink
                    className='nav-link'
                    // activeClassName='menu_active'
                    aria-current='page'
                    to='/'
                  >
                    Home
                  </NavLink>
                )}
              </li>

              {isAuth ? (
                user && (
                  <>
                    {/* <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="menu_active" to={user.role === 'client' ? '/client' : user.role === 'admin' ? '/admin' : '/pcb'}>Dashboard</NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="menu_active" to={'/documents'}>Documents</NavLink>
                    </li> */}
                    <li onClick={logout} className='nav-item'>
                      <div className='nav-link'>LogOut</div>
                    </li>
                  </>
                )
              ) : (
                <>
                  <li className='nav-item'>
                    {location === '' ? (
                      <Link
                        className='nav-link'
                        offset={-70}
                        activeClass='menu_active'
                        to='aboutid'
                        spy
                      >
                        About
                      </Link>
                    ) : (
                      <NavLink
                        className='nav-link'
                        // activeClassName='menu_active'
                        aria-current='page'
                        to='/'
                      >
                        About
                      </NavLink>
                    )}
                  </li>
                  <li className='nav-item'>
                    {location === '' ? (
                      <Link
                        className='nav-link'
                        offset={-70}
                        activeClass='menu_active'
                        to='serviceid'
                        spy
                      >
                        Services
                      </Link>
                    ) : (
                      <NavLink
                        className='nav-link'
                        // activeClassName='menu_active'
                        aria-current='page'
                        to='/'
                      >
                        Services
                      </NavLink>
                    )}
                  </li>
                  <li className='nav-item'>
                    {location === '' ? (
                      <Link
                        className='nav-link'
                        offset={-70}
                        activeClass='menu_active'
                        to='documentid'
                        spy
                      >
                        Documents
                      </Link>
                    ) : (
                      <NavLink
                        className='nav-link'
                        // activeClassName='menu_active'
                        aria-current='page'
                        to='/'
                      >
                        Documents
                      </NavLink>
                    )}
                  </li>
                  <li className='nav-item'>
                    {location === '' ? (
                      <Link
                        className='nav-link'
                        offset={-70}
                        activeClass='menu_active'
                        to='contactid'
                        spy
                      >
                        Contact
                      </Link>
                    ) : (
                      <NavLink
                        className='nav-link'
                        // activeClassName='menu_active'
                        aria-current='page'
                        to='/'
                      >
                        Contact
                      </NavLink>
                    )}
                  </li>

                  {/* <li className='nav-item'>
                    <NavLink
                      exact
                      className='nav-link'
                      offset={-70}
                      activeClassName='menu_active'
                      to='/signin'
                    >
                      Sign-In
                    </NavLink>
                  </li> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
