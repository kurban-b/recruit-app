import React from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import { SaveAlt } from '@material-ui/icons'

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "100%",
  }
}));

function Passwords () {
  const classes = useStyes();

  return (
    <div>
      <TextField
        required
        label="Старый пароль"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        required
        label="Новый пароль"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        required
        label="Повторите пароль"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        className={classes.input}
      />
      <Button variant="contained" color="secondary" startIcon={<SaveAlt />}>
        Изменить
      </Button>
    </div>
  )
}

export default Passwords