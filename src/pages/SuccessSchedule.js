import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function SuccessSchedule() {
  const location = useLocation();
  const { date, timeslot } = location.state || { date: 'N/A', timeslot: 'N/A' };
  const startTime = timeslot.split('-')[0].trim();
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div>
      <Header />
      <div className='mh-container'>
        <div className='mh-success'>
            <div className='mh-success-title'>Scheduled Successfully!</div>
            <p>Your appointment has been <br/> scheduled on</p>
            <h4 className='mh-schedule-time'>{formattedDate} at  {startTime}</h4>
        </div>
        <button className='mh-btn mh-primary mh-w-100 mh-mt-2 mh-mb-6'> <Link to="/landing">  Back Home </Link> </button>
        <Footer />
         
      </div>
    </div>
  );
}

export default SuccessSchedule;
