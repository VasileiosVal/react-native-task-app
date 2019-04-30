import { ENABLE_LOADER, DISABLE_LOADER } from "../actions/actionTypes";
const initialState = false;

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_LOADER:
      return true;
    case DISABLE_LOADER:
      return false;
    default:
      return state;
  }
};
