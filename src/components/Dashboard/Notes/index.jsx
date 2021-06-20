import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { notesSelector } from '../../../redux/selectors/notes'
import Note from './Note'
import { Button, Dialog, Grid, makeStyles, Typography } from '@material-ui/core'
import ModalAddNote from './ModalAddNote'
import { Add } from '@material-ui/icons'
import { clientsSelector } from '../../../redux/selectors/clients'

const useStyes = makeStyles((theme) => ({
  title: {
    marginBottom: "20px",
    padding: "10px 0",
    fontWeight: 600,
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

function Notes () {
  const classes = useStyes();
  const notes = useSelector(notesSelector)
  const clients = useSelector(clientsSelector)

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Grid container>
        <Grid md={8}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Заметки
          </Typography>
        </Grid>
        <Grid md={4} className={classes.buttonWrap}>
          <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleModalOpen}>
            Добавить новую заметку
          </Button>
          <Dialog open={open} onClose={handleModalClose} >
            <ModalAddNote clients={clients} modalClose={setOpen}/>
          </Dialog>
        </Grid>

      </Grid>
      {
        notes.map((note, index) => {
          return <Note note={note} key={index}/>
        })
      }
    </div>
  )
}

export default Notes;