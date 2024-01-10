//Chapter - 83

//This file explains how to optimize the Parent-Child Components render in react.

//Here we are not passing the Child component as a nested component in the JSX, rather we are passing the Child component as a
//prop (children prop).

import React, { useState } from "react";

function OptParent({ children }) {
  const [count, setCount] = useState(0);

  console.log("Optimized Parent Render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      {children}
    </div>
  );
}

export default OptParent;
