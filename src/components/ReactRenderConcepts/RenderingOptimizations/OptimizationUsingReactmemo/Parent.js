//Chapter - 84

//This file explains how to optimize the Parent-Child Components render by using React.memo.

import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shubha");

  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Anindya")}>Name - {name}</button>
      <Child name={name} />
    </div>
  );
}

export default Parent;
