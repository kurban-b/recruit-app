import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Card, Dialog, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { interviewsSelector } from '../../../redux/selectors/inerviews'
import { clientsSelector } from '../../../redux/selectors/clients'
import moment from 'moment'

const useStayles = makeStyles(()=> ({
  wrap: {
    padding: "10px 10px 20px 10px",
    boxShadow: "0 0 10px 0 #ccc",
    borderRadius: "10px 10px 0 0"
  },
  headerMoth: {
    border: "none"
  },
  event: {
    padding: "5px",
    fontSize: "14px",
    backgroundColor: "#203dcd",
    color: "#fff",
    "&:hover": {
      color: "#000"
    }
  },
  main: {
    fontFamily: 'Roboto',
  },
  card: {
    padding: "20px"
  }
}))

function Calendar () {
  const classes = useStayles();

  const interviews = useSelector(interviewsSelector)
  const clients = useSelector(clientsSelector)

  const [open, setOpen] = useState(false)

  const [event, setEvent] = useState('')

  const handleOpenModal = (prop) => {
    setEvent(prop)

  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const events = interviews.map(item => {
    return {
      ...item,
      id: item.id,
      title: `Собеседование с ${clients.find(client => item.clientId === client.id).fullName}`,
      date: item.date
    }
  })

  return (
    <div className={classes.wrap}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventClassNames={classes.event}
        viewClassNames={classes.main}
        dayHeaderClassNames={classes.headerMoth}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: false
        }}
        eventClick={(event)=>{
          setOpen(true)

          handleOpenModal({
            title: event.event.title,
            date: event.event.start
          })
        }
        }
        buttonText={{
          today: 'Сегодня',
          week: 'Неделя',
          month: 'Месяц',
          day: 'День'
        }}

        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        events={events}
      />
      <Dialog open={open} onClose={handleCloseModal}>
        <Card className={classes.card}>
          <Typography variant="h6" component="h4" color='primary'>
            Информация
          </Typography>

          <Typography variant="body2" component="h4">
            Событие: {event.title}
          </Typography>
          <Typography variant="caption" component="h4">
            Дата: {moment(event.date).format('LL')}
          </Typography>
          <Typography variant="caption" component="h4">
            Время: {moment(event.date).format('LT')}
          </Typography>

        </Card>
      </Dialog>
    </div>
  )
}

export default Calendar;