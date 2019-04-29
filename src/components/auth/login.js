import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";
import Joi from "react-native-joi";
import { Icon } from "native-base";

import gradient from "../../assets/images/gradient.png";
import { Input } from "../general/reusable";
import { getLoginSchema } from "../../utils/joi-schema";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [validationOnPress, setValidationOnPress] = useState({});

  const handleChangeCredentials = (key, value) => {
    setErrors({});
    const result = Joi.validate(value, getLoginSchema()[key], {
      stripUnknown: true
    });
    const newValidationOnPress = { ...validationOnPress };
    newValidationOnPress[key] = result.error ? "error" : "success";
    setValidationOnPress(newValidationOnPress);
    const newCredentials = { ...credentials };
    newCredentials[key] = value;
    setCredentials(newCredentials);
  };

  const submit = () => {
    alert("logged in");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={gradient} style={styles.background}>
        <Animatable.View
          style={styles.header}
          animation="fadeInDown"
          delay={500}
        >
          <Icon name="calendar" style={styles.icon} />
          <Text style={styles.headerText}>Task Manager</Text>
          <Text style={styles.headerBelowText}>
            Schedule and handle your events
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.content} animation="fadeIn" delay={600}>
          <Text style={styles.contentMainText}>Please login to proceed</Text>
          <View
            style={
              validationOnPress.email
                ? validationOnPress.email === "success"
                  ? {
                      ...styles.inputContainer,
                      ...styles.inputContainerSuccess
                    }
                  : { ...styles.inputContainer, ...styles.inputContainerError }
                : { ...styles.inputContainer }
            }
          >
            <Icon name="mail" />
            <Input
              value={credentials.email}
              onChangeText={value => handleChangeCredentials("email", value)}
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View
            style={
              validationOnPress.password
                ? validationOnPress.password === "success"
                  ? {
                      ...styles.inputContainer,
                      ...styles.inputContainerSuccess
                    }
                  : { ...styles.inputContainer, ...styles.inputContainerError }
                : { ...styles.inputContainer }
            }
          >
            <Icon name="lock" />
            <Input
              value={credentials.password}
              onChangeText={value => handleChangeCredentials("password", value)}
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity onPress={submit}>
            <Animatable.View
              style={styles.loginButtonContainer}
              animation="zoomIn"
              delay={1000}
            >
              <Icon name="log-in" />
              <Text style={styles.loginButtonText}>Login</Text>
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => alert("x")}>
            <Text style={styles.registerLink}>New user? Register here</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: "100%",
    height: "100%"
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomColor: "orange",
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  icon: {
    fontSize: 40,
    color: "#ffa900"
  },
  headerText: {
    fontWeight: "bold",
    fontFamily: "Cochin",
    fontSize: 30
  },
  headerBelowText: {
    fontFamily: "Cochin",
    fontSize: 23,
    marginTop: 10
  },
  content: {
    flex: 1,
    alignItems: "center"
  },
  contentMainText: {
    marginBottom: 10,
    marginTop: 40,
    fontSize: 20
  },
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    paddingLeft: 20,
    borderRadius: 20,
    marginTop: 17
  },
  inputContainerSuccess: { borderColor: "green", borderWidth: 1 },
  inputContainerError: { borderColor: "red", borderWidth: 1 },

  input: {
    paddingLeft: 15
  },
  footer: {
    flex: 1,
    alignItems: "center"
  },
  loginButtonContainer: {
    flexDirection: "row",
    padding: 7,
    backgroundColor: "#f1926e",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 12
  },
  loginButtonText: {
    marginLeft: 8,
    fontSize: 16
  },
  registerLink: {
    marginTop: 40,
    fontSize: 20
  }
});

export default Login;
