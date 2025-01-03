import React, { useContext ,useState} from 'react';
import { AuthContext } from '../../utils/AuthContext'; 
import '../../styles/main.css';
import './navbar.css'

function Navbar({toggleSidebar}) {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {
        <nav className="navbar">
            <div className="logo-container"><a href='/'><div className='l-cont'><div className='logo'></div></div></a></div>
          <div className='navlist-container'>
            <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
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
            </ul>
            <div className="menu-toggle" onClick={() => { toggleMenu(); toggleSidebar(); }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
          </div>
          
        </nav>
      }
    </>
  );
}

export default Navbar;