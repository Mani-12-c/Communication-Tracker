import { useState, useContext } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import '../../styles/forms.css' 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email)
      const response = await axiosInstance.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser (response.data.role);
      alert('Logged in successfully ');
      console.log('Logged in successfully');
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
      console.error(err); 
    }
  };

  return (

    <>
    
    {
      <div className='f-container'>
      <div class="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <p>Don't have an account ?</p> 
          <a href='/Register'>Register</a>
          </div>
        </form>
      </div>
      </div>
    }

    </>
  );
};

export default Login;