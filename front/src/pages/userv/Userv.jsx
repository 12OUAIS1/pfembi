import React, { useState, useEffect } from 'react';
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
import Form from 'react-bootstrap/Form';
import "./userv.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Userv = () => {
  const [show, setShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [newNumber, setNewNumber] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      setUserId(id);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateClose = () => setUpdateShow(false);
  const handleUpdateShow = () => setUpdateShow(true);

  const handleNumberChange = (e) => setNewNumber(e.target.value);

  const handleUpdateSubmit = async () => {
    if (!userId) {
      console.error('User ID not found');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:1000/api/v1/update/${userId}`, {
        number: newNumber,
      });
      console.log('Update response:', response.data);
      handleUpdateClose();
    } catch (error) {
      console.error('Error updating number:', error.message);
    }
  };

  return (
    <div>
      <div className="mobibot"> <Mobibot /></div>
      <Navbar />
      <div className="it">
        <div className="profile-actions">
        <h1>Account Actions</h1>
          <Button variant="primary" onClick={handleUpdateShow}>
            Update info
          </Button>
          <Flipc />
        </div>
        <div className="cardsu">
          <div className="cardu" onClick={handleShow}>
            <div className="card-detailsu">
              <div className="icou"><IoTimeSharp /></div>
              <p className="text-titleu">historique rechargement</p>
            </div>
          </div>
          <Link to="/pay">
            <div className="cardu">
              <div className="card-detailsu">
                <div className="icou"><GrMoney /></div>
                <p className="text-titleu">rechargement</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Slider />
      <Offers1 />
      <Oswiper />
      <Footer />

    
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

      <Modal show={updateShow} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Form>
            <Form.Group controlId="formNewNumber">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new Password"
                value={newNumber.number}
                onChange={handleNumberChange}
              />
            </Form.Group>
            
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUpdateClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Userv;
