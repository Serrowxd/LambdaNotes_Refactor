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
      <CardHeader>Note Name</CardHeader>
      <CardBody>
        {/* <CardTitle>Title</CardTitle> */}
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
      </CardBody>
      {/* <CardFooter>Footer</CardFooter> */}
    </Card>
  </Fragment>
);

export default Cards;

// I like it without the footer,
// but I'll have to play with this.
// If I have anything that I feel needs to be pushed
// to the footer I'll add it back in but until then I'll
// leave it off.
