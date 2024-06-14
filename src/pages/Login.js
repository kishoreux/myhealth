import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import logoGoogle from '../assets/images/logo-google.png';
import logoFacebook from '../assets/images/logo-facebook.png';
 

function Login() {
  return (
    <div>
        <Header/>
        <div className='mh-container'>
            <h3 className='text-align-center mh-login-title'>Login</h3>
            <div className='mh-row vertical'>
                <input type='text' className='mh-form-control' placeholder='username' />
                <input type='password' className='mh-form-control' placeholder='password' />
                <button className='mh-btn mh-primary'><Link to="/landing">Login</Link></button>

                
                <h6 className='text-align-center mh-login-subtitle'>Forgot Password</h6>
            
                <h6 className='text-align-center mh-login-title mh-text-dark'>New User? Sign up here</h6>
                <button className='mh-btn mh-outlined with-logo'>
                    <img src={logoGoogle} alt={logoGoogle} />
                    Signup with Google
                    </button>
                <button className='mh-btn mh-outlined with-logo'>
                <img src={logoFacebook} alt={logoFacebook} />
                    Sign up with Facebook
                    </button>
            </div>
        </div>
         
    </div>
  )
}

export default Login