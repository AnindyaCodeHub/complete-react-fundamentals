//Chapter - 90

import React from "react";
import ChildB from "./ChildB";

function ChildA() {
  console.log("ChildA render");

  return (
    <div>
      Child A
      <ChildB />
    </div>
  );
}

export default React.memo(ChildA);
