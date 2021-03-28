import React , {useContext , useEffect} from 'react'
import './Admin.css'
import {AuthContext} from '../Context/AuthContext'
import ServerService from '../ServerService'
function Admin() {
  const { user, setIsAuth  , setUser} = useContext(AuthContext);

  
  useEffect(() => {

    ServerService.admin().then(result => {
      setIsAuth(result.data.status);
      setUser(result.data.user)
    }).catch(err => console.log(err, "err in /client"))
  }, [])


    return (
        user && 
        <div className="admin">
            
            <h1>{user.personName}</h1>
            <h1>{user.email}</h1>
            <h1>{user.personContact}</h1>

            {/* <div className="admin_header">
                <div className="admin_header_title">{user.name}</div>
            </div>
            <div className="admin_body">
            </div>
            <div className="admin_footer"></div> */}
        </div>
    )
}

export default Admin
