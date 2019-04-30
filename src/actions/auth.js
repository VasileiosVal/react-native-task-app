import AsyncStorage from "@react-native-community/async-storage";
import { Toast } from "native-base";
import axios from "axios";
import { enableLoader, disableLoader } from "./ui";
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

const loginUser = user => ({
  type: LOGIN_USER,
  user
});

const logoutUser = () => ({
  type: LOGOUT_USER
});

export const startLoginUser = credentials => async dispatch => {
  try {
    dispatch(enableLoader());
    const { data } = await axios.post("/auth/login", credentials);
    await AsyncStorage.setItem("token", JSON.stringify(data.token));
    loginUser(data.user);
  } catch (e) {
    dispatch(disableLoader());
    logoutUser();
    if (e.response.status === 400)
      Toast.show({
        text: e.response.data.error,
        duration: 2000
      });
  }
};
