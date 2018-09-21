import React, { Component } from 'react';
import { Column, CardContainer, Row, Cards } from '../reducer';
import { cardsdata } from '../data/notes';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsInfo: cardsdata,
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
            {this.state.cardsInfo.map(([title, text], i) => {
              return <Cards title={title} text={text} key={i} />;
            })}
          </Row>
        </CardContainer>
      </Column>
    );
  }
}

// Use Redux / Axios
export default Notes;

// Temporary Notes
// Write back-end first before trying to do calls here
// OnClick should render a card in place of the <Cards />, then edit/delete will do other things
// Will need to do it with Redux to pass the state or something that will allow you to render a specific note on click.
