import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import { applicationReducer } from "./reducers/application";
import { authReducer } from "./reducers/auth";
import { clientsReducer } from "./reducers/clients";
import { companiesReducer } from "./reducers/companies";
import { interviewsReducer } from "./reducers/interviews";
import { notesReducer } from "./reducers/notes";
import { stagesReducer } from "./reducers/stages";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({
    applicationReducer,
    authReducer,
    clientsReducer,
    companiesReducer,
    interviewsReducer,
    notesReducer,
    stagesReducer,
  }),
  applyMiddleware(thunk, logger)
);
