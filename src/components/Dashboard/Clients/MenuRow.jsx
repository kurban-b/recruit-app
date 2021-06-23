import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Popover,
} from "@material-ui/core";
import {
  Archive,
  Delete,
  MoreVert,
  Settings,
  Unarchive,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clientsSelector } from "../../../redux/selectors/clients";
import { deleteClient, toggleArchive } from "../../../redux/actions/clients";
import { PropTypes } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
  icon: {},
  text: {
    fontSize: "14px",
  },
}));

function MenuRow({ clientId, archive }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const clients = useSelector(clientsSelector);

  const client = clients.find((item) => item.id === clientId);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(deleteClient(clientId));
  };

  const handleArchive = () => {
    dispatch(toggleArchive(clientId, archive));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" className={classes.root}>
          <Link to={`/dashboard/profile/${client !== undefined && client.id}`}>
            <ListItem button className={classes.icon}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                secondary="Редактировать"
                className={classes.text}
              />
            </ListItem>
          </Link>
          {archive ? (
            <ListItem button className={classes.icon} onClick={handleArchive}>
              <ListItemIcon>
                <Unarchive />
              </ListItemIcon>
              <ListItemText
                secondary="Изъять из архива"
                className={classes.text}
              />
            </ListItem>
          ) : (
            <ListItem button className={classes.icon} onClick={handleArchive}>
              <ListItemIcon>
                <Archive />
              </ListItemIcon>
              <ListItemText secondary="В архив" className={classes.text} />
            </ListItem>
          )}
          <ListItem button className={classes.icon} onClick={handleDelete}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText secondary="Удалить" className={classes.text} />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

MenuRow.propTypes = {
  archive: PropTypes.bool.isRequired,
  clientId: PropTypes.number.isRequired,
};

export default MenuRow;
