import React from 'react'
import "./homelg.css"
import { Link } from 'react-router-dom';
const Homelg = () => {
  return (
    <div>
       <div className='login'>
        <div className="loginitems">
          <img className="logo1" src="/src/img/20.png" alt="" />
          <div className="containerr">
            <div className="parag">
             
              <h2>Connectez-vous et choisissez l'offre qui vous convient</h2>
              <p>Cliquer sur Connexion pour commencer </p>
            </div>
           <div className="logon">
           <Link to="/login">
    <button className="logonbtn">Connexion</button>
  </Link>
           </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Homelg
