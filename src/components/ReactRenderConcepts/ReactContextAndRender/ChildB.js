//Chapter - 90

import React from "react";
import ChildC from "./ChildC";

function ChildB() {
  console.log("ChildB render");

  return (
    <div>
      Child B
      <ChildC />
    </div>
  );
}

export default ChildB;
