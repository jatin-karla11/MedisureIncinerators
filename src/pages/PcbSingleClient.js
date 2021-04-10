import React, { useState , useContext , useEffect  } from 'react'
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
        <div>
        <div style = {{paddingTop : '70px', paddingBottom:"0px",marginBottom:"10px",  display: "grid",
        placeItems: "center",}} >
             <div className="title" style={{marginBottom:"10px"}}> <h1 >{client.estbName}</h1></div>
              <div className="container details">
              <div className="card ">
                      <div className="row col-lg-12 mx-auto "  style={{fontFamily:"Lato, cursive"}}>
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
                    year ?
                        <a className="btn1"
                            href={`${process.env.REACT_APP_BACKEND_URL}/api/${downloadUrl.reportCertificatePath}`} download target="_blank"
                            style={year ?
                                { background: "#006400", color: "whitesmoke" } :
                                { cursor: "not-allowed" }
                            }>
                            <strong>Download Annual Report</strong>
                        </a> :
                        <button disabled className="btn1"
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
