import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function ScheduleAppointment() {
  const [date, setDate] = useState('');
  const [timeslot, setTimeslot] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && timeslot) {
      navigate('/successschedule', { state: { date, timeslot } });
    } else {
      alert('Please select a date and a timeslot.');
    }
  };

  return (
    <div>
      <Header/>
      <div className='mh-container'>
        <h4 className='mh-text-dark text-align-center mh-mb-2'>Schedule an Appointment</h4>

        <form onSubmit={handleSubmit}>
          <div className='mh-form-group'>
            <input 
              type='date' 
              className='mh-form-control' 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
          </div>
          <div className='mh-form-row mh-gap-2'>
            {['1.30PM - 2.30PM', '2.30PM - 3.30PM', '3.30PM - 4.30PM', '4.30PM - 5.30PM', '5.30PM - 6.30PM', '6.30PM - 7.30PM'].map(slot => (
              <label className='mh-stylish-radio' key={slot}>
                <input 
                  type="radio" 
                  name='timeslot' 
                  value={slot} 
                  checked={timeslot === slot}
                  onChange={(e) => setTimeslot(e.target.value)}
                />
                <span className='timeslot'>{slot}</span>
              </label>
            ))}
          </div>
          <button className='mh-btn mh-primary mh-w-100 mh-mt-2 mh-mb-6'>Schedule</button>
        </form>
      </div>
    </div>
  );
}

export default ScheduleAppointment;
