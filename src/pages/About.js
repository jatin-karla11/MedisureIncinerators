import React from 'react'
import './About.css'
function About() {
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
                <button className="about_readmore">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;
