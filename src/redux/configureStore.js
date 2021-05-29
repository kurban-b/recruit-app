import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import { application } from "./reducers/application";
import { recruiters } from "./reducers/recruiters";
import { users } from "./reducers/users";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ application, recruiters, users }),
  applyMiddleware(thunk, logger)
);
