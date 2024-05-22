import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineClose } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reclamation from '../../components/creatreclamation/Reclamation';
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";
import './reclam.css';

const UserReclamations = () => {
  const [reclamations, setReclamations] = useState([]);
  const [editingReclamation, setEditingReclamation] = useState(null); // State to store the reclamation being edited
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

  const handleDelete = async (reclamationId) => {
    // Ask for confirmation before proceeding with deletion
    if (window.confirm('Are you sure you want to delete this reclamation?')) {
      try {
        const response = await axios.delete(`http://localhost:1000/api/v4/deleterec/${reclamationId}`);
        const { message, reclamation } = response.data;
  
        setReclamations(reclamations.filter(reclamation => reclamation._id !== reclamationId));
  
        toast.success(message);
      } catch (error) {
        console.error('Failed to delete reclamation:', error);
        toast.error('Failed to delete reclamation');
      }
    } else {
      // User canceled deletion
      console.log('Deletion canceled');
    }
  };

  const handleEdit = (reclamation) => {
    setEditingReclamation(reclamation);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:1000/api/v4/updaterec/${editingReclamation._id}`, editingReclamation);
      const { reclamation } = response.data;

      // Update the reclamation in the state
      setReclamations(reclamations.map(item => (item._id === reclamation._id ? reclamation : item)));

      toast.success('Reclamation updated successfully');
    } catch (error) {
      console.error('Failed to update reclamation:', error);
      toast.error('Failed to update reclamation');
    }
    setEditingReclamation(null); // Reset editing state after form submission
  };

  const handleClose = () => {
    setEditingReclamation(null);
  };

  return (
    <div>
      <Navbar/>
      <h2>Lises des Reclamations</h2>
      <Reclamation/>
      <div className="reclamation-cards">
        {reclamations.length > 0 ? (
          reclamations.map((reclamation) => (
            <div className="reclamation-card" key={reclamation._id}>
              {editingReclamation && editingReclamation._id === reclamation._id ? (
                <div className="edit-form">
                  <h3>Edit Reclamation</h3>
                  <form onSubmit={handleFormSubmit}>
                    <label>
                      Nom Complet:
                      <input type="text" value={editingReclamation.nomcomplet} onChange={(e) => setEditingReclamation({ ...editingReclamation, nomcomplet: e.target.value })} />
                    </label>
                    <label>
                      Number:
                      <input type="text" value={editingReclamation.numero} onChange={(e) => setEditingReclamation({ ...editingReclamation, numero: e.target.value })} />
                    </label>
                    <label>
                    Problème:
                      <input type="text" value={editingReclamation.issue} onChange={(e) => setEditingReclamation({ ...editingReclamation, issue: e.target.value })} />
                    </label>
                    <div className="reclamation-actions">
                      <button type="submit">Update</button>
                      <button type="button" onClick={handleClose} className="close-button"><AiOutlineClose /> Close</button>
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <p>Reclamation ID: {reclamation._id}</p>
                  <p>Nom complet: {reclamation.nomcomplet}</p>
                  <p>Number: {reclamation.numero}</p>
                  <p>Problème: {reclamation.issue}</p>
                  {reclamation.state && <p>State: {reclamation.state}</p>}
                  {reclamation.response && <p>Response: {reclamation.response}</p>}
                  <div className="reclamation-actions">
                    <button className="edit-button" onClick={() => handleEdit(reclamation)}><AiOutlineEdit /> Edit</button>
                    <button className="delete-button" onClick={() => handleDelete(reclamation._id)}><AiOutlineDelete /> Delete</button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No reclamations found for this user</p>
        )}
      </div>
      <Footer/>
      <ToastContainer />
    </div>
  );
};

export default UserReclamations;
