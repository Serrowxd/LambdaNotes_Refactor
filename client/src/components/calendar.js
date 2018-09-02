import React from 'react';
import { Column, CardContainer, Row } from '../reducer';
import Calendar from 'react-calendar';

const CalendarView = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Calendar </h1>
      </Row>
      <CardContainer styledcolor>
        <Calendar />
      </CardContainer>
    </Column>
  );
};

export default CalendarView;
