import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios";
import { enableLoader, disableLoader } from "./ui";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from "./actionTypes";

const loginUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  user
});

const loginUserError = error => ({
  type: LOGIN_USER_ERROR,
  error
});

const logoutUser = () => ({
  type: LOGOUT_USER
});

export const startLoginUser = (credentials, callback) => async dispatch => {
  try {
    dispatch(enableLoader());
    const { data } = await axios.post("/auth/login", credentials);
    await AsyncStorage.setItem("token", JSON.stringify(data.token));
    dispatch(loginUserSuccess(data.user));
    callback();
  } catch (e) {
    dispatch(disableLoader());
    dispatch(loginUserError(e.response.data.error));
  }
};
