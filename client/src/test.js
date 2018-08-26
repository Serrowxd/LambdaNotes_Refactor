import React, { Component } from 'react';

class HasState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Birb (OvO")'
    };
  }
  render() {
    return(
      <div>
        <h1> {this.state.name} </h1>
      </div>
    )
  }
}

export const HasState;