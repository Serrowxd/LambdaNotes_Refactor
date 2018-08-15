import React, { Fragment } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

const Cards = props => (
  <Fragment>
    <Card>
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  </Fragment>
);

export default Cards;
