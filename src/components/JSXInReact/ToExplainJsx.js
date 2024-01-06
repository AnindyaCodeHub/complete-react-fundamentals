//This file explains how JSX makes it easier to write code in React //Chapter - 8
import React from "react";

// Using JSX
const ToExplainJsx = () => {
  return (
    <div id="hello" className="dummyClass">
      <h1>Hello Anindya</h1>
    </div>
  );
};

//..............................................................

// Without using JSX
// const ToExplainJsx = () => {
//   return React.createElement(
//     "div",
//     {id: 'hello', className: 'dummyClass'},
//     React.createElement("h1", null, "Hello Anindya")
//   );
// };

export default ToExplainJsx;
