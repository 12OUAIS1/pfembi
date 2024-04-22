import React, { useState } from 'react';
import axios from 'axios';
import './reclamation.css';

const Reclamation = () => {
  const [inputs, setInputs] = useState({
    nomcomplet: '',
    numero: '',
    issue: '',
  });

  const [showForm, setShowForm] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    
    // Retrieve the logged-in user ID from session storage
    const userId = sessionStorage.getItem('id');
  
    // Check if the user ID is available
    if (!userId) {
      console.error('User ID not found in session storage');
      return;
    }
  
    // Include the user ID in the reclamation data
    const reclamationData = {
      ...inputs,
      id: userId
    };
  
    try {
      const response = await axios.post('http://localhost:1000/api/v4/reclamation', reclamationData);
      console.log('Response:', response); // Log the entire response object
  
      // Check if the response status is OK (200)
      if (response.status === 200) {
        console.log('Reclamation submitted successfully:', response.data);
        // Clear the form inputs after successful submission
        setInputs({
          nomcomplet: '',
          numero: '',
          issue: '',
        });
      } else {
        console.error('Reclamation submission failed:', response.data);
      }
    } catch (error) {
      console.error('Error submitting reclamation:', error);
    }
  };
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bscont">
         <button className="toggle-button button button--primary" onClick={toggleFormVisibility}>
        {showForm ? 'Hide Form' : 'new reclamation'}
      </button>
      {showForm && (
      <div className="modal">
        <div className="modal__header">
          <span className="modal__title">New Reclamation</span>
          <button className="button button--icon" onClick={toggleFormVisibility}>
                <svg
                  width="24"
                  viewBox="0 0 24 24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                </svg>
              </button>
        </div>

        <div className="modal__body">
          <div className="input">
            <label className="input__label">Nom Complet</label>
            <input
              className="input__field"
              type="text"
              name="nomcomplet"
              value={inputs.nomcomplet}
              onChange={handleChange}
              required
            />
            <p className="input__description">Full Name must contain a maximum of 32 characters</p>
          </div>
          <div className="input">
            <label className="input__label">Numero</label>
            <input
              className="input__field"
              type="text"
              name="numero"
              value={inputs.numero}
              onChange={handleChange}
              required
            />
            <p className="input__description">Numero must contain a maximum of 32 characters</p>
          </div>
          <div className="input">
            <label className="input__label">Issue</label>
            <input
              className="input__field input__field--textarea"
              name="issue"
              value={inputs.issue}
              onChange={handleChange}
              required
            ></input>
            <p className="input__description">Description of the issue</p>
          </div>
        </div>
        <div className="modal__footer">
          <button className="button button--primary" onClick={handleSubmit}>
            Create Reclamation
          </button>
        </div>
      </div>
          )}    </div>
  );
};

export default Reclamation;
