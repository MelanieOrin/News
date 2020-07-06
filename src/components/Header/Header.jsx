import React from 'react';
import './Header.css';
import { isLoggedIn } from '../../utils/Auth.js';


const Header = () => {

  const handleClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.replace("/news");
  }

  return (
    <div className="header">
      <div className="siteName">USNewsToday</div>
      {isLoggedIn() && <div className="logout" onClick={handleClick}>Logout</div>}
    </div>
  );
};

export default Header;