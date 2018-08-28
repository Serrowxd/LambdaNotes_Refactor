import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const ContainedView = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> {props.title} </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard>{props.content}</Row>
      </CardContainer>
    </Column>
  );
};

export default ContainedView;
