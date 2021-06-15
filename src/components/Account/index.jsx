import React from 'react'
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import AvatarOfAccount from './AvatarOfAccount'
import InfoAccount from './InfoAccount'
import NavAccount from './NavAccount'
import { Route, Switch } from 'react-router-dom'
import Passwords from './Passwords'

const useStyes = makeStyles((theme) => ({
  avatarCard: {
    width: "90%"
  },
  info: {
    padding: "20px"
  }
}));

function Account ({person}) {
  const classes = useStyes();

  return (
    <Grid container>
      <Grid md={12}>
        <Typography variant="h5" component="h2">
          Аккаунт
        </Typography>
        <NavAccount />
      </Grid>
      <Grid item md={4}>
        <Card className={classes.avatarCard}>
          <CardContent>
            <AvatarOfAccount person={person}/>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={8}>
        <Card className={classes.info}>
          <CardContent>
            <Switch>
              <Route exact path={"/dashboard/account"}>
                <InfoAccount person={person}/>
              </Route>
              <Route exact path={"/dashboard/account/changePassword"}>
                <Passwords person={person}/>
              </Route>
            </Switch>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Account;