import React,{useReducer} from 'react';
const initialState = {count:0,}

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.value };
    case "DECREMENT":
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
};

export function UseReducer() {
    const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        Decrement
      </button>
    </>
  );
}



// import React, { useReducer } from "react";
// const initialState = {
//   count: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + action.value };
//     case "DECREMENT":
//       return { ...state, count: state.count - action.value };
//     default:
//       return state;
//   }
// };
// export function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   //   const [value, setValue]=useState(0)
//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
//         Increment
//       </button>
//       <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
//         Decrement
//       </button>
//     </>
//   );
// }




