import React from 'react';
import { ComponentC } from "./ComponentC"

export function ComponentB() {
  return (
    <div>
      <p className="compB">ComponentB</p>
      <ComponentC />
    </div>
  );
}

// export default ComponentB