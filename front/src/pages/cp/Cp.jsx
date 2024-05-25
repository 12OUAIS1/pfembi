import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import Sidec from '../../components/sidebarec/Sidec'
import Off from '../../components/off/Off'
import './cp.css'
const Cp = () => {
  return (
    <div>
      <Navbar/>
    <div className="ele">
    <Sidec/>
    <Off/>
      
    </div>
      <Footer/>
    </div>
  )
}

export default Cp
