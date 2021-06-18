import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Clients from "./Clients/index";
import { makeStyles } from "@material-ui/core";
import Account from "../Account/index";
import { useDispatch, useSelector } from 'react-redux'
import { selectRecruter, tokenSelector } from '../../redux/selectors/auth'
import Profile from "./Profile/index";
import { loadingClients } from '../../redux/actions/clients'
import { loadingCompanies, loadingInterviews, loadingNotes, loadingStages } from '../../redux/actions/application'
import Notes from './Notes/index'
import Interviews from './Interviews/index'

const useStyes = makeStyles((theme) => ({
  main: {
    padding: "80px 20px 0 20px",
  },
}));

function Main() {
  const dispatch = useDispatch();
  const classes = useStyes();

  const load = useSelector((state) => state.clients.loading);

  const recruter = useSelector(selectRecruter);

  const token = useSelector(tokenSelector);

  useEffect(() => {
    dispatch(loadingClients(token));
    dispatch(loadingNotes(token));
    dispatch(loadingCompanies(token));
    dispatch(loadingStages());
    dispatch(loadingInterviews(token));
  }, [dispatch, token]);

  const clients = useSelector((state) => state.clients.clients);

  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path={"/dashboard/users"}>
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
      </Switch>
    </div>
  );
}

export default Main;
