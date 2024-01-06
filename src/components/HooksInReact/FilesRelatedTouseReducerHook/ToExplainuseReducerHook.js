//Chapter - 62
//This file explains how to use the useReducer hook.
//This is a basic counter example. There will be three buttons, increment, decrement and reset. The count value should change
//accordingly once the respective buttons are clicked.

//In the below code, we have used simple state and action which means, here state is not an object, it's a simple number variable
//(e.g: count) and the action is also not an object, it's a simple string variable.

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
function ToExplainuseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ToExplainuseReducerHook;
