import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import "./pay.css";

const Pay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    serie: "",
    exp: "", 
    amount: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v2/usecards", inputs);
      console.log(response.data); 
      
      navigate("/main");
  
      alert("merci pour votre achat");
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };
  

  return (
    <div>
      <div className='lg'>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Payment</p>
        
          <input placeholder="Card number" type="text" name="serie" className="email" onChange={handleChange} value={inputs.serie} />
          <input placeholder="Expiration (MM/YYYY)" type="text" name="exp" className="email" onChange={handleChange} value={inputs.exp} />
          <input placeholder="Amount" type="text" name="amount" className="email" onChange={handleChange} value={inputs.amount} />
        
          <div className="button_row">
            <Link to="/main"> <button className="button secondary_button">Back</button> </Link>
            <button type="submit" className="button primary_button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pay;
