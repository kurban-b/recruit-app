import React from 'react'
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Popover,
  Typography
} from '@material-ui/core'
import { AccountCircle, ExitToApp, MoreVert, Star } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200
  },
  icon: {
    width: "20px"
  },
  text: {
    fontSize: "14px"
  }
}));

function AvatarMenu () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List component="nav" className={classes.root} >
            <Link to={"/dashboard/account"}>
              <ListItem button >
              <ListItemIcon className={classes.icon}>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText secondary="Профиль" className={classes.text}/>
              </ListItem>
            </Link>
          <ListItem button >
            <ListItemIcon className={classes.icon}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText secondary="Выход" className={classes.text}/>
          </ListItem>

        </List>
      </Popover>
    </div>
  )
}

export default AvatarMenu