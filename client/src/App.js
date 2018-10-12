import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Landing,
  StateNotes,
  EditNote,
  CreateNote,
} from './reducer';

import ViewNote from './components/viewNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      note: [],
    };
  }

  toggleClass() {
    let currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  componentDidMount() {
    axios.get(`http://localhost:5500/`).then(res => {
      const note = res.data;
      this.setState({ note });
    });
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
        <Route
          path={this.state.note.id}
          component={ViewNote}
          name={this.state.note.title}
        />
      </Container>
    );
  }
}

export default App;

// Notes are probably not going to be basedd on routes, instead I'll do them by state.
