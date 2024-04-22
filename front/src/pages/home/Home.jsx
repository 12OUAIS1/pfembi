import React from 'react'
import "./home.css"
import Navbar from '../../components/nav/Navbar'
import Homelg from '../../components/homelogin/Homelg'
import Footer from '../../components/footer/Footer'
import Offers from '../../components/offers/Offers'
import Slider from '../../components/carousel/Slider'
import Oswiper from "../../components/swiper/Oswiper"
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Homelg/>
      <Offers/>
      <Slider/>
      <Oswiper/>
      <Footer/>
    </div>
  )
}

export default Home
