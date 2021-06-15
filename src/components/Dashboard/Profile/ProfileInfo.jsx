import React from 'react'
import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { Save } from '@material-ui/icons'

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "95%",
  },
}));

function ProfileInfo ({ client }) {
  const classes = useStyes();

  return (
    <Grid container>
      <Grid item md={6}>


      </Grid>
      <Grid item md={12} justify="flex-end">
        <TextField
          id="outlined-basic"
          label="Фамилия, Имя"
          variant="outlined"
          className={classes.input}
          defaultValue={client.fullName}
        />
        <TextField
          id="outlined-basic"
          label="Эл. почта"
          variant="outlined"
          className={classes.input}
          defaultValue={client.email}
        />
        <TextField
          id="outlined-basic"
          label="Номер тел."
          variant="outlined"
          className={classes.input}
          defaultValue={client.phone}
        />
        <TextField
          id="outlined-basic"
          label="Адрес"
          variant="outlined"
          className={classes.input}
          defaultValue={client.address}
        />
      </Grid>
      <Grid item md={12}>
        <Button variant="contained" color="secondary" startIcon={<Save />}>
          Сохранить
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProfileInfo;