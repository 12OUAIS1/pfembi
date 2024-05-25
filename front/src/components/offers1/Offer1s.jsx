import React from 'react'
import "./offers.css"
import { SiYoutubegaming } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiMusicbrainz } from "react-icons/si";
import { Link } from 'react-router-dom';
import { BsFilePost } from "react-icons/bs";

const Offers = () => {
  return (
    <div className='offers'>
      <div className="cardsof">
   
<Link to="/post">
<div class="cardof">
  <div class="card-detailsof">
  <div className="icoof"><BsFilePost /></div>
    <p class="text-titleof">posts</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
</Link>
<div class="cardof">
  <div class="card-detailsof">
  <div className="icoof"><SiYoutubegaming /></div>
    <p class="text-titleof">mobistore</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
<Link to="/anghami">
<div class="cardof">
  <div class="card-detailsof">
    <div className="icoof"><SiMusicbrainz /></div>
    <p class="text-titleof">anghami</p>
    <p class="text-bodyof">Here are the details of the card</p>
  </div>
  
</div>
</Link>
    </div>
    </div>
  )
}

export default Offers
