import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import "./espacec.css"
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
const Espacec = () => {
  return (
   <div className="espc">
    <Navbar/>
     <div className='espacec'>
     <div className="est">
   
     </div>
     
    <div className="espcard">
  
<Link to="/cp"> <div class="cardc">
<div class="cardc-details">
<div className="icoc"><IoPersonSharp /></div>
  <p class="text-titlec">Client particulier</p>
  <p class="text-bodyc">Here are the details of the card</p>
</div>

</div></Link>
<Link to="/ce"><div class="cardc">
<div class="cardc-details">
<div className="icoc"><MdGroups /></div>
  <p class="text-titlec">Entreprise</p>
  <p class="text-bodyc">Here are the details of the card</p>
</div>

</div></Link>

  </div>
  </div>
  <Footer/>
   </div>

  )
}

export default Espacec
