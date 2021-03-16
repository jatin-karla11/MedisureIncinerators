import React from 'react'
import Contact from './Contact'
import './Home.css'
import homeimgwhite from './pagesimages/homeimgwhite.jpg'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import xyz1 from './pagesimages/plant.jpg'
import {Link} from 'react-scroll'
import ValueCard from '../layouts/ValueCard';
import ServiceCard from '../layouts/ServiceCard';
import About from './About'
import bmwpdf from './bmw_rules.pdf'
import medisurecto from './medisurecto.pdf'
import covid19guidelines from './covid19guidelines.pdf'
import es from './pagesimages/es.jpg'
import ci from './pagesimages/ci.jpg'
import mih from './pagesimages/mih.jpg'
import sr from './pagesimages/sr.png'
import Carousel from '../layouts/Carousel';



function Home() {
    return (
      <div className='home' id="homeid">
        <div className='home_image'>
          <Carousel/>
          <img className='homeimg' style={{zIndex:"-2"}} src={homeimgwhite} alt='' />
        </div>
        <div className='home_values'>
          <div className='page_title'>Values
          <hr className="titlehr"></hr>
          
          </div>
          <div className='home_values_content'>
          {/* <ValueCard cardwcu="" title="Vision" content="Clean Healthy and well protected environment supporting a sustainable Medical fraternity and economy."/> */}
            <ValueCard cardwcu={mih} title="Entrepreneurial Spirit" content="Proper Disposal of Waste without any adverse effect on Human health and environment."/>
            <ValueCard cardwcu={ci} title="Continual Improvement" content="We support, trust and value our Members and empower each other to make decisions."/>
            <ValueCard cardwcu={sr} title="Social responsibility" content="To protect the health of all people and environment, we must address the effects of Bio-Medical Waste. The movement to eliminate dangerous waste must move forward in partnership with prescribed authorities."/>
            {/* <ValueCard cardwcu="" title="Innovations" content="We are innovative, adaptive and open to new and flexible ways of working. We strive continuously for improvement and excellence through learning and development."/>
            <ValueCard cardwcu="" title="Social responsibility" content="To protect the health of all people and environment, we must address the effects of Bio-Medical Waste. The movement to eliminate dangerous waste must move forward in partnership with prescribed authorities."/>
            <ValueCard cardwcu="" title="Health economy" content="A healthy economy is one in which people?s fundamental needs are met efficiently, businesses are accountable, resources are shared in a way that minimizes disparities, and overall levels of consumption are sustainable."/> */}
          </div>
        </div>
        <div className='about' id="aboutid">
          <div className="page_title">
           About Us
          <hr className="titlehr"></hr>

         
          </div>
          <div className="about_content">

            <About />
            


          </div>
        </div>
        <div className='services' id="serviceid">
          <div className="page_title">Our Services
          <hr className="titlehr"></hr>
          
          </div>
          <div className="services_content">
            <ServiceCard img="" content="Biomedical Waste Service" />
            <ServiceCard img="" content="Sharps Waste Service"/>
            <ServiceCard img="" content="Pharmaceutical Waste Service"/>
            <ServiceCard img="" content="Disposal Of Expired Medicine"/>
            <ServiceCard img="" content="Medical Waste Pickup"/>
            <ServiceCard img="" content="Maintaining Healthy Lifestyle"/>
          </div>
        </div>
        {/* <div className='gallery' id="galleryid">
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
              <img className="item_image" src={xyz1} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz1} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz1} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz1} alt='' />
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
              <img className="item_image" src={xyz1} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz1} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz1} alt='' />
            </div>
            <div className='item'>
              <img className="item_image" src={xyz1} alt='' />
            </div>
          </OwlCarousel>
          </div>
        </div> */}
        <div className='documents' id="documentid">
          <div className="page_title">Documents
          <hr className="titlehr"></hr>
          
          </div>
          <div className="documents_content">
            {/* <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"EC"</a></div> */}
            <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"BMW Rules"</a></div>
            <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"Environment Bulletin"</a></div>
            <div className="documents_content_pdf"><a href={covid19guidelines} target="_blank">"Covid-19 Guidelines"</a></div>

          </div>
        </div>
        <div className='contact' id="contactid">
          <Contact />
        </div>
      </div>
    );
}

export default Home
