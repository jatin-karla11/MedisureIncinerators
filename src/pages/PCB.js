import './PCB.css'

import React , {useContext , useEffect} from 'react'
import {AuthContext} from '../Context/AuthContext'
import ServerService from '../ServerService'

function PCB() {
    const { user, setIsAuth  , setUser} = useContext(AuthContext);

  
    useEffect(() => {
  
      ServerService.pcb().then(result => {
        setIsAuth(result.data.status);
        setUser(result.data.user)
      }).catch(err => console.log(err, "err in /client"))
    }, [])
  
  
    return (
        user && 
        <div className="pcb">
            <h1>PCB</h1>
            
            <h1>{user.personName}</h1>
            <h1>{user.email}</h1>
            <h1>{user.personContact}</h1>

            {/* <div className="pcb_header">
                <div className="pcb_header_title">{user.name}</div>
            </div>
            <div className="pcb_body"></div>
            <div className="pcb_footer"></div> */}
        </div>
    )
}

export default PCB


