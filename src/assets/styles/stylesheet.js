import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
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
    alignItems: "center"
  },
  contentMainText: {
    marginBottom: 30,
    marginTop: 40,
    fontSize: 20
  },
  inputContainer: { width: "85%", marginBottom: 15 },
  inputField: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    paddingLeft: 20,
    borderRadius: 20,
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
    marginTop: 15,
    borderRadius: 12
  },
  loginButtonText: {
    marginLeft: 8,
    fontSize: 16
  },
  registerLinkContainer: {
    marginTop: 25
  },

  registerLink: {
    fontSize: 20
  }
});
