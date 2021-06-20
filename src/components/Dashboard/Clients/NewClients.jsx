import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { PhotoCamera, Save } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../../redux/selectors/companies";
import { Alert } from "@material-ui/lab";
import { recruterSelector } from "../../../redux/selectors/auth";
import { addNewClient } from "../../../redux/actions/clients";

const useStyles = makeStyles(() => ({
  wrapp: {
    padding: "20px",
  },
  title: {
    marginBottom: "10px",
    textAlign: "center",
  },
  info: {
    minHeight: "100%",
    marginLeft: "10px",
  },
  input: {
    width: "100%",
    marginBottom: "13px",
  },
  account: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  avatar: {
    width: "120px",
    height: "120px",
  },
  avatarWrapper: {
    margin: "20px auto",
    display: "inline-block",
    border: "#ccc 1px dashed",
    padding: "10px",
    borderRadius: "50%",
    minHeight: "100%",
    position: "relative",
  },
  subtitle: {
    fontSize: "12px",
    textAlign: "center",
    padding: "10px 20px",
    color: "#6a6a6a",
    marginBottom: "100px",
  },
  btnWrap: {
    display: "flex",
    justifyContent: "flex-end",
  },
  avatarButton: {
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    position: "absolute",
    top: "10px",
    transition: "300ms",
    backgroundColor: "rgba(0,0,0,0.45)",
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
  },
  inputBtn: {
    display: "none",
  },
  error: {
    marginBottom: "10px",
  },
}));

function NewClients({ modalClose }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const companies = useSelector(companiesSelector);

  const recruiter = useSelector(recruterSelector);

  const [value, setValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    specialty: "",
    companyId: "",
    error: false,
  });

  const handleChangeFullName = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleChangeEmail = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleChangePhone = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleChangeAddress = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleChangeSpecialty = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleChangeCompanyId = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };

  const handleAddClient = () => {
    setValue({ ...value, error: false });
    if (
      value.fullName === "" ||
      value.email === "" ||
      value.phone === "" ||
      value.address === "" ||
      value.specialty === "" ||
      value.companyId === "" ||
      value.companyId === undefined
    ) {
      setValue({ ...value, error: true });
      return null;
    }
    dispatch(
      addNewClient(
        recruiter.id,
        value.fullName,
        value.email,
        value.phone,
        value.address,
        value.specialty,
        value.companyId
      )
    );
    modalClose(false);
  };

  return (
    <div>
      <Grid container className={classes.wrapp}>
        <Grid md={12}>
          <Typography variant="h6" component="h2" className={classes.title}>
            Добавление нового соискателя
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.avatarCard}>
            <CardContent>
              <div className={classes.account}>
                <input
                  accept="image/*"
                  className={classes.inputBtn}
                  id="icon-button-file"
                  type="file"
                />

                <div className={classes.avatarWrapper}>
                  <Avatar className={classes.avatar} />
                  <div className={classes.avatarButton}>
                    <label htmlFor="icon-button-file">
                      <IconButton
                        color="default"
                        aria-label="upload picture"
                        component="span"
                        className={classes.button}
                      >
                        <PhotoCamera />
                      </IconButton>
                    </label>
                  </div>
                </div>
                <div>
                  <Typography variant="h6" className={classes.subtitle}>
                    Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card className={classes.info}>
            <CardContent>
              <Grid item md={12} justify="flex-end">
                <TextField
                  label="Фамилия, Имя"
                  variant="outlined"
                  className={classes.input}
                  size="small"
                  value={value.fullName}
                  onChange={handleChangeFullName("fullName")}
                />
                <TextField
                  label="Эл. почта"
                  variant="outlined"
                  className={classes.input}
                  size="small"
                  value={value.email}
                  onChange={handleChangeEmail("email")}
                />
                <TextField
                  label="Номер тел."
                  variant="outlined"
                  className={classes.input}
                  size="small"
                  value={value.phone}
                  onChange={handleChangePhone("phone")}
                />
                <TextField
                  label="Адрес"
                  variant="outlined"
                  className={classes.input}
                  size="small"
                  value={value.address}
                  onChange={handleChangeAddress("address")}
                />
                <TextField
                  label="Специальность"
                  variant="outlined"
                  className={classes.input}
                  size="small"
                  value={value.specialty}
                  onChange={handleChangeSpecialty("specialty")}
                />

                <FormControl
                  variant="outlined"
                  className={classes.input}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Компания
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={value.companyId}
                    onChange={handleChangeCompanyId("companyId")}
                    label="Компания"
                    displayEmpty={true}
                  >
                    {companies.map((item) => {
                      return <MenuItem value={item.id}>{item.name}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>
              {value.error && (
                <Alert severity="warning" className={classes.error}>
                  Заполните все поля!
                </Alert>
              )}
              <Grid item md={12} className={classes.btnWrap}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<Save />}
                  onClick={handleAddClient}
                >
                  Сохранить
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewClients;
