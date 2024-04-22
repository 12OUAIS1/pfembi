import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import mobilisLogo from "../../img/mobilis.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6} md={3} className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Glossary</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </Col>
          <Col sm={6} md={3} className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Chatbot</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Assistance</a></li>
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
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><TiSocialYoutube/></a>
              <a href="#"><FaInstagram/></a>
            </div>
            <a href="#"><img src={mobilisLogo} alt="Mobilis Logo" /></a>
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
