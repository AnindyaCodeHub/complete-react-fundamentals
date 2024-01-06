//Chapter - 75

//Here we have created a custom hook called "useCounter", and used this in "CounterOne.js" and "CounterTwo.js" files.

import { useState } from "react";

function useCounter(initialCount = 0, value) {
  //The statement "initialCount = 0" signifies that, if any value is passed for "initialCount" while calling the usecounter
  //custom hook, then use that value otherwize use 0 as the value of "initialCount" variable.

  const [count, setCount] = useState(initialCount);

  const incrementCounter = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrementCounter = () => {
    setCount((prevCount) => prevCount - value);
  };

  const resetCounter = () => {
    setCount(initialCount);
  };

  return [count, incrementCounter, decrementCounter, resetCounter];
}

export default useCounter;
