//Chapter - 75

import React from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [count, incrementCounter, decrementCounter, resetCounter] = useCounter(
    10,
    10
  );

  return (
    <div>
      <h2>Counter Two : {count}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default CounterTwo;
