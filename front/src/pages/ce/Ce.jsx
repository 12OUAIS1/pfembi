import React from 'react'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import Sidee from '../../components/sidebaree/Sidee'
import { MdGroups } from "react-icons/md";
import "./ce.css"
const Ce = () => {
  return (
    <div>
      <Navbar/>
      <div className="econtainer">
      <div className="eitems"> <Sidee/></div>
        <div className="eitems">
       <div className="etxt">
       <h1>Découvrez ici les produits et services pour les Entreprise de Mobilis</h1>
        <p>

        Pour mieux comprendre vos besoins et vous conseiller sur les services, produits et solutions qui accompagneront le développement de votre activité, des responsables de comptes hautement qualifiés sont à votre écoute.

Découvrez ici les offres et solutions Mobilis spécialement conçus pour répondre à vos besoins spécifiques en matière de télécommunication :
</p>
       </div>
          </div>
      
      
      </div>
      
      <Footer/>
    </div>
  )
}

export default Ce

