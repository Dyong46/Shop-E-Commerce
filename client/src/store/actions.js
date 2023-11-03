import { LOGIN, SET_PROFILE } from './constants';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload,
});
