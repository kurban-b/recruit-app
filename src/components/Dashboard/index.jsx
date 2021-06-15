import React from 'react'
import { Grid } from '@material-ui/core'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header/Header'


function Dashboard () {


  return (
    <div style={{position: "relative"}}>
      <Grid container>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          <Header />
          <Main />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard