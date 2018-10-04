import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Container,
  Landing,
  StateNotes,
  EditNote,
  CreateNote,
} from './reducer';

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
        <Route path="/create" components={CreateNote} />
        <Route path="/edit" component={EditNote} />
      </Container>
    );
  }
}

export default App;

// Notes are probably not going to be basedd on routes, instead I'll do them by state.
