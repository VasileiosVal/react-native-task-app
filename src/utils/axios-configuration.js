import axios from "axios";
import { URL } from "react-native-dotenv";
import { Toast } from "native-base";

export const axiosConfiguration = () => {
  axios.defaults.baseURL = URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios.interceptors.response.use(null, error => {
    if (error.response.status === 500)
      Toast.show({
        text: "An error occured. Try again later.",
        duration: 2000
      });
    return Promise.reject(error);
  });
  // axios.interceptors.request.use(val => {
  //   console.log(val);
  //   return val;
  // });
};
