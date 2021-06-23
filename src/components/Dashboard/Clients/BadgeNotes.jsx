import React, { useState } from "react";
import { Badge, Dialog, IconButton } from "@material-ui/core";
import { Notes } from "@material-ui/icons";
import ModalAddNote from "../Notes/ModalAddNote";
import { PropTypes } from "prop-types";

function BadgeNotes({ notes, clientId }) {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginBottom: "-5px",
      }}
    >
      <Badge badgeContent={notes.length} color="primary">
        <IconButton size="small" onClick={handleModalOpen}>
          <Notes />
        </IconButton>
      </Badge>
      <Dialog open={open} onClose={handleModalClose}>
        <ModalAddNote id={clientId} modalClose={setOpen} />
      </Dialog>
    </div>
  );
}

BadgeNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  clientId: PropTypes.number.isRequired,
};

export default BadgeNotes;
