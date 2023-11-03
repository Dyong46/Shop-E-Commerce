import { LOGIN, CHANGE_PROFILE } from './constants';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setProfile = (payload) => ({
  type: CHANGE_PROFILE,
  payload,
});
