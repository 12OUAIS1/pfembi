import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import mobilisLogo from "../../img/mobilis.svg";
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6} md={3} className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about" href="#">About Us</Link></li>
              <li><Link to="/pri" href="#">Privacy Policy</Link></li>
              
              <li><a href="#">Payment Options</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>Help</h4>
            <ul>
              
              <li><Link to="/faq" >FAQ</Link></li>
              
              <li><a href="#">Contacts</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">International & Roaming</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">Commercial Agency</a></li>
              <li><a href="#">E-rsli</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/MobilisOfficielle/"><FaFacebookF /></a>
              <a href="https://x.com/atm_mobilis?lang=en"><FaTwitter /></a>
              <a href="https://www.youtube.com/@TVMobilis"><TiSocialYoutube/></a>
              <a href="https://www.instagram.com/mobilis.dz/?hl=en"><FaInstagram/></a>
            </div>
            <img src={mobilisLogo} alt="Mobilis Logo" />
          </Col>
        </Row>
      </Container>
      <div className="copy">
        <p>&copy; 2024, All Rights Reserved BY ATM-MOBILIS</p>
      </div>
    </footer>
  );
};

export default Footer;
