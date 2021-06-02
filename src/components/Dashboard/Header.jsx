import React from 'react'
import { AppBar, Avatar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyes = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));


function Header (props) {
  const classes = useStyes();
  return (
    <div>
      <AppBar position="static" color="transparent" variant="elevation">
        <Toolbar className={classes.navbar}>
          <Typography>
            Kurban
          </Typography>
          <div className="profile">
            <Avatar
              alt="Kurban"
              src="/static/images/avatar/1.jpg"
              className={classes.avatar}
            />
          </div>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Header