import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { makeStyles } from '@material-ui/core'

const useStayles = makeStyles(()=> ({
  headerMoth: {
    border: "none",
  },
  event: {

    padding: "5px",
    fontSize: "16px"
  }
}))

function Calendar (props) {
  const classes = useStayles();


  return (
    <div>
      <FullCalendar
        dayHeaderClassNames={classes.headerMoth}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        eventClassNames={classes.event}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        events={[
          { title: 'event 1', date: '2021-06-06' },
          { title: 'event 2', date: '2021-07-24' },
          { title: 'event 3', date: '2021-06-29' }
        ]}
      />
    </div>
  )
}

export default Calendar;