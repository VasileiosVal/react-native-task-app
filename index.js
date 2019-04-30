import React from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import { Root } from "native-base";
import App from "./App";
import { name as appName } from "./app.json";
import { axiosConfiguration } from "./src/utils/axios-configuration";
import { configureStore } from "./src/store/configureStore";

axiosConfiguration();

const store = configureStore();

const AppContainer = () => (
  <Root>
    <Provider store={store}>
      <App />
    </Provider>
  </Root>
);
AppRegistry.registerComponent(appName, () => AppContainer);
