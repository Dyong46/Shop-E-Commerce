import { LOGIN, CHANGE_PROFILE, IS_AUTHENTICATED } from './constants';

const initState = {
  profile: {},
	isAuthenticated: false,
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
		case IS_AUTHENTICATED:
			return {
				...state,
				isAuthenticated: action.payload,
			}
  }
};

export { initState };
export default reducer;
