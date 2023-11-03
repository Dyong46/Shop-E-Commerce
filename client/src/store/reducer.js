import { LOGIN } from './constants';

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

    // case: SET_PROFILE:
    // return {
    //   ...state,
    //   profile: action.payload,
    // }
  }
};

export { initState };
export default reducer;
