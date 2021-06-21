import React, { useState } from "react";
import {
  Breadcrumbs,
  Button,
  Dialog,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import NewClients from "./NewClients";
import { NavLink } from "react-router-dom";

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
  nav: {
    marginBottom: "20px",
  },
  active: {
    color: "#000",
  },
}));

function Header() {
  const classes = useStyes();

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.header}>
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Список соискателей
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.buttonBox}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<Add />}
            onClick={handleModalOpen}
          >
            Добавить
          </Button>
        </Grid>
        <Grid item md={12}>
          <Breadcrumbs separator="&bull;" className={classes.nav}>
            <NavLink
              exact
              to={"/dashboard/users"}
              activeClassName={classes.active}
            >
              Все соискатели
            </NavLink>
            <NavLink
              exact
              to={"/dashboard/users/archive"}
              activeClassName={classes.active}
            >
              Архив
            </NavLink>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleModalClose}>
        <NewClients modalClose={setOpen} />
      </Dialog>
    </div>
  );
}

export default Header;
