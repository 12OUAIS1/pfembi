import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './offres.css';
import samsung1 from '../../img/img1-assets/samsung1.jpg';
import samsung2 from '../../img/img1-assets/samsung2.jpg';
import huawei1 from '../../img/img1-assets/huawei1.jpg';
import huawei2 from '../../img/img1-assets/huawei1.jpg';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';

const Offers = () => {
  const [selectedOfferPack, setSelectedOfferPack] = useState('sama');

  const phoneOffers = [
    { id: 1, name: 'Samsung S21', description: 'Details of Samsung Offer 1', price: '100000 DA', img: samsung1 },
    { id: 2, name: 'Samsung S22', description: 'Details of Samsung Offer 2', price: '85000 DA', img: samsung2 },
    { id: 3, name: 'Huawei P30', description: 'Details of Huawei Offer 1', price: '65000 DA', img: huawei1 },
    { id: 4, name: 'Huawei Offer 2', description: 'Details of Huawei Offer 2', price: '80000DA', img: huawei2 },
  ];

  const internetPacks = [
    { id: 1, name: 'Internet Pack 1', description: '30GB', price: '1500DA/mois' },
    { id: 2, name: 'Internet Pack 2', description: '50GB', price: '2000DA/mois' },
    { id: 3, name: 'Internet Pack 3', description: '5GB', price: '500DA/1 jour' },
    { id: 4, name: 'Internet Pack 4', description: '2GB', price: '200DA/1 jour' },
  ];

  const offerPacks = {
    sama: [
      { id: 1, name: 'Sama Offer 1', description: ' Sama 100', price: '100 DA', netAmount: '2GB', duration: '1 Jour', callsLimit: '10 minutes' },
      { id: 2, name: 'Sama Offer 2', description: 'Details of Sama Offer 2', price: '500 DA', netAmount: '5GB', duration: '30 Jours', callsLimit: '50 minutes' },
      { id: 3, name: 'Sama Offer 3', description: 'Details of Sama Offer 3', price: '1000 DA', netAmount: '10GB', duration: '30 Jours', callsLimit: '300 minutes' },
      { id: 4, name: 'Sama Offer 4', description: 'Details of Sama Offer 4', price: '1500 DA', netAmount: '15GB', duration: '30 Jours', callsLimit: '350 minutes' },
    ],
    twenty: [
      { id: 1, name: 'Twenty Offer 1', description: 'Acheter une puse twenty pour selement', price: '1500 DA', netAmount: '80GB', duration: '30 Jours', callsLimit: 'illimité' },
      { id: 2, name: 'Twenty Offer 2', description: 'Recharger votre carte ', price: '2000 DA', netAmount: '80GB', duration: '30 Jours', callsLimit: 'illimité' },

    ],
    pixxa: [
      { id: 1, name: 'Pixxa Offer 1', description: 'Details of Pixxa Offer 1', price: '50 DA', netAmount: '1GB', duration: '30 Jours', callsLimit: '50 minutes' },
      { id: 2, name: 'Pixxa Offer 2', description: 'Details of Pixxa Offer 2', price: '100 DA', netAmount: '3GB', duration: '30 Jours', callsLimit: '100 minutes' },
      { id: 3, name: 'Pixxa Offer 3', description: 'Details of Pixxa Offer 3', price: '500 DA', netAmount: '7GB', duration: '30 Jours', callsLimit: '200 minutes' },
      { id: 4, name: 'Pixxa Offer 4', description: 'Details of Pixxa Offer 4', price: '1000 DA', netAmount: '15GB', duration: '30 Jours', callsLimit: '300 minutes' },
    ],
  };

  const renderCards = (offers) => {
    return offers.map((offer) => (
      <Col md={3} key={offer.id}>
        <Card className="mb-4">
          <Card.Img variant="top" src={offer.img} />
          <Card.Body>
            <Card.Title>{offer.name}</Card.Title>
            <Card.Text>{offer.description}</Card.Text>
            <Card.Text className="text-primary"><strong>{offer.price}</strong></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const renderCarousel = (offers) => {
    return (
      <Carousel>
        {offers.map((offer) => (
          <Carousel.Item key={offer.id} className='cc' style={{ backgroundColor: getCarouselBackgroundColor(selectedOfferPack) }}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '300px' }}>
              <h3>{offer.name}</h3>
              <p>{offer.description}</p>
              <p>Price: {offer.price}</p>
              <p>Internet: {offer.netAmount}</p>
              <p> {offer.duration}</p>
              <p>Creadit: {offer.callsLimit}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  const getCarouselBackgroundColor = (selectedPack) => {
    switch (selectedPack) {
      case 'sama':
        return '#007bff';
      case 'twenty':
        return '#28a745';
      case 'pixxa':
        return '#ffc107';
      default:
        return '#000';
    }
  };

  return (
    
<div className="oo">
    <Navbar/>
    <div className="o">
    <Container>
      <Row className="my-4">
        <Col>
          <h2>SmartPhone Offres</h2>
          <Row>{renderCards(phoneOffers)}</Row>
          </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Internet Packs</h2>
          <Row>{renderCards(internetPacks)}</Row>
        </Col>
      </Row>
      <h2>Offres Packs</h2>
      <Row className="my-4">
        <Col className="text-center">
          <Button variant="primary" onClick={() => setSelectedOfferPack('sama')}>Sama Offre</Button>
          <Button variant="secondary" onClick={() => setSelectedOfferPack('twenty')}>Twenty Offre</Button>
          <Button variant="success" onClick={() => setSelectedOfferPack('pixxa')}>Pixxa Offre</Button>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
        
          {renderCarousel(offerPacks[selectedOfferPack])}
        </Col>
      </Row>
    </Container>
    </div>
    
</div>
  );
};

export default Offers;