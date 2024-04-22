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
              <h2>Ready to start your journey with us!!</h2>
              <h2>Login and choose the offer that suits you</h2>
              <p>Please enter your phone number</p>
            </div>
           <div className="logon">
           <Link to="/login">
    <button className="logonbtn">Login</button>
  </Link>
           </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Homelg
