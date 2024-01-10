//Chapter - 84

import React from "react";

function Child() {
  console.log("Child Render");

  return <div>Child Component</div>;
}

export default React.memo(Child);
