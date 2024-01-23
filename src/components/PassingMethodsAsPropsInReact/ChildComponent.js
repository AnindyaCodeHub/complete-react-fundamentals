//Chapter - 15
import React from "react";

function ChildComponent() {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
