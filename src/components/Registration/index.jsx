import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { registrationStart } from "../../redux/actions/auth";
import { Alert } from "@material-ui/lab";
import {
  authErrorSelector,
  loadingRegistrationSelector,
} from "../../redux/selectors/auth";

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

  const loading = useSelector(loadingRegistrationSelector);
  const errorReg = useSelector(authErrorSelector);

  console.log(errorReg);

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
    checkbox: false,
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

  const handleCheckbox = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.checked });
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
          values.password,
          values.checkbox
        )
      );
    }
  };
  return (
    <div className={classes.registration}>
      <Card className={classes.registrationBlock}>
        <CardContent>
          <Grid container direction="column" justify="center">
            <Typography
              className={classes.title}
              component="h3"
              variant="h5"
              gutterBottom
            >
              ??????????????????????
            </Typography>
            <TextField
              required
              label="??????"
              variant="outlined"
              className={classes.input}
              value={values.firstName}
              onChange={handleChangeFirstName("firstName")}
            />
            <TextField
              required
              label="??????????????"
              variant="outlined"
              className={classes.input}
              value={values.lastName}
              onChange={handleChangeLastName("lastName")}
            />
            <TextField
              required
              label="??????????"
              variant="outlined"
              className={`${classes.input} inputEmail`}
              type="email"
              value={values.email}
              onChange={handleChangeEmail("email")}
            />
            <TextField
              required
              label="??????????"
              variant="outlined"
              className={classes.input}
              value={values.login}
              onChange={handleChangeLogin("login")}
            />
            <FormControl className={classes.input} variant="outlined" required>
              <InputLabel htmlFor="outlined-adornment-password">
                ????????????
              </InputLabel>
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
                ?????????????????? ????????????
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
                labelWidth={150}
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
              label="?????????????????? ?????????"
            />
            <br />
            {values.errorRepeatPassword ? (
              <Alert severity="error" className={classes.error}>
                ???????????? ???? ??????????????????!
              </Alert>
            ) : null}
            {values.error ? (
              <Alert severity="warning" className={classes.error}>
                ?????????????????? ?????? ????????!
              </Alert>
            ) : null}
            {errorReg ? (
              <Alert severity="warning" className={classes.error}>
                ?????????? ?????????? ?????? ????????????????????!
              </Alert>
            ) : null}
            <Button
              className={classes.btn}
              variant="contained"
              color="primary"
              size="large"
              onClick={handleRegistartion}
              disabled={loading}
            >
              {loading ? <CircularProgress size={30} /> : "??????????????????????"}
            </Button>
            <br />
            <Button color="primary" component={Link} to="/auth/login">
              ?????????????????? ?? ??????????????????????
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Registration;
