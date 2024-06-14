import React from 'react';
import { useLocation } from 'react-router-dom';
import logoIcon from '../assets/images/logo-myhealth-icon.svg';
import logoWithTagline from '../assets/images/logo-myhealth-tagline.svg'; // another logo for different routes

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  let isLoggedin = true;
  if (currentPath === '/') {
    isLoggedin = false;
  }

  return (
    <header className='mh-header'>
      <div className='mh-container'>
        {!isLoggedin && (
          <div className='mh-logo with-tagline'>
            <img src={logoWithTagline} alt="logo" />
          </div>
        )}
          
         
          {isLoggedin && (
            <div className='mh-row horizontal end'>
              <div className='mh-logo'>
                <img src={logoIcon} alt="logo" />
              </div>
              <div className='mh-welcome'>
                <h6 className='mh-text-dark'>Hello</h6>
                <h3>Michael Johnson</h3>
              </div>
            </div>
          )}


      </div>
    </header>
  );
}

export default Header;
