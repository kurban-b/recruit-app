import { createSelector } from "reselect";

const companies = (state) => state.companiesReducer.companies;
const loading = (state) => state.companiesReducer.companies;

// Selectors

export const companiesSelector = createSelector(
  companies,
  (companies) => companies
);

export const companiesLoadingSelector = createSelector(
  loading,
  (loading) => loading
);
