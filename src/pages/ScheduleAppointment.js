import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function ScheduleAppointment() {
  const slots = ['1.30PM - 2.30PM', '2.30PM - 3.30PM', '3.30PM - 4.30PM', '4.30PM - 5.30PM', '5.30PM - 6.30PM', '6.30PM - 7.30PM'];
  const [timeslot, setTimeslot] = useState('');
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const today = new Date();
  const [slotSelected, setSlotSelected] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && timeslot) {
      navigate('/successschedule', { state: { date, timeslot } });
      setSlotSelected(true);
    } else {
      setSlotSelected(false);
    }
  };

  return (
    <div>
      <Header/>
      <div className='mh-container'>
        <h4 className='mh-text-dark text-align-center mh-mb-2'>Schedule an Appointment</h4>

        {!slotSelected && (
           
          <div className='mh-message mh-error'>
            Please select a date and a timeslot.
          </div>
        )}
        

        <form onSubmit={handleSubmit}>
          <div className='mh-form-group'>
             <DatePicker
                selected={date}
                onChange={(selecteddate) => setDate(selecteddate)}
                minDate={today}
                dateFormat="dd/MM/YYYY"
                placeholderText='DD/MM/YYYY'
                className='mh-form-control' 
            />
          </div>
          <div className='mh-form-row mh-gap-2'>
            {slots.map(slot => (
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
