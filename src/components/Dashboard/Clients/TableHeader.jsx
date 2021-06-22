import React from "react";
import { Grid, IconButton, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core'
import { Delete, Search } from '@material-ui/icons'

const useStyes = makeStyles((theme) => ({
  search: {
    margin: "10px 20px",
  },
  searchBtn: {
    color: "#ccc",
  },
  selectedWrap: {
    padding: "5px 20px 5px 300px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

function TableHeader({ selectedClients, filter, setFilter}) {
  const classes = useStyes();

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <Grid container>
      <Grid item md={6}>
        <TextField
          size="small"
          variant="outlined"
          className={classes.search}
          placeholder="Поиск по имени"
          value={filter}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className={classes.searchBtn}>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6}>
        <div className={classes.selectedWrap}>
          {selectedClients.length > 0 && (
            <>
              <Typography variant={'subtitle2'} component="h4">
                Выбрано {selectedClients.length}
              </Typography>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </>

          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default TableHeader;
