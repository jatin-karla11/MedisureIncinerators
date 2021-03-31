import React from 'react'
import { Link } from 'react-router-dom'

function ClientsCard({ client, id }) {

    return (
        <Link  to={{
            pathname : `/auth/admin/clients/${client._id}`,
            state : client 

        }}>
            <div style={{
                border: "3px solid black",
                boxShadow: "0 0 5px gray",
                padding: "15px 20px",
                margin: "10px"
            }}>
                <h3>{client.personName}</h3>
                <p>{client.email}</p>
            </div>
        </Link>

    )
}

export default ClientsCard
