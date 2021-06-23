import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../redux/selectors/companies";
import CompaniesList from "./CompaniesList";
import { Alert } from "@material-ui/lab";
import { saveChangesAccaunt } from "../../redux/actions/auth";
import { loadinChangesSelector } from "../../redux/selectors/auth";
import { PropTypes } from "prop-types";

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "95%",
  },
  companies: {
    marginBottom: "20px",
    backgroundColor: "rgba(184,184,184,0.09)",
    padding: "10px",
  },
  error: {
    marginBottom: "20px",
  },
}));

function InfoAccount({ person }) {
  const classes = useStyes();
  const dispatch = useDispatch();

  const companies = useSelector(companiesSelector);
  const loadinChanges = useSelector(loadinChangesSelector);

  const [value, setValue] = useState({
    login: person.login,
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.email,
    phone: person.phone,
    address: person.address,
    error: false,
    modalMessage: false,
  });

  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleSaveChanges = () => {
    setValue({ ...value, error: false });
    if (
      value.login === "" ||
      value.firstName === "" ||
      value.lastName === "" ||
      value.email === ""
    ) {
      setValue({ ...value, error: true });
      return null;
    }
    dispatch(
      saveChangesAccaunt(
        person.id,
        value.login,
        value.firstName,
        value.lastName,
        value.email,
        value.phone,
        value.address
      )
    );
    setValue({ ...value, modalMessage: true });
  };

  return (
    <Grid container>
      <Grid item md={6}>
        <TextField
          label="Логин"
          variant="outlined"
          className={classes.input}
          value={value.login}
          onChange={handleChange("login")}
          required
        />
        <TextField
          label="Имя"
          variant="outlined"
          className={classes.input}
          value={value.firstName}
          onChange={handleChange("firstName")}
          required
        />
        <TextField
          id="outlined-basic"
          label="Фамилия"
          variant="outlined"
          className={classes.input}
          value={value.lastName}
          onChange={handleChange("lastName")}
          required
        />
      </Grid>
      <Grid item md={6}>
        <TextField
          label="Эл. почта"
          variant="outlined"
          className={classes.input}
          value={value.email}
          onChange={handleChange("email")}
          required
        />
        <TextField
          label="Номер тел."
          variant="outlined"
          className={classes.input}
          value={value.phone}
          onChange={handleChange("phone")}
        />
        <TextField
          label="Адрес"
          variant="outlined"
          className={classes.input}
          value={value.address}
          onChange={handleChange("address")}
        />
      </Grid>
      <Grid item md={12}>
        <CompaniesList companies={companies} />
        {value.error && (
          <Alert severity="warning" className={classes.error}>
            Заполните обязательные поля *
          </Alert>
        )}
        <Button
          variant="contained"
          color="secondary"
          startIcon={loadinChanges ? <CircularProgress size={16} /> : <Save />}
          onClick={handleSaveChanges}
          disabled={loadinChanges}
        >
          Сохранить
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={value.modalMessage}
          autoHideDuration={2000}
          onClose={() => setValue({ ...value, modalMessage: false })}
        >
          <Alert variant="filled" severity="success">
            Данные изменены!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
}

InfoAccount.propTypes = {
  person: PropTypes.object.isRequired,
};

export default InfoAccount;
