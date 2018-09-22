import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const Settings = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Settings </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard alignme>
          <Column>
            <h3> Account Settings! </h3>
            <p>
              <code>
                This is where you will update things like color scheme, how
                notes are displayed, and things of that nature. Might get
                repurposed, for now I'm saving it as a temporary holding spot
                for this stuff.
              </code>
            </p>
          </Column>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default Settings;
