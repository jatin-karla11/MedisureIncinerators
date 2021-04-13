import React, { useEffect, useState, useContext } from 'react'
import ServerService from '../../../ServerService'
import { AuthContext } from '../../../Context/AuthContext'
import './SingleClient.css'
import { Button } from 'bootstrap';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function SingleClient({ location, match }) {

    const [client, setClient] = useState({});
    const [file, setFile] = useState(null);
    const { setIsAuth , setUser } = useContext(AuthContext)
    const [year, setYear] = useState("");
    console.log(client)

    useEffect(() => {
        ServerService.getSpecificClient({ "clientId": match.params.clientid }).then(result => {
            console.log(result.data.client)
            setIsAuth(result.data.status)
            setClient(result.data.client);
            setUser(result.data.user)
        }).catch(err => {
            console.log(err, "err in")
        })
    }, [])



    const addCertificate = (type) => {
        let count = 1;
        const formdata = new FormData();
        formdata.append("email", client.email);
        formdata.append("type", type);
        formdata.append("year", year)
        formdata.append("file", file);

        if (type === "registration") {
            console.log("inside")
           
            client.registrationCertificatePath.forEach(ele => {
                if (ele.includes(year)) {
                    count = 0
                    alert('already uploaded the document ')
                }
            })

        } else {
            client.reportCertificatePath.forEach(ele => {
                if (ele.includes(year)) {
                    count = 0
                    alert('already uploaded the document ')
                }
            })
        }
        if (count) {
            ServerService.addCertificate(formdata).then(result => {
                setClient(result.data.client)
                alert("Document Uploaded Successfully!")
            }).catch(err => {
                console.log(err, "err in adding certificate ")
            })
        }
    }

    var years = [];
    var currentYear = (new Date()).getFullYear();
    var earliestYear = currentYear - 10;
    while (earliestYear <= currentYear) {
        years.push(currentYear);
        currentYear -= 1;
    }

    function handleChange(e) {
        setYear(e.target.value);
    }

    const deleteCertificate = (text, type) => {
        ServerService.deleteCertificate({ text, type, email: client.email }).then(result => {
            if (type === "registrationCertificatePath") {
                setClient(pre => {
                    return {
                        ...pre,
                        registrationCertificatePath: pre.registrationCertificatePath.filter(ele => ele !== text)
                    }
                })
            } else {
                setClient(pre => {
                    return {
                        ...pre,
                        reportCertificatePath: pre.reportCertificatePath.filter(ele => ele !== text)
                    }
                })
            }

            console.log(result)
        }).catch(err => {
            console.log(err);
        })

    }
    console.log(client);
    return (
        client &&
        <div style={{
            paddingTop: "20px",
            marginBottom:"35px",
        }}>
             <div className="title" style={{marginBottom:"0px"}}> <h1 >{client.estbName}</h1></div>
              <div className="container details">
              <div className="card ">
                      <div className="row col-lg-12 mx-auto style"  >
                      <div className="col-sm-3"><strong>HCF Category :</strong>{client.hcf}</div>
                      <div className="col-sm-4"><strong>Ownership Type :  </strong> {client.ownership}</div>
                      <div className="col-sm -3"><strong>Number Of Beds :  </strong>{client.numberOfBeds}</div>
                      <div className="col-sm-2"> <strong> City : </strong> {client.city}</div>
                      </div>
            
                  </div>
              </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="head">REGISTRATION</h1>
                        <div className="container">
                            <div className="card Box">
                                {
                                    client.registrationCertificatePath && client.registrationCertificatePath.map((ele, idx) => {
                                        return (
                                            <a
                                            href={`${process.env.REACT_APP_BACKEND_URL}/api/${ele}`} download target="_blank"
                                            >
                                                <div>{ele}</div>
                                                <DeleteOutlineIcon style={{ cursor: "pointer" }} onClick={() => deleteCertificate(ele, "registrationCertificatePath")} />
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="head">ANNUAL REPORT</h1>
                        <div className="container">
                            <div className="card Box">
                                {
                                    client.reportCertificatePath && client.reportCertificatePath.map((ele, idx) => {
                                        return (
                                            <a
                                            href={`${process.env.REACT_APP_BACKEND_URL}/api/${ele}`} download target="_blank"

                                            >
                                                <div>{ele}</div>
                                                <DeleteOutlineIcon style={{ cursor: "pointer" }} onClick={() => deleteCertificate(ele, "reportCertificatePath")} />
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Single_header_content_buttons col-md-12">
                    {
                        year && file ?
                            <>
                                <button onClick={() => addCertificate('registration')} className="btn btnr">Upload Registration</button>
                                <button onClick={() => addCertificate('annualreport')} className="btn btnr">Upload Annual Report</button>
                            </> :
                            <>
                                <button disabled className="btn btnr">Upload Registration</button>
                                <button disabled className="btn btnr">Upload Annual Report</button>
                            </>
                    }
                </div>
                <div className="container">
                <div className="input-group">
                    <select className="choose" id="ddlYears" onChange={handleChange} > <option value=" ">Select Year</option>
                        {years.map(allYears => {
                            return <option key={allYears} value={allYears}>{allYears}</option>
                        })}
                    </select>
                    <center >
                        <input className="center" type="file" name="file" onChange={(e) => {
                            console.log(e.target.files)
                            setFile(e.target.files[0])
                        }} />

                    </center>

</div>
                </div>

            </div>
        </div>
    )
}

export default SingleClient