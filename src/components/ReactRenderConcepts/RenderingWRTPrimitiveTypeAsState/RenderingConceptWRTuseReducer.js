//Chapter - 80

//This file explains how the component rendering and re-rendering works with useReducer.

import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const RenderingConceptWRTuseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("Component Renders for useReducer");

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default RenderingConceptWRTuseReducer;
