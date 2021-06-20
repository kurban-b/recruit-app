import { createSelector } from "reselect";

const notes = (state) => state.notesReducer.notes;

export const notesSelector = createSelector(notes, (notes) => notes);