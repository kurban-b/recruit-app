import React, { useState } from 'react'
import {
  Button, Card, CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { registrationStart } from '../../redux/actions/auth'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginBottom: "25px",
  },
  registration: {
    margin: "auto",
    minHeight: "100vh",
  },
  registrationBlock: {
    width: "50%",
    padding: "20px 30px",
    margin: "auto",
  },
  input: {
    marginBottom: "20px",
  },
  link: {
    textAlign: "center",
    margin: "20px 0",
  },
  error: {
    marginBottom: "20px",
  },
}));

function Registration() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    showPassword: false,
    repeatPassword: "",
    repeatShowPassword: false,
    errorRepeatPassword: false,
    error: false,
  });

  const handleChangeFirstName = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeLastName = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeLogin = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeEmail = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeRepeatPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowRepeatPassword = () => {
    setValues({ ...values, repeatShowPassword: !values.repeatShowPassword });
  };

  const handleRegistartion = () => {
    if (
      values.firstName === "" ||
      values.lastName === "" ||
      values.email === "" ||
      values.login === "" ||
      values.password === "" ||
      values.repeatPassword === ""
    ) {
      setValues({ ...values, errorRepeatPassword: false, error: true });
    } else if (values.password !== values.repeatPassword) {
      setValues({ ...values, error: false, errorRepeatPassword: true });
    } else {
      dispatch(
        registrationStart(
          values.firstName,
          values.lastName,
          values.email,
          values.login,
          values.password
        )
      );
    }
  };
  return (
    <div className={classes.registration}>
      <Card className={classes.registrationBlock}>
        <CardContent >
          <Grid
            container
            direction="column"
            justify="center"
          >
            <Typography
              className={classes.title}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Регистрация
            </Typography>
            <TextField
              required
              label="Имя"
              variant="outlined"
              className={classes.input}
              value={values.firstName}
              onChange={handleChangeFirstName("firstName")}
            />
            <TextField
              required
              label="Фамилия"
              variant="outlined"
              className={classes.input}
              value={values.lastName}
              onChange={handleChangeLastName("lastName")}
            />
            <TextField
              required
              label="Почта"
              variant="outlined"
              className={`${classes.input} inputEmail`}
              type="email"
              value={values.email}
              onChange={handleChangeEmail("email")}
            />
            <TextField
              required
              label="Логин"
              variant="outlined"
              className={classes.input}
              value={values.login}
              onChange={handleChangeLogin("login")}
            />
            <FormControl className={classes.input} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
              <OutlinedInput
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChangePassword("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <FormControl className={classes.input} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                Павторите пароль
              </InputLabel>
              <OutlinedInput
                type={values.repeatShowPassword ? "text" : "password"}
                value={values.repeatPassword}
                onChange={handleChangeRepeatPassword("repeatPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowRepeatPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.repeatShowPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            {values.errorRepeatPassword ? (
              <Alert severity="error" className={classes.error}>
                Пароли не совпадают!
              </Alert>
            ) : null}
            {values.error ? (
              <Alert severity="warning" className={classes.error}>
                Заполните все поля!
              </Alert>
            ) : null}
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleRegistartion}
            >
              Регистрация
            </Button>
            <br />
            <Button color="primary" component={Link} to="/auth/login">
              Вернуться к авторизации
            </Button>
          </Grid>
        </CardContent>
      </Card>

    </div>
  );
}

export default Registration;
