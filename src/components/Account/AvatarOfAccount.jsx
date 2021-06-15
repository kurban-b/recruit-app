import React from 'react'
import { Avatar, makeStyles, Typography } from '@material-ui/core'

const useStyes = makeStyles((theme) => ({
  account: {
    display: 'flex',
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
    borderRadius: "50%"
  },
  subtitle: {
    fontSize: "12px",
    textAlign: "center",
    padding: "10px 50px",
    color: "#6a6a6a",
    marginBottom: "100px"
  }
}));

function AvatarOfAccount () {
  const classes = useStyes();

  return (
    <div className={classes.account}>
      <div className={classes.avatarWrapper}>
        <Avatar className={classes.avatar}/>
      </div>
      <div>
        <Typography variant="h6" className={classes.subtitle}>
          Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
        </Typography>
      </div>
    </div>
  )
}

export default AvatarOfAccount