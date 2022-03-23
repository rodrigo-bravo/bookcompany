import { createSelector } from '@ngrx/store';
import { AppState } from '../../reducers';

/**
 * Selectors access app states in the store; Readily used by the components. 
 * @param state 
 * @returns 
 */
export const getAuthState = (state: AppState) => state.auth;

export const getUser = createSelector(
  getAuthState,
  auth => auth.user
);

export const getIsLoggedIn = createSelector(
  getAuthState,
  auth => auth.isLoggedIn
);

export const getIsLoading = createSelector(
  getAuthState,
  auth => auth.isLoading
);

export const getIsAdmin = createSelector(
  getAuthState,
  auth => auth.isAdmin
);

export const getError = createSelector(
  getAuthState,
  auth => auth.error
);
