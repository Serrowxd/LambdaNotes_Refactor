import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const Account = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1>
          {' '}
          Account <code>If signed-in name here</code>{' '}
        </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard alignme>
          <Column>
            <h3> Account Stuff! </h3>
            <p>
              <code>
                This is where you will update account information, passwords,
                usernames, or access your billing (future).
              </code>
            </p>
          </Column>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default Account;
