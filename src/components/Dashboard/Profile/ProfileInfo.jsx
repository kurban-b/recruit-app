import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { ArrowBack, Save } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../../redux/selectors/companies";
import { Link } from "react-router-dom";
import { recruterSelector } from "../../../redux/selectors/auth";
import { saveChangesClient } from "../../../redux/actions/clients";
import { Alert } from "@material-ui/lab";
import { clientsLoadingUpdateSelector } from "../../../redux/selectors/clients";
import { PropTypes } from 'prop-types'

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "100%",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  error: {
    marginBottom: '10px',
    width: '100%'
  }
}));

function ProfileInfo({ client }) {
  const classes = useStyes();
  const dispatch = useDispatch();

  const companies = useSelector(companiesSelector);
  const recruiter = useSelector(recruterSelector);
  const loadinChanges = useSelector(clientsLoadingUpdateSelector);

  const [value, setValue] = useState({
    fullName: client.fullName,
    email: client.email,
    phone: client.phone,
    address: client.address,
    companyId: client.companyId,
    specialty: client.specialty,
    error: false,
    modalMessage: false,
  });

  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleSaveChanges = () => {
    setValue({ ...value, error: false });
    if (
      value.fullName === "" ||
      value.email === "" ||
      value.companyId === "" ||
      value.companyId === undefined
    ) {
      setValue({ ...value, error: true });
      return null;
    }
    dispatch(
      saveChangesClient(
        client.id,
        value.fullName,
        value.email,
        value.phone,
        value.address,
        value.specialty,
        value.companyId,
        recruiter.id
      )
    );
    setValue({ ...value, modalMessage: true });
  };

  return (
    <Grid container>
      <Grid item md={12}>
        <TextField
          size="small"
          label="Фамилия, Имя"
          variant="outlined"
          className={classes.input}
          value={value.fullName}
          onChange={handleChange("fullName")}
          required
        />
        <TextField
          size="small"
          label="Эл. почта"
          variant="outlined"
          className={classes.input}
          value={value.email}
          onChange={handleChange("email")}
          required
        />
        <TextField
          size="small"
          label="Номер тел."
          variant="outlined"
          className={classes.input}
          value={client.phone}
          onChange={handleChange("phone")}
        />
        <TextField
          size="small"
          label="Адрес"
          variant="outlined"
          className={classes.input}
          value={client.address}
          onChange={handleChange("address")}
        />
        <TextField
          size="small"
          label="Специальность"
          variant="outlined"
          className={classes.input}
          value={value.specialty}
          onChange={handleChange("specialty")}
        />

        <FormControl variant="outlined" className={classes.input} size="small" required>
          <InputLabel id="demo-simple-select-outlined-label">
            Компания
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={value.companyId}
            onChange={handleChange("companyId")}
            label="Компания * "
            displayEmpty={true}
          >
            {companies.map((item, index) => {
              return <MenuItem value={item.id} key={index}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      {value.error && (
        <Alert severity="warning" className={classes.error}>
          Заполните обязательные поля *
        </Alert>
      )}
      <Grid item md={12}>
        <div className={classes.buttons}>
          <Link to={"/dashboard/users"}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<ArrowBack />}
            >
              Назад
            </Button>
          </Link>

          <Button
            variant="contained"
            color="secondary"
            startIcon={
              loadinChanges ? <CircularProgress size={16} /> : <Save />
            }
            onClick={handleSaveChanges}
            disabled={loadinChanges}
          >
            Сохранить
          </Button>
        </div>
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

ProfileInfo.propTypes = {
  client: PropTypes.object.isRequired
}

export default ProfileInfo;
