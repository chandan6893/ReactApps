import React from 'react';
import "./greet.css"

export function Greet( { name } ) {
    // const { name } = props;

  return (
    <div>
      <h1 className="greet_title">Hello {name}</h1>
    </div>
  );
}

