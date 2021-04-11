import React from 'react'
import { Link } from 'react-router-dom'
import ServerService from '../../ServerService'
import './ClientCards.css'

function ClientsCard({ client, id, url, setClients, deleteBtn }) {

    const deleteClient = (id) => {
        const yesorno = window.confirm('do you want to delete this client ')
        console.log(yesorno)
        if (yesorno) {
            ServerService.deleteClient(id).then(result => {
                setClients(pre => {
                    return pre.filter(ele => ele._id !== id)
                })
                alert('successfully deleted client')

            }).catch(err => {
                console.log('err ', err)
                alert('error in deleting client')
            })
        }

    }
    return (

        <div class="clientmain">
            <div class="row">
                <div class="col-md-10">
                    <h3 style={{ color: "black" }}> <span>{id}.</span> <span style={{ color: "#006400" }}>Name-</span> {client.personName}</h3>
                    <strong ><span style={{ color: "#006400", margin: "10px" }}>Email -</span></strong><strong style={{ fontSize: "15px", color: "black" }}>{client.email}</strong>
                </div>

                <div class="col-md-2">
                    <Link to={{
                        pathname: `${url}${client._id}`,
                        state: client

                    }}>
                        <button className="btn open" style={{ height: "35px", padding: "5px", fontSize: "medium", marginRight: "10px" }} >Open Client</button>
                    </Link>
                    {
                        deleteBtn &&
                        <button onClick={() => deleteClient(client._id)} className="btn btn-danger delete" style={{ height: "35px", padding: "5px", fontSize: "medium" }}>Delete Client</button>
                    }

                </div>
            </div>

        </div>

    )
}

export default ClientsCard
