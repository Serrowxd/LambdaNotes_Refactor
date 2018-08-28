import React from 'react';
import { Column, CardContainer, Row, Cards, Navigation } from '../reducer';

const Noteview = () => {
  return (
    <Row position="relative" overflow="hidden">
      <Navigation />
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
    </Row>
  );
};

export default Noteview;
