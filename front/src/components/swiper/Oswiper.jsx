import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import i1 from "../../img/1.jpg"
import i2 from "../../img/img1-assets/2.jpg"
import i3 from "../../img/img1-assets/3.png"
import i4 from "../../img/img1-assets/4.png"
import i5 from "../../img/img1-assets/5.png"
import i6 from "../../img/img1-assets/6.png"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Oswiper.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function App() {
     const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Swipe right to see more
    </Tooltip>
  );
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={2} 
      >
        <SwiperSlide>
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
       <img src={i1} />
    </OverlayTrigger>
         
        </SwiperSlide>
        <SwiperSlide>
        <img src={i1} />
        </SwiperSlide>
        <SwiperSlide>
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
        <img src={i2} />
        </OverlayTrigger>
        </SwiperSlide>
        <SwiperSlide>
        <img src={i3} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={i4} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={i5} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={i6} />
        </SwiperSlide>
     
    
      </Swiper>
    </>
  );
}
