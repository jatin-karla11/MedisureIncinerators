import React, { useState , useContext , useEffect  } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService'
import './PcbSingleClient.css'


function PcbSingleClient({match}) {

    const [year, setYear] = useState("");
    const [downloadUrl, setDownloadUrl] = useState({
        reportCertificatePath: "",
        registrationCertificatePath: ""
      })
      const [client, setClient] = useState({});

  const { user, setIsAuth, setUser } = useContext(AuthContext);

  useEffect(() => {
    ServerService.getSpecificClient({ "clientId": match.params.clientid }).then(result => {
        console.log(result.data.client)
        setIsAuth(result.data.status)
        setClient(result.data.client)
        setUser(result.data.user)
    }).catch(err => {
        console.log(err, "err in")
    })
}, [])

    
    var years = [];
    var currentYear = (new Date()).getFullYear();
    var earliestYear = currentYear - 10;
    while (earliestYear <= currentYear) {
        years.push(currentYear);
        currentYear -= 1;
    }

    function handleChange(e) {
        setYear(e.target.value);
    
        let url1 = client.reportCertificatePath.filter(ele => ele.includes(e.target.value))
        let url2 = client.registrationCertificatePath.filter(ele => ele.includes(e.target.value))
        setDownloadUrl({
          reportCertificatePath: url1[0],
          registrationCertificatePath: url2[0]
        })
      }


    return (
        <div className="style">
        <div style = {{paddingTop : '70px', paddingBottom:"0px",marginBottom:"10px",  display: "grid",
        placeItems: "center",}} >
             <div className="title" style={{marginTop:"0px",marginBottom:"0px"}}> <h1 className="heading" >{client.estbName}</h1></div>
              <div className="container details">
              <div className="card ">
                      <div className="row col-lg-12 mx-auto style designation" >
                      <div className="col-sm-3"><strong className= "black">HCF Category :</strong>{client.hcf}</div>
                      <div className="col-sm-4"><strong className= "black">Ownership Type :  </strong> {client.ownership}</div>
                      <div className="col-sm -3"><strong className= "black">Number Of Beds :  </strong>{client.numberOfBeds}</div>
                      <div className="col-sm-2"> <strong className= "black"> City : </strong> {client.city}</div>
                      </div>
            
                  </div>
             </div>
             </div>
             <div className="container" style={{marginTop:"25px"}}>
            <div className="row">
           <div className="col-md-4">
                <select className="choose1" id="ddlYears" onChange={handleChange} style={{marginTop:"20px"}}>
                    <option value=" ">Select Year</option>
                    {years.map(allYears => {
                        return <option key={allYears} value={allYears}>{allYears}</option>
                    })}
                </select>
                </div>
                <div className="col-md-8">
                {
                    year && downloadUrl.reportCertificatePath ?
                        <a className="btn btn-2"
                            href={`${process.env.REACT_APP_GCS_URL}/${downloadUrl.reportCertificatePath}`} download target="_blank"
                            style={year ?
                                { background: "#006400", color: "whitesmoke",textDecoration:"none"} :
                                { cursor: "not-allowed" }
                            }>
                            <strong>Download Annual Report</strong>
                        </a> :
                        <button disabled className="btn btn-2"
                            style={{ background: "#006400", color: "whitesmoke" }}>
                            <strong>Download Annual Report</strong>
                        </button>
                }
           </div>
            </div>
            </div>



        </div>
    )
}

export default PcbSingleClient
