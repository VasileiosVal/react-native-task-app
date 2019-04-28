import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Footer,
  Button,
  Content,
  FooterTab,
  Icon
} from "native-base";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // title: 'Home',
    headerBackTitle: "null",
    headerTitle: <Icon type="FontAwesome" name="home" />,
    headerLeft: <Icon type="FontAwesome" name="home" />,
    headerRight: (
      <Icon
        type="FontAwesome"
        name="home"
        onPress={() => navigation.navigate("Last")}
      />
    )
  });

  obj = {
    name: "billy",
    id: 1
  };
  componentWillUnmount() {
    console.log("efuga");
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Content>
          <Text>Home Screen</Text>
          <Button primary>
            <Text> Primary </Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              full
              onPress={() => this.props.navigation.navigate("Last", this.obj)}
            >
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
