import React from 'react';
import { Column, CardContainer, Row, Cards } from '../reducer';

const Noteview = () => {
  return (
    <Column width="100%">
      <Row background="lightgray" padall="1rem">
        <h1> Cards </h1>
      </Row>
      <CardContainer>
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
      </CardContainer>
    </Column>
  );
};

export default Noteview;
