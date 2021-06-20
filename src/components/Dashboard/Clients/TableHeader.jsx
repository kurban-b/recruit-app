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

function TableHeader({ selectedClients }) {
  const classes = useStyes();

  return (
    <Grid container md={12}>
      <Grid md={6}>
        <TextField
          size="small"
          variant="outlined"
          className={classes.search}
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className={classes.searchBtn}>
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid md={6}>
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
