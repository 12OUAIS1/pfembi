import React from 'react'
import "./offers.css"
import { SiYoutubegaming } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiMusicbrainz } from "react-icons/si";
const Offers = () => {
  return (
    <div className='offers'>
      <div className="cardsof">
    <div class="cardof">
  <div class="card-detailsof">
  <div className="icoof"><FaCreditCard /></div>
    <p class="text-titleof">rechargement en-ligne</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
<div class="cardof">
  <div class="card-detailsof">
  <div className="icoof"><FaMapLocationDot /></div>
    <p class="text-titleof">localisation agence</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
<div class="cardof">
  <div class="card-detailsof">
  <div className="icoof"><SiYoutubegaming /></div>
    <p class="text-titleof">mobistore</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
<div class="cardof">
  <div class="card-detailsof">
    <div className="icoof"><SiMusicbrainz /></div>
    <p class="text-titleof">anghami</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
    </div>
    </div>
  )
}

export default Offers
