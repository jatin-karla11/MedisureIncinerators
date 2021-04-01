import React from 'react'
import { Link } from 'react-router-dom'
import './ClientCards.css'

function ClientsCard({ client, id }) {

    
    return (
        <Link  to={{
            pathname : `/auth/admin/clients/${client._id}`,
            state : client 

        }}>
            <div  class="clientmain">
                <div class="row">
                <div class="col-md-10">
               <h3 style={{color:"black"}}> <span>{id}.</span> <span style={{color:"#006400"}}>Name-</span> {client.personName}</h3> 
               <strong ><span style={{color:"#006400",margin:"30px"}}>Email -</span> </strong> <strong style={{ fontSize: "15px",color:"black"}}>  {client.email}</strong>
               </div>
                <div class="col-md-2">
                <button  className="btn" >Open Client</button>
                </div>
                </div>
                
            </div>
        </Link>

    )
}

export default ClientsCard
