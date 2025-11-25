// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.get('https://lms-backend-vlug.onrender.com/Users');
    const users = res.data;

    const user = users.find(
      (u) => u.username === formData.username && u.userpass === formData.password
    );

    if (user) {
      // Don't store password in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify({
        id: user.id,
        username: user.username,
        profile: user.profile
      }));
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  } catch (err) {
    setError('Failed to connect to server');
  }
};



  return (
   <>
   
      <div className='container mt-5'>
        <div className='row'>

          <div style={{ padding: '30px' }} className='mt-5'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
          className='form-control'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password:</label><br />
          <input
          className='form-control'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btn btn-dark' type="submit" style={{ marginTop: '15px' }}>Login</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>

        </div>

      </div>
   
   </>
  );
};

export default Login;