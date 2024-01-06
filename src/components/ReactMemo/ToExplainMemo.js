//Chapter - 27
//This file explains how memo works.

import React from "react";

function ToExplainMemo({ name }) {
  console.log("Rendering memo child component");
  return <div>{name}</div>;
}

export default React.memo(ToExplainMemo);
