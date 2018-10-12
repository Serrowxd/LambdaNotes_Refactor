import React from 'react';

const ViewNote = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.body}</h2>
      <h2>{props.id}</h2>
    </div>
  );
};

export default ViewNote;
