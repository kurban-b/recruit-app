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
import {
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";

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
    backgroundColor: "#FFF",
    padding: '20px 30px',
    margin: 'auto'
  },
  input: {
    marginBottom: "20px",
  },
  link: {
    textAlign: "center",
    margin: "20px 0",
  },
}));

function Registration() {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    repeatPassword: "",
    repeatShowPassword: false,
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

  const handleChangeRepeatPassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowRepeatPassword = () => {
    setValues({ ...values, repeatShowPassword: !values.repeatShowPassword });
  };

  return (
    <div className={classes.registration}>
        <Grid container direction="column" md="6" justify="center" className={classes.registrationBlock}>
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
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            className={classes.input}
          />

          <TextField
            required
            id="outlined-basic"
            label="Почта"
            variant="outlined"
            className={classes.input}
            type="email"
          />

          <TextField
            required
            id="outlined-basic"
            label="Логин"
            variant="outlined"
            className={classes.input}
          />

          <FormControl className={classes.input} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
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

          <FormControl className={classes.input} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">
              Павторите пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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

          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            size="large"
          >
            Регистрация
          </Button>
          <br />
          <Button color="primary" component={Link} to="/auth/login">
            Вернуться к авторизации
          </Button>
        </Grid>
    </div>
  );
}

export default Registration;
