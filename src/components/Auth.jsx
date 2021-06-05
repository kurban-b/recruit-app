import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'


function Auth (props) {
  return (
    <div className="auth">
      <Switch>
        <Route exact path={"/auth/login"}>
          <Login />
        </Route>
        <Route exact path={"/auth/registration"}>
          <Registration />
        </Route>
        <Redirect to={"/auth/login"} />
      </Switch>
    </div>
  )
}

export default Auth