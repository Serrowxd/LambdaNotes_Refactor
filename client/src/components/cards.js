import React, { Component, Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  Button,
} from 'reactstrap';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lorge: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    let currenState = this.state.lorge;
    this.setState({ lorge: !currenState });
  }

  render() {
    return (
      <Fragment>
        <Card
          className={this.state.lorge ? 'big' : ''}
          onClick={this.toggleClass}
        >
          <CardHeader>{this.props.title}</CardHeader>
          <CardBody>
            <CardText>{this.props.text}</CardText>
          </CardBody>
          <div className="card_buttons">
            <Button
              className={this.state.lorge ? 'styledbutton' : 'hidebutton'}
            >
              Edit
            </Button>
            <Button
              className={this.state.lorge ? 'styledbutton' : 'hidebutton'}
            >
              Delete
            </Button>
          </div>
          <CardFooter>{this.props.id}</CardFooter>
        </Card>
      </Fragment>
    );
  }
}

export default Cards;

// Opening a new card should rever the old cards back to their previous state
// The cards toggle individually but they do not go back when a new one is opened
