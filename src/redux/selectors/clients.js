import { createSelector } from "reselect";

const clients = (state) => state.clientsReducer.clients;
const loading = (state) => state.clientsReducer.loading;
const companies = (state) => state.companiesReducer.companies;
const stages = (state) => state.stagesReducer.stages;

// Селекторы
export const clientsSelector = createSelector(
  [clients, companies, stages],
  (clients, companies, stages) => {
    return clients.map((client) => {
      return {
        ...client,
        company:
          companies.length !== 0
            ? companies.find((item) => item.id === client.companyId).name
            : null,
        stage:
          stages.length !== 0
            ? stages.find((item) => item.id === client.stageId).name
            : null,
      };
    });
  }
);

export const clientsWithoutArchiveSelector = createSelector(clientsSelector, (clients) => {
  return clients.filter(client => !client.archive)
})

export const clientsArchiveSelector = createSelector(clientsSelector, (clients) => {
  return clients.filter(client => client.archive)
})

export const clientsLoadingSelector = createSelector(loading, (loading) => {
  return loading;
});
