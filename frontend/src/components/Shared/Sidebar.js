// src/components/Shared/Sidebar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../utils/AuthContext'; 
import { CalendarContext } from '../../utils/CalendarContext';
import { jwtDecode } from 'jwt-decode'; 
import '../../styles/dropdown.css'

function Sidebar({ isOpen }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { user, logout } = useContext(AuthContext);
  const {showModal,setShowModal } = useContext(CalendarContext);
  // console.log(showModal)
  const handleLogout = () => {
    logout();
  };
  const isAdmin = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role === "admin") {
          return true;
        }
      } catch (error) {
        console.error("Error decoding token", error);
        navigate('/login'); 
      }
    }
    return false;
  };

  const handleShowModel=()=>{
    setShowModal(true);
    console.log(showModal)
  }


  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <ul >
        <li>
            <button className="dropbtn" onClick={handleShowModel}>Create New</button>
        </li>
        <li><Link to="/calendar">Calendar</Link></li>
        {isAdmin() && <li>
            <div class="dropdown">
                <button class="dropbtn">Company</button>
                <div class="dropdown-content">
                    <a href="/admin/companyform">Add Company</a>
                    <a href="/admin/companies">Companies</a>
                </div>
            </div>
          </li>}
        <li>{
          <div class="dropdown">
          <button class="dropbtn">Communication</button>
          <div class="dropdown-content">
              <a href="/admin/addmethod">Add Method</a>
              <a href="/admin/methods">Methods</a>
          </div>
      </div>
          
          }</li>
        <div className='sideMenu'>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/about">About</a></li>
          {user?(
            <>
              <li><a href='/dashboard'>Dashboard</a></li>
              <li><a href='/logout' onClick={handleLogout}>Logout</a></li>
            </>
          ):(
            <>
              <li><a href='/login'>Login</a></li>
              <li><a href='/register'>Register</a></li>
            </>
          )

          }

        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;