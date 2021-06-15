import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import { application } from "./reducers/application";
import { auth } from "./reducers/auth";
import { clients } from "./reducers/clients";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, auth, clients }),
  applyMiddleware(thunk, logger)
);
