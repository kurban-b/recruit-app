import React from 'react'
import Login from './Login/index'
import { Box, Grid, Typography } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'

function Authorization () {
  return (
    <Grid container direction='row' xs='12'>
      <Grid item md='6' >
        <Box
          style={
            {
              background: 'url(https://i11.fotocdn.net/s122/771625a915dad996/user_l/2781048749.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight: '100vh'
            }
          }>
        {/* Данные стили написал временно, потом перенесу все это в отдельный компонент */}
        </Box>
      </Grid>
      <Grid item  md='6'>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/registration'>
            тут будет регистрация
          </Route>
        </Switch>

      </Grid>
    </Grid>
  )
}

export default Authorization