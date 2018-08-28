import React, { Component } from 'react';
import { Column } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

class Navigation extends Component {
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
      <Column
        background="lightblue"
        justify={this.state.active ? 'flex-start' : 'space-around'}
        pad="2rem"
        textalign="center"
        width="20rem"
        className={this.state.active ? 'hidenav' : 'shownav'}
      >
        <h1 className="headertext" onClick={this.toggleClass}>
          {' '}
          {this.state.active ? 'X' : 'Noted'}{' '}
        </h1>
        <Column
          justify="space-evenly"
          height="10rem"
          className="child_container"
        >
          <MuiThemeProvider theme={theme}>
            <Button
              margin="2rem"
              variant="contained"
              color="primary"
              className="button_style"
            >
              Daily
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="button_style"
            >
              Notes
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="button_style"
            >
              Calendar
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="button_style"
            >
              Settings
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="button_style"
            >
              Account
            </Button>
          </MuiThemeProvider>
        </Column>
        <MuiThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            className="button_style"
            className="child_container"
          >
            Login / Logout
          </Button>
        </MuiThemeProvider>
      </Column>
    );
  }
}

export default Navigation;
