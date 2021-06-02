import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Sidebar from './Sidebar'
import Main from './Main'
import Header from './Header'

const useStyes = makeStyles(()=>{

})

function Dashboard () {
  const classes = useStyes();

  return (
    <div className={classes.dashboard}>
      <Grid container>
        <Grid item md="3">
          <Sidebar />
        </Grid>
        <Grid item md="9">
          <Header />
          <Main />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard