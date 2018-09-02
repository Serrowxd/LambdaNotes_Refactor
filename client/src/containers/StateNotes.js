import React, { Component } from 'react';
import { Column, Row, Daily, Notes, CalendarView } from '../reducer';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

class StateNotes extends Component {
  constructor(props) {
    super(props);

    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      comp: <Daily />,
    };
  }

  toggleClass() {
    let currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  handleClick(compName, e) {
    this.setState({ comp: compName });
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
      <Row position="relative" overflow="hidden">
        <Column
          styledlanding
          justify={this.state.active ? 'flex-start' : 'space-around'}
          pad="2rem"
          textalign="center"
          width="20rem"
          className={this.state.active ? 'hidenav' : 'shownav'}
        >
          <h1 className="headertext" onClick={this.toggleClass}>
            Noted
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
                onClick={this.handleClick.bind(this, <Daily />)}
              >
                Daily
              </Button>

              <Button
                variant="contained"
                color="primary"
                className="button_style"
                onClick={this.handleClick.bind(this, <Notes />)}
              >
                Notes
              </Button>

              <Button
                variant="contained"
                color="primary"
                className="button_style"
                onClick={this.handleClick.bind(this, <CalendarView />)}
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
              className="child_container href_override"
              href="/"
            >
              Login / Logout
            </Button>
          </MuiThemeProvider>
        </Column>
        {this.state.comp}
        {/* Everything is rendered here */}
      </Row>
    );
  }
}

export default StateNotes;
