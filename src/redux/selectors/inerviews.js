import { createSelector } from "reselect";

const interviews = (state) => state.interviewsReducer.interviews;
const loading = (state) => state.interviewsReducer.loading;
const loadingAdd = (state) => state.interviewsReducer.loadingAdd;

export const interviewsSelector = createSelector(
  interviews,
  (interviews) => interviews
);

export const interviewsLoadingSelector = createSelector(
  loading,
  (loading) => loading
);

export const interviewsloadingAddSelector = createSelector(
  loadingAdd,
  (loading) => loading
);
