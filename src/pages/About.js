import React,{useState} from 'react'
import './About.css'
import $ from 'jquery';
import { Modal } from 'react-bootstrap';
import {Button} from '@material-ui/core'
import logo from '../layouts/layout images/logo.png'

function About() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  return (
    
      <div className="about" >
        <div className='col-lg-12 ' id='about_div'></div>
        <div className='container card' style={{border:"none",background:"white"}}>
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
                  Disposal of Biomedical Waste through collection, segregation
                   and treatment in an environmentally friendly manner is
                  our mission so as to minimise the adverse impact on health and environment.
                </p>
                <button id="about_readmore" className="about_readmore" onClick={handleShow}>Read More  &nbsp; <i className="fas fa-greater-than"></i></button>
                <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <img className="medisurelogo" src={logo} alt=""/>  
          <Modal.Title style={{color:" #006400"}} className="modalMedisureI">&nbsp;Medisure Incinerators</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:"justify",fontWeight:"500"}}>
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
          <Button variant="secondary" onClick={handleClose} style={{background:" #006400" ,color:"white"}}>
           Read Less
          </Button>
         
        </Modal.Footer>
      </Modal>
              </div>
            </div>

    
          </div>
        </div>
      </div>
    );
}

export default About;