import React from "react";
import {
  Avatar,
  Button, Divider,
  Grid, IconButton,
  List,
  ListItem,
  ListItemAvatar, ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField, Typography
} from '@material-ui/core'
import { Add, Delete, Folder, Save } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { companiesSelector } from '../../redux/selectors'

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "95%",
  },
  companies: {
    marginBottom: "20px",
    backgroundColor: "rgba(184,184,184,0.09)",
    padding: "10px"
  }
}));

function InfoAccount({ person }) {
  const classes = useStyes();

  const companies = useSelector(companiesSelector)

  return (
    <Grid container>
      <Grid item md={6}>
        <TextField
          id="outlined-basic"
          label="Логин"
          variant="outlined"
          className={classes.input}
          defaultValue={person.login}
        />
        <TextField
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          className={classes.input}
          defaultValue={person.firstName}
        />
        <TextField
          id="outlined-basic"
          label="Фамилия"
          variant="outlined"
          className={classes.input}
          defaultValue={person.lastName}
        />

      </Grid>
      <Grid item md={6} justify="flex-end">
        <TextField
          id="outlined-basic"
          label="Эл. почта"
          variant="outlined"
          className={classes.input}
          defaultValue={person.email}
        />
        <TextField
          id="outlined-basic"
          label="Номер тел."
          variant="outlined"
          className={classes.input}
          defaultValue={person.phone}
        />
        <TextField
          id="outlined-basic"
          label="Адрес"
          variant="outlined"
          className={classes.input}
          defaultValue={person.address}
        />

      </Grid>
      <Grid item md={12}>
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
            <ListItem autoFocus button>
              <ListItemAvatar>
                <Avatar>
                  <Add />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Добавить новую компанию" />
            </ListItem>
            <Divider/>
          </List>
        </div>
        <Button variant="contained" color="secondary" startIcon={<Save />}>
          Сохранить
        </Button>
      </Grid>
    </Grid>
  );
}

export default InfoAccount;
