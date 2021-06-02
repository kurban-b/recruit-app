import { Switch, Route, Redirect } from "react-router-dom";
import Registration from "./Registration";
import React from "react";
import Login from "./Login";
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route exact path={"/registration"}>
          <Registration />
        </Route>
        <Route exact path={"/dashboard/:path_?"}>
          <Dashboard />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
