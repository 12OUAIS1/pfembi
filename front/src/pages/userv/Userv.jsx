import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import Flipc from '../../components/flipc/Flipc'
import { IoTimeSharp } from "react-icons/io5";
import Offers from '../../components/offers/Offers'
import "./userv.css"
import { GrMoney } from "react-icons/gr";
import Slider from '../../components/carousel/Slider';
import Oswiper from "../../components/swiper/Oswiper"
import Mobibot from "../../components/chat/Mobibot"
const Userv = () => {
  
  return (
    <div>
      <div className="mobibot"> <Mobibot/></div>
      <Navbar/>
      <div className="it">
      <Flipc/>
      <div className="cardsu">
    <div class="cardu">
  <div class="card-detailsu">
  <div className="icou"><IoTimeSharp /></div>
    <p class="text-titleu">historique rechargement</p>
   
  </div>
  
</div>
<div class="cardu">
  <div class="card-detailsu">
  <div className="icou"><GrMoney /></div>
    <p class="text-titleu">rechargement</p>
   
  </div>
  
</div>
    </div>
      </div>
      <Slider/>
     <Offers/>
     <Oswiper/>
   
      <Footer/>
    </div>
  )
}

export default Userv
