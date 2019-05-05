import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";

let composeEnhancers;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const configureStore = () => {
  return createStore(
    combineReducers({
      auth: authReducer,
      uiLoader: uiReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
