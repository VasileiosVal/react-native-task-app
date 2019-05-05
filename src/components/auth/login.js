import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Joi from "react-native-joi";
import { Icon, Spinner, Toast } from "native-base";

import styles from "../../assets/styles/stylesheet";
import gradient from "../../assets/images/gradient.png";
import { Input } from "../general/reusable";
import { getLoginSchema } from "../../utils/joi-schema";
import { validateResult } from "../../utils/general-functions";
import { startLoginUser } from "../../actions/auth";

const Login = ({ dispatch, auth, uiLoader }) => {
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

    dispatch(
      startLoginUser(result.value, () => alert("succesfully logged in"))
    );
  };

  useEffect(() => {
    auth.error &&
      Toast.show({
        text: auth.error,
        duration: 2000
      });
  }, [auth]);

  const toggleLoginButton = () => {
    return uiLoader ? (
      <Spinner color="blue" />
    ) : (
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
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={gradient} style={styles.container}>
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
                  : styles.inputField
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
          {toggleLoginButton()}
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

const mapStateToProps = state => ({
  auth: state.auth,
  uiLoader: state.uiLoader
});

export default connect(mapStateToProps)(Login);
