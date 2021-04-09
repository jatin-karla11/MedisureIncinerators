import React, { useState , useContext , useEffect  } from 'react'
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService'

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
        <div style = {{paddingTop : '70px'}} >
            
            {
                client.email
            }kjhfdjkdf
            <div className="row">

                <select className="choose col-lg-3" id="ddlYears" onChange={handleChange}>
                    <option value=" ">Select Year</option>
                    {years.map(allYears => {
                        return <option key={allYears} value={allYears}>{allYears}</option>
                    })}
                </select>

                {
                    year ?
                        <a className="btn btn-2 col-lg-4"
                            href={`${process.env.REACT_APP_BACKEND_URL}/api/${downloadUrl.reportCertificatePath}`} download target="_self"
                            style={year ?
                                { background: "#006400", color: "whitesmoke" } :
                                { cursor: "not-allowed" }
                            }>
                            <strong>Download Annual Report</strong>
                        </a> :
                        <button disabled className="btn btn-2 col-lg-4"
                            style={{ background: "#006400", color: "whitesmoke" }}>
                            <strong>Download Annual Report</strong>
                        </button>
                }

            </div>




        </div>
    )
}

export default PcbSingleClient
