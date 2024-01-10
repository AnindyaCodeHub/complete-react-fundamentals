//Chapter - 90

import React, { useContext } from "react";
import { CountContext } from "./Parent";

function ChildC() {
  const count = useContext(CountContext);

  console.log("ChildC render");

  return <div>Child C Count is: {count}</div>;
}

export default ChildC;
