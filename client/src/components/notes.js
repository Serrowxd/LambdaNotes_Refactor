import React, { Component } from 'react';
import { Column, CardContainer, Row, Cards } from '../reducer';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      render: <null />,
    };
  }
  render() {
    return (
      <Column width="100%">
        <Row styledcolor padall="1rem">
          <h1> Notes </h1>
        </Row>
        <CardContainer styledcolor>
          <Row innercard>
            <Cards />
          </Row>
        </CardContainer>
      </Column>
    );
  }
}

export default Notes;

// Temporary Notes - Maybe passing props to the notes via a map from State?
// Use Redux / Axios
// Write back-end first before trying to do calls here
// OnClick should render a card in place of the <Cards />, then edit/delete will do other things
// Will need to do it with Redux to pass the state or something that will allow you to render a specific note on click.
