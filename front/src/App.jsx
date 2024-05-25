import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Espacec from "./pages/espacec/espacec";
import Home from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Espacep from "./pages/espacep/Espacep";
import Offre from "./pages/offre/Offre";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Cp from "./pages/cp/Cp";
import Ce from "./pages/ce/Ce";
import Userv from "./pages/userv/Userv";
import Slider from "./components/carousel/Slider";
import Oswiper from "./components/swiper/Oswiper";
import { useDispatch } from 'react-redux'; 
import { authActions } from './store';
import Pay from './components/pay/Pay';
import Lgv from './components/lgformveri/Lgv'
import Mobibot from './components/chat/Mobibot';
import Reclam from './pages/reclam/Reclam'
import Anghami from './pages/anghami/Anghami';
import"./app.css" 
import Offres from './pages/offres/Offres';
import Posts from './pages/posts/Posts';
import FAQ from './pages/faq/Faq';
import About from './pages/about/About';
import PrivacyPolicy from './pages/policy/privacy';
import MobilisSupportsLesVerts from './pages/esp/Esp';
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    const id = sessionStorage.getItem("id")
   if (id){
    dispatch(authActions.login());
  }
    })
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<Lgv />} />
        <Route path="/swiper" element={<Oswiper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/slide" element={<Slider />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Userv />} />
        <Route path="/espacec" element={<Espacec />} />
        <Route path="/cp" element={<Cp />} />
        <Route path="/Ce" element={<Ce />} />
        <Route path="/espacep" element={<Espacep />} />
        <Route path="/offre" element={<Offres />} />
       
        <Route path="/pay" element={<Pay />} />
        <Route path="/bot" element={<Mobibot />} />
        <Route path="/off" element={<Offree />} />
        <Route path="/rec" element={<Reclam/>} />
        <Route path="/anghami" element={<Anghami/>} />
        <Route path="/offers" element={<Offres />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/pri" element={<PrivacyPolicy />} />
        <Route path="/esp" element={<MobilisSupportsLesVerts />} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;

function Offree (){
return <h2>ooooooooo</h2>
}