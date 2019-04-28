import React from "react";
import { FooterTab, Button, Icon } from "native-base";

export default class Ela extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: null
  });
  componentWillUnmount() {
    console.log("efuga");
  }
  render() {
    console.log(this.props.navigation.state.params);
    console.log(this.props.navigation.getParam("id"));
    return (
      <FooterTab>
        <Button onPress={() => this.props.navigation.navigate("Second")}>
          <Icon name="apps" />
        </Button>
        <Button>
          <Icon name="camera" />
        </Button>
        <Button active>
          <Icon active name="navigate" />
        </Button>
        <Button onPress={() => this.props.navigation.navigate("Playground")}>
          <Icon name="person" />
        </Button>
      </FooterTab>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
