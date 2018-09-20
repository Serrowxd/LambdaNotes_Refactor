import React, { Fragment } from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

const Cards = props => (
  <Fragment>
    <Card>
      <CardHeader>{props.title}</CardHeader>
      <CardBody>
        <CardText>{props.text}</CardText>
      </CardBody>
    </Card>
  </Fragment>
);

export default Cards;
