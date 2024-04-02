import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import './navbar.css';

export default function Navbar() {
  const initialDarkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const toggleDarkMode = () => { setDarkMode(!darkMode);};

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className={`top_nav ${darkMode ? 'dark-theme' : ''}`}>
      <div className="top_nav-wrapper">
        <div className="top_nav-right">
          <span className="theme" onClick={toggleDarkMode}>
          <i className={darkMode ? 'ri-sun-fill' : 'ri-moon-fill'}/>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}