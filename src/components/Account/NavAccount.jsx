import React from 'react'
import { Breadcrumbs, makeStyles } from '@material-ui/core'
import { AccountBox, VpnKey } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyes = makeStyles((theme) => ({
  nav: {
    margin: "20px 0"
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function NavAccount () {
  const classes = useStyes();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.nav}>
      <Link to="/dashboard/account" className={classes.link}>
        <AccountBox className={classes.icon} />
        Редактировать профиль
      </Link>
      <Link
        className={classes.link}
        to="/dashboard/account/changePassword"
      >
        <VpnKey className={classes.icon} />
        Изменить пароль
      </Link>
    </Breadcrumbs>
  )
}

export default NavAccount