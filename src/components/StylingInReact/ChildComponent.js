//Chapter - 15
import React from "react";

function ChildComponent() {
  return (
    //The below 3 lines of code is just to explain how CSS Modules are benifitial over CSS styleSheets
    <div>
      <h1 className="primary">This is child component</h1>
    </div>

    // <div>
    //   <button onClick={() => props.greetHandler("child")}>Click Me</button>
    // </div>
  );
}

export default ChildComponent;
