import { createSelector } from "reselect";

const recruiter = (state) => state.auth.recruiter;
const authError = (state) => state.auth.error;

export const selectRecruter = createSelector(recruiter, (date) => date);

export const authErrorSelector = createSelector(authError, (date) => date);

export const tokenSelector = createSelector(
  recruiter,
  (recruter) => recruter.token
);