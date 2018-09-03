import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const Account = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Account (If signed-in name here) </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard>
          <h3> Account Stuff! </h3>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default Account;
