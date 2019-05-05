import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from "../actions/actionTypes";

const initialState = { user: null, error: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { user: action.user, error: null };
    case LOGIN_USER_ERROR:
      return { user: null, error: action.error };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};
