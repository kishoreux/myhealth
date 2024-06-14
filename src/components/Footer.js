import React from 'react';
import logo from '../logo.svg';
import iconHome from '../assets/images/icon-home.svg';
import iconActivity from '../assets/images/icon-activity.svg';
import iconPlus from '../assets/images/icon-plus-circle.svg';
import iconHeart from '../assets/images/icon-heart.svg';
import iconLogout from '../assets/images/icon-logout.svg';
import { Link } from 'react-router-dom';

function Footer(){

    return (
        <footer className='mh-footer'>
          <div className='mh-footer-navigation'>
             <button className='mh-nav-btn'>
               
                <Link to="/landing"> <img src={iconHome} alt={iconHome} /></Link>
             </button>
             <button className='mh-nav-btn'>
                <img src={iconActivity} alt={iconActivity} />
             </button>
             <button className='mh-nav-btn'>
                <img src={iconPlus} alt={iconPlus} />
             </button>
             <button className='mh-nav-btn'>
                <img src={iconHeart} alt={iconHeart} />
             </button>
             <button className='mh-nav-btn'>
                <Link to="/"><img src={iconLogout} alt={iconLogout} /></Link>
             </button>
             
          </div>
      </footer>
    )

}

export default Footer;