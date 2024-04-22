import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Espacec from "./pages/espacec/espacec";
import Home from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Enreprise from "./pages/offre/entreprise/Enreprise";
import Espacep from "./pages/espacep/Espacep";
import Offre from "./pages/offre/Offre";
import Offres from "./pages/offre/offres";
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
import Off from "./components/off/Off"
import Reclamation from './components/creatreclamation/Reclamation';
import Reclam from './pages/reclam/Reclam'
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
        <Route path="/offre/:id" element={<Offre />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/bot" element={<Mobibot />} />
        <Route path="/off" element={<Off />} />
        <Route path="/rec" element={<Reclam/>} />
    </Routes>
    </BrowserRouter>
  );
}


export default App;
