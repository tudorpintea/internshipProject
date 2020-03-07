import { createSelector } from "reselect";
const getLoginState = state => state.login
export const auth = createSelector(
   getLoginState,
   state => state.auth
)