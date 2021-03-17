import React from 'react'
import './Footer.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

var d = new Date();
var n = d.getFullYear();


function Footer() {
    return (
      <div className='footer'>
        {/* <br></br> */}
        <div className="row" style={{width:"100%"}}>
        <div className="col-4 footer_button_div">
          <button className="footer_buttons">Bank Details</button>
        </div>
        <div className='col-4 footer_links'>
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
        
        <div className="col-4  footer_button_div">
          <button className="footer_buttons">Reach Us</button>
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
