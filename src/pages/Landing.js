import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import iconSymptomChecker from '../assets/images/icon-stethescope.svg';
import iconCalendar from '../assets/images/icon-calendar.svg';
import imageForCard from '../assets/images/vector-image.svg';
import adImage from '../assets/images/ad-image.png';
import Footer from '../components/Footer';

function Landing() {
  return (
    <div> 

    <Header/>
    <div className='mh-container'>
        <div className='mh-row horizontal gap-2'>
          <button className='mh-menu-btn'>
          <Link to="/symptomchecker">
              <img src={iconSymptomChecker} alt={iconSymptomChecker} />
            Symptom Checker</Link>
          </button>

          <button className='mh-menu-btn'>
          <Link to="/scheduleappointment">
              <img src={iconCalendar} alt={iconCalendar} />
            Schedule an Appointment</Link>
          </button>
        </div>

        <div className='mh-row horizontal'>
            <div className='mh-card with-image gradient-bg'>
              <div className='mh-card-content'>
                  <img src={imageForCard} alt={imageForCard} />
                  <div className='mh-card-text-content'>
                      <h4>Video Consultation</h4>
                      <p>Schedule a video consultation with our prominent doctors</p>
                  </div>
              </div>
                
                <button className='mh-btn mh-primary md-btn'>Book Now</button>
            </div>
        </div>

        <div className='mh-row'>
          <img src={adImage} alt={adImage} className='ad-image' />
        </div>
    </div>
    <Footer/>

    </div>
  )
}

export default Landing;