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

import Landing from './containers/Landing';

class App extends Component {
  render() {
    return (
      <Container>
        <Landing />

        {/* <Row>
          <Navigation />
          <Noteview />
        </Row> */}
      </Container>
    );
  }
}

export default App;
