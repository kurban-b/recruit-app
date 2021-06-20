import { createSelector } from "reselect";

const stages = (state) => state.stagesReducer.stages;
const loading = (state) => state.stagesReducer.loading;

//Selectors

export const stagesSelector = createSelector(stages, (stages) => stages);

export const stagesLoadingSelector = createSelector(
  loading,
  (loading) => loading
);
