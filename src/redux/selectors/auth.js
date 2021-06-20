import { createSelector } from "reselect";

const recruiter = (state) => state.authReducer.recruiter;
const authError = (state) => state.authReducer.error;
const loadingRegistration = (state) => state.authReducer.loadingRegistration;
const loadingLogin = (state) => state.authReducer.loadingLogin;

// Селекторы

export const recruterSelector = createSelector(recruiter, (date) => date);

export const authErrorSelector = createSelector(authError, (date) => date);

export const loadingRegistrationSelector = createSelector(loadingRegistration, (date) => date);

export const loadingLoginSelector = createSelector(loadingLogin, (date) => date);

export const tokenSelector = createSelector(
  recruiter,
  (recruter) => recruter.token
);