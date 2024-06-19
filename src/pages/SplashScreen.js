// SplashScreen.js
import React, {useEffect, useState} from 'react';
import logoWithTagline from '../assets/images/logo-myhealth-tagline.svg';
import { useNavigate } from 'react-router-dom';


const SplashScreen = () => {

    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false);
            navigate('/login');
        }, 3000);  
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`mh-splash-screen ${isActive ? 'active' : ''}`}>
            <img src={logoWithTagline} alt="logo" className='mh-logo-splash' />
        </div>
    );
};

export default SplashScreen;
