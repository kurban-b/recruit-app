import React, { useState } from "react";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const useStyes = makeStyles((theme) => ({
  account: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  avatar: {
    width: "120px",
    height: "120px",
  },
  avatarWrapper: {
    margin: "20px auto",
    display: "inline-block",
    border: "#ccc 1px dashed",
    padding: "10px",
    borderRadius: "50%",
    position: "relative",
  },
  avatarButton: {
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
    position: "absolute",
    top: "10px",
    transition: "300ms",
    backgroundColor: "rgba(0,0,0,0.45)",
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: "120px",
    height: "120px",
  },
  subtitle: {
    fontSize: "12px",
    textAlign: "center",
    padding: "10px 50px",
    color: "#6a6a6a",
    marginBottom: "100px",
  },
  input: {
    display: "none",
  },
}));

function AvatarOfAccount() {
  const classes = useStyes();

  return (
    <div className={classes.account}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />

      <div className={classes.avatarWrapper}>
        <Avatar className={classes.avatar} />
        <div className={classes.avatarButton}>
          <label htmlFor="icon-button-file">
            <IconButton
              color="default"
              aria-label="upload picture"
              component="span"
              className={classes.button}
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </div>
      <div>
        <Typography variant="h6" className={classes.subtitle}>
          Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
        </Typography>
      </div>
    </div>
  );
}

export default AvatarOfAccount;
