import React, { Component } from 'react';
import {
  Container,
  Column,
  Row,
  Cards,
  CardContainer,
  Navigation,
  Noteview,
  LandingRow,
  LandingRender,
} from './reducer';

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
        <Column width="100%" height="100%" justify="space-evenly">
          <LandingRow>
            <h1> Lots of Notes </h1>
            <LandingRender className={this.state.active ? 'display' : 'none'}>
              <h1> Henlo (OvO") </h1>
            </LandingRender>
          </LandingRow>
          <LandingRow>
            <MuiThemeProvider theme={theme}>
              <Button
                variant="extendedFab"
                color="primary"
                size="large"
                className="button_style"
                onClick={this.toggleClass}
              >
                Create an Account
              </Button>
              <Button
                variant="extendedFab"
                color="primary"
                size="large"
                className="button_style"
              >
                Log-In
              </Button>
            </MuiThemeProvider>
          </LandingRow>
        </Column>

        {/* <Row>
          <Navigation />
          <Noteview />
        </Row> */}
      </Container>
    );
  }
}

export default App;
