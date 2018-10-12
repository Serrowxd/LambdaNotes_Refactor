import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

class NewCard extends Component {
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
          // onClick={this.toggleClass}
        >
          <CardBody className="newCard">
            <CardText>
              <h1>+</h1>
            </CardText>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

export default NewCard;
