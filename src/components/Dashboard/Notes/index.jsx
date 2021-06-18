import React from 'react'
import { useSelector } from 'react-redux'
import { notesSelector } from '../../../redux/selectors'
import Note from './Note'
import { makeStyles, Typography } from '@material-ui/core'

const useStyes = makeStyles((theme) => ({
  title: {
    marginBottom: "20px",
    padding: "10px 0",
    fontWeight: 600,
  }
}));

function Notes () {
  const classes = useStyes();
  const notes = useSelector(notesSelector)

  return (
    <div>
      <Typography variant="h5" component="h2" className={classes.title}>
        Заметки
      </Typography>
      {
        notes.map((note, index) => {
          return <Note note={note} key={index}/>
        })
      }
    </div>
  )
}

export default Notes;