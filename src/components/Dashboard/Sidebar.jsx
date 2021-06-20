import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import TodayIcon from "@material-ui/icons/Today";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { recruterSelector } from '../../redux/selectors/auth'

const useStyes = makeStyles((theme) => ({
  sidebar: {
    borderRight: "1.2px solid rgba(200,200,200,.4)",
    minHeight: "100vh",
    padding: "20px 0",
    position: 'fixed',
    width: '25%'
  },
  profile: {
    backgroundColor: "rgba(186,186,186,0.21)",
    padding: "15px 20px",
    margin: "0 30px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(2),
  },
  active: {
    color: "red",
    borderRight: "4px solid red",
    display: "flex",
    backgroundColor: "rgba(255,0,0,0.05)",
    "& svg": {
      color: "red",
    },
  },
  icon: {
    marginLeft: "15px",
  },
}));

function Sidebar() {
  const recruiter = useSelector(recruterSelector);



  const classes = useStyes();

  return (
    <div className={classes.sidebar}>
      <Link to={"/dashboard/account"}>
        <div className={classes.profile}>
          <Avatar
            alt={recruiter.firstName}
            src={recruiter.avatar}
            className={classes.avatar}
          />
          <div>
            <Typography variant="subtitle2">{`${recruiter.firstName} ${recruiter.lastName}`}</Typography>
          </div>
        </div>
      </Link>

      <div className={classes.list}>
        <List component="nav" aria-label="main mailbox folders">
          <NavLink to="/dashboard/users" activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Соискатели" />
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/nodes" activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Заметки" />
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/interviews" activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <SpeakerNotesIcon />
              </ListItemIcon>
              <ListItemText primary="Собеседования" />
            </ListItem>
          </NavLink>
          <NavLink to="/dashboard/calendar" activeClassName={classes.active}>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Календарь" />
            </ListItem>
          </NavLink>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
