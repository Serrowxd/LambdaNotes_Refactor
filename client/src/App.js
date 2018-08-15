import React, { Component } from 'react';
import { Container, Column, Row, Cards, CardContainer } from './reducer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row justify="space-between">
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

          <CardContainer>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </CardContainer>
        </Row>
      </Container>
    );
  }
}

export default App;
