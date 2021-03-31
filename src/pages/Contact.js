import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
}));


function Contact() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")

    setTimeout(() => {
      // setSent(false)
    }, 3000);
  }


  const sendMail = (e) => {
    e.preventDefault();
    // console.log(phone)
    alert("working")
    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
    console.log(data);

    axios.post('http://localhost:1337/form', data).then(res => {
      handleClick();
      resetForm();
    }).catch(() => {
      alert("check your internet connection!")
      // console.log("message not sent!!!")
    })

    axios.post('http://localhost:1337/formdatabase', data).then(res => {

    }).catch(() => {
      // console.log("message not saved to database!!!")
      alert("check your internet connection!")
    })

  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  return (

    <div className="container">

      <br />

      <div className="row">

        <div className="col-md-6">
          <div className="jumbotron"><h1>Contact Us </h1> </div>
          <form className="my-form" onSubmit={sendMail}>
            <div className="form-group">
              <i className="fa fa-user icon">  </i>   &nbsp;&nbsp;
                    <label htmlFor="form-name">Name</label>
              <input
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="name" className="form-control" id="form-name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <i className="fa fa-envelope icon ">  </i> &nbsp;&nbsp;
                    <label htmlFor="form-email">Email</label>
              <input
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" className="form-control" id="form-email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
                    <label htmlFor="form-subject">Contact Number</label>
              <input
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                type="text" className="form-control" id="form-subject" placeholder="Enter Your Contact No." required />
            </div>
            <div className="form-group">
              <label htmlFor="form-message">Email your Message</label>
              <textarea
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="form-control" id="form-message" placeholder="Enter Your Message"></textarea>
            </div>
            <button className="btn btn-dark" type="submit">Send <strong><i className="fas fa-greater-than"></i></strong></button>

            <br />
            <br />
            <br />

          </form>

        </div>


        <div className="col-md-6">
          <div className="jumbotron"><h1>Our Office</h1></div>

          <div className="panel panel-default">
            <div className="text-center header">Our Office</div>
            <div className="panel-body text-center">
              <h2><i className="far fa-map">  <strong>    Address </strong>   </i></h2>
              <h6>156/3/2 Bilankheda </h6>
              <h6>Khandwa</h6>
              <hr style={{ backgroundColor: "#808080" }} />

              <h2><i className="fas fa-phone-alt">  <strong>    Phone </strong>   </i></h2>
              <h6><a href='tel:9424874278' style={{ color: "black" }}>+91 9424874278</a></h6>
              <h6><a href='tel:9424524041' style={{ color: "black" }}>+91 9424524041</a></h6>
              <hr style={{ backgroundColor: "#808080" }} />


              <h2><i className="fa fa-envelope icon">  <strong>   Email</strong>   </i></h2>
              <h6><a style={{ color: "black" }} href="mailto:medisureincinerators@gmail.com?Subject=Hello%20Medisure Incinerators">medisureincinerators@gmail.com</a></h6>
              {/* <h6>email@sitename.com </h6> */}
              <hr style={{ backgroundColor: "#808080" }} />
            </div >

          </div>
        </div>
        <div className="col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.864499162353!2d76.14417691494629!3d21.824165685572897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x829598b51b8cbb02!2sMedisure%20Incinerators!5e0!3m2!1sen!2sin!4v1615662709327!5m2!1sen!2sin" style={{ width: "100%", height: "350px", allowfullscreen: "", loading: "lazy" }}></iframe>
        </div>

      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Mail Sent!!"
        action={
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>

  )
}

export default Contact
