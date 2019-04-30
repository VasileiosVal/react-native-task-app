import React, { useState } from "react";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Joi from "react-native-joi";
import { Icon } from "native-base";

import gradient from "../../assets/images/gradient.png";
import { Input } from "../general/reusable";
import { getLoginSchema } from "../../utils/joi-schema";
import { validateResult } from "../../utils/general-functions";
import { startLoginUser } from "../../actions/auth";

const Login = ({ dispatch, user, uiLoader }) => {
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
    const result = Joi.validate(credentials, getLoginSchema(), {
      stripUnknown: true,
      abortEarly: false
    });
    const errorsFound = validateResult(result);
    if (errorsFound) return setErrors(errorsFound);

    dispatch(startLoginUser(result.value));
  };
  console.log(user, uiLoader);
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
          <View style={styles.inputContainer}>
            <View
              style={
                validationOnPress.email
                  ? validationOnPress.email === "success"
                    ? {
                        ...styles.inputField,
                        ...styles.inputFieldSuccess
                      }
                    : {
                        ...styles.inputField,
                        ...styles.inputFieldError
                      }
                  : { ...styles.inputField }
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
            {!!errors.email && (
              <Text style={styles.inputError}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <View
              style={
                validationOnPress.password
                  ? validationOnPress.password === "success"
                    ? {
                        ...styles.inputField,
                        ...styles.inputFieldSuccess
                      }
                    : {
                        ...styles.inputField,
                        ...styles.inputFieldError
                      }
                  : { ...styles.inputField }
              }
            >
              <Icon name="lock" />
              <Input
                value={credentials.password}
                onChangeText={value =>
                  handleChangeCredentials("password", value)
                }
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            {!!errors.password && (
              <Text style={styles.inputError}>{errors.password}</Text>
            )}
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
          <TouchableOpacity
            onPress={() => alert("x")}
            style={styles.registerLinkContainer}
          >
            <Text style={styles.registerLink}>New user? Register here</Text>
          </TouchableOpacity>
        </Animatable.View>
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
    paddingBottom: 10,
    paddingTop: 20
  },
  icon: {
    fontSize: 40,
    color: "#aa1100"
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
    flex: 2,
    alignItems: "center",
    paddingBottom: 65
  },
  contentMainText: {
    marginBottom: 10,
    marginTop: 40,
    fontSize: 20
  },
  inputContainer: { width: "85%" },
  inputField: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    paddingLeft: 20,
    borderRadius: 20,
    marginTop: 10,
    overflow: "hidden"
  },
  inputFieldSuccess: { borderColor: "green", borderWidth: 1 },
  inputFieldError: { borderColor: "red", borderWidth: 1 },
  inputError: { paddingTop: 5, color: "red", textAlign: "center" },
  input: {
    paddingLeft: 15,
    width: "100%"
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
  registerLinkContainer: {
    marginTop: 20
  },

  registerLink: {
    fontSize: 20
  }
});

const mapStateToProps = state => ({
  user: state.user,
  uiLoader: state.uiLoader
});

export default connect(mapStateToProps)(Login);
