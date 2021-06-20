import React, { useState } from 'react'
import {
  Avatar, Dialog,
  Divider,
  IconButton,
  List,
  ListItem, ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText, makeStyles,
  Typography
} from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'
import ModalAddCompany from './ModalAddCompany'

const useStyles = makeStyles(()=>({
  companies: {
    marginBottom: "20px",
    backgroundColor: "rgba(184,184,184,0.09)",
    padding: "10px"
  }
}))

function CompaniesList ({companies}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Typography variant="h6" component="h3">
        Компании
      </Typography>
      <div className={classes.companies}>
        <List>
          {companies.map(company => {
            return (
              <>
                <ListItem>
                  <ListItemText
                    primary={company.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
              </>
            )
          })}
          <ListItem autoFocus button onClick={handleModalOpen}>
            <ListItemAvatar>
              <Avatar>
                <Add />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Добавить новую компанию" />
          </ListItem>
          <Divider/>
        </List>
        <Dialog open={open} onClose={handleModalClose} >
          <ModalAddCompany />
        </Dialog>
      </div>
    </div>
  )
}

export default CompaniesList