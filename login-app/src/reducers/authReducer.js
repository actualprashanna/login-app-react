import { AUTHENTICATE, FETCH_USERS, LOG_IN, LOG_OUT } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  users: null,
  loggedUser: null,
};

const authType = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state };
    case AUTHENTICATE:
      return { ...state, loggedUser: action.payload, isSignedIn: true };
    case LOG_OUT:
      return { ...state, isSignedIn: null, user: null };
    case FETCH_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default authType;
