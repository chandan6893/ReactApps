import React, { useReducer } from "react";
// if initialState is an OBJECT.Then.....
const initialState = {
    value : 0,
    name  : "Abhishek",
};
const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {...state, value:state.value + action.value};

    case "DECREMENT":
      return {...state, value:state.value - action.value};

    case "RESET":
      return initialState;

     case "UPDATE":
        return {...state, name: action.value}; 

    default:
      return state;
  }
};
export function ReducerCounter2() {
  const [countObj, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count ::: {countObj.value}</h1>
      <h2>Name  ::: {countObj.name}</h2>
      {/* increment,decrement and reset are the action and these action should be in CAPS */}
      <button onClick={() => dispatch({ type: "INCREMENT", value: 5 })}>
        INCREMENT by 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 4 })}>
        DECREMENT by 4
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>

      <button onClick={()=> dispatch({type :"UPDATE", value: "Vasanth"})}>CHANGE NAME</button>
    </>
  );
}
