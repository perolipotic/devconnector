import { SET_CURRENT_USER, LOGIN_FAILED } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGIN_FAILED:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}
