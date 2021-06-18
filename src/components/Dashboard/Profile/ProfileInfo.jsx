import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { companiesSelector } from "../../../redux/selectors";

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "95%",
  },
}));

function ProfileInfo({ client }) {
  const classes = useStyes();

  const companies = useSelector(companiesSelector);

  const [companyId, setCompanyId] = useState(companies);

  const handleChange = (event) => {
    setCompanyId(event.target.value);
  };

  return (
    <Grid container>
      <Grid item md={12} justify="flex-end">
        <TextField
          id="outlined-basic"
          label="Фамилия, Имя"
          variant="outlined"
          className={classes.input}
          defaultValue={client.fullName}
        />
        <TextField
          id="outlined-basic"
          label="Эл. почта"
          variant="outlined"
          className={classes.input}
          defaultValue={client.email}
        />
        <TextField
          id="outlined-basic"
          label="Номер тел."
          variant="outlined"
          className={classes.input}
          defaultValue={client.phone}
        />
        <TextField
          id="outlined-basic"
          label="Адрес"
          variant="outlined"
          className={classes.input}
          defaultValue={client.address}
        />

        <FormControl variant="outlined" className={classes.input}>
          <InputLabel id="demo-simple-select-outlined-label">
            Компания
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={companyId}
            onChange={handleChange}
            label="Age"
            displayEmpty={true}
          >
            {companies.map((item) => {
              if (item.id === client.companyId) {
                return <MenuItem value={item.id}>{item.name} - текущая</MenuItem>
              }
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={12}>
        <Button variant="contained" color="secondary" startIcon={<Save />}>
          Сохранить
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProfileInfo;
