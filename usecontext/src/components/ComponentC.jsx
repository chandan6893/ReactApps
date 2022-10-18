import React from 'react';
import { ComponentD } from './ComponentD';

export function ComponentC() {
  return (
    <div>
      <p className="compC">ComponentC</p>
      <ComponentD />
    </div>
  );
}

// export default ComponentC