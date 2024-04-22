import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reclamation from '../../components/creatreclamation/Reclamation';
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";
import './reclam.css'; // Import CSS file for styling

const UserReclamations = () => {
  const [reclamations, setReclamations] = useState([]);
  const id = sessionStorage.getItem("id");
 
  useEffect(() => {
    const fetchUserReclamations = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v4/getreclamation/${id}`);
        const { reclamations, message } = response.data;
        if (reclamations && reclamations.length > 0) {
          setReclamations(reclamations);
        } else {
          console.log(message); 
        }
      } catch (error) {
        console.error('Failed to fetch user reclamations:', error);
      }
    };

    fetchUserReclamations();
  }, [id]);

  return (
    <div>
      <Navbar/>
      <h2>User Reclamations</h2>
      <Reclamation/>
      <div className="reclamation-cards">
        {reclamations.length > 0 ? (
          reclamations.map((reclamation) => (
            <div className="reclamation-card" key={reclamation._id}>
              <p>Reclamation ID: {reclamation._id}</p>
              <p>Description: {reclamation.nomcomplet}</p>
              <p>Number: {reclamation.numero}</p>
              <p>Issue: {reclamation.issue}</p>
              {reclamation.state && <p>State: {reclamation.state}</p>}
              {reclamation.response && <p>Response: {reclamation.response}</p>}
            </div>
          ))
        ) : (
          <p>No reclamations found for this user</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default UserReclamations;
