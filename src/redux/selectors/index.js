import { createSelector } from "reselect";

const recruiter = (state) => state.auth.recruiter;
const clients = (state) => state.clients.clients;
const companies = (state) => state.application.companies;
const stages = (state) => state.application.stages;
const notes = (state) => state.application.notes;
const interviews = (state) => state.application.interviews;

export const companiesSelector = createSelector(
  companies,
  (companies) => companies
);

export const stagesSelector = createSelector(stages, (stages) => stages);

export const interviewsSelector = createSelector(
  interviews,
  (interviews) => interviews
);

export const notesSelector = createSelector(notes, (notes) => notes);

export const clientsSelector = createSelector(
  [clients, companies, stages],
  (clients, companies, stages) => {

    return clients.map(client => {
      return {
        ...client,
        company: companies.length !== 0 ? companies.find(item => item.id === client.companyId).name : null,
        stage: stages.length !== 0 ? stages.find(item => item.id === client.stageId).name : null
      }
    })
  }
);

export const selectRecruter = createSelector(recruiter, (date) => date);
