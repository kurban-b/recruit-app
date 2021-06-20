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
import { ArrowBack, Save } from '@material-ui/icons'
import { useSelector } from "react-redux";
import { companiesSelector } from '../../../redux/selectors/companies'
import { Link } from 'react-router-dom'

const useStyes = makeStyles((theme) => ({
  input: {
    marginBottom: "20px",
    width: "100%",
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
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
          size='small'
          label="Фамилия, Имя"
          variant="outlined"
          className={classes.input}
          defaultValue={client.fullName}
        />
        <TextField
          size='small'
          label="Эл. почта"
          variant="outlined"
          className={classes.input}
          defaultValue={client.email}
        />
        <TextField
          size='small'
          label="Номер тел."
          variant="outlined"
          className={classes.input}
          defaultValue={client.phone}
        />
        <TextField
          size='small'
          label="Адрес"
          variant="outlined"
          className={classes.input}
          defaultValue={client.address}
        />
        <TextField
          size='small'
          label="Специальность"
          variant="outlined"
          className={classes.input}
          defaultValue={client.specialty}
        />

        <FormControl variant="outlined" className={classes.input} size='small'>
          <InputLabel id="demo-simple-select-outlined-label">
            Компания
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={companyId}
            onChange={handleChange}
            label="Компания"
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
        <div className={classes.buttons}>
          <Link exact to={'/dashboard/users'}>
            <Button variant="outlined" color="secondary" startIcon={<ArrowBack />}>
              Назад
            </Button>
          </Link>

          <Button variant="contained" color="secondary" startIcon={<Save />}>
            Сохранить
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProfileInfo;
