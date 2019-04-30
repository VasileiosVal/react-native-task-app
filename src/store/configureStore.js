import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";

export const configureStore = () => {
  return createStore(
    combineReducers({
      user: authReducer,
      uiLoader: uiReducer
    }),
    applyMiddleware(thunk)
  );
};
