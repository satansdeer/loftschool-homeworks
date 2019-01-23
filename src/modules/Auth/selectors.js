import { createSelector } from "reselect";

const apiKey = state => state.auth;

export const getIsAuthorized = createSelector(apiKey, state => state.apiKey);