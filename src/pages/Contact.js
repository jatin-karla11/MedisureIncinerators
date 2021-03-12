import React from 'react'
import './Contact.css'

function Contact() {
    return (
      
<div className="container">

    <br />
    
    <div className="row">
   
        <div className="col-md-6">
        <div class="jumbotron"><h1>Contact Us </h1> </div>
            <form className="my-form">
                <div className="form-group">
                <i class="fa fa-user icon">  </i>   &nbsp;&nbsp;
                    <label for="form-name">  Name</label>
                    <input type="name" className="form-control" id="form-name" placeholder="Name"/>
                </div>
                <div className="form-group">
                <i class="fa fa-envelope icon ">  </i> &nbsp;&nbsp;
                    <label for="form-email">Email Address</label>
                    <input type="email" className="form-control" id="form-email" placeholder="Email Address"/>
                </div>
                <div className="form-group">
                <i class="fas fa-phone"></i>&nbsp;&nbsp;
                    <label for="form-subject">Telephone</label>
                    <input type="text" className="form-control" id="form-subject" placeholder="Subject"/>
                </div>
                <div className="form-group">
                    <label for="form-message">Email your Message</label>
                    <textarea className="form-control" id="form-message" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-dark" type="submit">Send <strong><i class="fas fa-greater-than"></i></strong></button>   
               
                <br/>     
                <br/>       
                <br/>      
               
            </form>
           
        </div>
     
        
        <div className="col-md-6">
        <div class="jumbotron"><h1>Our Office</h1></div>
        
                <div class="panel panel-default">
                    <div class="text-center header">Our Office</div>
                    <div class="panel-body text-center">
                    <h2><i class="far fa-map">  <strong>    Address </strong>   </i></h2>
                    <h6>2217 Washington Blvd </h6>
                    <h6>San Francisco </h6>
                     <hr  style={{backgroundColor:"#808080"}} />
                       
                        <h2><i class="fas fa-phone-alt">  <strong>    Phone </strong>   </i></h2>
                    <h6>+123456789 </h6>
                    <h6>+987654321 </h6>
                    <hr  style={{backgroundColor:"#808080"}} />
        

                        <h2><i class="fa fa-envelope icon">  <strong>   Email</strong>   </i></h2>
                        <h6>email@sitename.com </h6>
                    <h6>email@sitename.com </h6>
                        <hr  style={{backgroundColor:"#808080"}} />
                        </div >
               
            </div>
        </div>
        <div className="col-lg-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58885.00179436005!2d75.88521771052325!3d22.716619199476547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scp!5e0!3m2!1sen!2sin!4v1615383682945!5m2!1sen!2sin" style={{width:"100%", height:"350px",  allowfullscreen:"" ,loading:"lazy"}}></iframe>
        </div>
        
    </div>
</div>

    )
}

export default Contact
