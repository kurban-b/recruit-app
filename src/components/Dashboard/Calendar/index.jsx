import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { interviewsSelector } from '../../../redux/selectors/inerviews'
import { clientsSelector } from '../../../redux/selectors/clients'

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

  const interviews = useSelector(interviewsSelector)
  const clients = useSelector(clientsSelector)

  const events = interviews.map(item => {
    return {
      ...item,
      title: `Собеседование с ${clients.find(client => item.clientId === client.id).fullName}`,
      date: item.date
    }
  })


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
        events={events}
      />
    </div>
  )
}

export default Calendar;