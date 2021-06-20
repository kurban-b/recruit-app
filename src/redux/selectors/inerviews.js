import { createSelector } from "reselect";

const interviews = (state) => state.interviewsReducer.interviews;
const loading = state => state.interviewsReducer.loading;

export const interviewsSelector = createSelector(
  interviews,
  (interviews) => interviews
);

export const interviewsLoadingSelector = createSelector(
  loading,
  (loading) => loading
);