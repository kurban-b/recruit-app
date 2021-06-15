import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Auth from "./Auth";
import { useSelector } from "react-redux";
import { selectRecruter } from "../redux/selectors";

function App() {

  const recruiter = useSelector(selectRecruter);



  return (
    <div className="app">
      {recruiter.login !== undefined ? (
        <Switch>
          <Route exact path={"/dashboard/:path_?/:path2_?"}>
            <Dashboard />
          </Route>
          <Redirect to={"/dashboard"} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={"/auth/:auth_?"}>
            <Auth />
          </Route>
          <Redirect to={"/auth"} />
        </Switch>
      )}
    </div>
  );
}

export default App;
