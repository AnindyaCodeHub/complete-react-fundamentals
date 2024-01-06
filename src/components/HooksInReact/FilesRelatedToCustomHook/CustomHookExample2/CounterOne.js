//Chapter - 75

import React from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [count, incrementCounter, decrementCounter, resetCounter] = useCounter(
    0,
    1
  );

  return (
    <div>
      <h2>Counter One : {count}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default CounterOne;
