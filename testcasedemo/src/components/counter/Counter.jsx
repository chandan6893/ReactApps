import React from 'react';
import "./counter.css"

export function Counter() {
  return (
    <>

      <h1>Air Campus</h1>
      <h3>react testing class</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="us">US</option>
            <option value="uk">UK</option>
            <option value="ind">INDIA</option>
            <option value="rsa">RUSSIA</option>
          </select>
        </div>

        <div>
          <label htmlFor="age">age</label>
          <textarea id="age"></textarea>
        </div>

        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the above terms
          </label>
        </div>

        <button>submit</button>
      </form>
    </>
  );
}

