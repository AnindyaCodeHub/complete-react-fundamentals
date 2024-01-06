//Chapter - 30

import React from "react";

const ChildClass = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default ChildClass;
