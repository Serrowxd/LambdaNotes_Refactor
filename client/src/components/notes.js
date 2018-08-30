import React from 'react';
import { Column, CardContainer, Row, Cards } from '../reducer';

const Notes = () => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Notes </h1>
      </Row>
      <CardContainer styledcolor>
        <Row innercard>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Row>
      </CardContainer>
    </Column>
  );
};

export default Notes;

// Temporary Notes - Maybe passing props to the notes via a map from State?
