import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
AnimatedTouchableOpacity = Animatable.createAnimatableComponent(
  TouchableOpacity
);

import gradient from "../../assets/images/gradient.png";

//edw
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

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
            <Icon name="mail" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="lock" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <AnimatedTouchableOpacity
            style={styles.loginButtonContainer}
            animation="zoomIn"
            delay={1000}
          >
            <Icon name="log-in" />
            <Text style={styles.loginButtonText}>Login</Text>
          </AnimatedTouchableOpacity>
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
