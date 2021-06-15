import React from 'react'
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Popover,
  Typography
} from '@material-ui/core'
import { Archive, Delete, MoreVert, Settings, Star } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200
  },
  icon: {

  },
  text: {
    fontSize: "14px"
  }
}));

function MenuRow () {
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
        <MoreVert />
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
        <List component="nav" className={classes.root}>
          <ListItem button className={classes.icon} >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText secondary="Редактировать" className={classes.text}/>
          </ListItem>
          <ListItem button className={classes.icon}>
            <ListItemIcon>
              <Archive />
            </ListItemIcon>
            <ListItemText secondary="В архив" className={classes.text}/>
          </ListItem>
          <ListItem button className={classes.icon}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText secondary="Удалить" className={classes.text}/>
          </ListItem>

        </List>
      </Popover>
    </div>
  )
}

export default MenuRow