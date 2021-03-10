import React from 'react'
import Contact from './Contact'
import './Home.css'
import homeimg from './homeimg.jpg'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import xyz from './xyz.jpg'
import {Link} from 'react-scroll'


function Home() {
    return (
      <div className='home' id="homeid">
        <div className='home_image'>
          <img className='homeimg' src={homeimg} alt='' />
        </div>
        <div className='home_values'>
          <div className='page_title'>Values
          <hr className="titlehr"></hr>
          
          </div>
          <div className='home_values_content'>

          </div>
        </div>
        <div className='about' id="aboutid">
          <div className="page_title">
            About Us
          <hr className="titlehr"></hr>

          </div>
          <div className="about_content"></div>
        </div>
        <div className='services' id="serviceid">
          <div className="page_title">Our Services
          <hr className="titlehr"></hr>
          
          </div>
          <div className="services_content"></div>
        </div>
        <div className='gallery' id="galleryid">
            <div className='page_title'>Gallery
          <hr className="titlehr"></hr>
            
            </div>
          <OwlCarousel
            className='owl-theme'
            items='3'
            autoplay
            autoplayTimeout={7000}
            dots
            loop
            autoplayHoverPause
            autoplaySpeed={4000}
          >
            <div className='item'>
              <img className="item_image" src={xyz} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz} alt='' />
            </div>
          </OwlCarousel>
        </div>
        <div className='documents' id="documentid">
          <div className="page_title">Documents
          <hr className="titlehr"></hr>
          
          </div>
          <div className="documents_content"></div>
        </div>
        <div className='contact' id="contactid">
          <Contact />
        </div>
      </div>
    );
}

export default Home
