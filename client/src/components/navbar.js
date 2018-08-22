import React, { Component } from 'react';
import { Column } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

class Navigation extends Component {
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
        justify="space-around"
        pad="2rem"
        textalign="center"
      >
        <h1 class="headertext"> Notes </h1>
        <Column justify="space-evenly" height="10rem">
          <MuiThemeProvider theme={theme}>
            <Button
              margin="2rem"
              variant="contained"
              color="primary"
              className="button_style"
            >
              {' '}
              New Note{' '}
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="button_style"
            >
              {' '}
              View Notes{' '}
            </Button>
          </MuiThemeProvider>
        </Column>
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="primary" className="button_style">
            {' '}
            Login / Logout{' '}
          </Button>
        </MuiThemeProvider>
      </Column>
    );
  }
}

export default Navigation;
