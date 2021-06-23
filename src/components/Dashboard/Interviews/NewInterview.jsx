import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux'
import { clientsSelector } from "../../../redux/selectors/clients";
import moment from "moment";
import { Save } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { recruterSelector } from '../../../redux/selectors/auth'
import { addInterview } from '../../../redux/actions/interviews'
import PropTypes from 'prop-types';

const useStyes = makeStyles((theme) => ({
  card: {
    padding: "20px 20px 10px 20px",
    width: "500px",
  },
  input: {
    width: "100%",
  },
  dateWrap: {
    margin: "20px 0",
  },
  date: {
    width: "100%",
  },
  btnWrap: {
    margin: "30px 0 0 0",
    display: "flex",
    justifyContent: "center",
  },
  error: {
    margin: "10px 0",
  },
}));

function NewInterview({modalClose, date}) {
  const classes = useStyes();
  const dispatch = useDispatch();

  const clients = useSelector(clientsSelector);
  const recruiter = useSelector(recruterSelector);

  const [values, setValues] = useState({
    clientId: "",
    date: date,
    error: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSaveChanges = () => {
    setValues({ ...values, error: false });
    if (values.clientId === "" || values.clientId === undefined) {
      setValues({ ...values, error: true });
      return null
    }
    dispatch(addInterview(recruiter.id, values.clientId, moment(values.date).format()))
    modalClose(false)
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title={"Добавление нового собеседования"} />
        <CardContent>
          <FormControl
            variant="outlined"
            className={classes.input}
            size="small"
            required
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Соискатели
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={values.clientId}
              onChange={handleChange("clientId")}
              label="Соискатели * "
              displayEmpty={true}
            >
              {clients.map((item, index) => {
                return (
                  <MenuItem value={item.id} key={index}>
                    {item.fullName}
                  </MenuItem>
                );
              })}
            </Select>
            <div className={classes.dateWrap}>
              <Grid container>
                <Grid item md={6}>
                  <Typography variant="subtitle1" component="h5">
                    Дата и время
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="datetime-local"
                    label="Дата и время"
                    type="datetime-local"
                    value={values.date}
                    onChange={handleChange("date")}
                    className={classes.date}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={12}>
                  {values.error && (
                    <Alert severity="warning" className={classes.error}>
                      Выберите соискателя!
                    </Alert>
                  )}
                  <div className={classes.btnWrap}>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={
                        false ? <CircularProgress size={16} /> : <Save />
                      }
                      onClick={handleSaveChanges}
                      disabled={false}
                    >
                      Сохранить
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

NewInterview.propTypes = {
  modalClose: PropTypes.func.isRequired,
  date: PropTypes.string
}

NewInterview.defaultProps = {
  date: moment().format("YYYY-MM-DDTHH:mm"),
}

export default NewInterview;
