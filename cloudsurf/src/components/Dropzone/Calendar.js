import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))


const MyCalendar  = ({events2}) => {
    const events = [{
        start: '7/3/2018',
        end: '7/13/2018',
        title: 'todays'
    },{
        start: '7/13/2018',
        end: '7/23/2018',
        title: 'todays'
    }
    ]
    return(    
        <div className='calendar'>
            <BigCalendar
                selectable
                defaultView={BigCalendar.Views.MONTH}
                events={events}
                views={['month', 'day','agenda']}             
            />
        </div>
  )}

  export default MyCalendar;