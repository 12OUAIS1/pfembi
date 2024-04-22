import React from 'react'
import "./sidee.css"
import { MdGroups } from "react-icons/md";
const Sidee = () => {
  return (
    <div className='sidec'>
      <div className="header">
      <MdGroups /><p>Entreprise</p>
   </div>
      <section class="app">
  <aside class="sidebar">
   
    <nav class="sidebar-nav">
      <ul>
        <li>
          <a href="#"><i class="ion-bag"></i> <span>TÉLÉPHONIE MOBILE</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-color-filter-outline"></i>SkyPRO</a>
            </li>
           
            <li>
              <a href="#"><i class="ion-android-star-outline"></i>SkyBusiness</a>
            </li>
            
          </ul>
        </li>
        <li>
          <a href="#"><i class="ion-ios-settings"></i> <span class="">INTERNET MOBILE</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-alarm-outline"></i>Pass internet 4G</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-camera-outline"></i>Proconnect</a>
            </li>
           
          </ul>
        </li>
        <li>
          <a href="#"><i class="ion-ios-briefcase-outline"></i> <span class="">SOLUTION ENTREPRISE</span></a>
          <ul class="nav-flyout">
            <li>
              <a href="#"><i class="ion-ios-flame-outline"></i>mvpn</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-lightbulb-outline"></i>vpn</a>
            </li>
            <li>
              <a href="#"><i class="ion-ios-location-outline"></i>Connectivité M2M</a>
            </li>
            
          </ul>
        </li>
       </ul>
    </nav>
  </aside>
</section>

    </div>
  )
}

export default Sidee
