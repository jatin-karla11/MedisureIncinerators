import React, { useEffect, useState , useContext } from 'react'
import ServerService from '../../../ServerService'
import ClientsCard from '../../../layouts/Admin/ClientsCard';
import {AuthContext} from '../../../Context/AuthContext'
function Clients({match , url , deleteBtn}) {
    const {setIsAuth , setUser} = useContext(AuthContext)
    const [clients, setClients] = useState([]);

    useEffect(() => {
        ServerService.getClients().then(result => {
            setIsAuth(result.data.status)
            setClients(result.data.clients)
            setUser(result.data.user)
        }).catch(err => {
            console.log(err , "err in auth/admin/clients")
            console.log(match , "match")
        })
        return () => {
        }
    }, [])


    return (
        <div style= {{
            paddingTop : "70px"
        }}>
            {
                clients ?
                clients.map((client , idx)=>{
                    return <ClientsCard deleteBtn = {deleteBtn} url = {url} id = {idx + 1} key = {`client_${idx + 1}`} setClients = {setClients} client = {client}/>
                }) : 
                <h1>there is no client</h1>
            }
        </div>
    )
}
export default Clients
