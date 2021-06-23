import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Clients from "./Clients/index";
import { makeStyles } from "@material-ui/core";
import Account from "../Account/index";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile/index";
import { loadingClients } from "../../redux/actions/clients";
import Notes from "./Notes/index";
import Interviews from "./Interviews/index";
import { loadingNotes } from "../../redux/actions/notes";
import { loadingCompanies } from "../../redux/actions/companies";
import { loadingStages } from "../../redux/actions/stages";
import { loadingInterviews } from "../../redux/actions/interviews";
import { clientsSelector } from "../../redux/selectors/clients";
import { recruterSelector, tokenSelector } from "../../redux/selectors/auth";
import Calendar from "./Calendar";

const useStyes = makeStyles((theme) => ({
  main: {
    padding: "80px 20px 0 20px",
  },
}));

function Main() {
  const dispatch = useDispatch();
  const classes = useStyes();

  const clients = useSelector(clientsSelector);

  const load = useSelector((state) => state.clientsReducer.loading);

  const recruter = useSelector(recruterSelector);

  const token = useSelector(tokenSelector);

  useEffect(() => {
    dispatch(loadingClients(token));
    dispatch(loadingNotes(token));
    dispatch(loadingCompanies(token));
    dispatch(loadingStages());
    dispatch(loadingInterviews(token));
  }, [dispatch, token]);

  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path={"/dashboard/users/:path_?"}>
          <Clients />
        </Route>
        <Route exact path={"/dashboard/nodes"}>
          <Notes />
        </Route>
        <Route exact path={"/dashboard/interviews"}>
          <Interviews />
        </Route>
        <Route exact path={"/dashboard/account/:path2_?"}>
          <Account person={recruter} />
        </Route>
        <Route exact path={"/dashboard/profile/:id_?"}>
          {load ? null : <Profile clients={clients} />}
        </Route>
        <Route exact path={"/dashboard/calendar"}>
          <Calendar />
        </Route>
        <Redirect exact to={"/dashboard/users"} />
      </Switch>
    </div>
  );
}

export default Main;
