import React , {useEffect, useState , useContext} from 'react'
import ServerService from '../../../ServerService'
import {AuthContext} from '../../../Context/AuthContext'

function SingleClient({location , match}) {

    // const [client , setClient ] = useState(location.state);
    const [client , setClient ] = useState({});
    const [file , setFile ] = useState(null);
    const {setIsAuth} = useContext(AuthContext)


    const addCertificate  = ()=>{
        const formdata = new FormData();
        formdata.append("email" , client.email );
        formdata.append("file", file)
        ServerService.addCertificate(formdata).then(result=>{
            alert("certificated is added ")
        }).catch(err=>{
            console.log(err , "err in adding certificate ")
        })
    }

    useEffect(()=>{
        ServerService.getSpecificClient({"clientId" : match.params.clientid}).then(result=>{
            setIsAuth(result.data.status)
            setClient(result.data.client)
        }).catch(err=>{
            console.log(err , "err in")
        })
    },[])

    return (
        client &&
        <div style = {{
            display : "grid",
            placeItems : "center",
            width : "100vw",
            height : "100vh"
        }}>
            {
                client.role
            }
            <h1>
            {client.personName}
            </h1>
            <input type = "file" name = "file" onChange = {(e)=>{
                console.log(e.target.files)
                setFile(e.target.files[0])
            }} />
            <button onClick = {addCertificate} >Add certificate </button>
        </div>
    )
}

export default SingleClient
