import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b1 from "../../img/img1-assets/b1.png"
import b2 from "../../img/img1-assets/b2.png"
import b3 from "../../img/img1-assets/b3.png"

const Anghamislider = () => {



  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={b1} alt="" className="d-block mx-auto"/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} alt="" className="d-block mx-auto"/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={b3} alt="" className="d-block mx-auto"/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Anghamislider



