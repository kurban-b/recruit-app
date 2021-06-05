import { Switch, Route, Redirect } from "react-router-dom";
import Registration from "./Registration";
import React from "react";
import Dashboard from './Dashboard'
import Auth from './Auth'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/auth/:auth_?"}>
          <Auth />
        </Route>
        <Route exact path={"/dashboard/:path_?"}>
          <Dashboard />
        </Route>
        <Redirect to={"/auth"} />
      </Switch>
    </div>
  );
}

export default App;
