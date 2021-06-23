import React from "react";
import ListClients from "./ListClients";
import Header from "./Header";
import { useSelector } from "react-redux";
import {
  clientsArchiveSelector,
  clientsWithoutArchiveSelector,
} from "../../../redux/selectors/clients";
import { Route, Switch } from "react-router-dom";

function Clients() {
  const clients = useSelector(clientsWithoutArchiveSelector);
  const archiveClients = useSelector(clientsArchiveSelector);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/dashboard/users"}>
          <ListClients clients={clients} />
        </Route>
        <Route exact path={"/dashboard/users/archive"}>
          <ListClients clients={archiveClients} />
        </Route>
      </Switch>
    </div>
  );
}

export default Clients;
