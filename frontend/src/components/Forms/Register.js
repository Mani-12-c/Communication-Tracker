import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axiosInstance.post('/register',{
            username,
            email,
            password
        });

            setSuccess('Registration successful! You can now log in.');
            setError('');
            alert(success)
            console.log(response.data);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
            setSuccess('');
            console.error(err);
        }
    };

    return (

    <>
    {
      <div className='f-container'>
      <div class="center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="inputbox">
            <input 
            required="required"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            /><span>Username</span>
            </div>
          <div class="inputbox">
            <input type="email" 
            required="required"
            value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
            <span>Email</span>
          </div>
          <div class="inputbox">
            <input type="password" 
            required="required"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </div>
          <div class="inputbox">
            <input type="submit" />
          </div>
          
            {error && <p className="error">{error}</p>} 
            <div className='form-text'>
          <p>Already have an account ?</p> 
          <a href='/login'>Login</a>
          </div>
        </form>
      </div>
      </div>
    }

    </>
    );
}

export default Register;
