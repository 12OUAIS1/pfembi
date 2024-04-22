import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../img/img1.jpg"
import img2 from "../../img/img2.jpg"
import img3 from "../../img/img3.jpg"

const Slider = () => {



  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={img1} alt="" />
      
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider



