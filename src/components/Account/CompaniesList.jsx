import React, { useState } from "react";
import {
  Avatar,
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import ModalAddCompany from "./ModalAddCompany";
import RowCompany from "./RowCompany";
import { PropTypes } from "prop-types";

const useStyles = makeStyles(() => ({
  companies: {
    marginBottom: "20px",
    backgroundColor: "rgba(184,184,184,0.09)",
    padding: "10px",
  },
}));

function CompaniesList({ companies }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" component="h3">
        Компании
      </Typography>
      <div className={classes.companies}>
        <List>
          {companies.map((company, index) => {
            return <RowCompany company={company} key={index} />;
          })}
          <ListItem button onClick={handleModalOpen}>
            <ListItemAvatar>
              <Avatar>
                <Add fontSize="small" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Добавить новую компанию" />
          </ListItem>
          <Divider />
        </List>
        <Dialog open={open} onClose={handleModalClose}>
          <ModalAddCompany modalClose={setOpen} />
        </Dialog>
      </div>
    </div>
  );
}

CompaniesList.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default CompaniesList;
