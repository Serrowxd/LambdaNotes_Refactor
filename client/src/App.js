import React, { Component } from 'react';
import {
  Container,
  Column,
  Row,
  Cards,
  CardContainer,
  Button,
  Navigation,
  Noteview,
} from './reducer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Navigation />

          <Noteview />
        </Row>
      </Container>
    );
  }
}

export default App;
