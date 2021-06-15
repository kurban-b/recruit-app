import React from 'react'
import { Breadcrumbs, Link, makeStyles } from '@material-ui/core'
import { AccountBox, VpnKey } from '@material-ui/icons'

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
      <Link color="inherit" href="/dashboard/account" className={classes.link}>
        <AccountBox className={classes.icon} />
        Рдактировать профиль
      </Link>
      <Link
        color="inherit"
        className={classes.link}
        href="/dashboard/account/changePassword"
      >
        <VpnKey className={classes.icon} />
        Изменить пароль
      </Link>
    </Breadcrumbs>
  )
}

export default NavAccount