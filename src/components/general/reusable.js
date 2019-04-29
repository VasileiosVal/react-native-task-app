import React from "react";
import { TextInput, Text } from "react-native";

export const Input = ({
  autoCapitalize = "none",
  autoCorrect = false,
  ...rest
}) => (
  <TextInput
    {...rest}
    autoCapitalize={autoCapitalize}
    autoCorrect={autoCorrect}
  />
);
