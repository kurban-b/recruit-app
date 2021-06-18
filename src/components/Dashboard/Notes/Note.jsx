import React from 'react'
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { clientsSelector } from '../../../redux/selectors'
import moment from 'moment'
import 'moment/locale/ru'

const useStyes = makeStyles((theme) => ({
  card: {
    marginBottom: "20px",
  },
  footer: {
    margin: "15px 0 5px 0",
    color: "rgba(61,61,61,0.49)"
  },
  title: {
    marginBottom: "20px",
  }
}));

function Note ({note}) {
  const classes = useStyes();

  const client = useSelector(clientsSelector).find(item => item.id === note.clientId)

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          ~ {note.title} ~
        </Typography>
        <Typography variant="body1" component="p" className={classes.subtitle}>
          {note.content}
        </Typography>
        <Grid container className={classes.footer}>
          <Grid md={6}>
            <Typography variant="body1" component="p">
              Дата: { moment(note.date).locale('ru').format('L') }
            </Typography>
          </Grid>
          <Grid md={6}>
            <Typography variant="body1" component="p">
              Соискатель: {client.fullName}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Note