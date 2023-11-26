import React, { useEffect, useContext, useState } from 'react';
import Contact from './Contact';
import './Home.css';
import homeimgwhite from './pagesimages/homeimgwhite.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import truck from './pagesimages/truck1.png';
import c19 from './pagesimages/c19.png';
import hl1 from './pagesimages/hl1.png';
import wc from './pagesimages/wastecontainer.png';
import container from './pagesimages/container.png';
import sharps from './pagesimages/sharps.png';
import gb from './pagesimages/garbagebag.png';

import { Link } from 'react-scroll';
import ValueCard from '../layouts/ValueCard';
import ServiceCard from '../layouts/ServiceCard';
import About from './About';
import bmwpdf from './bmw_rules.pdf';
import covid19guidelines from './covid19guidelines.pdf';
import es from './pagesimages/es.jpg';
import ci from './pagesimages/ci.jpg';
import mih from './pagesimages/mih.jpg';
import sr from './pagesimages/sr.png';
import Carousel from '../layouts/Carousel';
import ServerService from '../ServerService';
import { AuthContext } from '../Context/AuthContext';

function Home() {
  const { user, setUser, setIsAuth, isAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   ServerService.home().then(result => {
  //     setUser(result.data.user);
  //     setIsAuth(result.data.status)
  //     setLoading(true)
  //   }).catch(err => {
  //     console.log("err in / home route ", err)
  //   })

  // }, [])

  return (
    <div className='home' id='homeid'>
      <div className='home_image'>
        <Carousel />
        <img
          className='homeimg'
          style={{ zIndex: '-2' }}
          src={homeimgwhite}
          alt=''
        />
      </div>
      <div className='home_values'>
        <div className='page_title'>
          Values
          <hr className='titlehr'></hr>
        </div>
        <div className='home_values_content'>
          {/* <ValueCard cardwcu="" title="Vision" content="Clean Healthy and well protected environment supporting a sustainable Medical fraternity and economy."/> */}
          <ServiceCard
            cardwcu={mih}
            title='Entrepreneurial Spirit'
            content='We believe in providing modern effective services for the proper disposal of bio-medical waste. We stand together to make a better world for everyone.'
          />
          <ServiceCard
            cardwcu={ci}
            title='Continual Improvement'
            content='We believe in continuous improvement of technology and thus render efficient disposal and treatment of Biomedical Waste.'
          />
          <ServiceCard
            cardwcu={sr}
            title='Social responsibility'
            content='To protect the health of people at large, we must collectively address the adverse effects of Bio-Medical Waste.'
          />
          {/* <ValueCard cardwcu="" title="Innovations" content="We are innovative, adaptive and open to new and flexible ways of working. We strive continuously for improvement and excellence through learning and development."/>
            <ValueCard cardwcu="" title="Social responsibility" content="To protect the health of all people and environment, we must address the effects of Bio-Medical Waste. The movement to eliminate dangerous waste must move forward in partnership with prescribed authorities."/>
            <ValueCard cardwcu="" title="Health economy" content="A healthy economy is one in which people?s fundamental needs are met efficiently, businesses are accountable, resources are shared in a way that minimizes disparities, and overall levels of consumption are sustainable."/> */}
        </div>
      </div>
      <div className='about' id='aboutid'>
        <div className='page_title'>
          About Us
          <hr className='titlehr'></hr>
        </div>
        <div className='about_content'>
          <About />
        </div>
      </div>
      <div className='services' id='serviceid'>
        <div className='page_title'>
          Our Services
          <hr className='titlehr'></hr>
        </div>
        <div className='services_content'>
          <ValueCard
            cardwcu={wc}
            title='Biomedical Waste Treatment'
            content='The bio-medical wastes generated from health care units is collected and disposed with effective bio-medical waste managemnet techniques.'
          />
          <ValueCard
            cardwcu={sharps}
            title='Sharps Waste Service'
            content='Sharps waste is a form of medical waste composed of used sharps, which includes any device or object used to puncture or lacerate the skin. Sharps waste must be carefully handled.'
          />
          <ValueCard
            cardwcu={container}
            title='Pharmaceutical Waste Service'
            content='Our Medicare services are designed to help hospitals characterize, segregate, transport and properly dispose of these materials, as well as conveniently handle their expired drugs.'
          />
          <ValueCard
            cardwcu={c19}
            title='Disposal Of Covid-19 Waste'
            content='As per Covid-19 guidelines the waste generated during diagnostics and treatment of covid-19 patients is handled and disposed carefully.'
          />
          <ValueCard
            cardwcu={truck}
            title='Medical Waste Pickup'
            content='We provide end-to-end transport facility for the medical waste pickup on regular basis.'
          />
          <ValueCard
            cardwcu={gb}
            title='Supply Of Non-Chlorinated Garbage Bags'
            content='We provide non-chlorinated garbage bags for the collection of bio-medical waste so as to maintain proper transfer of waste for further disposal.'
          />
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
      <div className='documents' id='documentid'>
        <div className='page_title'>
          Documents
          <hr className='titlehr'></hr>
        </div>
        <div className='documents_content'>
          {/* <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"EC"</a></div> */}
          <div className='documents_content_pdf'>
            <a href={bmwpdf} target='_blank'>
              "BMW Rules"
            </a>
          </div>
          <div className='documents_content_pdf'>
            <a href={bmwpdf} target='_blank'>
              "Environment Bulletin"
            </a>
          </div>
          <div className='documents_content_pdf'>
            <a href={covid19guidelines} target='_blank'>
              "Covid-19 Guidelines"
            </a>
          </div>
        </div>
      </div>
      <div className='contact' id='contactid'>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
