const initialState = null;
import { LOGIN_USER, LOGOUT_USER } from "../actions/actionTypes";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
