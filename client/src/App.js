import React, { Component } from 'react';
import { Container, Column, Row, Cards, CardContainer } from './reducer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column
            background="lightblue"
            justify="space-around"
            pad="5rem"
            textalign="center"
          >
            <h1> OwO Notes </h1>
            <Column>
              <h1> New Note </h1>
              <h1> View Notes </h1>
            </Column>
            <h1> Logout </h1>
          </Column>

          <Column width="100%">
            <Row background="lightgray">
              <h1> Your Cards: </h1>
            </Row>
            <CardContainer>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </CardContainer>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
