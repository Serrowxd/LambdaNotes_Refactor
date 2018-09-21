import React, { Component } from 'react';
import { Column, LandingRow, LandingRender, SignInput } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active1: false,
      active2: false,
    };
    this.toggleClass1 = this.toggleClass1.bind(this);
    this.toggleClass2 = this.toggleClass2.bind(this);
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
      <Column styledlanding width="100%" height="100%" justify="space-evenly">
        <LandingRow>
          <h1> Noted </h1>
          <LandingRender
            styledinput
            className={this.state.active1 ? 'display' : 'none'}
          >
            <p> Let's get you signed up (OvO") </p>
            <SignInput
              width="60%"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <SignInput
              width="60%"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <MuiThemeProvider theme={theme}>
              <Button
                variant="extendedFab"
                color="primary"
                size="large"
                className="sign_button href_override"
                href="/notes"
              >
                Sign-Up
              </Button>
            </MuiThemeProvider>
          </LandingRender>

          <LandingRender
            styledinput
            className={this.state.active2 ? 'display' : 'none'}
          >
            <p> Welcome Back (OvO") </p>
            <SignInput
              width="60%"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <SignInput
              width="60%"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <MuiThemeProvider theme={theme}>
              <Button
                variant="extendedFab"
                color="primary"
                size="large"
                className="sign_button href_override"
                href="/notes"
              >
                Log-in
              </Button>
            </MuiThemeProvider>
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
