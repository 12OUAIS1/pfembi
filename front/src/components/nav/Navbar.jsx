import React from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux'; 
import { authActions } from '../../store';
import './navbar.css'
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  const logout =()=>{
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
      {!isLoggedIn && (<>
  
  <Link className="navbar-brand" to="/"> <img className="logo" src="/src/img/mobilis.svg" alt="" /></Link>
       </>)}
       {isLoggedIn && (
    <> 
     <Link className="navbar-brand" to="/main"> <img className="logo" src="/src/img/mobilis.svg" alt="" /></Link>
   </>
        
  )}
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
       
    
          <li className='nav-item'>
<Link className='nav-link active btn-nav' to='/about' aria-current="page"><button className="navbtn">offre</button></Link>
       </li>
       <li className='nav-item'>
       <Link className='nav-link active btn-nav' to='/Espacec' aria-current="page"><button className="navbtn">espace client</button></Link>
       </li>
       <li className='nav-item'>
       <Link className='nav-link active btn-nav' to='/about' aria-current="page"><button className="navbtn">espace press</button></Link>
       </li>

       
  {isLoggedIn && (
    <>  <li className='nav-item'>
     <Link className='nav-link active btn-nav' to='/rec' aria-current="page"><button className="navbtn">help</button></Link>
   </li>   
   <li className='nav-item'>
   <Link className='nav-link active btn-nav' to='/' aria-current="page"><button className="navbtn"onClick={logout}><RiLogoutBoxFill/></button></Link>
         </li>  
   </>
        
  )}
         </ul>
        
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
