import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../components/essalam.png';


function Login() {
  const [inputs, setInputs] = useState({
    matricule: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!inputs.matricule || !inputs.password) {
      toast.error('Please enter both matricule and password');
      return;
    }

    try {
      const response = await axios.post("http://localhost:8082/api/login", inputs);
      sessionStorage.setItem("id", response.data.others._id);
     
      if (response.data.user) {
        localStorage.setItem('token', response.data.user);
        setLoggedIn(true);

        if (response.data.role === 'admin') {
          navigate("/gestionnaire");
        } else if (response.data.role === 'partenaire') {
          navigate("/partenaire");
        } else {
          navigate("/user");
        }
      } else {
        setError('Please check your matricule and password');
      }
      toast.success('Login successful');
    } catch (error) {
      console.error("Error during login:", error);
      toast.error('Please make sure you have entered your information correctly');
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
            <button
              type="button"
              className="btn btn-success green-button"
              style={{ width: '150px', fontSize: '1rem', padding: '0.5rem 1rem' }}
            >
              retourner
            </button>
          </Link>
        </div>
      </nav>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-30">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={logo} className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                {/* matricule input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Matricule
                  </label>
                  <input
                    type="number"
                    value={inputs.matricule}
                    onChange={handleChange}
                    id="form3Example3"
                    className={`form-control form-control-lg ${submitted && !inputs.matricule && 'required'}`}
                    placeholder="entrer votre matricule"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    value={inputs.password}
                    onChange={handleChange}
                    id="form3Example4"
                    className={`form-control form-control-lg ${submitted && !inputs.password && 'required'}`}
                    placeholder="Enter password"
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button 
                    type="submit"
                    className="btn btn-success btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  >
                    se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
