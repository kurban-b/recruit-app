import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import AvatarMenu from "./AvatarMenu";

const useStyes = makeStyles((theme) => ({
  header: {
    boxShadow: "0 0 30px -10px rgba(0,0,0,.2)",
    position: "fixed",
    width: "75%",
    right: 0,
    backgroundColor: "rgba(255,255,255,0.95)",
    zIndex: "1000",
    display: "flex",
    justifyContent: "flex-end",
  },
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

function Header() {
  const classes = useStyes();
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <AppBar position="static" color="transparent" variant="outlined">
          <Toolbar className={classes.navbar}>
            <div className={classes.profile}>
              <AvatarMenu />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
