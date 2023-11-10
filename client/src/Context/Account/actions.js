import { LOGIN, CHANGE_PROFILE, IS_AUTHENTICATED } from './constants';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setProfile = (payload) => ({
  type: CHANGE_PROFILE,
  payload,
});

export const setIsAuthenticated = (payload) => ({
	type: IS_AUTHENTICATED,
	payload,
})
