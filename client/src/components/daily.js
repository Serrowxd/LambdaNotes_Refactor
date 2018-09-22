import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const ContainedView = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Daily </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard alignme>
          <Column>
            <h3> You have no tasks today, create some? </h3>
            <button>No Worky</button>
            <p>
              <code>
                This button will create a new note, when it's working :|
              </code>
            </p>
          </Column>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default ContainedView;

// This will map notes based on date, if there are none it will display "You have no tasks today, create some?"
