import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const EditNote = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Edit Note </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard alignme>
          <Column>
            <form>
              <input />
            </form>
            <h3> EditNote Stuff! </h3>
            <p>
              <code>Notes will be edited here.</code>
            </p>
          </Column>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default EditNote;
