import React, { Component } from 'react';
import { Container, Landing, Row, Navigation, Noteview } from './reducer';

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
    return (
      <Container>
        {/* <Landing /> */}

        <Row>
          <Navigation />
          <Noteview />
        </Row>
      </Container>
    );
  }
}

export default App;
