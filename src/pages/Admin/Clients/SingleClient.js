import React, { useEffect, useState, useContext } from 'react'
import ServerService from '../../../ServerService'
import { AuthContext } from '../../../Context/AuthContext'
import './SingleClient.css'
import { Button } from 'bootstrap';
function SingleClient({ location, match }) {

    // const [client , setClient ] = useState(location.state);
    const [client, setClient] = useState({});
    const [file, setFile] = useState(null);
    const { setIsAuth } = useContext(AuthContext)
    const [year,setYear]=useState("");

    const addCertificate = () => {
        const formdata = new FormData();
        formdata.append("email", client.email);
        formdata.append("file", file)
        ServerService.addCertificate(formdata).then(result => {
            setClient(result.data.client)
            alert("certificated is added ")
        }).catch(err => {
            console.log(err, "err in adding certificate ")
        })
    }

    useEffect(() => {
        ServerService.getSpecificClient({ "clientId": match.params.clientid }).then(result => {
            setIsAuth(result.data.status)
            setClient(result.data.client)
        }).catch(err => {
            console.log(err, "err in")
        })
    }, [])

    var years=[];
    var currentYear=(new Date()).getFullYear();
    var earliestYear=currentYear-10;
    while(earliestYear<=currentYear){
      years.push(currentYear);
      currentYear-=1;
    }
  
    function handleChange(e){
      setYear(e.target.value);
    }
  

    return (
        client &&
        <div style={{
            display: "grid",
            placeItems: "center",
            width: "100vw",
            height: "100vh"
        }}>
            <div className="container">
                
                <div className="row">
                    <div className="col-md-6">
                  <h1>Registration</h1>
                  <div className="container">
                  <div className="card Box">
                     
                     </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <h1>Annual Report</h1>
                    <div className="container">
                 <div className="card Box">

                 </div>
                    </div>
                    </div>
                </div>
               <div className="Single_header_content_buttons col-md-12">
                <button className="btn">Upload Registration</button>
                <button className="btn">Upload Annual Report</button>
                </div>
                <div className="input-group">
                <select className="choose" id="ddlYears" onChange={handleChange} > <option value=" ">Select Year</option>
            {years.map(allYears=>{
              return <option key={allYears}    value={allYears}>{allYears}</option>
            })}
            </select>
            <center>
                <button className="btn btn-1" style={{ background: "#006400", color: "whitesmoke",alignItems:"center" }}><strong>Choose File</strong></button>
                </center>
    
</div>
               
            </div>
            
            {
                client.certificatePath &&
                <h4 style={{
                    padding: "10px 20px",
                    border: "4px solid blue"
                }}
                >certificate  : {client.certificatePath}</h4>
            }
            {
                !client.certificatePath &&
                <>
                    <input type="file" name="file" onChange={(e) => {
                        console.log(e.target.files)
                        setFile(e.target.files[0])
                    }} />
                    <button onClick={addCertificate} >Add certificate </button>
                </>
            }
        </div>
    )
}

export default SingleClient
