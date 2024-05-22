import React, { useState } from 'react';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import Flipc from '../../components/flipc/Flipc';
import { IoTimeSharp } from "react-icons/io5";
import Offers1 from '../../components/offers1/Offer1s';
import { GrMoney } from "react-icons/gr";
import Slider from '../../components/carousel/Slider';
import Oswiper from "../../components/swiper/Oswiper";
import Mobibot from "../../components/chat/Mobibot";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./userv.css";
import { Link } from 'react-router-dom';

const Userv = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="mobibot"> <Mobibot/></div>
      <Navbar/>
      <div className="it">
        <Flipc/>
        <div className="cardsu">
          <div className="cardu" onClick={handleShow}>
            <div className="card-detailsu">
              <div className="icou"><IoTimeSharp /></div>
              <p className="text-titleu">historique rechargement</p>
            </div>
          </div>
          <Link to="/pay"><div className="cardu">
            <div className="card-detailsu">
              <div className="icou"><GrMoney /></div>
              <p className="text-titleu">rechargement</p>
            </div>
          </div></Link>
        </div>
      </div>
      <Slider/>
      <Offers1/>
      <Oswiper/>
      <Footer/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Historique de Rechargement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Transaction 1: 500 DA  01/01/2024</li>
            <li>Transaction 2: 2000 DA  15/02/2024</li>
            <li>Transaction 3: 1500 DA 20/04/2024</li>
           
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Userv;
