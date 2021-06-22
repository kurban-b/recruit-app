import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import { SaveAlt, Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  authErrorSelector, loadinChangesSelector,
  recruterSelector,
  tokenSelector,
} from '../../redux/selectors/auth'
import { changePassword } from "../../redux/actions/auth";
import { Alert } from "@material-ui/lab";

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "100%",
  },
  error: {
    marginBottom: "10px",
  },
}));

function Passwords() {
  const classes = useStyes();
  const dispatch = useDispatch();

  const recruiter = useSelector(recruterSelector);
  const token = useSelector(tokenSelector);
  const errorChangePassword = useSelector(authErrorSelector);
  const loading = useSelector(loadinChangesSelector)

  const [values, setValues] = useState({
    password: "",
    newPassword: "",
    repeatNewPassword: "",
    showPassword: false,
    showNewPassword: false,
    showRepeatNewPassword: false,
    error: false,
    errorPasswords: false,
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

  const handleSaveChanges = () => {
    setValues({ ...values, error: false, errorPasswords: false });
    if (
      values.password === "" ||
      values.newPassword === "" ||
      values.repeatNewPassword === ""
    ) {
      setValues({ ...values, error: true });
      return null;
    }
    if (values.newPassword !== values.repeatNewPassword) {
      setValues({ ...values, errorPasswords: true });
      return null;
    }
    dispatch(
      changePassword(recruiter.id, values.password, values.newPassword, token)
    );
  };

  return (
    <div>
      <FormControl className={classes.input} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password1">Пароль</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password1"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChangePassword("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword("showPassword")}
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

      <FormControl className={classes.input} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password2">
          Новый пароль
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password2"
          type={values.showNewPassword ? "text" : "password"}
          value={values.newPassword}
          onChange={handleChangePassword("newPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword("showNewPassword")}
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

      <FormControl className={classes.input} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password3">
          Повторите новый пароль
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password3"
          type={values.showRepeatNewPassword ? "text" : "password"}
          value={values.repeatNewPassword}
          onChange={handleChangePassword("repeatNewPassword")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword("showRepeatNewPassword")}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showRepeatNewPassword ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={205}
        />
      </FormControl>

      {values.error && (
        <Alert severity="warning" className={classes.error}>
          Заполните все поля
        </Alert>
      )}

      {values.errorPasswords && (
        <Alert severity="warning" className={classes.error}>
          Пароли не совпадают
        </Alert>
      )}

      {errorChangePassword && (
        <Alert severity="error" className={classes.error}>
          Неправильный пароль!
        </Alert>
      )}

      <Button
        variant="contained"
        color="secondary"
        startIcon={<SaveAlt />}
        onClick={handleSaveChanges}
        disabled={loading}
      >
        Изменить
      </Button>
    </div>
  );
}

export default Passwords;
