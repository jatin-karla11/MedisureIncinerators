import React, { useState } from 'react'
import './Footer.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-scroll';
import $ from 'jquery';
import { Modal } from 'react-bootstrap';
import {Button} from '@material-ui/core'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

var d = new Date();
var n = d.getFullYear();



function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  // useEffect(() => {
  //   $("#bank").click
  // }, [])
    return (
      <div className='footer'>
        {/* <br></br> */}
        <div className="container">
        <div className="row footer_row" style={{width:"100%"}}>
        <div className="col-sm-12 col-md-4 footer_button_div">
          <Link to="contactid" offset={-70}><button id="reach-us" className="footer_buttons">Reach Us</button></Link>
        </div>
        <div className='col-md-4 footer_links'>
          <a href='https://wa.me/+919827230041'>
            <WhatsAppIcon
              className='whatsapp_icon'
              style={{ fontSize: "70px" }}
            />
          </a>
          <a href='tel:9424874278' style={{color:"black"}}>
            <CallOutlinedIcon
              style={{ fontSize: "70px" }}
              className='whatsapp_icon'
            />
          </a>
          <a style={{color:"black"}} href="mailto:medisureincinerators@gmail.com?Subject=Hello%20Medisure Incinerators">   
          <MailOutlineIcon
          style={{ fontSize: "70px" }}
          className='whatsapp_icon'
        /></a>

        </div>
        
        <div className="col-md-4 footer_button_div">
          <button id="bankshow" className="footer_buttons" onClick={handleShow}>Bank/GST Details</button>
          
        
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <AccountBalanceIcon fontSize="large" />
          <Modal.Title style={{color:"#DD501D"}}>&nbsp; Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div><strong>Bank Name : Bank Of Maharashtra</strong></div>
        <div><strong>Account Name : MEDISURE INCINERATORS</strong></div>
        <div><strong>Account Number : 60379919436</strong></div>
        <div><strong>IFSC Code : MAHB0000517</strong></div>
        <div><strong>Bank Address : Chhagaon Makhan</strong></div>
        <br></br>
        <div><strong>GSTIN : 23ADUPJ9656N3ZJ</strong></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{background:"#DD501D" ,color:"white"}}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      </div>
        
        </div>
        </div>
        <center><div className='footer_copyright'>
          Copyright &nbsp;<span style={{marginTop:"5px"}} className='far fa-copyright'></span>
          <span><a style={{ textDecoration: "none",color:"black" }} href='#'>
            <strong>&nbsp;medisureincinerators.in</strong>
          </a></span>
          <span> &nbsp;{n} All rights reserved.</span>
        </div>
        </center>
      </div>
    );
}

export default Footer
