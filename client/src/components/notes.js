import React, { Component, Fragment } from 'react';
import { Column, CardContainer, Row, Cards, Form } from '../reducer';
import { cardsdata } from '../data/notes';
import axios from 'axios';

import { Card, CardBody, CardText } from 'reactstrap';
import { format } from 'util';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: [],
      title: '',
      body: '',
      cardsInfo: cardsdata,
      lorge: false,
      saving: '',
      transition: true,
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pageReload = this.pageReload.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:5500/`).then(res => {
      const note = res.data;
      this.setState({ note });
    });
    // setInterval(this.noteUpdate, 3000);
    // I like this set-interval, but I feel like there's a better way of checking it.
    // Notes will sometimes not all render at once - maybe set a timeout for the axios call or call it multiple times?
  }

  noteUpdate() {
    axios.get(`http://localhost:5500/`).then(res => {
      const note = res.data;
      this.setState({ note });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    axios
      .post(`http://localhost:5500/post`, { title, body })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  inputChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleClass() {
    let currentState = this.state.transition;
    this.setState({ transition: !currentState });
  }

  pageReload() {
    this.setState({ saving: 'Saving Note!' });
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  }

  render() {
    const { title, body } = this.state;
    return (
      <Fragment>
        {this.state.transition ? (
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
                <Card
                  className={this.state.lorge ? 'big' : ''}
                  onClick={this.toggleClass}
                >
                  <CardBody className="newCard">
                    <CardText>
                      <h1>+</h1>
                    </CardText>
                  </CardBody>
                </Card>
              </Row>
            </CardContainer>
          </Column>
        ) : (
          <Column width="100%">
            <Row styledcolor padall="1rem">
              <h1> New Note </h1>
            </Row>
            <CardContainer styledcolor>
              <Row createcard>
                <Form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Note Title"
                    onChange={this.inputChangeHandler}
                  />

                  <textarea
                    type="text"
                    name="body"
                    value={body}
                    placeholder="Note Body"
                    className="lorge"
                    onChange={this.inputChangeHandler}
                  />
                  <input type="submit" onClick={this.pageReload} />
                  <h1>{this.state.saving}</h1>
                </Form>
              </Row>
            </CardContainer>
          </Column>
        )}
      </Fragment>
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
