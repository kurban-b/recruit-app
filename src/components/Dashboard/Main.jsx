import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Clients from './Clients/index'

function Main () {
  return (
    <div>
      <Switch>
        <Route exact path={"/dashboard/users"}>
          <Clients />
        </Route>
        <Route exact path={"/dashboard/nodes"}>
          nodes
        </Route>
        <Route exact path={"/dashboard/interviews"}>
          interviews
        </Route>
      </Switch>
    </div>
  )
}

export default Main