import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))


const MyCalendar  = ({events}) => {

    return(    
        <div className='calendar'>
            <BigCalendar
                // selectable
                defaultView={BigCalendar.Views.MONTH}
                events={events}
                views={['month', 'day','agenda']}             
            />
        </div>
  )}

  export default MyCalendar;