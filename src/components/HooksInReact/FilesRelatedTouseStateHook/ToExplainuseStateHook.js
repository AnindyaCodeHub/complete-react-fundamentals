//Chapter - 45
//This file explains how to use the "useState" hook in react.

import React, { useState } from "react";

function ToExplainuseStateHook() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  //The below code of incrementByFive() method won't give the expected output. It will only increase the count value by 1 where
  //as we expect this function to increase the count value by 5. This is because react may group multiple setState() calls into
  //a single update for better performance. So what happens in our example of incrementByFive() method is that, all the five
  //setState() calls are done in one single go and the updated value does not carry over between the different setState() calls.
  //So as a solution to this, whenever we have to update the state based on the previous state, we need to pass a function as an
  //argument to setState() method.
  //Wrong code for incrementByFive() method:
  // const incrementByFive = () => {
  //   for (let i = 0; i < 5; i++) {
  //     setCount(count + 1);
  //   }
  // };
  //Correct code for incrementByFive() method:
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* Changing the implementation of setCount() method for line number 35 and 36 as here also we need to update the state
       based on the previous state value. */}
      {/* <button onClick={() => setCount(count + 1)}>Increase by 1</button>
      <button onClick={() => setCount(count - 1)}>Decrease by 1</button> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase by 1
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Decrease by 1
      </button>
      <button onClick={incrementByFive}>Increase by 5</button>
    </div>
  );
}

export default ToExplainuseStateHook;
