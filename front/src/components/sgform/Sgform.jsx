import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sgform.css";
import axios from "axios";
const Sgform = () => {
  const [Inputs, setInputs] = useState({
    email: "",
    name: "",
    lastname: "",
    number: "",
    numberu: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:1000/api/v1/signup",Inputs).then ((response)=> {
      console.log(response);
      
      setInputs({
      email: "",
    name: "",
    lastname: "",
    number: "",
    numberu: "",
    });
    })
  

  
  };


  return (
    <div className='sg'>
      <form className="form" >
        <p className="title">Sign up</p>
        <input placeholder="Email" type="text" name="email" className="email" onChange={handleChange} value={Inputs.email} />
        <input placeholder="Name" type="text" name="name" className="email" onChange={handleChange} value={Inputs.name} />
        <input placeholder="Lastname" type="text" name="lastname" className="email" onChange={handleChange} value={Inputs.lastname} />
        <input placeholder="Number" type="text" name="number" className="email" onChange={handleChange} value={Inputs.number} />
        <input placeholder="Numberu" type="text" name="numberu" className="email" onChange={handleChange} value={Inputs.numberu} />
        <p className="text">Already have an account? <Link to="/">Login!</Link></p>
        <div className="button_row">
          <Link to="/login">  <button className="button secondary_button">Back</button> </Link>
          <button type="submit" className="button primary_button" onClick={handleSubmit}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Sgform;
