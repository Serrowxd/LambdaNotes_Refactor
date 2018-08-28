import React from 'react';
import { Column, CardContainer, Row, Cards, Navigation } from '../reducer';

const Noteview = () => {
  return (
    <Row position="relative" overflow="hidden">
      <Navigation />
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
    </Row>
  );
};

export default Noteview;
