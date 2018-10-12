import React, { Fragment } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const NewCard = () => {
  return (
    <Fragment>
      <Card>
        <CardBody className="newCard">
          <CardText>
            <h1>+</h1>
          </CardText>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default NewCard;

// Opening a new card should rever the old cards back to their previous state
// The cards toggle individually but they do not go back when a new one is opened
