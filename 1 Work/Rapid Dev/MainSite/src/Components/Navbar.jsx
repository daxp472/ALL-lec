import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ pageTitles }) => {
  const location = useLocation();

  const getPageTitle = (pathname) => {
    return pageTitles[pathname] || 'BusinessPro'; // Fallback title
  };

  return (
    <div className="header">
      <h1>{getPageTitle(location.pathname)}</h1>
      <div className="user-info">
        <div className="notification">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">3</span>
        </div>
        <div className="user">
          <span className="user-name">John Smith</span>
          <span className="user-role">Admin</span>
        </div>
        <div className="user-avatar">
          <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png" alt="User avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;