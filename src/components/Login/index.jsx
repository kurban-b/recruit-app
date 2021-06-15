import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox, CardContent, Card,
} from '@material-ui/core'
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../redux/actions/auth'
import { authErrorSelector } from '../../redux/selectors/auth'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  login: {
    width: "50%",
    margin: "50px auto 0 auto",
    padding: "20px 30px",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
  },
  loginInput: {
    marginBottom: "20px",
    color: "#fff",
  },
  link: {
    textAlign: "center",
    margin: "20px 0",
  },
  error: {
    marginBottom: "20px",
    marginTop: "20px"
  }
}));

function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const authError = useSelector(authErrorSelector)

  const [values, setValues] = useState({
    login: "",
    password: "",
    showPassword: false,
    checkbox: false,
  });

  const handleLogin = () => {
    dispatch(startLogin(values.login, values.password, values.checkbox));
  }

  const handleCheckbox = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.checked });
  };

  const handleChangeLogin = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value})
  }
  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div >
      <Card className={classes.login}>
        <CardContent >
          <Grid container direction="column">
            <Typography
              className={classes.title}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Авторизация
            </Typography>
            <TextField
              className={classes.loginInput}
              required
              id="outlined-required"
              label="Login"
              variant="outlined"
              value={values.login}
              onChange={handleChangeLogin("login")}
            />

            <FormControl className={classes.loginInput} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.checkbox}
                  onChange={handleCheckbox("checkbox")}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Запомнить меня?"
            />
            <Button
              className={classes.loginBtn}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleLogin}
            >
              Войти
            </Button>
            <br />
            <Button color="primary" component={Link} to="/auth/registration">
              Регистрация
            </Button>
            {authError ?
              <Alert severity="error" className={classes.error}>
                Неверный логин или пароль!
              </Alert>
              :
              null
            }

          </Grid>
        </CardContent>
      </Card>

    </div>
  );
}

export default Login;
