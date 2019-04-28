import React from "react";
import { Text } from "react-native";
import { Content, Container, Header, Footer } from "native-base";
import Last from "./Last";

const second = props => (
  <Container>
    <Header />
    <Content>
      <Text>Seconddd</Text>
    </Content>
    <Footer>
      <Last {...props} />
    </Footer>
  </Container>
);

export default second;
