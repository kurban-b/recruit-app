import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import { application } from "./reducers/application";
import { recruiters } from "./reducers/recruiters";
import { clients } from "./reducers/clients";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, recruiters, clients }),
  applyMiddleware(thunk, logger)
);
