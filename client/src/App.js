import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Landing, StateNotes } from './reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    let currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  // This toggle is no longer used, has been moved.
  // Leaving State because it will be used for Redux.

  render() {
    return (
      <Container>
        <Route exact path="/" component={Landing} />
        <Route path="/notes" component={StateNotes} />
      </Container>
    );
  }
}

export default App;
