import React, { Component } from 'react';
import { Column, Button } from '../reducer';

class Navigation extends Component {
  render() {
    return (
      <Column
        background="lightblue"
        justify="space-around"
        pad="2rem"
        textalign="center"
      >
        <h1 class="headertext"> Notes </h1>
        <Column>
          <Button margin="2rem"> New Note </Button>
          <Button> View Notes </Button>
        </Column>
        <Button> Login / Logout </Button>
      </Column>
    );
  }
}

export default Navigation;
