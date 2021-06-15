import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyes = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
    margin: "20px 0",
  },
  buttonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

function Header() {
  const classes = useStyes();

  return (
    <div className={classes.header}>
      <Grid container>
        <Grid md={6}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Список клиентов
          </Typography>
        </Grid>
        <Grid md={6} className={classes.buttonBox}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<Add />}
          >
            Добавить
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
