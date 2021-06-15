import React from 'react'
import { AppBar, Avatar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import AvatarMenu from './AvatarMenu'

const useStyes = makeStyles((theme) => ({
  header: {
    boxShadow: "0 0 30px -10px rgba(0,0,0,.2)",
    position: "fixed",
    width: "75%",
    right: 0
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

}));


function Header () {
  const classes = useStyes();
  return (
    <div className={classes.header}>
      <AppBar position="static" color="transparent" variant="outlined">
        <Toolbar className={classes.navbar}>
          <Typography>
            Kurban
          </Typography>
          <div className={classes.profile}>
            <AvatarMenu />
          </div>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header