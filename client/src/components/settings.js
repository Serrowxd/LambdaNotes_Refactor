import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const Settings = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Settings </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard>
          <h3> Account Settings! </h3>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default Settings;
