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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AccountCircle, Message, Visibility, VisibilityOff } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginBottom: "25px",
  },
  login: {
    margin: "auto",
    padding: "40px 80px",
    minHeight: "100vh",
  },
  loginInput: {
    marginBottom: "20px",
  },
  link: {
    textAlign: 'center',
    margin: '20px 0'
  }
}));

function Registration() {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.login}>
      <Grid container direction="column" xs="12" justify="center">
        <Typography className={classes.title} component='h3' variant="h5" gutterBottom>
          Регистрация
        </Typography>

        <TextField required id="outlined-basic" label="Имя" variant="outlined" className={classes.loginInput} />

        <TextField required id="outlined-basic" label="Почта" variant="outlined" className={classes.loginInput} type='email'/>

        <TextField required id="outlined-basic" label="Логин" variant="outlined" className={classes.loginInput} />

        <FormControl className={classes.loginInput} variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password">
            Пароль
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
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
        <FormControl className={classes.loginInput} variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password">
            Павторите пароль
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
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

        <Button
          className={classes.loginBtn}
          variant="contained"
          color="primary"
          size="large"
        >
          Войти
        </Button>
        <br/>
        <Button color="primary" component={Link} to="/">
          Вернуться к авторизации
        </Button>
      </Grid>
    </div>
  );
}

export default Registration;