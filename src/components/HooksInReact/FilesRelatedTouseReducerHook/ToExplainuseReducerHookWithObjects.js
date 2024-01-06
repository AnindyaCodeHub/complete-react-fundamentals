//Chapter - 63
//This file explains how to use the useReducer hook.

//In the below code, we have used complex state and action which means, here state and action are objects.
//Benifits of using state and action as objects:
//By making action an object, we can make use of additional data in the reducer function.
//By making state an object, we can track multiple state variables together. In the below example we are able to track the
//firstCounter and secondCounter state variables together as state is an object here.

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ToExplainuseReducerHookWithObjects() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Counter: {count.firstCounter}</div>
      <div>Second Counter: {count.secondCounter}</div>

      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment First Counter
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decrement First Counter
      </button>
      <button onClick={() => dispatch({ type: "increment1", value: 5 })}>
        Increment First Counter By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 5 })}>
        Decrement First Counter By 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Second Counter
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Second Counter
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset Counters
      </button>
    </div>
  );
}

export default ToExplainuseReducerHookWithObjects;
