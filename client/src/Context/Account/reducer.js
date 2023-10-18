import { LOGIN, CHANGE_PROFILE } from './constants';

const initState = {
  profile: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        profile: action.payload,
      };
    case CHANGE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
  }
};

export { initState };
export default reducer;
