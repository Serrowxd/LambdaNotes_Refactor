import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Navigation, Notes, Daily, EditNote } from '../reducer';

const Noteview = () => {
  return (
    <Row position="relative" overflow="hidden">
      <Navigation />
      <Route exact path="/notes/view" component={Notes} />
      <Route path="/notes/daily" component={Daily} />
    </Row>
  );
};

export default Noteview;
