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
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginBottom: "25px",
  },
  loginBlock: {
    backgroundColor: "#fff",
    margin: 'auto',
    padding: '20px 30px'
  },
  loginInput: {
    marginBottom: "20px",
    color: '#fff'
  },
  link: {
    textAlign: 'center',
    margin: '20px 0'
  }
}));

function Login() {
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
        <Grid container md="6" direction="column" className={classes.loginBlock}>
          <Typography className={classes.title} component='h3' variant="h5" gutterBottom>
            Авторизация
          </Typography>
          <TextField
            className={classes.loginInput}
            required
            id="outlined-required"
            label="Login"
            variant="outlined"
          />

          <FormControl className={classes.loginInput} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
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
          <Button color="primary" component={Link} to="/auth/registration">
            Регистрация
          </Button>
        </Grid>
    </div>
  );
}

export default Login;
