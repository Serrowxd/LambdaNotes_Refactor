import React, { Component } from 'react';
import { Column, CardContainer, Row, Cards } from '../reducer';
import { cardsdata } from '../data/notes';
import axios from 'axios';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: [],
      cardsInfo: cardsdata,
      lorge: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    let currenState = this.state.lorge;
    this.setState({ lorge: !currenState });
  }

  checkState() {
    if (this.state.lorge === false) {
      this.setState({ lorge: true });
    } else {
      this.setState({ lorge: false });
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5500/`).then(res => {
      const note = res.data;
      this.setState({ note });
    });
  }

  render() {
    return (
      <Column width="100%">
        <Row styledcolor padall="1rem">
          <h1> Notes </h1>
        </Row>
        <CardContainer styledcolor>
          <Row innercard>
            {this.state.note.map((note, i) => {
              return (
                <Cards
                  title={note.title}
                  text={note.body}
                  id={note._id}
                  key={i}
                />
              );
            })}
          </Row>
        </CardContainer>
      </Column>
    );
  }
}

// Use Redux / Axios
export default Notes;

// Idea --
// onClick will set state of all cards to false, unless false === false

// Temporary Notes
// Write back-end first before trying to do calls here
// OnClick should render a card in place of the <Cards />, then edit/delete will do other things
// Will need to do it with Redux to pass the state or something that will allow you to render a specific note on click.
