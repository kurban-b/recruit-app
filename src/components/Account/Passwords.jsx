import React, { useState } from 'react'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField
} from '@material-ui/core'
import { SaveAlt, Visibility, VisibilityOff } from '@material-ui/icons'

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "100%",
  }
}));

function Passwords () {
  const classes = useStyes();

  const [values, setValues] = useState({
    password: "",
    newPassword: "",
    repeatNewPassword: "",
    showPassword: false,
    showNewPassword: false,
    showrRepeatNewPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>

      <FormControl
        className={classes.input}
        variant="outlined"
        required
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Пароль
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChangePassword("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword('showPassword')}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={75}
        />
      </FormControl>

      <FormControl
        className={classes.input}
        variant="outlined"
        required
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Новый пароль
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showNewPassword ? "text" : "password"}
          value={values.newPassword}
          onChange={handleChangePassword("newPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword('showNewPassword')}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={125}
        />
      </FormControl>

      <FormControl
        className={classes.input}
        variant="outlined"
        required
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Повторите новый пароль
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showRepeatNewPassword ? "text" : "password"}
          value={values.repeatNewPassword}
          onChange={handleChangePassword("repeatNewPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword('showRepeatNewPassword')}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showRepeatNewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={205}
        />
      </FormControl>

      <Button variant="contained" color="secondary" startIcon={<SaveAlt />}>
        Изменить
      </Button>
    </div>
  )
}

export default Passwords