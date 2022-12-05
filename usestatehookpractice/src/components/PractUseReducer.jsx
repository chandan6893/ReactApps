import React,{ useReducer } from 'react';
const initialState={
    count:0,
}

const reducer =(state,action)=>{
    switch(action.type){
        case "increment":
            return {...state , count:state.count + action.value};

         case  "decrement":
            return {...state, count:state.count - action.value} ;

         default:
            return state   ;
    }
};




export function PractUseReducer() {
   const [state,dispatch] =useReducer(reducer,initialState);
  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=> dispatch( {type : "increment",value:1})} >increment</button>
    <button onClick={()=> dispatch( {type : "decrement",value:1})} >decrement</button>
    
    </>
  )
}

