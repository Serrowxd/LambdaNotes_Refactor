import React, { Component } from 'react';
import { Column, LandingRow, LandingRender, SignInput } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.toggleClass1 = this.toggleClass1.bind(this);
    this.toggleClass2 = this.toggleClass2.bind(this);
    this.state = {
      active1: false,
      active2: false,
    };
    // this.toggle = this.toggle.bind(this);
  }

  toggleClass1() {
    let currentState = this.state.active1;
    this.setState({ active1: !currentState });
    this.setState({ active2: false });
  }

  toggleClass2() {
    let currentState = this.state.active2;
    this.setState({ active2: !currentState });
    this.setState({ active1: false });
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
      <Column width="100%" height="100%" justify="space-evenly">
        <LandingRow>
          <h1> Lots of Notes </h1>
          <LandingRender className={this.state.active1 ? 'display' : 'none'}>
            <p> Let's get you signed up (OvO") </p>
            <SignInput width="60%" type="text" name="username" required />
            <SignInput width="60%" type="password" name="password" required />
            <SignInput inputbutton type="submit" />
          </LandingRender>

          <LandingRender className={this.state.active2 ? 'display' : 'none'}>
            <p> Welcome Back (OvO") </p>
            <SignInput width="60%" type="text" name="username" required />
            <SignInput width="60%" type="password" name="password" required />
            <SignInput inputbutton type="submit" />
          </LandingRender>
        </LandingRow>
        <LandingRow>
          <MuiThemeProvider theme={theme}>
            <Button
              variant="extendedFab"
              color="primary"
              size="large"
              className="button_style"
              onClick={this.toggleClass1}
            >
              Create an Account
            </Button>
            <Button
              variant="extendedFab"
              color="primary"
              size="large"
              className="button_style"
              onClick={this.toggleClass2}
            >
              Log-In
            </Button>
          </MuiThemeProvider>
        </LandingRow>
      </Column>
    );
  }
}

export default Landing;
