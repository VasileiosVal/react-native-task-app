import React from "react";
import { AppRegistry } from "react-native";
import { Root } from "native-base";
import App from "./App";
import { name as appName } from "./app.json";
import { axiosConfiguration } from "./src/utils/axios-configuration";

axiosConfiguration();

const AppContainer = () => (
  <Root>
    <App />
  </Root>
);
AppRegistry.registerComponent(appName, () => AppContainer);
