//Chapter - 82

//This file explains how Parent-Child Components render works in react.

import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Set count to 0</button>
      <button onClick={() => setCount(5)}>Set count to 5</button>
      <Child />
    </div>
  );
}

export default Parent;
