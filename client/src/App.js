import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container, Landing, Noteview, StateNotes } from './reducer';

import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
    // this.toggle = this.toggle.bind(this);
  }

  toggleClass() {
    let currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  // This toggle is no longer used, has been moved.

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: orange,
      },
      overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
      },
    });
    // Theme is no longer used, has been moved.
    return (
      <Container>
        <Route exact path="/" component={Landing} />
        <Route path="/notes" component={StateNotes} />
      </Container>
    );
  }
}

export default App;
