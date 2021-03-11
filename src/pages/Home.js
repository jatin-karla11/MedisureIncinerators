import React from 'react'
import Contact from './Contact'
import './Home.css'
import homeimg from './homeimg.jpg'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import xyz from './xyz.jpg'
import {Link} from 'react-scroll'
import ValueCard from '../layouts/ValueCard';


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
          <ValueCard cardwcu="" title="Vision" content="Clean Healthy and well protected environment supporting a sustainable Medical fraternity and economy."/>
            <ValueCard cardwcu="" title="Health and well being" content="Proper Disposal of Waste without any adverse effect on Human health and environment."/>
            <ValueCard cardwcu="" title="Trust" content="We support, trust and value our Members and empower each other to make decisions."/>
            <ValueCard cardwcu="" title="Innovations" content="We are innovative, adaptive and open to new and flexible ways of working. We strive continuously for improvement and excellence through learning and development."/>
            <ValueCard cardwcu="" title="Social responsibility" content="To protect the health of all people and environment, we must address the effects of Bio-Medical Waste. The movement to eliminate dangerous waste must move forward in partnership with prescribed authorities."/>
            <ValueCard cardwcu="" title="Health economy" content="A healthy economy is one in which people?s fundamental needs are met efficiently, businesses are accountable, resources are shared in a way that minimizes disparities, and overall levels of consumption are sustainable."/>
          </div>
        </div>
        <div className='about' id="aboutid">
          <div className="page_title">
            About Us
          <hr className="titlehr"></hr>
          </div>
          <div className="about_content">

            


          </div>
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
            <div className="gallery_content">
          <OwlCarousel
            className='owl-theme'
            items='3'
            margin={80}
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
          <div className="gallery_content_mob">
          <OwlCarousel
            className='owl-theme'
            items='1'
            margin={10}
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
