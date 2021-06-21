import React from 'react'
import { Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'
import { clientsSelector } from '../../../redux/selectors/clients'
import { Delete, EventNote, Favorite, Share } from '@material-ui/icons'
import { deleteNote } from '../../../redux/actions/notes'

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
  const dispatch = useDispatch();

  const client = useSelector(clientsSelector).find(item => item.id === note.clientId)

  const handleDelete = () => {
    dispatch(deleteNote(note.id))
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <EventNote />
        }
        title={note.title}
        subheader={`${moment(note.date).locale('ru').format('LL')} - ${client.fullName}`}
      >
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Note