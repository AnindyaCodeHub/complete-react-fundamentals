//Chapter - 79

//This file explains how the component rendering and re-rendering works with useState.

import React, { useState } from "react";

function RenderingConceptWRTuseState() {
  const [count, setCount] = useState(0);

  console.log("Component Renders for useState");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setCount(0)}>Set count to 0</button>
      <button onClick={() => setCount(5)}>Set count to 5</button>
    </div>
  );
}

export default RenderingConceptWRTuseState;
