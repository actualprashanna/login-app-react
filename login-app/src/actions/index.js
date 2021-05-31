import userAuth from "../api/userAuth";
import { LOG_IN, LOG_OUT, AUTHENTICATE, FETCH_USERS } from "./types";

export const logIn = (formValues) => {
  return async (dispatch) => {
    const users = await userAuth.post("/login", { ...formValues });

    dispatch({ type: LOG_IN, payload: users.data });
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const authenticate = (formValues) => {
  return async (dispatch) => {
    const users = await userAuth.get("/login", formValues);

    dispatch({ type: AUTHENTICATE, payload: users.data });
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const users = await userAuth.get("/users");

    dispatch({ type: FETCH_USERS, payload: users.data });
  };
};
