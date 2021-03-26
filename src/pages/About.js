import React,{useState} from 'react'
import './About.css'
import $ from 'jquery';
import { Modal } from 'react-bootstrap';
import {Button} from '@material-ui/core'
import bm from '../layouts/layout images/bm.png'

function About() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
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
                <button id="about_readmore" className="about_readmore" onClick={handleShow}>Read More  &nbsp; <i class="fas fa-greater-than"></i></button>
                <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <img className="medisurelogo" src={bm} alt=""/>  
          <Modal.Title style={{color:"#DD501D"}}>&nbsp;Medisure Incinerators</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  We have an incinerator of 100 kg/hr capacity with fully computerized, PLC
                  controlled processing unit incorporated with automatic feeding system to treat incinerable
                  waste .To treat blue and red category waste we are equipped with computerized and PLC
                  controlled Autoclaves with inbuilt facility for indicators. Available Plastic shredders enables
                  safe plastic recycling. A high-tech ETP plant facilitates to fulfilment of ZERO DISCHARGE
                  policy. Adherence to air pollution control standards is regulated through continuous online
                  stack monitoring system while self owned GPS enabled vehicles help to provide guarded
                  collection and transportation of BMW.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{background:"#DD501D" ,color:"white"}}>
           Read Less
          </Button>
         
        </Modal.Footer>
      </Modal>
              </div>
            </div>
           


    
          </div>
        </div>
      </>
    );
}

export default About;