import React from 'react';
import { Column, LandingRow } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

const Landing = () => {
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
      </LandingRow>
      <LandingRow>
        <MuiThemeProvider theme={theme}>
          <Button
            variant="extendedFab"
            color="primary"
            size="large"
            className="button_style"
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
  );
};

export default Landing;
