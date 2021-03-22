import React from 'react'
import './About.css'
import $ from 'jquery';
function About() {

  const displayAboutDetails=()=>{
    $("#about_details").css("display","block");
    $("#about_readmore").css("display","none");
  }
  const hideAboutDetails=()=>{
    $("#about_details").css("display","none");
    $("#about_readmore").css("display","block");
    
  }

  return (
      <>
        <div className='col-lg-12 ' id='about_div'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 mb-3'>
              <div className='about_image'>
                <img
                  className='image2'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeRBQg_da6PT_nK5NWGON9IsJaVoWffxAEA&usqp=CAU'
                />
              </div>
            </div>
            <div className='col-lg-7 mb-4'>
              <div className='card text'>
                <p className='card-text'>
                  Scientific disposal of Biomedical Waste through segregation,
                  collection and treatment in an environmentally sound manner is
                  our mission so as to minimise the adverse impact on health
                  workers and on the environment. Our company has taken an
                  initiative to aid in providing biomedical waste management
                  services to health care facilities of Khandwa, Khargone, and
                  Burhanpur districts.
                </p>
                <button id="about_readmore" onClick={displayAboutDetails} className="about_readmore">Read More</button>
              </div>
            </div>
            <div className='card text' id="about_details" style={{display:"none"}}>
              <p className='card-text'>
            We have an incinerator of 100 kg/hr capacity with fully computerized, PLC
controlled processing unit incorporated with automatic feeding system to treat incinerable
waste .To treat blue and red category waste we are equipped with computerized and PLC
controlled Autoclaves with inbuilt facility for indicators. Available Plastic shredders enables
safe plastic recycling. A high-tech ETP plant facilitates to fulfilment of ZERO DISCHARGE
policy. Adherence to air pollution control standards is regulated through continuous online
stack monitoring system while self owned GPS enabled vehicles help to provide guarded
collection and transportation of BMW.
<br></br>
<br></br>
<button id="about_readmore" onClick={hideAboutDetails} className="about_readless">Read less</button>

</p>

            </div>
          </div>
        </div>
      </>
    );
}

export default About;
