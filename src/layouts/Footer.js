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
        <div className='footer_links'>
          <a href='https://wa.me/+919827230041'>
            <WhatsAppIcon
              className='whatsapp_icon'
              style={{ fontSize: "70px" }}
            />
          </a>
          <a href='https://www.instagram.com/jatin.karla11/'>
            <InstagramIcon
              className='whatsapp_icon'
              style={{ fontSize: "70px" }}
            />
          </a>
          <a href='#'>
            <LinkedInIcon
              className='whatsapp_icon'
              style={{ fontSize: "70px" }}
            />
          </a>
          <a href='#'>
            <FacebookIcon
              className='whatsapp_icon'
              style={{ fontSize: "70px" }}
            />
          </a>
          <a href='#'>
            <TwitterIcon
              className='whatsapp_icon'
              style={{ fontSize: "70px" }}
            />
          </a>
        </div>
        <div className='footer_copyright'>
          Copyright &nbsp;<span className='far fa-copyright'></span>
          <a style={{ textDecoration: "none",color:"black" }} href='#'>
            <strong>&nbsp;Medisure Incinerators</strong>
          </a>
          <span> &nbsp;{n} All rights reserved.</span>
        </div>
      </div>
    );
}

export default Footer
