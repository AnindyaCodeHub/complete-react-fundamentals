//Chapter - 90

//This file explains how Rendering works with React Context.

//There are two ways to optimize the rendering behavior when using Recat Context.
//Solution 1: We can wrap the ChildA component with React.memo.
//Solution 2: We can pass the ChildA component as the children prop of the Parent component, instead of passing ChildA component
//as a nested element.

import React, { useState } from "react";
import ChildA from "./ChildA";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;
// function Parent({ children }) {
function Parent() {
  const [count, setCount] = useState(0);

  console.log("Context Parent Render");

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count - {count}
      </button>
      <CountProvider value={count}>
        <ChildA />
      </CountProvider>

      {/* <CountProvider value={count}>
        {children}
      </CountProvider> */}
    </div>
  );
}

export default Parent;
